import { useSelector } from "react-redux"
import { Grid, GridItem } from "./Grid/Grid.styled"
import { Todo } from "./Todo/Todo"
import { selectTodos } from "redux/selectors"

export const TodoList = () => {
    
   const todos=  useSelector(selectTodos)
    return ( <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
              
              />
            </GridItem>
          ))}
      </Grid>)
}