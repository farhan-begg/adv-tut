import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'

const Home = () => {
    return (
    

        <div className="home">
            <div className="title">
                {/* <img src="https://www.freepnglogos.com/uploads/discord-logo-png/seven-kingdoms-9.png"/> */}
                Introduction</div>
            <div className="intro-paragraph">
                <p>Discord is a chat application that allows millions of users across the globe to message and voice chat online in communities called guilds or servers. Discord also provides an extensive API that developers can use to build powerful Discord bots. Bots can perform various actions such as sending messages to servers, DM-ing users, moderating servers, and playing audio in voice chats. This allows developers to craft powerful bots that include advanced, complex features like moderation tools or even games. For example, the utility bot Dyno serves millions of guilds and contains useful features such as spam protection, a music player, and other utility functions. Learning how to create Discord bots allows you to implement many possibilities, which thousands of people could interact with every day.

In this tutorial, you will build a Discord bot from scratch, using Node.js and the Discord.js library, which allows users to directly interact with the Discord API. You’ll set up a profile for a Discord bot, get authentication tokens for the bot, and program the bot with the ability to process commands, with arguments, from users.</p>
            </div>
       
            {/* <video  src="https://content.public.files.stdlib.com/shared/static/images/guides/discord/01-new-app-screen.png" alt="" loading="lazy"/> */}
            <video src="https://content.public.files.stdlib.com/shared/static/images/guides/discord/help-02.webm"  alt=""/>
  

   

        </div>
  


          
        
        
        

  
    )
}

export default Home
