import { Issue } from '../types';
import instance from './index';

export const LOAD_DATA_LENGTH = 15;

const fetchGetIssues = async (
  organization: string,
  repository: string,
  page: number,
): Promise<Issue[]> => {
  const res = await instance.get(`/repos/${organization}/${repository}/issues`, {
    params: {
      sort: 'comments',
      page: page,
      per_page: 10,
    },
  });
  return res.data.map((issue: any) => {
    return {
      number: issue.number,
      author: issue.user.login,
      date: issue.created_at,
      title: issue.title,
      comments: issue.comments,
      image: issue.user.avatar_url,
      body: issue.body,
    };
  });
};

const fetchGetIssueDetail = async (
  organization: string,
  repository: string,
  issueNumber: number,
): Promise<Issue> => {
  const issue = (await instance.get(`/repos/${organization}/${repository}/issues/${issueNumber}`))
    .data;
  return {
    number: issue.number,
    author: issue.user.login,
    date: issue.created_at,
    title: issue.title,
    comments: issue.comments,
    image: issue.user.avatar_url,
    body: issue.body,
  };
};

export { fetchGetIssues, fetchGetIssueDetail };
