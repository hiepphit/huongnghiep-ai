import "./styles.css";
function MessageInput({ rightButton, onChange, placeholder, onEnter, value }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "Say something ..."}
        onChange={onChange}
        value={value}
      />
      {rightButton}
    </div>
  );
}
export default MessageInput;