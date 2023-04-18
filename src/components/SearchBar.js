import React,{useState} from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchBar = ({books, setBooks}) => {

    const [searchTerm, setSearchTerm] = useState("")
    console.log(searchTerm)

    const filteredBooks = {}


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
              <Button>
                Cerca
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }

export default SearchBar