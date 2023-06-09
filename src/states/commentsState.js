/* stato dei commenti con azioni che dovrà fare */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; /* gestisce chiamate api tramite redux */
/* slice crea una fetta di store dedicata allo stato dei commenti */

const initialState = {
    comments: [],
    isLoading: false,
    error: ""
}


export const getCommentsFromBook = createAsyncThunk( /* primo par stringa che descrive cosa sta facendo funzione */
    "commentsFromBook/getCommentsFromBook",
    async(asin) => {
        const endpoint = `https://striveschool-api.herokuapp.com/api/comments/${asin}`
        try {
            const data = await fetch (endpoint,{
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkN2E4OGIxNGE1MTAwMTQ2NjNmZDIiLCJpYXQiOjE2ODE5ODU0NzYsImV4cCI6MTY4MzE5NTA3Nn0.Gttho8wvB4OesOgWIBAbV-JJFdr7a1tHDk5_ECl3e9U"
                },
            })
            const response = await data.json();
            return response;
        } catch (error) {
            if(error) throw new Error("C'è un errore generico")
        }
    }
)

const commentsFromBookSlice = createSlice({ /* prima proprietà name */
    name: "commentsFromBook",
    initialState, 
    extraReducers: (builder) => { /* gestione tre casi della funzione async */
        builder
        .addCase(getCommentsFromBook.pending, (state) =>{/* gestione caso pending */
            state.isLoading = true
        })
        .addCase(getCommentsFromBook.fulfilled, (state, action)=> { /* con action manipoliamo i dati */
            state.isLoading = false
            state.comments = action.payload /* metto dentro i dati ricevuti (payload è la response) */
        })
        .addCase(getCommentsFromBook.rejected,(state) => {
            state.isLoading = false
            state.error = "C'è un errore"
        })
    }
})

export const commentsLoading = (state) => state.commentsSlice.isLoading
export const commentsError = (state) => state.commentsSlice.error
export const arrayOfComments = (state) => state.commentsSlice.comments /* comments è nome dello stato che abbiamo */
export default commentsFromBookSlice.reducer