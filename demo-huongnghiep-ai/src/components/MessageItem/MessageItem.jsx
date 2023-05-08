
import "./styles.css";
function MessageItem({ content, user }) {
    return (
        <>
            <div className={`message-item ${user ? 'bg-blue' : 'bg-white'}`}>
                "{content}"
            </div>
        </>
    )
}
export default MessageItem