import React, { useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
import '../Layout/CommentsModal.css';
import SingleComment from './SingleComment';

const CommentsModal = ({ toggleModal, asin }) => {
    const [comments, setComments] = useState([]); // definisce lo stato iniziale delle recensioni
    const [loading, setLoading] = useState(true); // definisce lo stato iniziale per il caricamento

    useEffect(() => { // definisce un effetct che viene eseguito quando cambia l'asin (id del libro)
        const fetchComments = async () => { // definisce una funzione asincrona per ottenere le recensioni dal server
            try {
                setLoading(true); //imposta il caricamento a true prima di effettuare la chiamata API
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkN2E4OGIxNGE1MTAwMTQ2NjNmZDIiLCJpYXQiOjE2ODE5ODU0NzYsImV4cCI6MTY4MzE5NTA3Nn0.Gttho8wvB4OesOgWIBAbV-JJFdr7a1tHDk5_ECl3e9U"
                    },
                });
                if (response.ok) { // se la risposta è ok, aggiorna lo stato delle recensioni con i dati ottenuti
                    const commentsData = await response.json();
                    console.log(commentsData)
                    setComments(commentsData);
                } else { // altrimenti, mostra un errore nella console
                    console.log("C'è un errore da qualche parte");
                }
            } catch (error) { // se c'è un errore, mostra l'errore nella console
                console.log("C'è un errore da qualche parte :" + error);
            } finally {
                setLoading(false); //imposta il caricamento a false alla fine della chiamata API
            }
        };
        fetchComments(); // esegue la funzione fetchComments per ottenere le recensioni
    }, [asin]); // specifica le dipendenze per l'effetto (l'asin)

    return (
        <div className="modal show comments-modal" style={{ display: 'block' }}>
            <Modal.Dialog centered size="lg">
                <Modal.Body>
                    {loading && (
                        <div className="d-flex justify-content-center align-items-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Caricamento in corso...</span>
                            </Spinner>
                        </div>
                    )}
                    {!loading && (
                        <>
                            <CommentList comments={comments} />
                            <AddComment asin={asin} setComments={setComments} />
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleModal} variant="secondary">
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default CommentsModal;

