import React from 'react';
import './style.css';
import Timer from './features/Timer/timer';
import Clock from './features/Timer/clock-redux';

export default function App() {
  return (
    <div>
      <Timer />
      <br />
      <br />
      <Clock />
    </div>
  );
}
