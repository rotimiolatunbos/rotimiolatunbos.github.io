---
title: Building a website with Hugo on Android
date: 2025-07-20
summary: How to go about building static websites with Hugo on Android
tags: ["android", "hugo", "web development", "emacs", "termux"]
---
I had always known it was possible to write code on Android but I had this notion that it was cumbersome. Writing code on Android can actually be a clunky activity without the right tools and apps.

I had tried some apps for code editing and had a bad experience which made me conclude it was a fundamentally difficult activity to code on Android. 

Well that notion has changed. Some months back, I got an Android tab and I was wondering what powerful things I could do on it. 

Things came to a head two weeks ago when I got a bluetooth keyboard and mouse combo. And since then, I have been trying different things to see what's possible.

I installed Termux and Emacs apps (from unofficial sources, would get to that later). And also did some configuration and customisations on both apps to make them work well for programming. 

Currently, I'm building my personal blog using Hugo on my tablet and I plan to publish this writing there. It is been a smooth experience so far writing code on Android.

## First things first

To get the best programming experience on Android, you'll need to have the right kind of device, peripherals and apps installed. 

In my opinion, it's preferable to use an Android tablet as it gives you the large screen experience you'd get from coding on a PC. If you don't have one, what ever Android device you have should work just fine. 

Also, you need an external keyboard and mouse, preferably Bluetooth enabled ones. Believe me, typing with on screen keyboard can be clunky and slow for programming. Asides this, it takes up useful screen real estate. 

Switching between apps, navigation and other interactions that require touching the screen become seamless with a keyboard and mouse connected to your device as there are keyboard bindings for these actions.

Termux and any other code editor of your choosing (preferably Emacs in my opinion) are a must have on your device. There are lots of code editors available on the Google play store and various unofficial app stores. You should use an editor that easily integrates with Termux and for this, I'd recommend the edited version of Emacs that can be [found here](https://sourceforge.net/projects/android-ports-for-gnu-emacs/). Your editor being able to work well with Termux will save you a lot of pain in your development journey.

If you do all of these, you should be quite set for web development  on Android. In the rest of this writing, I'd be talking about how to install the apps, and packages required for web development on Android. 

## Installing Termux and Emacs 

Termux brings the Linux shell environment to android allowing you to carry out activities you'd typically do on a PC Linux.

Emacs is a powerful and highly customisable text editor with lots of useful features and built-in packages. It has a package marketplace where you can get new packages

I followed [this guide](https://mstempl.netlify.app/post/emacs-on-android) to install edited versions of Emacs and Termux. The edited version allows you to access Termux's binaries from Emacs which is really cool.

## Installing Git and gh CLI

Git is a version control tool that allows you to store historical version of a file based project while Github is an online too that uses the file-folder architecture to hold data for projects running the git version control tool. A project stored on Github is called a repository. Github has a CLI tool called `gh` that allows you to interact with Github from a terminal.

Before you install `git` or `gh`, you'll need to update existing packages on Linux so that they are the latest versions available with the latest in security updates and bug fixes. To do this, run this commands.

`pkg update && pkg upgrade -y `

Then run this command to install gh and git packages.

`pkg install git gh`

After installation, run this commands to confirm that `gh` and `git` have been installed.

`git --version`

`gh --version`

If it was successful, you should see their respective version numbers displayed on the screen.

## Starting a Hugo project

Hugo is a static site generator tool that creates a full fledged (static) website from a series of markdown and configuration files. It is built with Go and runs really fast 

To start a new Hugo project, you will need to install it first. Run this command below to install Hugo on termux and wait for the installation process to run its course.

`pkg install hugo`

Once it's done, run this code to confirm its installation. 

`hugo version`

If you installed it successfully, you shouldn't get an error message.

Now, you are set to start a new Hugo project. 

On Termux, change directory to where you would like to create the project and run this command.

`hugo new site <site name goes here>`

change directory into your newly created project using this command

`cd <project directory name>`

and then run this command to start the hugo development server

`hugo server -D --noBuildLock`

The terminal should display a message with a localhost link and port number that looks something like this: `http://localhost:1313`. 

When you navigate to this link in your browser, you should see a "404 not found" message displayed as you haven't created any pages or content yet.

## Learning Hugo

Though I'm still learning this framework, my learning experience so far has been great.

Here are some resources I have found useful for learning Hugo.

1. [Hugo's official documentation - Getting  started](https://gohugo.io/getting-started/)
2. Hugo Beginner Tutorial Series
	- [Getting set up in Hugo](https://cloudcannon.com/tutorials/hugo-beginner-tutorial/)
	- [Layouts in Hugo](https://cloudcannon.com/tutorials/hugo-beginner-tutorial/layouts-in-hugo/)
	- [Hugo Partials](https://cloudcannon.com/tutorials/hugo-beginner-tutorial/hugo-partials/)
	- [Hugo templating basics](https://cloudcannon.com/tutorials/hugo-beginner-tutorial/hugo-templating-basics/)
	- [Blogging in Hugo](https://cloudcannon.com/tutorials/hugo-beginner-tutorial/blogging-in-hugo/)
	- [Using Data in Hugo](https://cloudcannon.com/tutorials/hugo-beginner-tutorial/using-data-in-hugo/)
3. [Giraffe Academy - Hugo Tutorial](https://www.giraffeacademy.com/static-site-generators/hugo/)

You should definitely use ChatGPT or your favorite generative AI tool alongside these resources as this would significantly improve your learning outcome.

These resources should get you up to speed on building a website with Hugo.

Happy learning and building!
## Conclusion

I'm pretty excited about the prospect of coding on my Android and believe me, static web development using Hugo is just the first step in this journey. 

I have got lots of ideas for side projects that I'm itching to build  and can't wait. 

Let's see how this goes. 

See you in my next article.

Till then, be good.












