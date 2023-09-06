import styled from "styled-components";

type ButtonStyleProps = {
    isPrimary?: boolean,
    isSecondary?: boolean,
}

export const Button = styled.button<ButtonStyleProps>`
  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primeColor};
  color: white;
  transition: 200ms;

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledBgc};
  }

  &.primary {
    background: ${(props) => props.theme.colors.primeColor};
    color: white;
  }

  &.secondary {
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.placeholderColor};
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {

  }

  &:active {

  }

input {
  padding: 12px 15px;
  background-color: var(--bgc);
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }
}

@media (max-width: 730px) {
  input, button {
    padding: 10px 12px;
  }
}
`