import React from "react";

const Messages = (props) => {
  return (
    <div className={props.className}>
      {props.message}
    </div>
    
  )
}

export default Messages;