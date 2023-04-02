import React from "react";
import styled from "styled-components";
import Section from "./Sections";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless and Delivery"
        backgroundImage="model-s.jpg"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless and Delivery"
        backgroundImage="model-y.jpg"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Leasing starting at $349/mo"
        backgroundImage="model-3.jpg"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless and Delivery"
        backgroundImage="model-x.jpg"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        LeftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        LeftBtnText="Learn More"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        LeftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100 vh;
`;
