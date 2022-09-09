import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  mins: 0,
  secs: 0,
  time: 0,
};

export const setMinsAsync = createAsyncThunk('timer/setMins', async (mins) => {
  return mins;
});
export const setSecsAsync = createAsyncThunk('timer/setSecs', async (secs) => {
  return secs;
});
export const setTimeAsync = createAsyncThunk('timer/time', async () => {
  let res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
  res = await res.json();
  return res.datetime;
});

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setMins: (state, action) => {
      state.mins = action.payload;
    },
    setSecs: (state, action) => {
      state.secs = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setMinsAsync.fulfilled, (state, action) => {
        state.mins = action.payload;
      })
      .addCase(setSecsAsync.fulfilled, (state, action) => {
        state.secs = action.payload;
      })
      .addCase(setTimeAsync.fulfilled, (state, action) => {
        state.time = action.payload;
      });
  },
});
export const { setMins, setSecs, setTime } = timerSlice.actions;
export const getMins = (state) => state.timer.mins;
export const getSecs = (state) => state.timer.secs;
export const getTime = (state) => state.timer.time;

export default timerSlice.reducer;
