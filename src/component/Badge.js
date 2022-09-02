import styled from "styled-components";

const BadgeItem = styled.a`
  font-size: 14px;
  color: black;
  border-radius: 16px;
  padding: 2px 16px;

  ${(props) =>
    props.category === props.children &&
    `background-color:black;
      color: white;`};
`;

export function Badge({ category, children }) {
  return (
    <BadgeItem href="#" category={category}>
      {children}
    </BadgeItem>
  );
}
