import logo from "../../assets/Logo.png";
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
            <MessageItem />
        </>
    )
}
export default MessageBlock

function MessageItem() {
    return (
        <>
            <div className="text-block">
                <div><img src={logo} alt="logo" /></div>
                <div className="text">
                    <p className="text-1">Thiết kế đồ họa là quá trình tạo ra các sản phẩm hình ảnh có tính thẩm mỹ, thông qua sử dụng các công nghệ, phần mềm và kỹ thuật khác nhau. Các sản phẩm đồ họa thường bao gồm đồ họa kỹ thuật số, thiết kế đồ họa cho ấn phẩm, thiết kế trang web, thiết kế đồ hoạ cho sản phẩm quảng cáo, thiết kế đồ họa cho phim, trò chơi và nhiều lĩnh vực khác. Công việc của một nhà thiết kế đồ họa là sáng tạo, đưa ra ý tưởng và chuyển đổi chúng thành các sản phẩm đồ họa đẹp mắt và chuyên nghiệp để phục vụ cho mục đích nào đó của khách hàng.</p>
                    <a href="#" className="text-2">Tính cách của tôi có phù hợp với ngành Thiết kế đồ hoạ không?</a>
                    <a href="#" className="text-2">Có thể xây cho tôi bản đồ sự nghiệp cho ngành Thiết kế đồ hoạ không?</a>
                    <a href="#" className="text-2">Xem các chủ đề gợi ý khác</a>
                </div>
            </div>
        </>
    )
}


