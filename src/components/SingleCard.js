import React, { useState } from 'react'
import { Card, Badge } from 'react-bootstrap'; /* trovati online */

const SingleCard = ({ asin, title, author, category, price, img }) => {

    const [selected, setSelected] = useState(false)
    //console.log(selected)

    const toggleSelected = () => {
        setSelected(!selected)//voglio che sia sempre il contrario di quello che è attualmente
    }

    return (

        <Card onClick={toggleSelected} className={`${selected ? "border border-danger shadow" : null}`}> {/* non riesco a modificare altezza, la voglio fissa */}
            <Card.Img 
                className="object-fit-cover w-100 book-card" 
                src={img} 
                alt={title} 
            />
            <Card.Body key={asin}>
                <Card.Title className="text-truncate">{title}</Card.Title>
                <Card.Subtitle className="mb-2">{author}</Card.Subtitle>
                <Card.Text className="mb-1">{category.charAt(0).toUpperCase() + category.slice(1)}</Card.Text>
                <Badge bg="primary" className="mb-2">€{price}</Badge>
            </Card.Body>
        </Card>

    )
}

export default SingleCard