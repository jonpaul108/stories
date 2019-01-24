import React from 'react';
import styles from '../css/storyList.css';

const StoryList = (props) => {
  return (
    <div>
      <h2>Stories</h2>
      <ol className={styles.storyList}>
        {props.list.map((el, i) => {
          const author = el.author;
          const title = el.title;
          const link = el.url;
          return <React.Fragment>
            <li className={styles.listItem}onClick={() => {props.handleStoryLinkClick(author, title, link)}} key={i}>{title}</li>
          </React.Fragment>
        })}
      </ol>
    </div>
  )
}

export default StoryList;