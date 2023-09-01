import { styled } from 'styled-components';

interface Props {
  position: string;
}

export default function Loader({ position }: Props) {
  return (
    <StyledLoader $position={position}>
      <svg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
        <circle className='spinner_qM83' cx='8' cy='24' r='6' fill='#f9b17a' />
        <circle className='spinner_qM83 spinner_oXPr' cx='24' cy='24' r='6' fill='#f9b17a' />
        <circle className='spinner_qM83 spinner_ZTLf' cx='40' cy='24' r='6' fill='#f9b17a' />
      </svg>
    </StyledLoader>
  );
}

const StyledLoader = styled.article<{ $position: string }>`
  width: 100%;
  height: 100px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  z-index: 999;
  align-items: ${props => (props.$position === 'center' ? 'center' : 'flex-end')};
  svg {
    margin-bottom: 70px;
    .spinner_qM83 {
      animation: spinner_8HQG 1.05s infinite;
    }
    .spinner_oXPr {
      animation-delay: 0.1s;
    }
    .spinner_ZTLf {
      animation-delay: 0.2s;
    }
    @keyframes spinner_8HQG {
      0%,
      57.14% {
        animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
        transform: translate(0);
      }
      28.57% {
        animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
        transform: translateY(-6px);
      }
      100% {
        transform: translate(0);
      }
    }
  }
`;
