import React from 'react';
import { Item, Icon, Minus, Add, Input } from './styled';

interface InputNumberProps {
  id: string;
  min: number;
  max: number;
  step: number;
  name: string;
  value: number;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onAdd: (e: React.MouseEvent<HTMLElement>, step: number) => void;
  onMinus: (e: React.MouseEvent<HTMLElement>, step: number) => void;
}

const InputNumber = ({
  id,
  min,
  max,
  step,
  name,
  value,
  disabled,
  onChange,
  onBlur,
  onAdd,
  onMinus,
}: InputNumberProps) => {
  return (
    <Item>
      <Icon id={`${id}-add`} onClick={(e) => onMinus(e, step)}>
        <Minus />
      </Icon>
      <Input
        id={id}
        type="number"
        name={name}
        value={Number(value).toString()}
        max={max}
        min={min}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Icon id={`${id}-minus`} onClick={(e) => onAdd(e, step)}>
        <Add />
      </Icon>
    </Item>
  );
};

export default InputNumber;
