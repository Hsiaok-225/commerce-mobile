import styled from "styled-components";
import Icon from "./Icon";
import { Avatar } from "./Avatar";

const NavContainer = styled.nav`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.padding};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 24px;
    margin-left: 8px;
  }
`;

const MenuButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 8px;
`;

export function Nav({ padding }) {
  return (
    <NavContainer padding={padding}>
      <MenuButton>
        <Icon.FiMenu size="28" />
      </MenuButton>
      <Title>
        <Icon.IoLogoAndroid size="36" />
        <strong>Audio</strong>
      </Title>
      <Avatar />
    </NavContainer>
  );
}
