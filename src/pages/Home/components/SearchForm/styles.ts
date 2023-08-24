import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  margin-top: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    height: 50px;
    padding: 1rem;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-border']};
    outline: 0;

    transition: 0.2s;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
