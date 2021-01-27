import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Laurent Caballero",
      message: "¿Qué tal? 👍",
      img: "https://i.ibb.co/QjyzXNR/l.jpg",
    },
    {
      name: "Laurent Caballero",
      message: "¿Cómo va todo?  ",
      img: "https://i.ibb.co/QjyzXNR/l.jpg",
    },
    {
      message: "Hola Laurent! ¿cómo estás? 😀",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input !== "") {
      setMessages([...messages, { message: input }]);
      setInput("");
    }
  };
  return (
    <div className="ChatScreen">
      <p>HICISTE MATCH CON LAURENT EL 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="ChatScreen__message">
            <Avatar
              className="ChatScreen__img"
              alt={message.name}
              src={message.img}
            />
            <p className="ChatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="ChatScreen__message">
            <p className="ChatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="ChatScreen__form">
        <input
          className="ChatScreen__inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Escribe un mensaje..."
        />
        <button
          className="ChatScreen__inputButton"
          type="submit"
          onClick={handleSend}
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
