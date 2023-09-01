import { useAppSelector } from '../../redux/hooks';
import { styled } from 'styled-components';

export default function Header() {
  const { organization, repository } = useAppSelector(state => state.issueOption);
  return (
    <RepoHeader>
      <RepoOwner>{organization}</RepoOwner>
      <RepoName>/</RepoName>
      <RepoName>{repository}</RepoName>
    </RepoHeader>
  );
}

const RepoHeader = styled.div`
  background-color: #20232a;
  padding-left: 16px;
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 20px;
  height: 54.5px;
  gap: 8px;
`;

const RepoOwner = styled.span`
  color: #61dafb;
`;

const RepoName = styled.span`
  color: #e1e4e8;
  font-weight: bold;
`;
