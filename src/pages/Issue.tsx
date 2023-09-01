import Ad from '../components/Ad';
import Header from '../components/common/Header';
import IssueItem from '../components/issue/IssueItem';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchIssue } from '../redux/slices/issue';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

export default function Issue() {
  const issues = useSelector((state: RootState) => state.issueList);
  const { organization, repository } = useAppSelector(state => state.issueOption);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchIssue({
        organization: organization,
        repository: repository,
        page: issues.page,
      }),
    );
  }, []);

  return (
    <>
      <Header />
      <StyledIssueList>
        {issues.data.length > 0 &&
          issues.data.map((issue, index) => {
            return (
              <>
                <li key={issue.number}>
                  <IssueItem issue={issue} />
                </li>
                {(index + 1) % 4 === 0 && (
                  <li>
                    <Ad />
                  </li>
                )}
              </>
            );
          })}
      </StyledIssueList>
    </>
  );
}

const StyledIssueList = styled.ul``;
