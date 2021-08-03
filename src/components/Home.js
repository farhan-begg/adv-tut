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
                <p>If you haven't used Discord yet, chances are this is your first time using the internet. Welcome, friend! It is a magical place. All joking aside, Discord is a messaging platform with fantastic voice and video streaming capabilities originally built to service gaming communities. It offers a lot of extensibility via bots, custom moderation tools and more which we'll show you how to work with here.</p>
                <p>In this tutorial we'll cover how to set up a fully customizable Discord bot that you can have running in your server in around 10 minutes. We'll be using Autocode, which will provide you with free hosting, automatically handle authentication to Discord and set up webhooks for you. This will allow you to focus on the fun part: building an awesome bot for your server!</p>
            </div>
            <div className="gif">
            {/* <video  src="https://content.public.files.stdlib.com/shared/static/images/guides/discord/01-new-app-screen.png" alt="" loading="lazy"/> */}
            <video src="https://content.public.files.stdlib.com/shared/static/images/guides/discord/help-02.webm"  alt=""/>
            </div>

   

        </div>
  


          
        
        
        

  
    )
}

export default Home
