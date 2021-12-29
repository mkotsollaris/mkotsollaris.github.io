---
slug: 'core-web-vitals'
title: Optimization Strategies for Core Web Vitals (CWV)
date: "2022-01-01"
description: Strategies for optimizing Core Web Vitals and creating crawler-friendly web pages.
author: 'Menelaos Kotsollaris'
categories:
  - 'core web vitails'
  - 'performance'
  - 'crawlers'
  - 'SEO'
keywords:
  - 'javascript'
banner: './CI_flags.jpeg'
bannerCredit:
  'Photo by Menelaos Kotsollaris'
---

It's been almost six months since I joined Realtor.com, and the journey has been fascinating. Being in such a consumer-focused, everything revolves around performance, optimization, and SEO. I thought of putting together a collection of strategies for optimizing Core Web Vitals (CWV) and creating crawler-friendly web pages.

## Introduction to Core Web Vitals (CWV)

Core web vitals are a set of performance indicators that are used to measure the performance of a web page. Google and other search engines use these to determine the quality of a web page. As of now, we have 3 core web vitals:

- **Largest Contentful Paint (LCP)**

> This is the time it takes to render the first chunk of content on the page.

- **First Input Delay (FID)**

> This is the time it takes for the user to type in the first character of the page.

- **Commutative Layout Shift (CLS)**

> This CWV measures the amount of pixels that are shifted from their original position.

While there are many other web vitals, the Google Engine weights these core web vitals in a bigger magnitude than the others. As such, I decided to create a collection of strategies for optimizing these core web vitals.

## Largest Contentful Paint (LCP)

Largest Contentful Paint is trying to measure the time it takes to render the first chunk of content on the page. This is done by measuring the time it takes to render the first chunk of content on the page. 

The most important factor which effects LCP is the rendering strategy by the web server. Whether the server is rendered on the server (SSR), whether the page is statically exported (SSG) or the client renders it (CSR), the LCP will be different for each of these strategies. Have a look at the following image presented by Kara Erickson in [Vercel Conf 2021](https://www.youtube.com/watch?v=Nl4OwNhh2QI&t=760s):

![LCP - SSG vs SSR vs CSR](vercel_SSG_SSR_CSR.png)

Noticeably enough, SSG is the most performant strategy when considering LCP. When a page is statically exported, All it takes for a page to be rendered is requesting the page from the server, which normally would take under `100 milliseconds`.

In comparison, SSR and CSR (worst performing LCP strategy) have a much large difference in performance. These approaches require the server to render the page on the server and the client to run further computations that would further delay the page rendering. I would always recommend that whenever SSG is an option, to always try and use it.

There are other concepts, like TTFB (time-to-first-byte), but I will address those in a follow-up post.

## First Input Delay (FID)

## Commutative Layout Shift (CLS)

Commutative Layout Shift is a CWV that measures the number of pixels that are shifted from their original position. CLS is derived from the following formula:

  >  CLS = (Number of Pixels Shifted) / (Total Number of Pixels)

- impact fraction: measures how unstable elements impact the viewport area between two frames. We can have a look at the following example:

![Impact Fraction](CLS_impact_fraction.png)

In the example above, the initial viewport is `330 pixels` but the secondary frame is `530 pixels` after the first frame transition. The impact fraction is `0.6`. Note that the unit of measurement is a ratio pixels.

![Distance Fraction](CLS_distance_fraction.png)

- distance fraction: measures the distance that unstable elements have moved, relative to the viewport.

Since 530 (total viewport) - 330 (initial viewport) = 200, the distance fraction is 200 divided by the total viewport (530) = 0.37.

From the following computations, we compute CLS

  > CLS = IF * DF = 0.37 * 0.6 = 0.22

Note that you don't have to run these computations yourself. Chrome already computes these by default; you can open the chrome web vitals panel by going in chrome dev-tools and hitting `cmd + shift + P`. A challenge that I am actively investigating is how to compute CLS in a headless pattern, through unit tests. In a realistic scenario, we want to make sure that we don't ship pages that have CLS issues. While there are tools (Sentry, NewRelic, etc.) that report CLS on the page, it's not always easy to find the culprit. That's because CLS occurs on page/component transitions.

One idea I am actively testing is utilizing the [PerformanceObserver](https://web.dev/cls/#measure-cls-in-javascript) in combination with a [chaos-monkey](https://netflix.github.io/chaosmonkey/)/[faker](https://github.com/marak/Faker.js/) tool to measure CLS in randomly generated scenarios. This would work like the following:

```
1. Performance Observer is Active
2. render the component and keep updating it with random props (chaos monkey)
3. Notice whether CLS > 0
```
A tool along these lines might have the potential to help us with re-assuring that we ship components without any CLS issues. This sounds like a reasonable way to test CLS, and I post an update once I have a proof of concept!

## Conclusion

This post iterated among the 3 Core Web Vitals and created a collection of strategies for optimizing them. I hope that this post can help you in your journey to optimizing your web page. 

If performance and JavaScript optimization sounds fun to you, my team in realtor.com is always looking for new ways to optimize our web pages! Let's get in touch!