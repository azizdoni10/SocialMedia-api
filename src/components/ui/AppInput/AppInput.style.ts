import styled from "styled-components";

export const Input = styled.input<{ disabled: boolean; hasError?: boolean }>`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid ${(props) =>
    props.hasError ? "red" : props.theme.colors.disabledBgc};
  background-color: transparent;
  color: white;

  &:last-child {
    margin-bottom: 25px;
  }

  &:hover,
  &:focus {
    border-color: ${(props) =>
      props.hasError ? "red" : props.theme.colors.primeColor};
  }

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;