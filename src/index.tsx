import React from 'react';
import { createRoot } from 'react-dom/client';
import { ResultProps } from '../constants/types';
import RoomAllocation from './modules/RoomAllocation';

function App() {
  const onChangeEvent = (data: ResultProps[]) => console.log(data);
  const GUEST_QUANTITY = 10;
  const ROOM_QUANTITY = 3;

  return <RoomAllocation guest={GUEST_QUANTITY} room={ROOM_QUANTITY} onChange={onChangeEvent} />;
}

const container = document.getElementById('root');
const root = container && createRoot(container);
root && root.render(<App />);
