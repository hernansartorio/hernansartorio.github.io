---
layout: post
title: The making of Bloggi
excerpt: From idea to launch to where it’s at today, including all the numbers, lessons learned, and what’s next.
original: https://blog.bloggi.co/the-making-of-bloggi
---
# The making of Bloggi

*Originally published on [the Bloggi Blog](https://blog.bloggi.co/the-making-of-bloggi)*.

[Bloggi](https://bloggi.co) turns three months today. To celebrate, here’s the full story of how I built it—from idea to launch to where it’s at today, including all the numbers, lessons learned, and what’s next.

## The idea

It started as a small idea, sometime in May, while I was planning to start [my personal blog](https://hernansartorio.com). I was very skeptical of it and initially dismissed it. Why make *yet another* blogging platform?

But the idea didn’t go away. After doing some casual research during the following weeks, it slowly started taking shape in my mind. I realized that none of the existing platforms did everything that I pictured and that, maybe, there could be space for a new one. One that could be as simple and easy to use as Medium *and* as flexible and powerful as Wordpress or Ghost.

So I decided to [build it](https://hernansartorio.com/im-building-a-new-blogging-platform).

I had recently [quit my job](https://hernansartorio.com/why-i-quit-my-job) so I had time. Even if it failed and nobody used it, I would be building it for myself, and it could be a good addition to my portfolio. Plus, it just seemed like a very fun project to work on.

## The plan

I’ve had my share of failed projects in the past—where I would spend hundreds of hours working on something only to launch to crickets and end up with a number of customers that tended to zero.

With that lesson learned, this time I would launch with only the absolute minimum set of features needed, to see if there was enough interest before investing more time on it. That meant that it only had to accomplish its core job: **allow people to build a blog, use their own domain, and pay me for it**. That last point was important since it would be the only real way to validate the idea.

This allowed me to ignore everything else that I wanted to do but was ultimately not essential at this point (like customization options, tags, image uploads, static pages, etc). I would build [a skateboard instead of a car](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp).

I officially started working on it in early June. I had a trip planned about a month after that, so I took it as a deadline: I would build it and launch it in one month (it took two, but close enough).

## The name

The first name I came up with (and domain I bought) was Blogrr. It made sense to me because it was a mix of [Carrd](https://carrd.co/) (I thought of Bloggi as Carrd but for blogs) and [Blogger](https://en.wikipedia.org/wiki/Blogger_(service)). But it wasn’t an easy name to pronounce, and it would probably get confused with *Blogger*, so I looked for alternatives.

I wanted something short, had "blog" in it, and had an available .co or .io domain (since a .com was unlikely to be available). After trying out all the combinations I could think of, I found that bloggi.co was free. "Bloggi" fitted all of the requirements and sounded like an easy and fun name, so I bought the domain and went with it.

## Design

I kept doing research on other blogging platforms, analyzing in more detail how they solved the same problems I would tackle, and getting a clearer picture of how I wanted things to work: **everything had to be as simple as possible, and require the least amount of effort from a user to get a nice-looking blog online**.

I started defining what the application screens would be and how the flows would work. I wish I had something more polished to show but this is the first and only (very crappy) sketch I made:

![Crappy photo of my crappy sketch with crappy handwriting](https://images.bloggi.co/09997495.jpg)

Around this time (or maybe before, I might have been too excited), I started messing around with how things would look, trying out typefaces for the logo and the application.

I continued by designing the core screens—the editor and the posts page—and defining a design system that would work for it. From there, I continued mocking up the rest of the screens and writing all the necessary copy for them.

After I had a general idea of how everything should work and look, I started development and kept iterating on the design details in the
code.

![How my Sketch file looked at this point](https://images.bloggi.co/f93d5cdb.png)

## Building an audience

I probably should’ve done it earlier, but while I was in the middle of the development phase, I realized that it would be better if I started building an audience of people who could be interested in what I was building.

I wrote [a post](https://hernansartorio.com/im-building-a-new-blogging-platform) describing what Bloggi would be and why I was building it, and linked to a quick landing page I made that included an email subscription form:

![Pre-launch landing page](https://images.bloggi.co/73007adc.png)

I shared the post on IndieHackers, DesignerNews, and HackerNews. It didn’t get much traction except for [DesignerNews](https://www.designernews.co/stories/103732-im-building-a-new-blogging-platform), which brought a decent (but not huge) amount of traffic and signups.

## Development

I built Bloggi using Ruby on Rails. I started by creating all the models and defining the business logic, as well as writing a minimal amount of tests to ensure that the core of the application worked as expected and that any change I made later wouldn’t break existing functionality (I learned the value of this the hard way).

After most of that was done, I started implementing the front-end components and design system. Then I continued by creating the controllers and implementing the templates for each screen. And then just a lot of groundwork to get everything running.

Besides the fact that Rails is a very productive framework for a solo developer, I was able to move relatively fast because most of the challenges I faced while building Bloggi I had already solved on previous projects.

### Accepting payments

I would’ve loved to use Stripe but I’m based in Uruguay and it’s not available here. I had previously integrated PayPal to accept payments on another project so I just went with that for now. Luckily the integration was relatively quick and not so painful this second time.

PayPal doesn’t allow me to charge subscriptions though—only one-time payments—but since I only offer annual plans for now, I would have at least a year to not worry about that (*if* it does get to that point).

## The launch

On August 20th, after about two months and close to 140 hours of work, I launched Bloggi.

I submitted it to [ProductHunt](https://www.producthunt.com/posts/bloggi), sent an email to around 110 people who had subscribed on the pre-launch landing page, and also shared it again on IndieHackers, DesignerNews, HackerNews, and Reddit.

By far the biggest response and traffic came from ProductHunt. The launch started slowly but ended the day in the top 10, with many positive comments.

I got around **700 visitors and 70 signups on launch day**, 400 and 30 the second, and slowing down afterwards.

I was very happy with the response, but on the second day I was a bit discouraged since there were no paying customers yet. I even lowered the price temporarily, thinking that maybe it was too expensive for lacking so many features (it wasn’t).

Then, three days after the launch, I woke up to a payment notification email from PayPal. **I cannot describe the grin on my face when I saw it**—and which stayed with me for the rest of the day. It was only $19 but it meant much more than that. A stranger on the internet (thanks Sergio!) had sent me money for something I built, that was only an idea two months before.

Making something out of nothing—and having people using it and finding it valuable enough to give me money for—gives me an amazing satisfaction and it’s one of the main reasons why I like doing what I do so much.

On the fifth day, I got my second paying customer, and another one the following day, ending the **first week with three paying customers**, from a total of around 1500 visitors and 220 signups.

This was more than enough validation and motivation to keep working on the idea.

## Today

Since launching, I’ve been mostly catching up and shipping some [much-needed features](https://blog.bloggi.co/all-the-new-features) and many other improvements.

I also started writing again recently—and launched [the Bloggi Blog](https://blogi.bloggi.co)—as a way to focus more on marketing.

These are all the numbers up to this day:

- 📈 **3600+** visits
- 🙂 **660+** signups
- 😎 **17** paying customers
- 💵 **$493** ARR
- ⏰ **330+** hours worked
- 👨‍💻 **217** commits

Here’s the traffic for these first three months, where you can appreciate the ProductHunt effect:

![Visits](https://images.bloggi.co/e54a50d6.png)

I also [increased prices](https://blog.bloggi.co/plans-and-pricing-update) recently. I announced it a few days beforehand, to give existing users a chance to upgrade at the original price. That led to a record week of upgrades:

![Upgrades](https://images.bloggi.co/48ddd856.png)

## Lessons learned

### Launching early is good

While most of the features I shipped after launch were already on my to-do list, the early feedback and requests from customers played a big part in how I prioritized them, and in adding new ones that I hadn’t thought before.

The feedback helps me realize what people really care about and how I should be spending my time, instead of being guided only by my own assumptions. Building it in the open also gives me much more motivation to keep working on it. Getting real-time, cheerful responses from paying customers whenever I ship a new feature is great.

### And you can always launch earlier

Even though my goal was to launch as soon as possible with only the most essential features, I was still guilty of not following my own advice.

I won’t bore you with the details, but I could’ve launched at least a week before I did (and coincidentally saved a couple of hours of stressful downtime on launch day) if I had gone from the beginning with the approach of doing some manual setup each time a custom domain is added, instead of trying to automate everything before it was needed. I thought that it would be good to have that in place in case I got a huge number of paying customers at launch. But that, of course, didn’t happen. And even if it did I could’ve still done fine doing things manually.

### Marketing matters

While I needed to work a lot on the core of the product after the launch—and I still do—it’s clear now that I can’t keep focusing solely on building and neglecting marketing. Even if I build the greatest product of all time, it’s worthless if people can’t find it.

I need to build a sustainable and scalable way to get people to discover Bloggi.

I’ll be taking the approach of creating and sharing work that I think might be valuable to people. If people do find it valuable, I might earn their trust, and they might share it around—indirectly generating awareness of Bloggi’s existence. Yes, I could have just said *content marketing*, but I don’t like [that term](https://om.co/2019/06/16/the-problem-with-content/). And yes, this post is an example of it.

Since this is a solo effort, I’ll need to split the focus. I’m now trying to spend at least 25% of my working day writing, and the rest on product work.

### Do it for the right reasons

This is a long-term game. There were many times where I doubted myself and wondered if all the work I was doing was worth the effort. And it’s not the first time I’ve had the same feeling.

Unlike some failed past projects, this time I’m scratching my own itch. Wanting something to exist for myself is the best way I found to clear all the doubts and push through the tough times. At projects where my primary goal was to make money, my motivation ended up fading very quickly after I encountered the first obstacles.

At some points in the beginning I’ve even felt like I had no choice—I just *had* to make the idea come true and see what happens. And that’s what I try to remember when the doubts come back.

## What’s next

I’ll keep working on getting my vision for the *1.0* version of Bloggi out. I have a long list of things to work on, and it grows every day. My next big focus is on adding more customization options and improving the editor.

As I mentioned, I’ll also be writing more regularly, being as open as possible about the development and the future of Bloggi.
