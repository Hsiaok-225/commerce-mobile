import styled from "styled-components";

const SignButton = styled.button`
  border: 0;
  font-size: 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
`;

function LoginButton({ icon }) {
  return <Button>{icon}</Button>;
}

const Button = styled.button`
  border: 0;
  border-radius: 8px;

  color: black;
  background-color: white;
  font-size: 28px;
  padding: 12px;
  margin: 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
`;

export { ButtonContainer, LoginButton, SignButton };
