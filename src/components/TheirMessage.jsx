import React from 'react';

const TheirMessage = ( { lastMessage, message}) => {

    //Checks if it is their first message or not
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
      return (
          //First message by user
          <div className="message-row">
          {isFirstMessageByUser && (
              <div className="message-avatar"
                   style={{ backgroundImage: `url(${message?.sender?.avatar})`}}>

              </div>
          )}
          {
              //checks if the props received is a normal message or an image  and renders accordingly
            message?.attachments?.length > 0 
                ? (
                    <img
                        src={ message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ):(
                     <div 
                        className="message"
                        style={{ float: 'left', backgroundColor: "#CABCDC", marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                        >
                    {message.text}
                    </div>
                )
            
          }
          </div>
      )

}

export default TheirMessage;