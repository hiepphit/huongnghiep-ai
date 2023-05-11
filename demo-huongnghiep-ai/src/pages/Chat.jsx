import { useEffect, useState } from "react";
import { sendChatToOpenAI } from "../repository/openai/axios";
import { ChatCompletionRequestMessageRoleEnum as ROLE } from "openai";
import "./style.css";
import { useTypewriter } from "../utils/typeWriter";
import { MessageBlock, MessageInput } from "../components";
import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
export const Chat = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [chat, setChat] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    if (input.trim()) {
      setMessages([...messages, { content: input, role: ROLE.User }]);
      setInput("");
      const response = await sendChatToOpenAI([
        ...messages,
        { content: input, role: ROLE.User },
      ]);
      setResult(response);
    }
  };
  const { content } = useTypewriter(result);

  useEffect(() => {
    if (result) {
      setMessages([...messages, { content: result, role: ROLE.Assistant }]);
    }
  }, [result]);

  // useEffect(async ()=> {
  //   const result = await getModelList();
  // }, [])

  return (
    <Layout style={{ height: "100%" }}>
      <Sider theme="light">
        <Menu></Menu>
      </Sider>
      <Layout>
        <div className="chat-box">
          <div style={{ overflowY: "auto" }}>
            {messages.map((item, index) => {
              if (
                index === messages.length - 1 &&
                item.role === ROLE.Assistant
              ) {
                return <MessageBlock messages={[content]} />;
              }
              return (
                <MessageBlock
                  isUser={item.role === ROLE.User}
                  messages={[item.content]}
                />
              );
            })}
          </div>
          <MessageInput
            placeholder={"Viết gì đó ..."}
            onEnter={handleMessageSubmit}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            rightButton={
              <Button type="primary" onClick={handleMessageSubmit}>
                Gửi
              </Button>
            }
          />
        </div>
      </Layout>
    </Layout>
  );
};
