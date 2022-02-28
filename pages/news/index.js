import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: green;
`;

const Link = styled.a`
  color: black;
`;

const news = () => {
  return (
    <div>
      news
      <Button>Hello world</Button>
      <Link>Hello</Link>
    </div>
  );
};

export default news;
