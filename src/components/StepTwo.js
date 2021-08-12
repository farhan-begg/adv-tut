import React from 'react'

const StepTwo= () => {
    return (
        <div>
           <h2> Step 2 — Creating Your Project</h2>
           <p>In this step, you’ll set up the basic coding environment where you will build your bot and log in to the bot programmatically.
            </p>
            <p>First, you need to set up a project folder and necessary project files for the bot.</p>
            <p>Create your project folder:</p>


       <pre>
         <code>
         <p>

             $ mkdir discord-bot
             
         </p>
        </code>
       
      </pre>

      <p>Move into the project folder you just created:</p>
      <pre>
         <code>
         <p>

             $ cd discord-bot
             
         </p>
        </code>
       
      </pre>

      <p>Next, use your text editor to create a file named config.json to store your bot’s authentication token:</p>

      <pre>
         <code>
         <p>

             $ nano config.json
             
         </p>
        </code>
      </pre>

      <p>Then add the following code to the config file, replacing the highlighted text with your bot’s authentication token:</p>


      <pre>
         <code>
         <p>
`           "CODE BLOCK"

         </p>
        </code>
      </pre>


      <p>Save and exit the file.</p>

      <p>Next you’ll create a package.json file, which will store details of your project and information about the dependencies you’ll use for the project. You’ll create a package.json file by running the following npm command:</p>

      <pre>
         <code>
         <p>

             $ npm init
             
         </p>
        </code>
      </pre>


      <p>npm will ask you for various details about your project. If you would like guidance on completing these prompts, you can read about them in How To Use Node.js Modules with npm and package.json.</p>

 
      <p>You’ll now install the discord.js package that you will use to interact with the Discord API. You can install discord.js through npm with the following command:</p>

      <pre>
         <code>
         <p>

             $ npm install discord.js
         </p>
        </code>
      </pre>

      <p>Now you’ve set up the configuration file and installed the necessary dependency, you’re ready to begin building your bot. In a real-world application, a large bot would be split across many files, but for the purposes of this tutorial, the code for your bot will be in one file.</p>

      <p>First, create a file named index.js in the discord-bot folder for the code:</p>

      <pre>
         <code>
         <p>

             $ nano index.js
         </p>
        </code>
      </pre>

      <p>Begin coding the bot by requiring the discord.js dependency and the config file with the bot’s token:</p>

      <pre>
         <code>
         <p>

            const Discord = require("discord.js");
            const config = require("./config.json");
         </p>
        </code>
      </pre>

     <p>Following this, add the next two lines of code:</p> 

     <pre>
         <code>
         <p>

          ...
          const client = new Discord.Client();

          client.login(config.BOT_TOKEN);
         </p>
        </code>
      </pre>

      <p>Save and exit your file.</p>
      <p>The first line of code creates a new Discord.Client and assigns it to the constant client. This client is partly how you will interact with the Discord API and how Discord will notify you of events such as new messages. The client, in effect, represents the Discord bot.</p>
      <p>The second line of code uses the login method on the client to log in to the Discord bot you created, using the token in the config.json file as a password. The token lets the Discord API know which bot the program is for and that you’re authenticated to use the bot.</p>
      <p>Now, execute the index.js file using Node:</p>

      <pre>
         <code>
         <p>

          $ node index.js
         </p>
        </code>
      </pre>

      <p>Your bot’s status will change to online in the Discord server you added it to.</p>
      <img src="https://assets.digitalocean.com/articles/node_discord_bot/step2a.png" alt="" />

      <p>You’ve successfully set up a coding environment and created the basic code for logging in to a Discord bot. In the next step you’ll handle user commands and get your bot to perform actions, such as sending messages.</p>

        </div>
    )
}

export default StepTwo
