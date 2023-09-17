import styled from 'styled-components';

export const Item = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 0;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:focus {
    outline-color: #0087e3;
  }
`;
export const Icon = styled.div`
  border: 1px solid #0087e3;
  border-radius: 4px;
  padding: 12px;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

export const Minus = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  &:after,
  before {
    content: '';
    position: absolute;
    background-color: #0087e3;
  }
  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: -2px;
  }

  &:before {
    transform: rotate(90deg);
  }
  &:after {
    transform: rotate(180deg);
  }
`;
export const Add = styled.div`
  position: relative;
  width: 24px;
  height: 24px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: #0087e3;
  }

  &:before {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
  }

  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: -2px;
  }
`;

export const Input = styled.input`
  width: 48px;
  height: 48px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin: 0;
  padding: 0;

  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
`;
