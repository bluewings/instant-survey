import React from 'react';
import { Popover, Button } from 'antd';
import InstantSurvey from '../InstantSurvey';
import AddSurvey from '../AddSurvey';
import SiteUrlQrCode from '../SiteUrlQrCode';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className="container">
      <div className={styles.root}>
        <InstantSurvey />
        <Popover destroyTooltipOnHide placement="bottomRight" content={<SiteUrlQrCode />} trigger="click">
          <Button type="link" className={styles.qrcode}><i className="material-icons">qr_code_2</i></Button>
        </Popover>
        {window.location.search.match(/admin/) && (
          <Popover destroyTooltipOnHide placement="topRight" content={<AddSurvey />} trigger="click">
            <Button type="link" className={styles.cog}><i className="material-icons">settings</i></Button>
          </Popover>
        )}
      </div>
    </div>
  );
}

export default Main;
