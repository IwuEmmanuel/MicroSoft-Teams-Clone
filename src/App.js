import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
require('dotenv').config();


// Creating App as a functional component
 const App = () => {
       //If not logged 
       if (!localStorage.getItem('username')) return <LoginForm />;

      return (
          //Adding the ChatEngine which is also a functional component
          <ChatEngine 
              height = '100vh'
              //USE .env file to hide your important informations
              projectID = {process.env.REACT_APP_PROJECTID}
              userName={localStorage.getItem('username')}
              userSecret={localStorage.getItem('password')}
              //rendering our own chat feed using props from chatFeed
              //Passing in all our chats as chatAppProps
              //Creat a new ChatFeed component 
              //And pass in our previous chats using the spread function
              renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
          />
      )
}

export default App;