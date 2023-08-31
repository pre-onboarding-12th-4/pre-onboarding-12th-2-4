import { issueListSlice } from './slices/issue';
import { issueDetailSlice } from './slices/issue';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  issueList: issueListSlice.reducer,
  issueDetail: issueDetailSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
