import { Issue } from '../../types';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface Props {
  issue: Issue;
}

export default function IssueItem({ issue }: Props) {
  return (
    <StyledItem>
      <Link to={`/${issue.number}`}>
        <h2>
          <span className='issue-num'>#{issue.number}</span> {issue.title}
        </h2>
        <p className='header-info'>
          <span className='author'>{issue.author}</span>
          <span className='time'>
            작성일: {issue.date?.slice(0, 10)} {issue.date?.slice(11, 19)}
          </span>
          <span className='comment'>댓글: {issue.comments}</span>
        </p>
      </Link>
    </StyledItem>
  );
}

const StyledItem = styled.div``;
