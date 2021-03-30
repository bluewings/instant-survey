import React, { useContext, useMemo, useState, useRef, ChangeEvent } from 'react';
import { Button, Input } from 'antd';
import FirebaseContext from '../../providers/Firebase/FirebaseContext';
import styles from './AddSurvey.module.scss';

interface IAddSurveyProps {
  message?: string;
}

function useFilebase() {
  const { database } = useContext(FirebaseContext);
  return database;
}

function AddSurvey(props: IAddSurveyProps) {

  const database = useFilebase();

  const [question, setQuestion] = useState<string>('');
  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value.trim());
  };

  const [answers, setAnswers] = useState<{ seq: number, value: string }[]>([]);
  const answerSeq = useRef(0);
  const items = useMemo(() => {
    if (answers.filter(value => !value).length === 0) {
      return [...answers, { seq: answerSeq.current++, value: '' }];
    }
    return answers;
  }, [answers, answerSeq]);

  const survey = useMemo(() => ({
    question,
    answers: answers
      .map(({ value }) => value)
      .filter(Boolean)
      .filter((e, i, arr) => arr.indexOf(e) === i),
  }), [question, answers]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await database?.ref('/current-survey').set({
      ...survey,
      createdAt: (new Date()).toISOString(),
    });
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={handleQuestionChange}
          addonBefore="Q"
          size="large"
        />
        {items.map((item, i) => {
          const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
            setAnswers(values => [
              ...values.slice(0, i),
              { seq: item.seq, value: event.target.value.trim() },
              ...values.slice(i + 1),
            ]);
          };
          return (
            <div key={item.seq}>
              <Input.Group compact>
                <Input
                  type="text"
                  onChange={handleAnswerChange}
                  addonBefore={i + 1}
                  size="large"
                />
              </Input.Group>
            </div>
          )
        })}
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          disabled={!(survey.question && survey.answers.length > 1)}
          block
        >
          submit
      </Button>
      </form>
    </div>
  );
}

export default AddSurvey;

