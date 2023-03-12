import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';

export const fetchDetails = createAsyncThunk('launches/fetchDetails', async (id) => {
  const response = await fetch(`/api/3.3.0/launch/${id}`);
  const json = await response.json();
  return json.results
});

export const fetchLaunches = createAsyncThunk('launches/fetchLaunches', async () => {
  const response = await fetch("/api/3.3.0/launch/upcoming");
  const json = await response.json();
  return json.results
});

export const launchesSlice = createSlice({
  name: 'launches',
  initialState: {
    list: [],
    launch: {},
    status: 'idle',
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLaunches.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchLaunches.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched launch to the array
        state.list = action.payload
      })
      .addCase(fetchLaunches.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchDetails.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched launch to the array
        state.launch = action.payload
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
});

// Action creators are generated for each case reducer function
export const { getLaunches } = launchesSlice.actions;

export default launchesSlice.reducer
