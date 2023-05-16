import { MessageBlock, MessageInput } from "../components";
import { Button } from "antd";

// const content = 'this dashboard'
function Dashboard() {
  return (
    <>
      <MessageBlock isUser={false} />
      
      <MessageInput
        rightButton={
          <Button children="Gửi" type="primary" onClick={() => { }} />
        }
      />
    </>
  );
}
export default Dashboard;
