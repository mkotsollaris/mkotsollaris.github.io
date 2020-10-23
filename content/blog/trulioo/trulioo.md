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

# Dear Trulioo 

This is a post regarding my thoughts on my experience working for Trulioo for almost 2 and a half years. After all this time, I have learned a lot of things from this spectacular company that I would like to self-reflect and touch upon.

With that in mind, let's get started!

### Trulioo

Trulioo is an online identity verification company. The company was founded in 2010, in Vancouver, BC. When I joined the company, we used to be 65 people in total and as of today, the number has grown to approximately 200 people. In these years, I was extremely lucky enough to experience of what a exponetially-growing startup feels like, what are the major growing pains and what are the patterns that if adopted, can lead to high performing teams.

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

### Takeaways

### Things to consider for improvement

By nature, I am always biased for openess and inclusion. Particoularly when you are serving a low-code framework, you need to make sure that you stay in touch with the developer who is integrating with the platform. Open Source software is a very good way of increasing project visility and creating an inclusive culture. We all are aware of succesful companies that follow that model, namely sentry, gatsby etc., and I feel like there's a lot of room of improvement for developing an open-source Identity Verification platform. 

The space of regtech is quite conservative, but I do feel there's a lot of room of opportunity in building a developer-focused platfrom with instant community support and the perks that do come with open source software.

https://memegenerator.net/img/instances/68595400.jpg

As a developer, I am trying to think of a framework that I enjoy using being closed source 🤔 -> I can't think of any!

### Looking myself in the mirror 🐱‍👓

In my journey at Trulioo, there are many things that I am proud, and on ther other hand, there are some things that I am not proud of. In this section I will be focusing on my mistakes. I always focus on my mistakes because that pushes me forward.

> Fool me once, shame on you. Fool me twice, shame on me. [Stephen King](https://en.wikipedia.org/wiki/Stephen_King)

a) EmbedID shoud not have been a closed-source project.

> [What are you trying to hide](https://twitter.com/codinghorror/status/616377394253795328?lang=en)? 🕵️‍♂️

While EmbedID started as an open source project, we ended up closing it up. I should have been more vocal when it came to open-sourcing EmbedID. Open sourcing EmbedID would have allowed us to be next to the developer and helped us identify their potential struggle with onboarding on the product. As a senior software engineer, I shouldn't have been conflict-averse but rather insist on some standards, like our open source culture. I am convinced that should we had provided an inclusive technology culture, project healthiness and success would have been much more vibrant. Our moto at Trulioo is provide financial inclusion around the world and thus open sourcing our software would be the stepping stone of our memo. I take personal responsibility on that. While I raised my voice, I didn't persist. I should have been more vocal and showcase with real examples why open sourcing the product would be helpful to our business.

b) Choosing tech stack by velocity objectives and not by obsessing over the problem we are trying to solve.

That's usually the problem with smaller-sized companies. Startups prefer choosing a certain range of technologies (i.e.: JS, golang, python etc.) and sticking to it. While indeed that helps developers develop faster, it does not embrace the culture of innovation and curiosity, which is a must-have tratemark of high performing teams. In our case, we would have benefit much more from a wide-variety of different technologies that's focused on the problem we are trying to solve, rather than staying in our comfort-zone for developing software.

### The People

The most important factors of a company are the people. People that you work with help shape the culture of the company. Without the right people, it's impossible to develop great products. I was very furtunate to work with the entire Trulicrew, and I would like to name a few that  and motivated me on a daily basis:

- **Brandon Verigin**: Brandon joined as a junior software engineer. Brandon's work ethic is spectacular, something I've never seen in my life. Brandon has a great ability to listen and work hard with great results. I would say the most important lesson is to never stop having the hunger; and ideally I would like to keep on that hunger as you grow into your career. Brandon tought me that and I will always keep that in mind. Thank you Brandon!
- **Kim Hong**: Kim is the SVP of marketing at Trulioo. Kim played a very crucial role in allowing me to become a public speaker and attend conferences around the world. She has a great work ethic and she values go-getters and people who take the initiative. I am grateful for her to have allowed me to represent the company up to the highest standards. Without her trust on me, I would never have reached where I am today.
- **Conor Delahunty**: Conor is the embodiment of Product creation and successful MVP building. I will never forget the fun we had with Conor while we were mocking the EmbedID-POC. Conor brings an excellent skillset to the table, while his unique way of thinking and intelligence immidiatedly distrinquishes him from the crowds. He is very compassionate and empathetic, and I hope to work with him in the future soon. 
- **Darryl Braaten**: Darryl is the Linus Torvalds of Windows OS. Extremelly compassionate geek (like myself), Darryl has been leading very succesfully the technology department for years, and people love him for his kind heart and compassion. A lot of things I learned from Darryl. I think that while he has been in the industry for quite some time, and he has been leading teams for several years, he is just getting started in his career, and I am looking forward for more top-notch high availability APIs from him 🤓!
- **Bria Kindersley**: Bria embodies all the great treatmarks of a dynamic software engineer. She pays tremendous attention in the most underrated field in software engineering: CODE REVIEWS! Bria could spend all of her days doing top-notch quality code reviews; she has inspired me a lot to pay attention to what goes in my system. More than that, Bria is an aspiration of [women engineers](https://en.wikipedia.org/wiki/Women_in_engineering) that saddly are a minority in the tech field. Thank you for being such a great example for not only us the engineers, but also to the younger generation of women in engineering who are just getting started 🙏
- **Stan Trubin**: Stan. STAAAAAAAAAAAAAAAAN! Everyday I wake up and I thank God for winning the lottery and working with engineers like Stan. //TODO

### Closing remarks

I had a blast serving Trulioo for almsot 2 and a half years. IMHO, Trulioo is the most vibrant tech companies in Vancouver, with amazing culture and spectacular growth opportunities. I was able to go from a zero-React knowledge, to a public speaker presenting worldwide in a little bit less than two years. Not even in my wildest dreams, I would have imagined the unreveiled potential of the company. 

I couldn't recommend a company more that I recommend Trulioo, and should you be looking for your next adventure, please DM me and I will put you in contact with excellent people that work at Trulioo, it's a super legit place to work!

If you want to grow your carreer to the next level and are passionate and curious about technology, then do make sure to check Trulioo out.

### What's next or me?

I will be posting a new article very soon regarding what's next, and I am thrilled to apply all of my personal learnings in the up-coming venture. Stay tuned, exciting stuff are happening as we speak ⚡⚡⚡

> Disclaimer: The views represented in this post are mine and mine alone. Technology-specific details are not discussed as part of various Non-Disclosure contracts.