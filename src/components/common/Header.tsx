import { useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Header() {
  const { organization, repository } = useAppSelector(state => state.issueOption);
  return (
    <RepoHeader>
      <h1>
        <Link to='/'>
          <RepoOwner>{organization}</RepoOwner>
          <RepoName> / </RepoName>
          <RepoName>{repository}</RepoName>
        </Link>
      </h1>
    </RepoHeader>
  );
}

const RepoHeader = styled.header`
  background-color: #20232a;
  padding-left: 16px;
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 20px;
  height: 54.5px;
  gap: 8px;
  h1 {
    font-size: 30px;
  }
`;

const RepoOwner = styled.span`
  color: var(--color-yellow);
`;

const RepoName = styled.span`
  color: #e1e4e8;
  font-weight: bold;
`;
