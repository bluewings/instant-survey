import React, { useContext, useState, ChangeEvent } from 'react';
import { Button, Input } from 'antd';
import FirebaseContext from '../../providers/Firebase/FirebaseContext';
import styles from './AddSurvey.module.scss';

const { TextArea } = Input;

interface IAddSurveyProps {
  message?: string;
}

function useFilebase() {
  const { database } = useContext(FirebaseContext);
  return database;
}

function AddSurvey(props: IAddSurveyProps) {

  const database = useFilebase();

  // const [question, setQuestion] = useState<string>('');
  // const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setQuestion(event.target.value.trim());
  // };

  // const [answers, setAnswers] = useState<{ seq: number, value: string }[]>([]);
  // const answerSeq = useRef(0);
  // const items = useMemo(() => {
  //   if (answers.filter(value => !value).length === 0) {
  //     return [...answers, { seq: answerSeq.current++, value: '' }];
  //   }
  //   return answers;
  // }, [answers, answerSeq]);

  // const survey = useMemo(() => ({
  //   question,
  //   answers: answers
  //     .map(({ value }) => value)
  //     .filter(Boolean)
  //     .filter((e, i, arr) => arr.indexOf(e) === i),
  // }), [question, answers]);

  const [tick, setTick] = useState(0);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await database?.ref('/current-survey').set({
      ...draft,
      createdAt: (new Date()).toISOString(),
    });
    setDraft({ question: '', answers: [''] });
    setTick(state => state + 1);
  };

  const [draft, setDraft] = useState({ question: '', answers: [''] });
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const [question, ...answers] = event.target.value
      .split('\n')
      .map(e => e.trim())
      .filter(Boolean)
      .filter((e, i, arr) => arr.indexOf(e) === i);
    setDraft({ question, answers });
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <TextArea
          key={tick}
          className={styles.textarea}
          // defaultValue={smpl}
          onChange={handleTextChange}
          // placeholder="Controlled autosize"
          autoSize={{ minRows: 5 }}
          spellCheck={false}
        />
        {/* <Input
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
        })} */}
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          disabled={!(draft.question && draft.answers.length > 1)}
          block
        >
          submit
      </Button>
      </form>
    </div>
  );
}

export default AddSurvey;

