import React, { useLayoutEffect, useRef } from 'react';
import useMeasure from 'react-use-measure'
import { Button } from 'antd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { containerWidthState, answersHeightState } from '../LocalState';
import ResponsiveText from '../ResponsiveText';
import styles from './Answer.module.scss';

interface IAnswerProps {
  data: any;
  onClick: Function;
  onRemove: Function;
}

function Answer({ data, onClick, onRemove }: IAnswerProps) {
  const [measure, bounds] = useMeasure();
  const setAnswersHeight = useSetRecoilState(answersHeightState);
  useLayoutEffect(() => {
    setAnswersHeight(state => ({ ...state, [data.answer]: bounds.height }));
    return () => {
      setAnswersHeight(state => {
        const nextState = { ...state };
        delete nextState[data.answer];
        return nextState;
      });
    };
  }, [data.answer, bounds.height, setAnswersHeight]);

  const handleClick = () => {
    onClick();
  };

  const containerWidth = useRecoilValue(containerWidthState);

  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.classList.add(styles.animate);
    }
  }, [ref]);

  return (
    <div ref={ref} className={styles.root} style={{ transform: `translateY(${data.top}px)` }}>
      <div ref={measure}>
        <Button className={styles.button} onClick={handleClick} block>
          <Item width={containerWidth} data={data} onClick={onRemove} />
          <div className={styles.bar} style={{ width: `${data.percent * 100}%` }}>
            <Item width={containerWidth} data={data} />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default React.memo(Answer);

const WIDTH = { MY: 44, COUNT: 50, PADDING: 16 };

const FONT_SIZES = ['2rem', '1.5rem', '1.25rem'];

function Item({ width, data, onClick }: any) {

  const handleClick = (event: any) => {
    // 관리 모드인 경우만 지울 수 있게
    if (window.location.search.match(/admin/) && typeof onClick === 'function') {
      event.stopPropagation();
      onClick();
    }
  };

  return (
    <div className={styles.item} style={{ width, padding: `0 ${WIDTH.PADDING}px` }}>
      {data.myAnswer && (
        <div className={styles.my} style={{ flexBasis: WIDTH.MY }}>👍</div>
      )}
      <div className={styles.answer} style={{ flexBasis: width - (data.myAnswer ? WIDTH.MY : 0) - WIDTH.COUNT - WIDTH.PADDING * 2 }}>
        <ResponsiveText text={data.answer} fontSizes={FONT_SIZES} />
      </div>
      <div className={styles.count} style={{ flexBasis: WIDTH.COUNT }} onClick={handleClick}>
        {`${(data.count)}명`}
        <br />
        {`${~~(data.percent * 100)}%`}
      </div>
    </div>
  )
}
