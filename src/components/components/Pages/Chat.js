import { useState } from 'react'
// import './App.css'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
// import Navbar from '../layouts/Navbar';

const API_KEY = "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";

const systemMessage = { 
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

const Chat=()=> {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Sina! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { 

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  
        ...apiMessages 
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-900 ... mt-0 h-150%">
        {/* <Navbar/> */}
        <div className="mb-4 flex align-middle justify-center pt-5 text-5xl font-serif"><span className = "text-cyan-900 text-5xl font-extrabold">o</span><span className = "font-semibold text-cyan-200">rsin</span></div>
      <div className = "p-3" style={{paddingleft:"20px",margin: "auto", height: "100vh",width: "60%", borderRadius : "50%"}}>
        <MainContainer className="bg-stone-800" style ={{color : "green"}}>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
        </div>
    </div>
  )
}

export default Chat