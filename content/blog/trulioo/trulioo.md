---
title: My 2+ years of experience of working at Trulioo!
date: "2020-10-20"
description: Lessons learned and takeaways
author: 'Menelaos Kotsollaris'
categories:
  - 'experiences'
keywords:
  - 'javascript'
  - 'react'
  - 'open source'
  - 'trulioo'
  - 'identity verification'
  - 'experience'
banner: './architecture.png'
bannerCredit:
  'Photo by Menelaos Kotsollaris'
---

As I have prepared my weeks notice, I wanted to write down my thoughts on my experience working for Trulioo. After 2+ years working for the company, I have learned a lot of things from this spectacular company that I would like to self-reflect and touch upon, so let's get started!

### Trulioo
Trulioo is an online identity verification company. The company was founded in 2010, in Vancouver, BC. When I joined the company, we used to be 65 people in total and as of today, the number has grown to approximately 200 people. In these years, I was lucky enough to experience of what a high growth startup feels like, what are the major growing pains and what are the patterns that if adopted, can lead to high performing teams. 

### OK, but what is Identity Verification?
Identity verification is the process of clarifying whether the person onboarding to your platform is who they claim they are. Notice that Authentication and Verification are two interconnected but different things.

> Authentication is a mechanism of identifying whether a person/system has valid credentials to use your platfrom. Verification is the mechanism of validating a person's or business' identity.

In other words, if I were to try to onboard to a platfrom that ran Identity Verification, it would need to simply answer the question of whether "Menelaos Kotsollaris who lives in Vancouver" is a real person or not. There is a nice catch to this process that people usually get confused:

> Neither Authentication or Verification could provide a 100% valid answer of whether a person sitting behind the keyboard is who they claim they are.

For instance, I might have the valid entries for an individual (name, age, address, phone) as well as their password, and I can simply use it to impersonate them. Sounds far fetched? You would be surprised what [you can find on the web](https://www.reddit.com/r/btc/comments/ahyhcw/hacked_kyc_data_collected_from_top_exchanges_for/) 😏 (TODO link).

At Trulioo we built great mechanisms around these fraudalant cases which significantly increased the likehood of detecting these bad actors. One of them is EmbedID, an easy-to-integrate tool that provides multiple next-gen algorithms that could be used to increase our confidence of detecting bad actors.

This is an example of EmbedID, using a sandbox environment:

//TODO active code snippet here + verify


In case you want to have a look at the code, check this repo out.

### Technology
//TODO

js, sls, tf, 

### EmbedID
//TODO

### Conferences
//TODO

### People
//TODO
Potentially the most important section

### Takeaways

### Things to consider for improvement

### The future

