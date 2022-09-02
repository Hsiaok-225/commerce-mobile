import styled from "styled-components";

export function List({ items, children }) {
  return (
    <ListContainer>
      {items.map((item) => (
        <li key={item.id}>{children(item)}</li>
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  padding: 10px 0px;

  > li ~ li {
    margin-left: 24px;
  }
`;
