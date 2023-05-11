import MessageItem from "../MessageItem/MessageItem";
import logo from "../../assets/Logo.png";
import "./styles.css";

const dataQuestions = [
  "Thiết kế đồ hoạ là gì?",
  "Làm sao để trở thành nhiếp ảnh gia?",
  "Tôi muốn trở thành một nhân viên kinh doanh, tôi nên làm gì để chuẩn bị cho việc này?",
  "Tôi thích kỹ thuật máy tính, nhưng không biết nên chọn ngành học gì?",
  "Tôi làm gì để cải thiện kỹ năng giao tiếp trong công việc?",
  "Làm sao để biết mình có thích một ngành nghề nào đó?",
];

function MessageBlock({ isUser, messages }) {
  const data = messages || dataQuestions;
  return (
    <>
      <div className={`text-block ${isUser ? "mg-right" : "mg-left"}`}>
        {!isUser && (
          <div>
            <img src={logo} alt="logo" />
          </div>
        )}
        <div className="text">
          {data.map((item, index) => (
            <MessageItem user={isUser} content={item} key={index} />
          ))}
        </div>
        {isUser && (
          <div>
            <img src={logo} alt="logo" />
          </div>
        )}
      </div>
    </>
  );
}
export default MessageBlock




