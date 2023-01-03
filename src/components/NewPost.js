import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, ButtonGroup } from "react-bootstrap";
import "../css/NewPost.css";

const INITIAL_FORM = {
  title: "",
  description: "",
  body: "",
};

const NewPost = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleCancel = e => {
    e.preventDefault();
    navigate("/");
  };

  const handleClick = e => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="NewPost-container">
      <h2>New Post</h2>
      <Form className="align-items-center">
        <Form.Group as={Row}>
          <Form.Label htmlFor="title">Title:</Form.Label>
          <Col>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
              value={formData.title}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label htmlFor="description">Description:</Form.Label>
          <Col>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="description"
              id="description"
              value={formData.description}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label htmlFor="body">Body:</Form.Label>
          <Col sm={12}>
            <Form.Control
              onChange={handleChange}
              as="textarea"
              rows={20}
              cols={40}
              name="body"
              id="body"
              value={formData.body}
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
      <ButtonGroup>
        <Button type="submit" onClick={handleClick}>Submit</Button>
        <Button type="cancel" onClick={handleCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default NewPost;
