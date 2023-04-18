import { Container, Row } from 'react-bootstrap'; /* trovati online */
import jsonData from '../data/d2-json/fantasy.json';
import "../Layout/BookCard.css"
import MyBadge from './MyBadge';
import SingleCard from './SingleCard';
import SearchBar from  './SearchBar'

const LatestReleasePage = () => {

    return (
        <div>
            <h4 className="text-center mb-5">Ultimi Arrivi</h4>
           <>
           <SearchBar/>
           <MyBadge
                str="Ciao"
                color="primary"
           />
                <Container fluid>
                    <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                        {jsonData.map((book) => (
                            <SingleCard
                                key = {book.asin}
                                title = {book.title}
                                img = {book.img}
                                author = {book.author}
                                price = {book.price}
                                asin = {book.asin}
                                category = {book.category}
                            />    
                        ))}
                    </Row>
                </Container>
            </>
        </div>
    );
};

export default LatestReleasePage;



