import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

//si passa un array vuoto così il codice funziona anche se non viene inserito nessun value 
const SearchBar = ({ books = [], setBooks }) => {

  setBooks = []
  // searchTerm: variabile di stato per il valore attuale della ricerca
  // setSearchTerm: funzione per aggiornare il valore di searchTerm
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  // funzione eseguita al clic del bottone "Cerca"
  const handleSearch = () => {
    // si filtra l'array dei libri in base al valore di searchTerm (in minuscolo)
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // si aggiornano i libri visualizzati sulla pagina
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
        {/* si mappa l'array dei libri filtrati e si visualizzano nella pagina */}
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
