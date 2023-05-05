import "./styles.css";

const dataQuestions = [
    'Thiết kế đồ hoạ là gì?',
    'Làm sao để trở thành nhiếp ảnh gia?',
    'Tôi muốn trở thành một nhân viên kinh doanh, tôi nên làm gì để chuẩn bị cho việc này?',
    'Tôi thích kỹ thuật máy tính, nhưng không biết nên chọn ngành học gì?',
    'Tôi làm gì để cải thiện kỹ năng giao tiếp trong công việc?',
    'Làm sao để biết mình có thích một ngành nghề nào đó?'
];
const Questions = ({ content }) => {
    return (
        <div className="bg-white">
            "{content}"
        </div>
    )
}
function MessageBlock() {
    return (
        <>
            <p>
                {dataQuestions.map((item, index) => <Questions content={item} key={index} />)}
            </p>
        </>
    )
}
export default MessageBlock