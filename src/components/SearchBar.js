import React, { useState } from "react"; // importazione delle librerie React e useState
import { Button, Col, Container, Form, Row } from "react-bootstrap"; // importazione delle componenti Bootstrap necessarie

//Definizione della funzione SearchBar
//Il componente accetta come argomenti un array di libri e una funzione 
//per aggiornare la lista dei libri visualizzati
const SearchBar = ({ books = [], setBooks }) => {

  //Dichiarazione della variabile di stato searchTerm inizializzata a una stringa vuota
  //Questa variabile conterrà il valore attuale della ricerca
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm); 

  // Definizione della funzione  che viene eseguita al clic del bottone "Cerca"
  const handleSearch = () => {

    //Si filtra l'array dei libri in base al valore di searchTerm (in minuscolo)
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Si aggiornano i libri visualizzati sulla pagina
    setBooks(filteredBooks);

    /* C'E' UN ERRORE: dice che setBooks non è una funzione */
    
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={12}>
          <Form className="d-flex">
            <Form.Control
              onChange={(element) => setSearchTerm(element.target.value)}
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

