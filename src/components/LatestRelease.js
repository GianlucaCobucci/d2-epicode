import { Container, Row } from 'react-bootstrap';
/* import jsonData from '../data/d2-json/fantasy.json';*/
import "../Layout/BookCard.css"
import MyBadge from './MyBadge';
import SingleCard from './SingleCard';
import SearchBar from './SearchBar'
import React, { useEffect, useState } from 'react'
import FadeLoader from 'react-spinners/FadeLoader';

const LatestReleasePage = () => {

    const [loading, setLoading] = useState(false) // definisce uno stato loading inizializzato a false
    const [error, setError] = useState(null) // definisce uno stato error inizializzato a null

    const [books, setBooks] = useState([]) // definisce uno stato books inizializzato con un array vuoto
    const [renderBooks, setRenderBooks] = useState([]) // definisce uno stato renderBooks inizializzato con un array vuoto

    console.log(books); // stampa i libri nella console

    const getBooks = async () => { // definisce la funzione asincrona getBooks
        setLoading(true) // imposta loading a true per indicare l'inizio del caricamento
        try {
            const data = await fetch("https://epibooks.onrender.com/") // esegue una richiesta HTTP per ottenere i libri
            const response = await data.json() // converte la risposta in formato JSON
            setBooks(response) // aggiorna lo stato books con i libri ottenuti
            setRenderBooks(response) // aggiorna lo stato renderBooks con i libri ottenuti
            setLoading(false) // imposta loading a false per indicare la fine del caricamento
        } catch (error) {
            if (error) {
                setError("Errore durante ricezione dei dati"); // imposta error con un messaggio di errore in caso di fallimento della richiesta HTTP
            }
        }
    }

    useEffect(() => { // definisce l'effetto collaterale che viene eseguito quando il componente viene montato
        getBooks(); // chiama la funzione getBooks per ottenere i libri
    }, [])

    return (
        <>
            <Container>
                {error && <h1 className='text-danger'>{error}</h1>} {/* visualizza il messaggio di errore se presente */}
                {loading && !error && <FadeLoader color="#36d7b7" />} {/* visualizza l'indicatore di caricamento se loading è true e non ci sono errori */}
                {!loading && !error && // visualizza il resto del contenuto se loading è false e non ci sono errori
                    <div>
                        <h4 className="text-center mb-5">Ultimi Arrivi</h4>

                        <SearchBar books={books} setBooks={setBooks} setRenderBooks={setRenderBooks}/> {/* passa i libri e le funzioni di aggiornamento come proprietà alla componente SearchBar */}
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



