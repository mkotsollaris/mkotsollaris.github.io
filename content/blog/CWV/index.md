---
slug: 'core-web-vitals'
title: Optimization Strategies for Core Web Vitals (CWV)
date: "2022-01-01"
description: Patterns for optimizing Core Web Vitals and creating crawler-friendly web pages.
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

## Introduction to CWV

Core web vitals are a set of performance indicators that are used to measure the performance of a web page. Google and other search engines use these to determine the quality of a web page. As of now, we have 3 core web vitals:

- Largest Contentful Paint (LCP)

> This is the time it takes to render the first chunk of content on the page.

- First Input Delay (FID)

> This is the time it takes for the user to type in the first character of the page.

- Commulative Layout Shift (CLS)

> This CWV measures the amount of pixels that are shifted from their original position.

While there are many other web vitals, the Google Engine weights these core web vitals in a bigger magnitude than the others. As such, I decided to create a collection of strategies for optimizing these core web vitals.

## LCP

Largest Contentful Paint is trying to measure the time it takes to render the first chunk of content on the page. This is done by measuring the time it takes to render the first chunk of content on the page. 

The most important factor which effects LCP is the rendering strategy by the web server. Whether the server is rendered on the server (SSR), whether the page is staticly exported (SSG) or the client renders it (CSR), the LCP will be different for each of these strategies. Have a look at the following image presented by Kara Erickson in [Vercel Conf 2021](https://www.youtube.com/watch?v=Nl4OwNhh2QI&t=760s):

![LCP - SSG vs SSR vs CSR](vercel_SSG_SSR_CSR.png)

Noticeably enough, SSG is the most performant strategy when considering LCP. When a page is statically exported, All it takes for a page to be rendered is requesting the page from the server, which normally would take under `100 milliseconds`.

In comparison, SSR and CSR (worst performing LCP strategy) have a much large difference in performance. These approaches require the server to render the page on the server and the client to run further computations that would further delay the page rendering. I would always recommend that whenever SSG is an option, to always try and use it.

## FID

## CLS
