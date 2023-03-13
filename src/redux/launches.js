import axios from "axios";
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchLaunches = createAsyncThunk('launches/fetchLaunches', async () => {
  const response = await axios("/api/3.3.0/launch/upcoming");
  return response.data.results
});

export const fetchDetails = createAsyncThunk('launches/fetchDetails', async (id) => {
  const response = await axios(`/api/3.3.0/launch/${id}`);
  return response.data
});

export const launchesSlice = createSlice({
  name: 'launches',
  initialState: {
    list: [],
    id: '',
    status: 'idle',
    error: null,
    launch: {},
    detailsStatus: 'idle',
    detailsError: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    }
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
        state.detailsStatus = 'loading'
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.detailsStatus = 'succeeded'
        // Add any fetched launch to the array
        state.launch = action.payload
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.status = 'failed'
        state.detailsError = action.error.message
      })
  },
});

// Action creators are generated for each case reducer function
export const { setId } = launchesSlice.actions;

export default launchesSlice.reducer
