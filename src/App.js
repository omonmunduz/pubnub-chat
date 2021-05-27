import React, { useState, useEffect } from 'react';
    import PubNub from 'pubnub';
    import { PubNubProvider, usePubNub } from 'pubnub-react';
    import { Chat, MessageList, MessageInput, ChannelList, MemberList, TypingIndicator } from "@pubnub/react-chat-components";
    import { Picker } from 'emoji-mart';
    import "emoji-mart/css/emoji-mart.css"
    import { v4 as uuidv4 } from 'uuid';


    const pubnub = new PubNub({
      publishKey: 'pub-c-9df95d63-a9ee-4b1d-b60f-120f7edad9de',
      subscribeKey: 'sub-c-9808e51e-b9eb-11eb-8f6a-ae5fdf7280c3',
      uuid: `${uuidv4()}`
    });
    
    const currentChannel = "myCurrentChannel";

    function App() {
      return (
        <PubNubProvider client={pubnub}>
          <Chat {...{ currentChannel}}
          onSignal={function logConsole(){alert('signal')}}>
            <MessageList >
            <TypingIndicator showAsMessag = {true} />
            </MessageList>
            <MessageInput typingIndicator emojiPicker={<Picker/>} />
          </Chat>
        </PubNubProvider>
      );
    }

  
    export default App;