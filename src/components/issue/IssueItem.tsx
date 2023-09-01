import { Issue } from '../../types';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface Props {
  isDetail: boolean;
  issue: Issue;
}

export default function IssueItem({ isDetail, issue }: Props) {
  return (
    <StyledItem $isdetail={isDetail}>
      <Link to={`/${issue.number}`}>
        <h2>
          <span className='issue-num'>#{issue.number}</span> {issue.title}
        </h2>
        <p className='header-info'>
          <span className='author'>
            {isDetail && <img src={issue?.image} alt='' />}
            {!isDetail && '작성자: '}
            {issue.author}
          </span>
          <span className='time'>
            작성일: {issue.date?.slice(0, 10)} {issue.date?.slice(11, 19)}
          </span>
          <span className='comment'>댓글: {issue.comments}</span>
        </p>
      </Link>
    </StyledItem>
  );
}

const StyledItem = styled.div<{ $isdetail?: boolean }>`
  width: 100%;
  height: 100%;
  background: var(--color-dark-grey);
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 10px 0px;
  &:hover {
    background: ${({ $isdetail }) => !$isdetail && 'var(--color-light-grey)'};
  }
  img {
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid white;
  }
  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
    .issue-num {
      display: inline-block;
      padding: 5px;
      border-radius: 20px;
      background: var(--color-yellow);
      font-size: 15px;
      color: var(--color-bg-grey);
      margin-right: 10px;
    }
  }
  p {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }
`;
