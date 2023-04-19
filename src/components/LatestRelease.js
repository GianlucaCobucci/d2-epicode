import { Container, Row } from 'react-bootstrap'; /* trovati online */
/* import jsonData from '../data/d2-json/fantasy.json';*/
import "../Layout/BookCard.css"
import MyBadge from './MyBadge';
import SingleCard from './SingleCard';
import SearchBar from './SearchBar'
import React, { useEffect, useState } from 'react'
import FadeLoader from 'react-spinners/FadeLoader';

const LatestReleasePage = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const [books, setBooks] = useState([])
    const [renderBooks, setRenderBooks] = useState([])

    console.log(books);
    const getBooks = async () => {
        setLoading(true) /* inizia caricamento */
        try {
            const data = await fetch("https://epibooks.onrender.com/")
            const response = await data.json()
            setBooks(response)
            setRenderBooks(response)
            setLoading(false) /* termina caricamento */
        } catch (error) {
            if (error) {
                setError("Errore durante ricezione dei dati");
            }
        }
    }

    useEffect(() => { /* sintassi useEffect serve a fare quualcosa prima che il componente venga montato */
        getBooks();
    }, [])

    return (
        <>
            <Container>
                {error && <h1 className='text-danger'>{error}</h1>} {/* quando ci sono fetch, gestire SEMPRE caricamento errori */}
                {loading && !error && <FadeLoader color="#36d7b7" />} {/* condizione in cui loading è true e se non ci sono errori*/}
                {!loading && !error && /* se loading è false e se non ci sono errori, mostrami tutto il resto  */
                    <div>
                        <h4 className="text-center mb-5">Ultimi Arrivi</h4>

                        <SearchBar books={books} setBooks={setBooks} setRenderBooks={setRenderBooks}/> {/* props */}
                        <MyBadge
                            str="MyBadge"
                            color="secondary"
                        />
                        <Container fluid>
                            <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                                {renderBooks && renderBooks.map((book) => ( /* controllo se sesiste books (quinsi se è true) */
                                    <SingleCard
                                        key={book.asin}
                                        title={book.title}
                                        img={book.img}
                                        author={book.author}
                                        price={book.price}
                                        asin={book.asin}
                                        category={book.category}
                                    />
                                ))}
                            </Row>
                        </Container>

                    </div>}
            </Container>
        </>
    );
};

export default LatestReleasePage;



