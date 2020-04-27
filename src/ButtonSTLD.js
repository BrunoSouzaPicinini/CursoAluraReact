import React from "react";
import Button from "./StyledButton";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const ButtonSTLD = () => {
    return(
        <Container>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
        </Container>
    );
}
export default ButtonSTLD;