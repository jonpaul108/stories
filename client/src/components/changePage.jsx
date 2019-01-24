import React from 'react';
import Admin from './admin.jsx';
import VisualHome from '../redux/containers/home.js';
import VisualStoryPage from '../redux/containers/storyPage.js';
import Blog from './blog.jsx';
import About from './about.jsx';

const ChangePage = (props) => {
  if (props.page === 'admin') {
    return <Admin />
  } else {
    if (props.page === 'home') {
      return <VisualHome />
    } else if (props.page === 'blog') {
      return <Blog />
    } else if (props.page === 'stories') {
      return <VisualStoryPage />
    } else if (props.page === 'about') {
      return <About />
    }
  }
}

export default ChangePage;
