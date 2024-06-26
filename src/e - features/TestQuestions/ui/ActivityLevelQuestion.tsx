import React, { FC } from "react";
import { QuestionComponent } from "@/g - shared/components/question-component/QuestionComponent";
import styled from "styled-components";

interface ActivityLevelQuestionProps {
    selectedAnswer: string | null;
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
}

interface StyledOptionProps {
    isSelected: boolean;
}

const StyledOption = styled.div<StyledOptionProps>`
  width: 200px;
  height: 100px;
  border: 1px solid #89ac76;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ActivityLevelQuestion: FC<ActivityLevelQuestionProps> = ({
                                                                          onAnswer,
                                                                          onNextQuestion,
                                                                          selectedAnswer,
                                                                      }) => {
    const options = ["Сидячий образ жизни", "Умеренно активный", "Активный", "Высокая активность"];

    return (
        <OptionsContainer>
            <QuestionComponent
                title="Насколько вы активны?"
                options={options}
                selectedAnswer={selectedAnswer}
                onAnswer={onAnswer}
                onNextQuestion={onNextQuestion}
                customOption={StyledOption}
            />
        </OptionsContainer>
    );
};