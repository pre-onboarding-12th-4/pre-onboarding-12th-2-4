import { issueSlice } from './slices/issue';
import { issueDetailSlice } from './slices/issueDetail';
import { issueOptionSlice } from './slices/issueOption';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

const reducer = combineReducers({
  issueList: issueSlice.reducer,
  issueDetail: issueDetailSlice.reducer,
  issueOption: issueOptionSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
