import React, { useState } from 'react'
import { Card, Badge, Button } from 'react-bootstrap'; /* trovati online */
import CommentsModal from './CommentsModal';

const SingleCard = ({ asin, title, author, category, price, img }) => {

    const [selected, setSelected] = useState(false)
    //console.log(selected)
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

    const toggleSelected = () => setSelected(!selected)//voglio che sia sempre il contrario di quello che è attualmente
    /* senza graffe se torna una cosa sola */

    const toggleModal = () => setIsCommentModalOpen(!isCommentModalOpen)
    

    return (
        <>
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
                    <Button onClick={toggleModal}>Commenti</Button>
                </Card.Body>
            </Card>
            {isCommentModalOpen && <CommentsModal toggleModal={toggleModal}/>}
        </>

    )
}

export default SingleCard