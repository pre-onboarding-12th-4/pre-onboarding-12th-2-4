import Ad from '../components/Ad';
import Header from '../components/common/Header';
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

const scrollOffsetHeight = 30;
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
        organization: organization,
        repository: repository,
        page: page,
      }),
    );
  }, [dispatch, hasMore, loading, organization, page, repository]);

  useEffect(() => {
    !issueList.length &&
      dispatch(
        fetchIssue({
          organization: organization,
          repository: repository,
          page: page,
        }),
      );
  }, []);

  useEffect(() => {
    if (scrollY === scrollHeight) return;
    if (scrollY > scrollHeight - scrollOffsetHeight) {
      nextIssueDispatch();
      return;
    }
  }, [scrollY, scrollHeight]);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      {loading && <Loader position='bottom' />}
      <StyledIssueList>
        {issueList.length &&
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
    </>
  );
}

const StyledIssueList = styled.ul`
  max-width: 800px;
  margin: 0 auto 80px;
  li {
    margin: 15px 0;
  }
`;
