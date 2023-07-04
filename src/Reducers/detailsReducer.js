import { ADD_CARD_TO_DETAILS_PAGE } from "../Actions/actionTypes"

const initialState = { 
    post : {}
}

const detailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CARD_TO_DETAILS_PAGE:
            return {
                ...state,
                post : action.payload
            }
            default : return state
    }
}

export default detailsReducer