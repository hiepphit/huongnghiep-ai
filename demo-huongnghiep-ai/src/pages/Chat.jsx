import { useEffect, useState, useRef } from "react";
import { sendChatToOpenAI } from "../repository/openai/axios";
import { ChatCompletionRequestMessageRoleEnum as ROLE } from "openai";
import "./style.css";
import { useTypewriter } from "../utils/typeWriter";
import { ChatTyping, MessageBlock, MessageInput } from "../components";
import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { IconAdd, IconChat, IconChatActive } from "../assets";
import { MenuCommon } from "../components/Menu/MenuCommon";

const SIDER_CHAT = [
  {
    id: "top",
    group: [
      {
        id: "1",
        name: "Thiết kế đồ họa là gì?",
        route: "abc-xyz",
        icon: <IconChat />,
        iconActive: <IconChatActive />,
      },
      {
        id: "2",
        name: "Làm sao để ...",
        route: "abc-xyz",
        icon: <IconChat />,
        iconActive: <IconChatActive />,
      },
      {
        id: "3",
        name: "Làm sao để ...",
        route: "abc-xyz",
        icon: <IconChat />,
        iconActive: <IconChatActive />,
      },
    ],
  },
];
export const Chat = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    if (input.trim()) {
      setMessages([...messages, { content: input, role: ROLE.User }]);
      setInput("");
      setIsLoading(true);
      const response = await sendChatToOpenAI([
        ...messages,
        { content: input, role: ROLE.User },
      ]);
      setIsLoading(false);
      setResult(response);
    }
  };
  const { content } = useTypewriter(result);

  useEffect(() => {
    if (result) {
      setMessages([...messages, { content: result, role: ROLE.Assistant }]);
    }
  }, [result]);

  //Scroll to last message
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef) {
      contentRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  useEffect(() => {
    const contentHeight = contentRef.current?.scrollHeight;
    console.log("====== 2", contentRef.current.scrollTop);
    contentRef.current.scrollTop = contentHeight;
  }, [contentRef.current?.scrollHeight]);

  // useEffect(async ()=> {
  //   const result = await getModelList();
  // }, [])

  return (
    <Layout style={{ height: "100%" }}>
      <Sider theme="light" width={300}>
        <div className="btn-add-topic">
          <Button block>
            <IconAdd />
            <span>Bắt đầu một chủ đề mới</span>
          </Button>
        </div>
        <MenuCommon
          mode="inline"
          selectedKeys={"1"}
          menus={SIDER_CHAT}
          isChatMenu
        />
      </Sider>
      <Layout>
        <div className="chat-box">
          <div style={{ overflowY: "auto" }} ref={contentRef}>
            {messages.map((item, index) => {
              if (
                index === messages.length - 1 &&
                item.role === ROLE.Assistant
              ) {
                return <MessageBlock key={`m-${index}`} messages={[content]} />;
              }
              return (
                <MessageBlock
                  key={`m-${index}`}
                  isUser={item.role === ROLE.User}
                  messages={[item.content]}
                />
              );
            })}
            {isLoading && <MessageBlock loadingItem={<ChatTyping />} />}
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
