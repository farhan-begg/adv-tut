import React from 'react'
import './StepOne.css'

const StepOne = () => {
    return (
   
        <div className="step_one">
        <div className="title">Prerequisites</div>
        <div className="intro-paragraph">
            <p>Before you get started, you will need the following:

Node.js installed on your development machine. To install this on macOS or Ubuntu 18.04, follow the steps in How to Install Node.js and Create a Local Development Environment on macOS or the Installing Using a PPA section of How To Install Node.js on Ubuntu 18.04.
Any text editor of your choice, such as Visual Studio Code, Atom, Sublime, or Nano.
A free Discord account with a verified email account and a free Discord server you will use to test your Discord bot..</p>
            <p>In this tutorial we'll cover how to set up a fully customizable Discord bot that you can have running in your server in around 10 minutes. We'll be using Autocode, which will provide you with free hosting, automatically handle authentication to Discord and set up webhooks for you. This will allow you to focus on the fun part: building an awesome bot for your server!</p>
        </div>

        <h2>Step 1 — Setting Up a Discord Bot</h2>
        <p>In this step, you’ll use the Discord developers GUI to set up a Discord bot and get the bot’s token, which you will pass into your program.</p>
        <p>In order to register a bot on the Discord platform, use the Discord application dashboard. Here developers can create Discord applications including Discord bots.</p>
       
       
        <img src="https://assets.digitalocean.com/articles/node_discord_bot/step1a.png"  alt=""/>
        <p>To get started, click New Application. Discord will ask you to enter a name for your new application. Then click Create to create the application.</p>

        <img src="https://assets.digitalocean.com/articles/node_discord_bot/step1b.png" alt=""/>

        <p>Note: The name for your application is independent from the name of the bot, and the bot doesn’t have to have the same name as the application.</p>

        <p>Now open up your application dashboard. To add a bot to the application, navigate to the Bot tab on the navigation bar to the left.

</p>

        <img src="https://assets.digitalocean.com/articles/node_discord_bot/step1c.png" alt="" />

        <p>Click the Add Bot button to add a bot to the application. Click the Yes, do it! button when it prompts you for confirmation. You will then be on a dashboard containing details of your bot’s name, authentication token, and profile picture.</p>
     
        <img src="https://assets.digitalocean.com/articles/node_discord_bot/step1d.png" alt="" />

        <p>You can modify your bot’s name or profile picture here on the dashboard. You also need to copy the bot’s authentication token by clicking Click to Reveal Token and copying the token that appears.

        </p>

        <p>Warning: Never share or upload your bot token as it allows anyone to log in to your bot.</p>

        <p>Now you need to create an invite that allows you to add the bot Discord guilds where you can test the bot. First, navigate to the OAuth2 tab of the application dashboard. To create an invite, scroll down and select bot under scopes. You must also set permissions to control what actions your bot can perform in guilds. For the purposes of this tutorial, select Administrator, which will give your bot permission to perform nearly all actions in guilds. Copy the link with the Copy button.

        </p>

        <img src="https://assets.digitalocean.com/articles/node_discord_bot/step1e.png" alt="" />

        <p>Next, add the bot to a server. Follow the invite link you just created. You can add the bot to any server you own, or have administrator permissions in, from the drop-down menu.</p>

        <img src="https://assets.digitalocean.com/articles/node_discord_bot/step1f.png" />

        <p>Now click Continue. Ensure you have the tickbox next to Administrator ticked—this will grant the bot administrator permissions. Then click Authorize. Discord will ask you to solve a CAPTCHA before the bot joins the server. You’ll now have the Discord bot on the members list in the server you added the bot to under offline.</p>

        <img src="https://assets.digitalocean.com/articles/node_discord_bot/step1g.png"  alt="" />


        <p>You’ve successfully created a Discord bot and added it to a server. Next, you will write a program to log in to the bot.

        </p>

    </div>




    )
}

export default StepOne
