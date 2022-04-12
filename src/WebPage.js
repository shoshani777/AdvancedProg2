import React from "react";
import Chat from "./Chat/Chat";


function WebPage({userName}){
  return (
    <div>
      <Chat givenChat={[{me: false, author: 'Gilad', body: 'HEY', type: 'text'}
        , {me: false, author: 'Ori', body: 'https://www.w3schools.com/images/lamp.jpg', type: 'img'}
      ]}
       group={true}/>
    </div>
  );
}
export default WebPage;