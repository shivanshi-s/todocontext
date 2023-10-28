import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //properties
    todos : [
        {
            id : 1,
            todo : "Todo Message",
            completed : "false",
        },
    ],
    //functionalities - just write names not what they do, what they do is in App
    addTodo :  (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})
// use context needs a context - what we are talking about
export const useTodo = () => {
    return useContext(TodoContext)
}
// provider export - so that we dont have to wrap component in a main provider
export const TodoProvider = TodoContext.Provider