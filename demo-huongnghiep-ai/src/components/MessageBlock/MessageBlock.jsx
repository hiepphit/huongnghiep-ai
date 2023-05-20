import MessageItem from "../MessageItem/MessageItem";
import logo from "../../assets/Logo.png";
import "./styles.css";
import { useContext } from "react";
import { UserContext } from "../../repository/context/userContext";

export const dataQuestions = [
  "Xin lỗi tôi không có câu trả lời cho câu hỏi này. Bạn có thể hỏi một số câu hỏi sau?",
  "Thiết kế đồ hoạ là gì?",
  "Làm sao để trở thành nhiếp ảnh gia?",
  "Tôi muốn trở thành một nhân viên kinh doanh, tôi nên làm gì để chuẩn bị cho việc này?",
  "Tôi thích kỹ thuật máy tính, nhưng không biết nên chọn ngành học gì?",
  "Tôi làm gì để cải thiện kỹ năng giao tiếp trong công việc?",
  "Làm sao để biết mình có thích một ngành nghề nào đó?",
];

function MessageBlock({ isUser, messages, loadingItem }) {
  const userContext = useContext(UserContext);

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
          {loadingItem
            ? loadingItem
            : data.map((item, index) => (
                <MessageItem user={isUser} content={item} key={index} />
              ))}
        </div>
        {isUser && (
          <div>
            <img
              width={48}
              height={48}
              className="avatar-md"
              src={userContext.user.avatar}
              alt="logo"
            />
          </div>
        )}
      </div>
    </>
  );
}
export default MessageBlock




