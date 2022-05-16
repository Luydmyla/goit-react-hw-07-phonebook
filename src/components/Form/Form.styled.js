import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 4px solid blue;
  padding: 15px;
  text-transform: capitalize;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: blue;
`;

export const FormInput = styled.input`
  width: 70%;
  margin-left: 20px;
  height: 28px;
  font-size: 14px;
  color: blue;
  border: 2px solid rgb(234, 255, 47);
`;

export const FormButton = styled.button`
  margin-top: 44px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  width: max-content;
  /* height: 44px; */
  padding: 5px;
  color: rgb(19, 61, 248);
  background-color: rgb(234, 255, 47);
  border: 3px solid darkslateblue;
  border-radius: 10px;
`;
