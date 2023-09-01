import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <StyledError>
      <img
        src='https://media.licdn.com/dms/image/D4D12AQEtqlEK0dq1vg/article-cover_image-shrink_600_2000/0/1658685948954?e=2147483647&v=beta&t=uz1A7IbQofPDzcsrB_YcD0BhcauXET_-KOZjO2-FrL4'
        alt='404 error'
      />
      <h1>404 찾을 수 없는 페이지입니다.</h1>
      <button onClick={() => navigate('/')}>홈페이지로 이동</button>
    </StyledError>
  );
}

const StyledError = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid var(--color-white70);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  h1 {
    color: var(--color-bg-grey);
  }
  button {
    background: var(--color-dark-grey);
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
    &:hover {
      background: var(--color-yellow);
      color: var(--color-dark-grey);
    }
  }
`;
