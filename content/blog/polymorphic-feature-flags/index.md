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
banner: './uml_all.png'
bannerCredit:
  'Photo by Menelaos Kotsollaris'
---
While working at a previous project, we were aiming to continuously ship in production, while following a trunk-based methodology. Feature flags are great in offerring such capabilities. We would use Optimizely to wrap-around our features and then we would ship to production, allowing our project managers to toggle features. The code would be looking something along these lines:

```
if(FEATURE.enabled) {
    return <FeatureA/>
} else {
    return <DefaultFeature/>
}
```

The team loved it, and hence we continued adding as many feature flags as possible, to help our project managers ship more features on-demand. However, not everything was perfect.

## The problem

As more features got shipped to production, 