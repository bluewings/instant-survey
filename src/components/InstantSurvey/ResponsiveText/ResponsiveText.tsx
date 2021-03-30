import React, { useLayoutEffect, useRef, useState } from 'react';
import useMeasure from 'react-use-measure'
import styles from './ResponsiveText.module.scss';

interface IResponsiveTextProps {
  text: string;
  fontSizes: string[];
}

function ResponsiveText({ text, fontSizes }: IResponsiveTextProps) {
  const [measure, bounds] = useMeasure();

  const dummy = useRef<HTMLDivElement>(null);

  const [fontSize, setFontSize] = useState('');
  useLayoutEffect(() => {
    if (dummy.current) {
      const div = document.createElement('div');
      dummy.current.appendChild(div);
      div.innerText = text;
      const fontSize = fontSizes.find(e => {
        div.style.fontSize = e;
        return bounds.width > div.getBoundingClientRect().width;
      });
      dummy.current.innerHTML = '';
      setFontSize(fontSize || fontSizes[fontSizes.length - 1]);
    }
  }, [bounds.width, dummy, text, fontSizes]);

  return (
    <div ref={measure} className={styles.root}>
      <div style={{ fontSize }}>{text}</div>
      <div className={styles.dummy} ref={dummy} />
    </div>
  );
}

export default ResponsiveText;
