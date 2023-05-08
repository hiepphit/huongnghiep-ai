import { useEffect, useState } from "react";
import {
  getModelList,
  sendChatToOpenAI,
  sendMessageToOpenAI,
} from "../repository/openai/axios";
import { ChatCompletionRequestMessageRoleEnum as ROLE } from "openai";

import { useTypewriter } from "../utils/typeWriter";
export const Chat = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [chat, setChat] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    const response = await sendChatToOpenAI([
      ...messages,
      { content: input, role: ROLE.User },
    ]);
    setMessages([
      ...messages,
      { content: input, role: ROLE.User },
      { content: response, role: ROLE.Assistant },
    ]);
    setResult(response);
    setInput("");
  };
  const { content } = useTypewriter(result);

  // useEffect(async ()=> {
  //   const result = await getModelList();
  // }, [])

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
      <p>
        {messages.map((item, index) => {
          if (index === messages.length - 1) {
            return <div>{content}</div>;
          }
          return (
            <div style={{ color: item.role === "user" ? "black" : "red" }}>
              {item.content}
            </div>
          );
        })}
      </p>
    </div>
  );
};
