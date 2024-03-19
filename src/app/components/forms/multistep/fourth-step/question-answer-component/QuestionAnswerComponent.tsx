import React from 'react';

type QuestionAnswerComponentProps = {
  question: string | undefined;
  answer: string | string[] | undefined;
};

const QuestionAnswerComponent: React.FC<QuestionAnswerComponentProps> = ({
  question,
  answer,
}) => {
  return (
    <div className="my-4">
      <div className="flex  mb-2 items-center ">
        <h1 className="font-bold text-md">{question}</h1>
      </div>

      <div className="flex flex-wrap items-center">
        {typeof answer !== 'string'
          ? answer?.length !== 0 &&
            answer?.map(
              (element: string) =>
                element && (
                  <div
                    className="bg-slate-100 p-2 rounded-md mx-1 my-1"
                    key="key"
                  >
                    {element && element}
                  </div>
                )
            )
          : answer && (
              <div className="bg-slate-100 p-2 rounded-md mx-1" key="key">
                {answer}
              </div>
            )}
      </div>
    </div>
  );
};

export default QuestionAnswerComponent;
