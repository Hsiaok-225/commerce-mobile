import styled from "styled-components";
import Icon from "./Icon";

const CardImg = styled.img`
  width: 100%;
`;

const CardContainer = styled.div`
  width: 80vw;
  display: flex;
  background-color: white;
  padding: ${(props) => props.padding}px;
  border-radius: 8px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div > div {
    font-weight: bold;
  }

  div > a {
    color: red;
    font-weight: bold;

    display: flex;
    font-size: 16px;
    margin-top: 20px;
    align-items: center;
  }

  div > a > div {
    margin-left: 12px;
  }
`;

export function Card({ name, img, padding }) {
  return (
    <CardContainer padding={padding}>
      <div>
        <div>{name}</div>
        <a href="#">
          <span>shop now</span>
          <div>
            <Icon.Arrow />
          </div>
        </a>
      </div>
      <div>
        <CardImg src={img} alt="alt"></CardImg>
      </div>
    </CardContainer>
  );
}
