import React from 'react';
import styles from './../css/header.css';

const Header = (props) => {
  const handleOnClick = props.handleOnClick
  return (
    <div className={styles.main}>
          <div value='home'  onClick={() => {handleOnClick('home')}} className={styles.name}> Jonathan McNamara</div>
          <div className={styles.items}>
            <div onClick={() => {handleOnClick('about')}} className={styles.child}>about</div>
            <div onClick={() => {handleOnClick('stories')}} className={styles.child}>stories</div>
            <div onClick={() => {handleOnClick('blog')}} className={styles.child}>blog</div>
            <div onClick={() => {handleOnClick('projects')}} className={styles.child}>projects</div>
          </div>
      </div>
  )
};

export default Header;