import Loader from '../components/common/Loader';
import IssueItem from '../components/issue/IssueItem';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchIssueDetail } from '../redux/slices/issueDetail';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';

export default function Detail() {
  const { number } = useParams();
  const issueNumber = Number(number);
  const dispatch = useAppDispatch();
  const { data: issue, loading, error } = useAppSelector(state => state.issueDetail);
  const { organization, repository } = useAppSelector(state => state.issueOption);

  useEffect(() => {
    dispatch(fetchIssueDetail({ organization, repository, issueNumber }));
  }, []);

  if (error) {
    return <div>error page</div>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <IssueItem issue={issue} />
      <ReactMarkdown children={issue.body} />
      {issue.body}
    </>
  );
}
