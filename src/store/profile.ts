import { createSlice } from "@reduxjs/toolkit";

export interface IssueInitialState {
    profile: {
        display_name: string,
        images?: Array<Images>,
        id: string,
        followers: {
            total: number
        },
        product: string
    }
}

const initialProfileState: IssueInitialState = {
    profile: {
        display_name: '',
        images: [],
        id: '',
        followers: {
            total: 0
        },
        product: ''
    }
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfileState,
    reducers: {
        setProfile(state, action){
            state.profile = action.payload;
        }
    }
})


export const profileActions = profileSlice.actions

export default profileSlice.reducer