import React from "react";
import { Nav } from "react-bootstrap";

const NavBox = () => {
  return (
    <div>
      <h1>Microblog</h1>
      <p>Get in the Rithm of blogging!</p>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/new">Add a new post</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBox;
