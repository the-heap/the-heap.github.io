+++
date = "2017-07-30T18:24:31-04:00"
title = "Reflection: Penny"
author = "teesloane"
authorLink = "http://tylersloane.com"
customSummary = "A few reflections on the inaugaural open source project run by The Heap."

+++

# Summary

Our second project was a lot of fun. Six contributors built a slack bot in node.js. This projects focused on integrating with the Slack real time messaging (RTM api).

We also had a logo created for Penny, thanks to contributor [GringoGidget](https://github.com/gringogidget) !

![](/img/projects/penny/thumbnail.png)

# Project Recap

The second project for The Heap was more focused in a few ways. Whereas last project had three languages, two build processes, and a lot of extra issue detailing on Github; Penny took a much more simpler approach. Our goal was to create a slack bot that would encourage drawing among a slack team. Penny would do this in three ways:

- Provide drawing prompts on a regulated schedule / when interacted with.
- Accept drawing submissions via users.
- Display a gallery of images uploaded through slacks (ie. the drawings of the prompts)

Penny was a simpler project in that we were working in _one_ language, not three. I decided to run the application with only Node for building our slack bot.

# Project Stats

{{< repodata "penny">}}

# Start, Stop, Continue

Here are some quick thoughts from my perspective on managing this project.

**To Stop Doing**

- Last minute planning! I had no idea if the slack bot would work — it was a bit of a close one assuming that the API would easily work between people building the same project from different machiens (well, it worked out though!).

**To Start Doing**

- Tweet more! I'm bad at that.
- Reach out to more places to find contributors. This project I stepped back from posting online (reddit, slack groups); and mostly reached out to my more immediate networks.


**To Continue Doing:**

- I wrote less Github issues for this project. Instead of writing a giant road map _and then an issue for each part of the road map_, I just wrote the road map. If a contributor was interested in tackling a part of the project I just asked them to create an issue to indicate they would be working on it. This saved time for me. There's definitely a feeling that issues made so preemptively are a bit unecessary / unlikely to flow with a project as it changes
- I didn't make any videos for this project; and I think I'm perfectly ok with that. Our project had less contributors, and I think the amount of time to sink into making videos isn't worth it at this point.

# Contributor Feedback

Hopefully to come!

# Closing thoughts

This project, despite having some stumbling blocks (for myself) at the start; turned out really well I think. We had less contributors working on this project, but I feel like collectively they wrote quite a bit of code. I was deliberatlely removed from the writing of code for this project (beyond setting up the project, libraries, and scaffolding).

Working with an external api was fun, but also restricting. At the beginning of the project I thought things wouldn't work with collaborating on an API that needed to be deployed (ie. a slack app that ran from a server); for a time I thought everyone would need to use a hosted machine, we would share one, I'd need something like nGrok, and so on. Thankfully, the slack real time messaging api worked great as each user could hook into the environment with websockets. This would sometimes have some strange effects in which old code was causing Bot behaviour that had already been deprecated via master (but was not pulled). At, least it happened to me 😜.

Thanks, all!
