import Ad from '../components/Ad';
import Header from '../components/common/Header';
import IssueItem from '../components/issue/IssueItem';
import { fetchIssue } from '../redux/slices/issue';
import { AppDispatch, RootState } from '../redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

export default function Issue() {
  const issues = useSelector((state: RootState) => state.issueList);
  const { organization, repository } = useSelector((state: RootState) => state.issueOption);
  const dispatch = useDispatch<AppDispatch>();

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
