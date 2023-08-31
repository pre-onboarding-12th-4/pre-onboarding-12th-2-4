import { fetchGetIssueDetail } from '../../api/issue';
import { Issue } from '../../types';
import { IssueOptions } from './issueOption';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IssueDetailState {
  data: Issue;
  loading: boolean;
  error: string | null;
}

const initialState = {
  data: {} as Issue,
  loading: false,
  error: null as string | null,
};

export interface GetIssueDetailOptions extends IssueOptions {
  issueNumber: number;
}

export const fetchIssueDetail = createAsyncThunk(
  'get/issue-detail',
  async ({ organization, repository, issueNumber }: GetIssueDetailOptions) => {
    return await fetchGetIssueDetail(organization, repository, issueNumber);
  },
);

export const issueDetailSlice = createSlice({
  name: 'issueDetail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIssueDetail.pending, (state: IssueDetailState) => {
      state.loading = true;
    });
    builder.addCase(
      fetchIssueDetail.fulfilled,
      (state: IssueDetailState, action: PayloadAction<Issue>) => {
        state.loading = false;
        state.data = action.payload;
      },
    );
    builder.addCase(fetchIssueDetail.rejected, (state: IssueDetailState) => {
      state.loading = false;
      state.error = null;
    });
  },
});
