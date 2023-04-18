import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

//si passa un array vuoto così il codice funziona anche se non viene inserito nessun value 
const SearchBar = ({ books = [], setBooks }) => {

  //searchTerm variabile stato valore attuale 
  //setSearchTerm funzione che permette di aggiornare valore di searchTerm
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  //funzione eseguita quando clicco ricerca
  const handleSearch = () => {
    const filteredBooks = books.filter((book) => //filtro array di books in base a lavore di searchTerms (minuscolo)
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredBooks);
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
