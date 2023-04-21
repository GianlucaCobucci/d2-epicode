import React, { useState } from 'react'

const AddComment = ({ asin }) => {

    const [comment, setComment] = useState('')
    const [rate, setRate] = useState('1')

    const handleCommentSubmit = async (event) => {
        event.preventDefault()

        try {
            console.log(comment)
            //console.log(rate)
            //console.log(asin)

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'POST',
                body: JSON.stringify({
                    comment: comment,
                    rate: rate,
                    elementId: asin
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkN2E4OGIxNGE1MTAwMTQ2NjNmZDIiLCJpYXQiOjE2ODE5ODU0NzYsImV4cCI6MTY4MzE5NTA3Nn0.Gttho8wvB4OesOgWIBAbV-JJFdr7a1tHDk5_ECl3e9U"
                }
            })
            if (response.ok) {
                alert('Comment added!')
            } else {
                console.log('Error:', response)
                alert('Errore else')
            }
        } catch (error) {
            console.log(error)
            alert('Errore catch')
        }
    }

    return (
        <div>
            <h4>Aggiungi commento</h4>
            <form onSubmit={handleCommentSubmit}>
                <div className="form-group">
                    <label htmlFor="rate">Punteggio:</label>
                    <select
                        className="form-control"
                        id="rate"
                        value={rate}
                        onChange={(element) => setRate(element.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Commento:</label>
                    <textarea
                        className="form-control"
                        id="comment"
                        rows="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Invia
                </button>
            </form>
        </div>
    )
}

export default AddComment
