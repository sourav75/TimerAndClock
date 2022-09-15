import React from 'react';
import './style.css';
import Timer from './features/Timer/timer';
import Clock from './features/Timer/clock-redux';
import Posts from './features/Timer/posts';

export default function App() {
  return (
    <div>
      <Timer />
      <br />
      <br />
      <Clock />
      <Posts />
    </div>
  );
}
