import React from 'react';
import { useEffect, useState } from 'react';
import { RoomProps } from '../../../constants/types';
import { ROOM_AVALIABLE_QUANTITY, ADULT_DEFAULT_QUANTITY, CHILD_DEFAULT_QUANTITY } from '../../../constants';
import Room from './room';
import { Outer, Info, RoomsWrapper, Title } from './styled';

interface RoomsProps {
  guest: number;
  room: number;
  onChange: (data: { adult: number; child: number }[]) => void;
}

const RoomAllocation = ({ guest, room, onChange }: RoomsProps) => {
  const isRoomAvaliable = Math.ceil(guest / ROOM_AVALIABLE_QUANTITY) <= room && guest >= room;

  const [roomResult, setResult] = useState<RoomProps[]>([]);
  const total = roomResult.map((room) => room.adult + room.child).reduce((acc, amount) => acc + amount, 0);

  useEffect(() => {
    const result = [...Array(room)].map((_, idx) => ({
      id: `room-${idx}`,
      adult: ADULT_DEFAULT_QUANTITY,
      child: CHILD_DEFAULT_QUANTITY,
    }));
    setResult(result);
  }, [room]);

  const onUpdate = (data: RoomProps[]) => {
    setResult(data);

    const props = data.map((room) => ({ adult: room.adult, child: room.child }));
    onChange(props);
  };

  return (
    <Outer>
      <Title>
        {guest} People / {room} Rooms
      </Title>
      {isRoomAvaliable ? (
        <>
          <Info>unallocated: {guest - total} people</Info>
          <RoomsWrapper>
            {roomResult.map((room: RoomProps) => (
              <Room
                key={room.id}
                peopleAllocation={guest}
                roomAvaliable={ROOM_AVALIABLE_QUANTITY}
                total={total}
                data={room}
                result={roomResult}
                onUpdate={onUpdate}
              />
            ))}
          </RoomsWrapper>
        </>
      ) : (
        <p>Invalid Room Number</p>
      )}
    </Outer>
  );
};

export default RoomAllocation;
