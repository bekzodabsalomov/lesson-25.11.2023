import { createContext, useReducer } from "react";

export const GlobalContext = createContext()

const changeState = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'INCREMENT':
            return state += 1
        case 'DECREMENT':
            return state -= 1
        case 'ADD_NUMBER':
            return state + payload
        default:
            return state
    }
}

export function GlobalContextProvider({ children }) {

    const [counter, dispatch] = useReducer(changeState, 0)

    return <GlobalContext.Provider value={{ counter, dispatch }}>
        {children}
    </GlobalContext.Provider>
}