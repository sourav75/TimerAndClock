// setInterval not working as expect, some problem in actioncreator due to async issue

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTimeAsync as setTimeAsyncAction,
  getTime,
  setTime as setTimeInStore,
} from './timerSlice';

const TimerRedux = () => {
  const useAppDispatch = () => useDispatch();
  const dispatch = useAppDispatch();
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState(null);
  const timeStore = useSelector(getTime);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        console.log('Fetching time from Api');
        dispatch(setTimeAsyncAction());
      }, 1000);
      setTimeInterval(interval);
    }
  }, [start]);
  useEffect(() => {
    setStart(true);
  }, []);
  useEffect(() => {
    setTime(timeStore);
  }, [timeStore]);
  const stopHandler = () => {
    clearInterval(timeInterval);
    setTimeInterval(null);
    setStart(false);
  };
  return (
    <>
      <span>{time != 0 && time}</span>
      <br />
      <button onClick={stopHandler} disabled={!start}>
        Stop Time
      </button>
    </>
  );
};

export default TimerRedux;
