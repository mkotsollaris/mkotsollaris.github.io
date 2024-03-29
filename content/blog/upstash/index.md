---
slug: 'drift-detection-engine'
title: Building a Drift Detection Engine with Upstash
date: "2022-11-29"
description: Drift Engine Management Abstractions with Upstash and Typescript
author: 'Menelaos Kotsollaris'
categories:
  - 'drift-management'
  - 'turborepo'
  - 'terraform'
keywords:
  - 'typescript'
  - 'drift'
  - 'management'
banner: './drift_management.jpeg'
bannerCredit:
  'Photo by Menelaos Kotsollaris'
---

# Building a Drift Detection Engine with Upstash

> "This article was featured in the [Upstash Website](https://upstash.com/blog/drift-detection)"

In this article, we will go through the steps of building a basic [drift](https://snyk.io/blog/infrastructure-drift-detection-mitigation/#:~:text=What%20is%20infrastructure%20drift%3F,can%20happen%20for%20many%20reasons.) detection engine, utilizing the power of Upstash for our _online remote_ state, and building the necessary functions (in TypeScript) for managing the local state computation. Let's get started!

## Introduction

One challenge when managing infrastructure as code is drift. Drift Management has been a hot topic in the Infrastructure As Code (IAC) area ever since IAC arose in popularity. While IAC frameworks provide the ability to initialize infrastructure, their state is always dynamic and can change from the original declarations.

Note that while "Drift Management" is commonly applied to the IAC domain, there has been a rise in such applications in many areas. For instance, [Vercel's TurboRepo Engine](https://turbo.build/repo) surely includes such an approach to validate and invalidate artifacts that are no longer "useful" or are no longer active.

In this article, we will build a drift management engine using TypeScript. Let's get started!

## User Acceptance Criteria:

- Persisting state remotely
- Compute the difference local vs remote state
- Resolve discrepancies in either remote or local

## Persisting state remotely with Upstash

One tremendous benefit of Upstash is the ease of getting started and effectively having both a redis database and an HTTP API URLs. This is essential, as could create local functions that persist state and follow the redis protocol, imitating a CRUD API:

```ts
const getAllRemoteState = async () => {
    const result = await getAllRemoteKeys();
    const enabledResources: string[] = await result.reduce( async (acc:string[], currKey:string) => {
        const accum = await acc;
        await axios.get(`${URL}/get/${currKey}`, getHeaders()).then(({data}) => data);
        accum.push(currKey);

        return accum;
        }, []);
    return enabledResources;
}
```

## Persisting state locally

For this use case, we will use local `json` blobs. Each `json` can store its metadata, and the filename will be its primary key:

`example.json`:

```json
{
    "name": "example",
    "description": "this is an example",
    "expires": "March 2023"
}
```

This resource was given `name`, `description` and expiry date. Providing an expiry date would be a very useful attribute as in the future we could determine autonomous-depreciation policies based on resource under-utilizations. For instance, if this resource fails our expected usage, it could be flagged and hence removed from the system.

At a later stage, our files will start looking like this:

```sh
resources
-- data1.json
-- data2.json
-- ...
```

## Drifting local versus remote

We have set up both local and remote states, and now we are ready to start drifting state. Our drifting formula is something along these lines:

```sh
DRIFT = ABS(REMOTE-LOCAL) != 0
```

`DRIFT` should be equal to 0 every single time. There are 2 possible cases other than `DRIFT=0` case:

- case A: `remote` contains more resources than `local`
- case B: `local` contains more resources than `remote`

Let's see what to do in any of these cases:

### CASE 1: `remote` contains more resources than `local` due to out-of-sync `git`

This can usually happen when a developer is working on a branch and hasn't pulled the latest changes from the trunk. While the trunk has been updated with the latest resources, the local branch hasn't pulled all the recent changes, resulting in discrepancies with the local state. A way to visualize this:

`# Branch | Checksum | Resource #`
```git          [CURRENT RESOURCES]=6
* 040cc7c     [CURRENT RESOURCES]=6
| * d9e8b5e   [CURRENT RESOURCES]=6
| * 5b98a10   [CURRENT RESOURCES]=6
|/            [CURRENT RESOURCES]=5
|             [CURRENT RESOURCES]=5
```

In this case, we don't modify the remote state as it's updated. The local state should remain as-is until the latest commit is pulled from the trunk.

### CASE 2: `remote` contains more resources than `local` due to resource removal

Say our `git` branches are in sync, but we find that there are more `resources` available remotely than locally. That's an indication of a resource removal that has occurred locally. in this scenario, we want to remove the resource from the remote so that we sync it with the local state. Here's how we can do so:

```ts
const computeToBeDeleted= async (directoryPath='') => {
    const localResources = await getLocalResources(directoryPath);
    const remoteResources = await getAllRemoteResourceKeys();
    const result = remoteResources.filter(x => !localResources.includes(x));
    return result;
}
```

This function will compute the resources that need to be deleted from the remote state. Note that it will return an array, which we later need to iterate to send a request to `upstash` redis server, removing all the keys from the redis DB.

## The terraform drift management approach

When it comes to managing drift, few compare to the power of terraform. There have been detailed blogs, like [this one](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform), on how terraform manages drift, and it's worth looking into the terraform model. A few key-takeaways:

1. **`terraform state`** is similar to the "local" state of our example
2. **`terraform refresh/plan/config`** are commands that calculate state on demand.
3. **`terraform apply`** executes the configured resources, after alerting of possible add/deletion of resources.

In our example, we attached the `apply` mechanism directly when a commit is merged on the trunk. While this is straightforward, there might be cases where treating the trunk as "pristine" might not work, and hence terraform decouples its commands from the predefined branch mechanism.

Many other IAC platforms have similar flavored concepts of managing drift, including [AWS Cloudformation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html), [Microsoft Azure](https://cloudacademy.com/course/implementing-azure-infrastructure-compliance-and-security/preventing-drift/), and so on.

The idea of coupling drift to branches could be appealing for certain teams who do trunk-based development, but if you are not falling under this category, a more on-demand (API) driven approach might work for you much better.

## Summary

In this article, we built the bare bones of a drift management engine. By using controls for both `remote` and `local` states, we were able to interchangeably compute desired states and add/remove resources. Something to highlight is how easy it was to achieve the `remote` computations by using `Upstash`. Obviously, we could contemplate using other databases within `AWS` (ie `DynamoDB`), having a RESTful API in under 30 seconds was very e.handy to get started.

In the drift management space, there are certain players, like HashiCorp's terraform solution, which are leading the space. Drift management mechanisms could be applied in other domains. The general concept of `remote` and `local` differentiation is very close to the ones of [cache invalidation](https://en.wikipedia.org/wiki/Cache_invalidation), [remote caching](https://bazel.build/remote/caching) and others. I feel that the industry is just at the begging of realizing how powerful some of these concepts are, and one example is Vercel's Turborepo implementation, my bet is that there will be a steady increase of vendors utilizing such solutions in the near future, which makes the space very exciting to be part of!


## Resources

- [Terraform](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform)
- [AWS](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html)
- [Azure](https://azure.microsoft.com/en-ca/blog/what-why-how-azure-automation-desired-state-configuration/)
- [Turborepo](https://turborepo.org/)
- [gist example](https://gist.github.com/mkotsollaris/fb0a37193267f80a65a3b61bb04497ca)