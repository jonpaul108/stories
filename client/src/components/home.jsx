import React from 'react';
import styles from '../css/home.css';

const Home = (props) => {
  return <div className={styles.midHomePage}>
      <div className={styles.welcome}>
        <div className={styles.developer}>Developer</div>
        <div className={styles.storyTeller}>Story Teller</div>
      </div>
      <img  className={styles.image} alt='blue' src='/abstract-blue-cropped.jpg'></img>

  </div>
};

export default Home;