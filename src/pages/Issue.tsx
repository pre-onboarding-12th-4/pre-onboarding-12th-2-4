import Ad from '../components/Ad';
import Layout from '../components/common/Layout';
import Loader from '../components/common/Loader';
import IssueItem from '../components/issue/IssueItem';
import { useScroll } from '../hooks/useScroll';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchIssue } from '../redux/slices/issue';
import { RootState } from '../redux/store';
import NotFound from './NotFound';
import { Fragment, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const scrollOffsetHeight = 100;
export default function Issue() {
  const { scrollHeight, scrollY } = useScroll();
  const dispatch = useAppDispatch();
  const { organization, repository } = useAppSelector(state => state.issueOption);
  const {
    data: issueList,
    loading,
    error,
    page,
    hasMore,
  } = useSelector((state: RootState) => state.issueList);

  const nextIssueDispatch = useCallback(() => {
    if (loading || !hasMore) return;
    dispatch(
      fetchIssue({
        organization,
        repository,
        page,
      }),
    );
  }, [dispatch, hasMore, loading, organization, page, repository]);

  useEffect(() => {
    !issueList.length &&
      dispatch(
        fetchIssue({
          organization,
          repository,
          page,
        }),
      );
  }, []);

  useEffect(() => {
    if (scrollY === scrollHeight) return;
    if (scrollY > scrollHeight - scrollOffsetHeight) {
      nextIssueDispatch();
      return;
    }
  }, [scrollY, scrollHeight, nextIssueDispatch]);

  if (error) {
    return <NotFound />;
  }

  return (
    <Layout>
      <StyledIssueList>
        {issueList.length !== 0 &&
          issueList.map((issue, index) => {
            return (
              <Fragment key={`${issue.number} ${index}`}>
                <li>
                  <IssueItem isDetail={false} issue={issue} />
                </li>
                {(index + 1) % 4 === 0 && (
                  <li>
                    <Ad />
                  </li>
                )}
              </Fragment>
            );
          })}
      </StyledIssueList>
      {loading && <Loader position='bottom' />}
    </Layout>
  );
}

const StyledIssueList = styled.ul`
  max-width: 800px;
  margin: 0 auto 80px;
  li {
    margin: 15px 0;
  }
`;
