import { MessageBlock, MessageInput } from "../components";

// const content = 'this dashboard'
function Dashboard() {
  return (
    // <div>
    //   {/* {content} */}

    //   </div>
    <>
      <MessageBlock isUser={true} />
      <MessageBlock isUser={false} />
      <MessageInput />
    </>
  )
}
export default Dashboard;
