import styled from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }

  div {
    display: flex;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  text-align: center;
  justify-content: space-between;


  input {
    display: block;
    width: 100%;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    margin-bottom: 15px;

    &::placeholder {
      color: #a8a8b3;
    }

    &:disabled {
      background: #fff;
    }
  }
`;

export const ButtonSuccess = styled.button`
  margin: 15px;
  width: 210px;
  height: 70px;
  background: #145da0;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#145DA0")};
  }
`;

export const ButtonError = styled.button`
  margin: 15px;
  width: 210px;
  height: 70px;
  background: #FA8072;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#FA8072")};
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 15px;
`;

export const FabButtonSpan = styled.span`
  position: fixed;
  margin: 50px;
  bottom: 0;
  right: 0;
`;
