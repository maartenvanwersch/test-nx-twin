import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiNextRealProps {}

const StyledUiNextReal = styled.div`
  color: pink;
`;

export function UiNextReal(props: UiNextRealProps) {
  return (
    <StyledUiNextReal>
      <h1>Welcome to UiNextReal!</h1>
    </StyledUiNextReal>
  );
}

export default UiNextReal;
