import { fetchGetIssues, LOAD_DATA_LENGTH } from '../../api/issue';
import { Issue } from '../../types';
import { IssueOptions } from './issueOption';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IssueState {
  data: Issue[];
  page: number;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

export interface GetIssueOptions extends IssueOptions {
  page: number;
}

const initialState: IssueState = {
  data: [] as Issue[],
  page: 1,
  loading: false,
  error: null as string | null,
  hasMore: true,
};

// Async Thunk
export const fetchIssue = createAsyncThunk(
  'get/issue',
  async ({ organization, repository, page }: GetIssueOptions) => {
    return await fetchGetIssues(organization, repository, page);
  },
);

export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIssue.pending, (state: IssueState) => {
      state.loading = true;
    });
    builder.addCase(fetchIssue.fulfilled, (state: IssueState, action: PayloadAction<Issue[]>) => {
      state.loading = false;
      state.data = [...state.data, ...action.payload];
      if (action.payload.length < LOAD_DATA_LENGTH) {
        state.hasMore = false;
      }
      state.page += 1;
    });
    builder.addCase(fetchIssue.rejected, (state: IssueState) => {
      state.loading = false;
      state.error = null;
    });
  },
});
