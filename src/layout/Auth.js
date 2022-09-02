import styled from "styled-components";

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 30px;
  text-align: center;
`;

const Header = styled.div`
  margin-top: 5rem;
  header {
    font-size: 60px;
    font-weight: 500;
  }
  p {
    margin-top: 18px;
  }
`;

const Section = styled.div`
  margin-top: 10rem;
  flex: 1;
  flex-direction: column;

  a {
    color: white;
  }

  input {
    display: flex;
    flex-direction: column;
  }

  span + a {
    margin-left: 12px;
    text-decoration: underline;
  }

  div + div {
    margin-top: 20px;
  }
  p {
    margin-top: 16px;
  }
`;

function Auth({ children }) {
  return (
    <Main>
      <Header>
        <header>Audio</header>
        <p>It's modular and design to last</p>
      </Header>
      <Section>{children}</Section>
    </Main>
  );
}

export { Auth as Layout };
