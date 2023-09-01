import LoadingBar from './LoadingBar.svg';
import { styled } from 'styled-components';

interface Props {
  position: string;
}

export default function Loader({ position }: Props) {
  return (
    <StyledLoader position={position}>
      <img src={LoadingBar} alt='로딩중' />
    </StyledLoader>
  );
}

const StyledLoader = styled.article<Props>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  align-items: ${props => (props.position === 'center' ? 'center' : 'flex-end')};
  img {
    margin-bottom: 70px;
  }
`;
