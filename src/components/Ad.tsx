import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Ad() {
  return (
    <StyledAd>
      <Link to='https://www.wanted.co.kr/jobsfeed'>
        <img
          src='https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/d5be6d63-52a6-4260-8e19-660ea350f05c'
          alt='광고 배너'
        />
      </Link>
    </StyledAd>
  );
}

const StyledAd = styled.article``;
