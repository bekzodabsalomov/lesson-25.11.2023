import axios from 'axios'
import { useEffect, useReducer } from 'react'

export function useFetch(url) {

    const changeState = (state, action) => {
        const { type, payload } = action
        switch (type) {
            case "SET_DATA":
                return { ...state, data: payload }
            case "SET_ISPENDING":
                return { ...state, error: payload }
            case "SET_ERROR":
                return { ...state, isPending: payload }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(changeState, {
        data: null,
        isPending: false,
        error: null,
    })

    useEffect(() => {
        const getData = async () => {
            dispatch({ type: "SET_ISPENDING", payload: true });
            try {
                const req = await axios(url)

                if (req.status != 200) {
                    throw new Error(req.message)
                }

                dispatch({ type: "SET_DATA", payload: req.data });
                dispatch({ type: "SET_ISPENDING", payload: false });
                dispatch({ type: "SET_ERROR", payload: null });
            } catch (error) {
                dispatch({ type: "SET_ERROR", payload: error.message });
                dispatch({ type: "SET_ISPENDING", payload: false });
                console.log(error)
            }
        }

        getData()
    }, [url])

    return { ...state }
}