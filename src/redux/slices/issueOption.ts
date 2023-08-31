import { createSlice } from '@reduxjs/toolkit';

export interface IssueOptions {
  organization: string;
  repository: string;
}

const initialState: IssueOptions = {
  organization: 'facebook',
  repository: 'react',
};

export const issueOptionSlice = createSlice({
  name: 'issueOption',
  initialState,
  reducers: {},
});
