import styled from 'styled-components';
export const List = styled.ul`
  font-size: 20px;
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 0;
`;
export const ContactListItem = styled.li`
  display: flex;
  /* align-items: baseline; */
  align-items: center;
  justify-content: space-between;
`;

export const Contact = styled.p`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const ContactListName = styled.span`
  color: darkblue;
  display: flex;
`;

export const ContactListNumber = styled.span`
  color: darkcyan;
  display: flex;
`;

export const ContactListButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  /* height: 44px; */
  padding: 5px;
  /* margin-left: 30px; */
  color: rgb(19, 61, 248);
  background-color: rgb(234, 255, 47);
  border: 3px solid darkslateblue;
  border-radius: 10px;
`;
