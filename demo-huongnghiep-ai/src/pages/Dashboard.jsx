import { MessageInput } from "../components";
import { Button } from "antd";
import { dataQuestions } from "../components/MessageBlock/MessageBlock";
import "./style.css";
import { StartRoadmap } from "../components";
import { TestJohn } from "../components";

const Questions = ({ content }) => {
  return (
    <div className="bg-white">
      "{content}"
    </div>
  )
}


function Dashboard() {

  return (
    <div className="my-dashboard">
      <div className="flex-row">
        <TestJohn />
        <StartRoadmap />
      </div>
      <div>
        <h1 className="title-content">Gợi ý chủ đề</h1>
        <a href="/Chat" className="text-content">{dataQuestions.map((item, index) => <Questions content={item} />)}</a>
      </div>
      <div>
        <MessageInput
          rightButton={
            <Button children="Gửi" type="primary" onClick={() => { }} />
          }
        />
      </div>
    </div>
  );
}
export default Dashboard;
