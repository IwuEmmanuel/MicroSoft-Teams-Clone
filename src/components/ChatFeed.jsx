import React from 'react';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';


//Take in props from the chatFeed
const ChatFeed = (props) => {

    //Destructuring props
     const { chats, activeChat, userName, messages } = props;
     
     //Find active or current chat
     // means "chat = if chats exists then find the activechat in chats"
     const chat = chats && chats[activeChat];

     //Read receipts
     const renderReadReceipts = ( message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
             <div key={`read_${index}`}
                  className="read-receipt"
                  style={{
                      float: isMyMessage ? 'right' : 'left',
                      backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
                  }}
             />
         ))
     
     
     //Functional component for generating messages
     const renderMessages = () => {
         // takes the keys or ids of our messages and gets all our messages
         //stores the message ids into the key constant
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            //get a single message
            const message = messages[key];
            //Finds the last message if there are messages
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            
            //checks if it is the Admins message
            const isMyMessage = userName === message.sender.username;

            return (
                //What is going to be rendered
                //get the key using the template literals to get the message at a given index
                <div key={`msg_${index}`} style={{ width: '100%'}}>
                    <div className="message-block">
                        
                        {
                            //using the tenary operator
                            //checks if is my message or not and renders either one
                            isMyMessage
                            ? <MyMessage message={message} /> 
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                         {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
     }


     //Checks if there is no chat before rendering
         if (!chat) return "Please wait, Loading...";
     
     return (
         //Structure of our chat feed
         <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                   {chat?.title}
                </div>
                <div className="chat-subtitle">
                   {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
             {
                 //Calling our rendermessage component using dynamic logic
                 renderMessages()
             }
             <div style={{ height: '100px'}}/>
             <div className="message-form-container">
                <MessageForm 
                {...props} 
                chatId={activeChat}
                />
             </div>
         </div>
     )

    
}

export default ChatFeed;