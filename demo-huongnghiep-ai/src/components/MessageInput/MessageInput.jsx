import "./styles.css";
function MessageInput() {

    return (
        <form >
            <div className="input-container">
                <input type="text" placeholder="Nhập thông tin" />
                <button type="submit">Gửi</button>
            </div>
        </form>
    )
}
export default MessageInput;