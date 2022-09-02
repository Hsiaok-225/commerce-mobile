import styled from "styled-components";

const SectionContainer = styled.div`
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  header {
    font-weight: bold;
  }

  a {
    color: rgb(50, 50, 50);
  }
`;

export function Section() {
  return (
    <SectionContainer>
      <header>Feature Products</header>
      <a href="#">See All</a>
    </SectionContainer>
  );
}
