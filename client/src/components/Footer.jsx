import React from 'react';
import styles from '../css/footer.css';

const Footer = (props) => {
  const {
    handleChangePage
  } = props;
  return (
    <div className={styles.footer}>
      <div className={styles.leftFooter}>
        <span className={styles.spans}>Connect</span>
        <span className={styles.spans}>quotes</span>
        <span className={styles.rightSpans} onClick={() => {handleChangePage('admin')}}>admin</span>
        <span className={styles.rightSpans}>reading list</span>
      </div>
    </div>
  )
}

export default Footer;