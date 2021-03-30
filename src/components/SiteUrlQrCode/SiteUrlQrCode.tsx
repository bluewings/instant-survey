import React from 'react';
import QRCode from 'qrcode.react';
import styles from './SiteUrlQrCode.module.scss';

function SiteUrlQrCode() {
  const previewUri = window.location.href
    .replace(/&admin/, '')
    .replace(/\?admin$/, '')
    .replace(/\?admin/, '?');
  return (
    <div className={styles.root}>
      <QRCode value={previewUri} />
    </div>
  );
}

export default SiteUrlQrCode;
