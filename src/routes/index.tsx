import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../containers/home';
import Posts from '../containers/posts';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
};

export default RoutesContainer;
