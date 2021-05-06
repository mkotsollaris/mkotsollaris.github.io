---
slug: 'polymorphic-feature-flags'
title: Polymorphic feature flags - A pattern for technical debt avoidance
date: "2021-05-05"
description: Abstractions to maintaining feature flags without obscuring codebases
author: 'Menelaos Kotsollaris'
categories:
  - 'SaaS'
  - 'feature flags'
keywords:
  - 'javascript'
  - 'SaaS'
  - 'rapid'
  - 'delivery'
banner: './CI_flags.jpeg'
bannerCredit:
  'Photo by Menelaos Kotsollaris'
---
While working at a previous project, we were aiming to continuously ship in production, while following a trunk-based methodology. <a href='https://martinfowler.com/articles/feature-toggles.html' target='blank'>Feature flags</a> are great in offerring such capabilities. We would use Optimizely to wrap-around our features and then we would ship to production, allowing our project managers to toggle features. The code would be looking something along these lines:

```
if(FEATURE.enabled) {
    return <FeatureA/>
} else {
    return <DefaultFeature/>
}
```

The team loved it, and hence we continued adding as many feature flags as possible, to help our project managers ship more features on-demand. However, not everything was perfect 👇.

## The problem

As more features got shipped to production, we suddenly had **a lot** of code that needs to be maintained in this branched codebase. One way to improve code maintainability would be to remove non-used feature flags, but that requires further maintainance and discipline from the team. So the question arises as to whether there is a better technique methodology that would solve this problem.

## Enter polymorphic feature flags

We could utilize <a href='https://stackify.com/oop-concept-polymorphism/' target='blank'>Polymorphism</a> to avoid conditional code by creating abstractions (<a href='https://stackoverflow.com/questions/2697783/what-does-program-to-interfaces-not-implementations-mean' target='blank'>aka **programming to interface**</a>) rather that writting to implementation. Here's an example of how that might look like:

```
# traditional feature flag
if(FEATURE.enabled) {
    return FeatureA()
} else {
    return Default()
}
```

with polymorphism:

```
# polymorphic pattern
AbsractFeature(FeatureA);
AbsractFeature(DefaultFeature);

AbsractFeature(f) {
    return (enabled) => {
        f(enabled); 
    };
}

FeatureA = enabled => { if(enabled) console.log('Feature A Implementation!')}
DefaultFeature = enabled => { if(enabled) console.log('Default Implementation!')}
```

Utilizing the <a href="https://en.wikipedia.org/wiki/Higher-order_function" target='_blank'>higher-order-function</a> methodology, we are able to transform the code in a more declarative pattern.

## So what?

The code is transformed to a more declarative version, but why is that better than before? Here's a couple of reasons why this polymorphic style is great:

1. Extensibility: Easily add a new feature without adding an `if-else` statement
2. Traceability: features can be easily traced throughout the code with no spaghetti-like statements
3. Removal: At some point, feature flags will need to be removed from the codebase. The polymorphic pattern makes it extremelly easy to remove unused features.

## What about not using any line of code? Is it possible?


At Facet, we developed a <a href='https://github.com/facet-tech/agent-java' target='blank'>facet-java-agent</a> which does exactly that: every *method and endpoint* of your system contains a flag which allows toggling. What we noticed is that while developers enjoy the flexibility of the tool and the ease of maintainance, they still prefer in-code declaration. In my experience demoing and talking to people, this is what people say:

> Since I am already developing a feature, adding a declaration to it is not hard and makes sense.

The majority of the developers prefer *reliability* and *declarability* over "framework-magic".

## Summary

This polymorhic paradigm aims to make feature declaration extremelly sructured, in order for ease of flag removal. By following this pattern, there's an aspiration of even automatically cycling feature flags through CI. For instance, it would be quite straightforward to implement a CI task that removes inactive flags in our codebase. There are various companies working on this domain, including <a href='https://github.com/marketplace/actions/launchdarkly-code-references' target='blank'>LaunchDarkly</a>, <a href='https://github.blog/2021-04-27-ship-code-faster-safer-feature-flags/' target='blank'>GitHub</a> and <a href='https://facet.run' target='blank'>Facet</a>.

The landscape of feature flags and continuous deployment is more vibrant than ever, and it's exciting to what the future will look like!