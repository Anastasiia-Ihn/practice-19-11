
import {
  Container,
    Header,
  SearchForm,
  Section,
  Text,
  
} from 'components';
import { TodoList } from 'components/TodoList';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';



export const App = () => {

  // const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? []);
  
//  useEffect(() => {
//    const todosLocalSt = JSON.parse(localStorage.getItem('todos'));
  
//    if (todosLocalSt) {
//       setTodos(todosLocalSt );
//     }
//  }, []);
 
// useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
// }, [todos]);



//  const handleSubmit = data => {
//     addTodo(data);
//   };

const todos=  useSelector(selectTodos)



  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

         <TodoList></TodoList>
        </Container>
      </Section>
    </>
  );
}