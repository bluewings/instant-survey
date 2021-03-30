import React from 'react';
import { Popover, Button } from 'antd';
import InstantSurvey from '../InstantSurvey';
import AddSurvey from '../AddSurvey';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className="container">
      <div className={styles.root}>
        <InstantSurvey />
        {window.location.search && (
          <Popover destroyTooltipOnHide placement="bottomRight" content={<AddSurvey />} trigger="click">
            <Button type="link" className={styles.cog}><i className="material-icons">settings</i></Button>
          </Popover>
        )}
      </div>
    </div>
  );
}

export default Main;
