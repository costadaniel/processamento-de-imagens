import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 30px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  outline-width: 0px 0px 1px 0px;
  outline-color: ${(props) => props.theme.colors.secondary};
  outline-style: solid;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text1};
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const TopBar = () => {
  return (
    <Container>
      <Item>
        <p>File</p>
      </Item>
      <Item>
        <p>Filters</p>
      </Item>
      <Item>
        <p>View</p>
      </Item>
    </Container>
  );
};

export default TopBar;
