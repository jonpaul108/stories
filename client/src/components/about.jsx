import React from 'react';
import styles from '../css/about.css';

const About = (props) => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.spaceBox}></div>
      <div className = {styles.aboutContainer} >
      <span className={styles.aboutText} >
        Hi! I'm Jonathan. Nice to meet you.
        <br></br>
        I set up this nifty page to introduce myself.
        <br></br>
        I'm working on projects and looking for a job, spending all
        <br></br>
        day like most you all out there on their computer.
        <br></br>
        I love animals, and am lucky to live in a home with two cats, who only occassionally wake me up at night.
        <br></br>
        Oh, yeah, I like to write short stories. If you are interested hop on over to the story page and have a read.
        <br></br>
        They are, if I don't mind saying so, mostly pretty silly. I taught children for a loing time, and love kid's stories.
        <br></br>
        What else? I also am a developer. Got a few projects in the works (including this one). Head on over to the page if you find yourself
        wondering what this guy (being me) is up to. There are a few things that will are coming your way.
        <br></br>

        Thats it! Really, it was great meeting you, and I am not just saying that.
        <br></br>
        See you later.

      </span>
    </div >
    <div className={styles.sideInfo}>

        <img className={styles.img} src='/me.jpg' alt='mypic'></img>

        <div>
        <span>
          text about stuff
        </span>
      </div>
    </div>
    </div>

  )
}

export default About;