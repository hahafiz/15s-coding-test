import { useState } from "react";
export function Answer() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const answerList = [
    { value: 1, label: "True", focus: "focus:bg-blue-500 focus:text-white" },
    { value: 0, label: "False", focus: "focus:bg-red-500 focus:text-white" },
    { value: -11, label: "False", focus: "focus:bg-red-500 focus:text-white" },
    { value: -1, label: "False", focus: "focus:bg-red-500 focus:text-white" },
  ];

  return (
    <div className="flex flex-col gap-4 pt-8">
      <p>
        What is <span className="font-bold font-mono">result</span> ?
      </p>
      <div className="flex gap-2 text-black">
        {answerList.map((answer) => {
          return (
            <button
              key={answer.value}
              value={answer.value}
              className={`bg-blue-100 hover:bg-blue-300 ${answer.focus} flex-1`}
              onClick={() => setSelectedAnswer(answer.value)}
            >
              {answer.value}
            </button>
          );
        })}
      </div>
      {selectedAnswer !== null && (
        <p>
          {selectedAnswer === 1 &&
            "Congratulations, you have wired your brain to easily interpret code"}
          {selectedAnswer === -11 && "Nice AI you got there. False!"}
          {selectedAnswer !== 1 && selectedAnswer !== -11 && "False!"}
        </p>
      )}
    </div>
  );
}
