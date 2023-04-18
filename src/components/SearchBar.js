import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = ({ books = [], setBooks }) => {

  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  const handleSearch = () => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12}>
          <Form className="d-flex">
            <Form.Control
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handleSearch}>Cerca</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={3}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchBar;
