import React, { useState } from 'react'
import { Card, Badge, Button } from 'react-bootstrap'; /* trovati online */
import CommentsModal from './CommentsModal';

const SingleCard = ({ asin, title, author, category, price, img }) => {

    const [selected, setSelected] = useState(false) // definisce una variabile di stato selected inizializzata a false
    //console.log(selected)
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false) // definisce una variabile di stato isCommentModalOpen inizializzata a false

    const toggleSelected = () => setSelected(!selected) // definisce una funzione toggleSelected che inverte il valore della variabile selected
    const toggleModal = () => setIsCommentModalOpen(!isCommentModalOpen) // definisce una funzione toggleModal che inverte il valore della variabile isCommentModalOpen

    return (
        <>
            <Card onClick={toggleSelected} className={`${selected ? "border border-danger shadow" : null}`}> {/* definisce una carta di React Bootstrap che può essere selezionata dall'utente */}
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
                    <Button onClick={toggleModal}>Commenti</Button> {/* definisce un pulsante per aprire il modale dei commenti */}
                </Card.Body>
            </Card>
            {isCommentModalOpen && <CommentsModal toggleModal={toggleModal}/>} {/* visualizza il modale dei commenti solo se isCommentModalOpen è true */}
        </>

    )
}

export default SingleCard
