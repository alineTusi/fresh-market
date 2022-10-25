import React, { useEffect, useState } from "react";
import "./Chat.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCommentDots, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputEmoji from "react-input-emoji";
import sendIcon from "./sendIcon.png";

library.add(faCommentDots, faXmark);

const Chat = () => {
  const [displayChat, setDisplayChat] = useState(true);
  const [chatText, setChatText] = useState([]);
  const [text, setText] = useState("");

  const handleDisplayChat = () => {
    setDisplayChat(!displayChat);
  };

  const handleSendMessage = (text) => {
    const t = [...chatText];
    t.push(text);
    setChatText(t);
    console.log("handleSendMessage", text);
    setText('')
  };

  useEffect(() => {
    console.log("text", text);
  }, [text]);

  useEffect(() => {
    console.log("chatText", chatText);
  }, [chatText]);

  return (
    <>
      {!displayChat && (
        <button className="chatBtn" onClick={handleDisplayChat}>
          <FontAwesomeIcon icon={faCommentDots} color="white" />
        </button>
      )}
      {displayChat && (
        <div className="chatWindow">
          <div className="chatWindowHeaderContainer">
            <div className="chatWindowHeader">
              <div className="chatWindowTitleContainer">
                <h2 className="chatWindowTitle">Fresh Market</h2>

                <ul className="chatWindowLisContainer">
                  <li className="chatWindowList">
                    We’ll reply as soon as we can
                  </li>
                </ul>
              </div>
              <div className="chatWindowClose">
                <button
                  className="chatWindowCloseBtn"
                  onClick={handleDisplayChat}
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <div className="chatWindowBody">
            {chatText.map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <div className="chatWindowInputContainer">
            <div className="chatWindowInput">
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleSendMessage}
                placeholder="Type your message..."
              />
            </div>
            <div className="chatWindowAction">
              <button onClick={() => handleSendMessage(text)}><img src={sendIcon} alt="send icon" width="60%" /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Chat;
