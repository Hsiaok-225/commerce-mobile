import styled from "styled-components";

const ProductImg = styled.img`
  width: 100%;
`;

const ProductContainer = styled.div`
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: ${(props) => props.padding}px;
  border-radius: 8px;

  font-size: 12px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div > div {
    margin-top: 20px;
  }
`;

const PriceTag = styled.a`
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  div {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    margin-top: 8px;
  }
`;

export function FeatureProduct({ name, img, price, padding }) {
  return (
    <ProductContainer padding={padding}>
      <div>
        <ProductImg src={img} alt="alt"></ProductImg>
      </div>
      <div>
        <PriceTag>
          <div>{name}</div>
          <span>{price}</span>
        </PriceTag>
      </div>
    </ProductContainer>
  );
}
