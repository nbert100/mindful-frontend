//we need to dispatch something to the reducer
// bc of thunk we can bring dispatch function into this function and all dispatch from inside here


//we are passing in dispatch so that we have access to the dispatch function (bc of thunk)
export const addClient = (data) => {
    return (dispatch) => {
        fetch('http://localhost:8080/api/v1/clients', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(client => dispatch({type: 'ADD_CLIENT', payload: client}))

    }

}