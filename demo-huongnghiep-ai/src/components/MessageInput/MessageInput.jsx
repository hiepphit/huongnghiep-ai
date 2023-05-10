import "./styles.css";
function MessageInput() {
    return (
        <form >
            <div className="input-container">
                <div className="input-text">
                    <input type="text" placeholder="Nhập thông tin" />
                    <button type="submit">Gửi</button>
                </div>
            </div>
        </form>
    )
}
export default MessageInput;