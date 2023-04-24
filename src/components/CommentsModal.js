import React, { useEffect, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
import useFetch from '../Hooks/useFetch';
import '../Layout/CommentsModal.css';

const CommentsModal = ({ toggleModal, asin }) => { // definisce il componente CommentsModal con due proprietà: toggleModal e asin
    const [error, setError] = useState(null); // definisce una variabile di stato per gli errori, inizialmente nulla
    const { data: comments, loading } = useFetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`).catch((err) => setError(err.message)); ; // utilizza il custom hook useFetch per ottenere i dati delle recensioni, salvandoli nella variabile comments e lo stato del caricamento in loading

    useEffect(() => { // definisce un effetto che viene eseguito in caso di errori
        if (error) { // se error è diverso da null, mostra l'errore nella console
            console.log("C'è un errore da qualche parte: " + error);
        }
    }, [error]); // specifica le dipendenze per l'effetto

    return (
        <div className="modal show comments-modal" style={{ display: 'block' }}> {/* definisce il layout della finestra modale */}
            <Modal.Dialog centered size="lg"> {/* definisce il layout della finestra di dialogo */}
                <Modal.Body> {/* definisce il corpo della finestra di dialogo */}
                    {loading && ( //se loading è true, mostra uno spinner
                        <div className="d-flex justify-content-center align-items-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Caricamento in corso...</span>
                            </Spinner>
                        </div>
                    )}
                    {!loading && ( // se loading è false, mostra CommentList e AddComment
                        <>
                            <CommentList comments={comments} />
                            <AddComment asin={asin} />
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer> {/* definisce il piè di pagina della finestra di dialogo */}
                    <Button onClick={toggleModal} variant="secondary"> {/* definisce il bottone di chiusura della finestra di dialogo */}
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default CommentsModal;


