import {INCREMENT, DECROMENT} from '../types'


let initialState = {
    likes: 0,
}


export const LikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:{
            return{
                ...state,
                likes:state.likes+1
            }
        }

        case DECROMENT:{
            return {
                ...state,
                likes:state.likes === 0 ? 0 : state.likes -1 
            }
        }

        default: return state
    }
}