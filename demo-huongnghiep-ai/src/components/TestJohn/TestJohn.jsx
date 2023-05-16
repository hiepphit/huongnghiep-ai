import "./styles.css";
import { Link } from 'react-router-dom';
function TestJohn() {
    return (
        <div className="test-john">
            <div className="test-one">
                <h1>Trắc nghiệm John Holland</h1>
                <p>Tìm ra công việc phù hợp với bản thân dễ dàng hơn</p>
                <Link to="/roadmap">
                    <button>Thực hiện bài test ngay</button>
                </Link>
            </div>
        </div>
    );
};

export default TestJohn;
