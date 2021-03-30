import { ChangeEvent, useContext, useCallback, useEffect, useMemo, useLayoutEffect, useState } from 'react';
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import FirebaseContext from '../../providers/Firebase/FirebaseContext';
import useMeasure from 'react-use-measure'
import Answer from './Answer';
import { containerWidthState, answersHeightState } from './LocalState';
import { Input, Button } from 'antd'
import WordBreak from './WordBreak';
import styles from './InstantSurvey.module.scss';

const GUTTER = 10;

function InstantSurvey() {
  const { question, answers, responses, myAnswer, selectAnswer, submitNewAnswer } = useSurvey();

  const [newAnswer, setNewAnswer] = useState('');
  const disabled = !newAnswer || Object.values(answers || {}).includes(newAnswer);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewAnswer(event.target.value.trim());
  };
  const [tick, setTick] = useState(0);
  const handleSubmit: any = async (event: any) => {
    event.preventDefault();
    submitNewAnswer(newAnswer);
    setTick(state => state + 1);
  };

  const answersHeight = useRecoilValue(answersHeightState);
  const [items, height] = useMemo(() => {
    const _answers = Object.values(answers || {});

    let totalCount = 0;
    let answerDict: any = _answers.reduce((accum: any, answer: any) => ({
      ...accum,
      [answer]: { answer, count: 0 },
    }), {});
    Object.entries((responses || {})).forEach(([, answer]: any) => {
      if (answer in answerDict) {
        totalCount++;
        answerDict[answer].count++;
      }
    });

    let totalHeight = 0;
    const compareCount = (a: any, b: any) => a?.count === b?.count ? 0 : a?.count < b?.count ? 1 : -1;
    answerDict = Object.values(answerDict)
      .sort(compareCount)
      .reduce((accum: any, data: any, i) => {
        const top = totalHeight;
        totalHeight = totalHeight + (answersHeight[data.answer] || 0) + GUTTER;
        return {
          ...accum,
          [data.answer]: {
            ...data,
            rank: i,
            percent: data.count / Math.max(totalCount, 1),
            top,
            myAnswer: myAnswer === data.answer,
          },
        };
      }, {});

    return [
      _answers.map((answer: any) => ({ answer, ...answerDict[answer], })),
      totalHeight,
    ];
  }, [myAnswer, answers, responses, answersHeight]);

  const setContainerWidth = useSetRecoilState(containerWidthState);
  const [measure, bounds] = useMeasure();
  useLayoutEffect(() => {
    setContainerWidth(bounds.width);
  }, [setContainerWidth, bounds.width]);

  return (
    <div className={styles.root} ref={measure}>
      <h1 className={styles.title}>
        <WordBreak text={question} />
      </h1>
      <div className={styles.answers} style={{ height }}>
        {items.map((data: any, i) => {
          const handleClick = () => {
            selectAnswer(data.answer);
          };
          return <Answer key={i} data={data} onClick={handleClick} />;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_wrap}>
          <Input
            key={tick}
            type="text"
            size="large"
            onChange={handleChange}
            placeholder="추가 의견을 남겨주세요."
            allowClear
          />
          <Button size="large" type="primary" htmlType="submit" disabled={disabled}>확인</Button>
        </div>
      </form>
    </div >
  );
}

export default function InstantSurveyWrap() {
  return (
    <RecoilRoot>
      <InstantSurvey />
    </RecoilRoot>
  );
};

function useSurvey() {
  const { database, userId: myId } = useContext(FirebaseContext);

  const [survey, setSurvey] = useState<any>({});
  useEffect(() => {
    database?.ref('/current-survey').on('value', (snapshot) => {
      const data = snapshot.val();
      setSurvey(data);
    });
  }, [database]);

  const myAnswer = survey?.responses?.[myId];

  const selectAnswer = useCallback((answer: string) => {
    database?.ref(`/current-survey/responses/${myId}`).set(myAnswer === answer ? null : answer);
  }, [database, myId, myAnswer]);

  const submitNewAnswer = useCallback(async (answer: string) => {
    await Promise.all([
      database?.ref('/current-survey/answers').push(answer),
      database?.ref(`/current-survey/responses/${myId}`).set(answer),
    ]);
  }, [database, myId]);

  return useMemo(() => ({ ...survey, myId, myAnswer, selectAnswer, submitNewAnswer }), [survey, myId, myAnswer, selectAnswer, submitNewAnswer]);
}
