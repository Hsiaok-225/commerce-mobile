import styled from "styled-components";

export function Input({
  type,
  name,
  placeholder,
  icon,
  color,
  border,
  margin,
}) {
  return (
    <Label color={color} border={border} margin={margin}>
      {icon}
      <input type={type} name={name} placeholder={placeholder} />
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  align-items: center;

  background-color: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: ${(props) => props.margin}px;

  border: ${(props) => (props.border ? "1px solid darkgray" : 0)};
  padding: ${(props) => (props.border ? "12px" : 0)};
  border-radius: ${(props) => (props.border ? "8px" : 0)};

  input {
    border: 0;
    font-size: 16px;
    width: 100%;
    outline: none;
    margin-left: 12px;

    ::placeholder {
      color: ${(props) => props.color};
    }
  }
`;
