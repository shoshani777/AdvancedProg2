import React from "react";
import Chat from "./Chat/Chat";


function WebPage({userName}){
  return (
    <div>
      <Chat givenChat={[{me: false, author: 'Gilad', body: 'HEY'}]}/>
    </div>
  );
}
export default WebPage;