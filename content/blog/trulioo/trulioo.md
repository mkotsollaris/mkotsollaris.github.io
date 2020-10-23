---
title: Dear Trulioo
date: "2020-10-20"
description: Lessons learned and takeaways
author: "Menelaos Kotsollaris"
categories:
  - "experiences"
keywords:
  - "javascript"
  - "react"
  - "open source"
  - "trulioo"
  - "identity verification"
  - "experience"
banner: "./architecture.png"
bannerCredit: "Photo by Menelaos Kotsollaris"
---

As I have prepared my weeks notice, I wanted to write down my thoughts on my experience working for Trulioo. After 2+ years working for the company, I have learned a lot of things from this spectacular company that I would like to self-reflect and touch upon, so let's get started!

### Trulioo

Trulioo is an online identity verification company. The company was founded in 2010, in Vancouver, BC. When I joined the company, we used to be 65 people in total and as of today, the number has grown to approximately 200 people. In these years, I was lucky enough to experience of what a high growth startup feels like, what are the major growing pains and what are the patterns that if adopted, can lead to high performing teams.

### OK, but what is Identity Verification?

Identity verification is the process of clarifying whether the person onboarding to your platform is who they claim they are. Notice that Authentication and Verification are two interconnected but different things.

> Authentication is a mechanism of identifying whether a person/system has valid credentials to use your platfrom. Verification is the mechanism of validating a person's or business' identity.

In other words, if I were to try to onboard to a platfrom that ran Identity Verification, it would need to simply answer the question of whether "Menelaos Kotsollaris who lives in Vancouver" is a real person or not. There is a nice catch to this process that people usually get confused:

> Neither Authentication or Verification could provide a 100% valid answer of whether a person sitting behind the keyboard is who they claim they are.

For instance, I might have the valid entries for an individual (name, age, address, phone) as well as their password, and I can simply use it to impersonate them. Sounds far fetched? You would be surprised what [you can find on the web](https://www.reddit.com/r/btc/comments/ahyhcw/hacked_kyc_data_collected_from_top_exchanges_for/) 😏.

At Trulioo we built great mechanisms around these fraudalant cases which significantly increased the likehood of detecting these bad actors. One of them is [EmbedID](https://gateway-admin.trulioo.com/documentation/embedid), an easy-to-integrate tool that provides multiple next-gen algorithms that could be used to increase our confidence of detecting bad actors.

This is an example of EmbedID, using a sandbox environment:

EmbedID can be injected in any website with the following code:

```
<div id="trulioo-embedid"></div>

<script type="text/javascript" src="https://js.trulioo.com/latest/main.js"></script>

<script>
  function handleResponse(e) {
    console.log('handleResponse', e);
  }

  const publicKey = 'Trial Key (FE)_OR_Live Key (FE)'; // Public Key
  new TruliooClient({
    publicKey,
    'SERVER_URL_ENDPOINT',
    handleResponse
  });
</script>
```

For the backend part, which acts as a gateway to the GlobalGateway API, you will need to expose an endpoint to make some of the more sensitive calls. EmbedID is construed in that way so that you have 0-transmission of [PII](<https://searchsecurity.techtarget.com/definition/personally-identifiable-information-PII#:~:text=Personally%20identifiable%20information%20(PII)%20is,data%20can%20be%20considered%20PII>) through the Frontend channel, which is considered a good security practice as there's no real secure way of [storing secrets in the browser](https://softwareengineering.stackexchange.com/questions/194045/securely-storing-secret-data-in-a-client-side-web-application).

### Technology

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/gBOHNXb4c5N3G" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/cheezburger-win-mindwarp-gBOHNXb4c5N3G">Bleeding Edge</a></p>

The technology in Trulioo is quite vibrant. The tech-stack varies quite a lot, and includes languages from a wide range, like JavaScript/TypeScript, Serverless Framework, C#, NoSQL, Relational Databases, Terraform, K8s * (soon!) and much more. it's an ideal heaven to work, since the team has grown massivelly and there are a lot of projects that can suite your needs.

//TODO

js, sls, tf,

### EmbedID

//TODO

### Conferences

Trulioo is very active on attending conferences, and I was very lucky to be chosen to attend 8 conferences in my 2 years. I had the luxury of travelling around the globe (USA and EU) and meet extremelly passionate and smart people. Every conference was very unique, but if I had to choose one, I would probably choose the Sibos hackathon which I attended back in 2019. Sibos is one of the biggest fintech conferences in the world, and the biggest hackathon (in duration) I've attended, with total 5 days of pure hacking. As funny as it sounds, the POC which we implemented, was the stepping stone of EmbedID a year later, in the Bank Verification capacities.

//TODO

### People

The most important factors of a company are the people. People that you work with help shape the culture of the company. Without the right people, it's impossible to develop great products.

### Takeaways

### Things to consider for improvement

### The future
