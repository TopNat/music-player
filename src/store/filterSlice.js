import { createSlice } from "@reduxjs/toolkit";

const filterSlise = createSlice({
    name: 'filters',
    initialState: {
        author: [],
        genre: [], 
    },
    reducers:{
        addAuthor(state, action) {            
            state.author = action.payload.author;
        },
        addGenre(state, action) {            
            state.genre = action.payload.genre;
        },  
    },
});

export const {addAuthor, addGenre} = filterSlise.actions;
export default filterSlise.reducer;


