import Header from '../components/common/Header';
import Loader from '../components/common/Loader';
import IssueItem from '../components/issue/IssueItem';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchIssueDetail } from '../redux/slices/issueDetail';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Detail() {
  const { number } = useParams();
  const issueNumber = Number(number);
  const dispatch = useAppDispatch();
  const { data: issue, loading, error } = useAppSelector(state => state.issueDetail);
  const { organization, repository } = useAppSelector(state => state.issueOption);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchIssueDetail({ organization, repository, issueNumber }));
  }, []);

  if (loading) {
    return <Loader position='center' />;
  }
  if (error) {
    navigate('/error');
  }
  return (
    <>
      <Header />
      <StyledDetail>
        <IssueItem isDetail={true} issue={issue} />
        <div>
          <ReactMarkdown children={issue.body} />
          {issue.body}
        </div>
      </StyledDetail>
    </>
  );
}

const StyledDetail = styled.main`
  max-width: 800px;
  padding: 30px;
  margin: auto;
  & > div {
    background: var(--color-dark-grey);
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 10px 0px;
    margin-top: 30px;
    h1 {
      color: var(--color-yellow);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
    }
  }
`;
