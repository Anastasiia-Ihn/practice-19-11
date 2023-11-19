import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
   todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    addTodos: {
      reducer(state, { payload }){ state.todos.push(payload) } ,
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text
          }
        }
      }  },
  

     
      delTodos: (state,{payload}) => {
        state.todos=  state.todos.filter((todo=> todo.id !== payload))
      },
     
    },
  })
  
  export const { addTodos, delTodos} = todoSlice.actions
  
export const todoSliceReduser= todoSlice.reducer
  




