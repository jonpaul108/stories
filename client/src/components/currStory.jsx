import React from 'react';
import styles from '../css/currStory.css';

const CurrStory = (props) => {
  return (
    <div className={styles.currStoryContainer}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.author}>By: {props.author}</span>
      <div className={styles.story}>
        {props.story.map((el, index) => {
          return <div key={index} className={styles.paragraph}>{el}</div>
        })}
      </div>
    </div>
  )
}

export default CurrStory;