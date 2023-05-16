import "./styles.css";
import { Link } from 'react-router-dom';
function StartRoadmap() {
    return (
        <div className="road-map">
            <div className="road-one">
                <h1>Cùng bạn xây dựng bản đồ sự nghiệp</h1>
                <Link to="/roadmap">
                    <button>Khám phá ngay</button>
                </Link>
            </div>
        </div>
    )
}

export default StartRoadmap