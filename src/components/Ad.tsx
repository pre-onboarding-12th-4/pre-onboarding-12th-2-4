import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Ad() {
  return (
    <Link to='https://www.wanted.co.kr/jobsfeed'>
      <StyledAd>
        <img
          src='https://github.com/hyeri-woo/wanted-pre-onboarding-frontend/assets/107099724/d5be6d63-52a6-4260-8e19-660ea350f05c'
          alt='광고 배너'
        />
      </StyledAd>
    </Link>
  );
}

const StyledAd = styled.article`
  background: rgba(256, 256, 256, 0.5);
  text-align: center;
  border-radius: 10px;
  img {
    width: 50%;
    padding: 30px 0;
  }
`;
