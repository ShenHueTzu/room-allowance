import styled from 'styled-components';

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
  color: #19213d;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin: auto;
  padding: 16px 20px;
  background-color: #f8faff;
  border-radius: 8px;

  p {
    margin: 0;
  }

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
export const RoomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 0;
  padding: 8px 40px;

  height: 80vh;
  overflow-y: auto;
`;
export const Title = styled.p`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 24px;
`;
export const Info = styled.div`
  color: #0087e3;

  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`;
export const Item = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  p {
    display: grid;
    span {
      font-size: 12px;
    }
  }
`;
