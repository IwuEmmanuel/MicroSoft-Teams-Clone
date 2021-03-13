import React from 'react';

const MyMessage = ({message}) => {
    //checks if the props received is a normal message or an image  and renders accordingly
    if (message?.attachments.length > 0) {
        return (
            <img
                src={ message.attachments[0].file}
                className="message-image"
                alt="message-attachment"
                style={{ float: 'right' }}
            />
        )
    }
      return (
          <div 
          className="message"
          style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: "#3B2A50"}}
          >
              {message.text}
          </div>
      )

}

export default MyMessage;