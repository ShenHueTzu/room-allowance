import React, { useCallback } from 'react';
import { RoomProps } from '../../../constants/types';
import InputNumber from '../../components/CustomInputNumber';
import { PERSON_TYPE, ADULT_MIN_QUANTITY, CHILD_MIN_QUANTITY } from '../../../constants';
import { Wrapper, Title, Item } from './styled';

const SingleRoom = ({
  peopleAllocation,
  roomAvaliable,
  total,
  data,
  result,
  onUpdate,
}: {
  peopleAllocation: number;
  roomAvaliable: number;
  total: number;
  data: RoomProps;
  result: RoomProps[];
  onUpdate: (data: RoomProps[]) => void;
}) => {
  if (!result || result.length < 1) return null;
  const { id, adult, child } = data;

  const unAllocatedAmout = peopleAllocation - total;

  const isTotalAmountFull = unAllocatedAmout === 0;
  const isRoomFull = adult + child >= roomAvaliable;
  const disabled = isTotalAmountFull || isRoomFull;

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      const value = Number(e.target.value);
      const targetId = e.target.id;
      const targetName = e.target.name;

      const isAdult = targetName === PERSON_TYPE.ADULT;
      const isChild = targetName === PERSON_TYPE.CHILD;

      if (isAdult && value + child > roomAvaliable) return;
      if (isChild && value + adult > roomAvaliable) return;

      const newResult = result.map((room: RoomProps) => {
        const { id, adult, child } = room;
        if (targetId.includes(id)) {
          if (value > unAllocatedAmout) return room;

          return {
            id,
            adult: isAdult ? value || 0 : adult,
            child: isChild ? value || 0 : child,
          };
        }

        return room;
      });

      onUpdate(newResult);
    },
    [disabled, unAllocatedAmout],
  );

  const onAddEvent = (e: React.MouseEvent<HTMLElement>, step: number) => {
    if (disabled) return;
    if (unAllocatedAmout < step) return;

    const targetId = e.currentTarget.id;
    const targetRoom = result.find((room) => targetId.includes(room.id));
    if (!targetRoom) return;
    if (targetRoom.adult + targetRoom.child + step > roomAvaliable) return;

    const isAdult = targetId.includes(PERSON_TYPE.ADULT);
    const isChild = targetId.includes(PERSON_TYPE.CHILD);

    const newResult = result.map((room: RoomProps) => {
      const { id, adult, child } = room;
      if (targetId.includes(id))
        return {
          id,
          adult: isAdult ? adult + step : adult,
          child: isChild ? child + step : child,
        };

      return room;
    });

    onUpdate(newResult);
  };

  const onMinusEvent = (e: React.MouseEvent<HTMLElement>, step: number) => {
    const targetId = e.currentTarget.id;
    const targetRoom = result.find((room) => targetId.includes(room.id));
    if (!targetRoom) return;
    const isAdult = targetId.includes(PERSON_TYPE.ADULT);
    const isChild = targetId.includes(PERSON_TYPE.CHILD);

    if (isAdult && targetRoom.adult - step < ADULT_MIN_QUANTITY) return;
    if (isChild && targetRoom.child - step < CHILD_MIN_QUANTITY) return;

    const newResult = result.map((room: RoomProps) => {
      const { id, adult, child } = room;

      if (targetId.includes(id)) {
        return {
          id,
          adult: isAdult ? adult - step : adult,
          child: isChild ? child - step : child,
        };
      }

      return room;
    });

    onUpdate(newResult);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const targetId = e.target.id;
    const targetName = e.target.name;

    const newResult = result.map((room: RoomProps) => {
      const { id, adult, child } = room;
      if (targetId.includes(id)) {
        if (targetName === PERSON_TYPE.ADULT) {
          return {
            id,
            adult: value < ADULT_MIN_QUANTITY ? ADULT_MIN_QUANTITY : value,
            child,
          };
        }

        if (targetName === PERSON_TYPE.CHILD) {
          return {
            id,
            adult,
            child: value < CHILD_MIN_QUANTITY ? CHILD_MIN_QUANTITY : value,
          };
        }
      }

      return room;
    });

    onUpdate(newResult);
  };

  return (
    <Wrapper>
      <Title>Quantity: {adult + child} people</Title>
      <Item>
        <div>
          <p>Adult</p>
          <span>20+</span>
        </div>
        <InputNumber
          id={`${id}-adult`}
          min={ADULT_MIN_QUANTITY}
          max={roomAvaliable}
          step={1}
          name="adult"
          value={adult}
          disabled={disabled}
          onChange={onChange}
          onAdd={onAddEvent}
          onMinus={onMinusEvent}
          onBlur={onBlur}
        />
      </Item>
      <Item>
        <p>Child</p>
        <InputNumber
          id={`${id}-child`}
          min={CHILD_MIN_QUANTITY}
          max={roomAvaliable}
          step={1}
          name="child"
          value={child}
          disabled={disabled}
          onChange={onChange}
          onAdd={onAddEvent}
          onMinus={onMinusEvent}
          onBlur={onBlur}
        />
      </Item>
    </Wrapper>
  );
};

export default SingleRoom;
