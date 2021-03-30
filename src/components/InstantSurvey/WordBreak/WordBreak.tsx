import React, { Fragment, useMemo } from 'react';

interface IWordBreakProps {
  text: string;
}

function WordBreak({ text }: IWordBreakProps) {
  const children = useMemo(() => {
    return (text || '').trim()
      .split(/\s+/)
      .map((word: string, i: number, arr: string[]) => (
        <Fragment key={i}>
          <span style={{ whiteSpace: 'nowrap' }}>{word}</span>
          {i < arr.length - 1 ? ' ' : ''}
        </Fragment>
      ));
  }, [text]);
  return <>{children}</>;
}

export default WordBreak;
