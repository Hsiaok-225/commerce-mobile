import styled from "styled-components";
import Icon from "./component/Icon";
import {
  Nav,
  Input,
  Card,
  FeatureProduct,
  List,
  Badge,
  Section,
} from "./component";
import GlobalStyles from "./global-style/Global";
import HeadphoneImg from "./images/dlf.pt-audifonos-dj-png-3986295.png";

const Main = styled.div`
  padding: 24px;
`;

const Header = styled.div`
  margin-top: 2rem;
`;
const HeaderContent = styled.div`
  p {
    margin: 0;
    font-size: 18px;
  }

  div {
    font-size: 28px;
    font-weight: bold;
  }
`;

const Panel = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  padding-top: 12px;
  border-radius: 1rem 1rem 0 0;

  @media screen and (min-width: 375px) {
    height: 100%;
  }
`;

const PanelContainer = styled.div`
  padding: 0 24px;
`;

function App() {
  const category = "Headphone";

  const topProducts = [
    {
      id: "TMA-3 Modular Headphone",
      name: "TMA-3 Modular Headphone",
      img: HeadphoneImg,
    },
    {
      id: "TMA-2 Modular Headphone",
      name: "TMA-2 Modular Headphone",
      img: HeadphoneImg,
    },
  ];

  const featureProducts = [
    {
      id: "T-3 Modular Headphone",
      name: "T-3 Modular Headphone",
      price: "USD 250",
      img: HeadphoneImg,
    },
    {
      id: "TMA-2 Modular Headphone",
      name: "TMA-2 Modular Headphone",
      price: "USD 400",
      img: HeadphoneImg,
    },
    {
      id: "A-2 Modular Headphone",
      name: "A-2 Modular Headphone",
      price: "USD 400",
      img: HeadphoneImg,
    },
  ];

  const categories = [
    {
      id: "Headphone",
      name: "Headphone",
    },
    {
      id: "Headband",
      name: "Headband",
    },
    {
      id: "Earpadss",
      name: "Earpads",
    },
    {
      id: "Earpadsc",
      name: "Earpads",
    },
  ];
  return (
    <>
      <Main>
        <Nav />
        <Header>
          <HeaderContent>
            <p>Hi, Andrea</p>
            <div>What are you looking for today?</div>
          </HeaderContent>
          <Input
            type="search"
            name="search"
            placeholder="Search headphone"
            color="darkgray"
            icon={
              <Icon.FiSearch size="24px" color="darkgray" strokeWidth={"2"} />
            }
            border
            margin="32"
          ></Input>
        </Header>
      </Main>
      <Panel>
        <PanelContainer>
          <List items={categories}>
            {(item) => <Badge category={category}>{item.name}</Badge>}
          </List>
          <List items={topProducts}>
            {(item) => <Card {...item} padding="24"></Card>}
          </List>
          <Section />
          <List items={featureProducts}>
            {(item) => <FeatureProduct {...item} padding="12"></FeatureProduct>}
          </List>
        </PanelContainer>
      </Panel>
      <GlobalStyles />
    </>
  );
}

export default App;
