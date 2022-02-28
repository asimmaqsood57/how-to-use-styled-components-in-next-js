import React from "react";

import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
`;

const HomePage = () => {
  return (
    <div>
      {" "}
      <h1>The HomePage</h1> <Button>Submit</Button>
    </div>
  );
};

export default HomePage;
