import { createSlice } from "@reduxjs/toolkit";

const playListSlise = createSlice({
    name: 'playListMusic',
    initialState: {
        playList: [],
        track: {
            idTrack: 0,
            pathTrack: '',
        },
    },
    reducers:{
        addPlayListMusic(state, action) {            
            state.playList = action.payload.playList;
        },
        addIdTrack(state, action) {
            state.track.idTrack = action.payload.idTrack;
            state.track.pathTrack = action.payload.pathTrack;
        },
    },
});

export const {addPlayListMusic, addIdTrack} = playListSlise.actions;
export default playListSlise.reducer;


