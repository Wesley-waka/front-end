import React, { useState } from "react";
import ExamTimer from "./ExamTimer";
import Test from "./Test";
// import StudentDashboard from "./StudentDashboard";

function ExamPage() {
  const examDuration = 60 * 30; // 30 minutes
  const [isExamStarted, setIsExamStarted] = useState(false);

  function handleStartExam() {
    setIsExamStarted(true);
  }

  function handleTimeUp() {
    alert("Time's up!");
    setIsExamStarted(false);
  }
  return (
    <div>
      <div className="text-center text-4xl font-black text-orange-500" style={ {paddingTop:"30px"}} >
        {isExamStarted ? (
          <ExamTimer duration={examDuration} onTimeUp={handleTimeUp} />
        ) : (
          <button onClick={handleStartExam}>Start Exam</button>
        )}
      </div>

      < Test />
    </div>
  );
}

export default ExamPage;
