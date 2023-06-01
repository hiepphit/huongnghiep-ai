import { MessageInput } from "../components";
import { Button } from "antd";
import { dataQuestions } from "../components/MessageBlock/MessageBlock";
import "./style.css";
import { StartRoadmap } from "../components";
import { TestJohn } from "../components";
import { useNavigate } from "react-router-dom";

const Questions = ({ content }) => {
  return <div className="bg-white">"{content}"</div>;
};

function Dashboard() {
  const navigate = useNavigate();
  const handleMessageSubmit = async () => {
    navigate("/chat");
  };
  return (
    <div className="my-dashboard">
      <div className="flex-row">
        <TestJohn />
        <StartRoadmap />
      </div>
      <div>
        <h1 className="title-content">Gợi ý chủ đề</h1>
        <a href="/Chat" className="text-content">
          {dataQuestions.map((item, index) => (
            <Questions content={item} />
          ))}
        </a>
      </div>
      <div>
        <MessageInput
          placeholder={"Viết gì đó ..."}
          onEnter={handleMessageSubmit}
          rightButton={
            <Button
              children="Gửi"
              type="primary"
              onClick={handleMessageSubmit}
            />
          }
        />
      </div>
    </div>
  );
}
export default Dashboard;
