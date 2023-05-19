import React, { useState } from "react";
import "./style.css";
import Quiz from "../components/Quiz/Quiz";
export const Roadmap = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true); // Hiển thị trang Quiz
  };
  return (
    <div className="containers">
      {showQuiz ? (
        <Quiz />
      ) : (
        <div>
          <div>
            <h1 className="content-1">Trắc nghiệm Jonh Halland</h1>
            <p className="content-2">Trắc nghiệm Holland chính là cơ sở để bạn đối chiếu sở thích, năng lực tự nhiên của mình với yêu cầu của các nhóm ngành nghề. Từ đó bạn có thể định hướng nghề nghiệp theo nhóm ngành phù hợp nhất.
              Kết quả Bài trắc nghiệm định hướng nghề nghiệp giúp bạn tìm ra ba kiểu tính cách của bạn tương ứng với 3 mật mã Holland (ví dụ: RCE hoặc ECR ). Sau đó dùng mã này kết nối với những nghề nghiệp cụ thể.
              Hãy thả lỏng tâm trí và thực hiện khảo sát một cách thoải mái nhất. Đừng chọn câu nhiều điểm, hãy chọn câu phù hợp nhất với bạn. Không giới hạn thời gian nhưng tốt nhất là hãy hoàn thành nó dưới 15 phút thôi bạn nhé. Bắt đầu ngay nào</p>
          </div>
          <button className="btn-content" onClick={handleStartQuiz}>
            Bắt đầu trắc nghiệm tính cách
          </button>
        </div>
      )}
    </div>
  )
};
