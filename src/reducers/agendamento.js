import { ACTION_TYPES } from "../actions/agendamento"
const initialState = {
    list: []
}
export const agendamento = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        default:
            return state
    }
}