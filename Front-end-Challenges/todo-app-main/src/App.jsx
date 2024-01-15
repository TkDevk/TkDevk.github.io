import Theme from './feature/components/Theme'
import CreateNew from './feature/components/CreateNew'
import FilterList from './feature/components/ShowList'
import TodoList from './feature/components/TodoList'
const App = ()=>{
  return(
    <main>
    <TodoList>
    <Theme />
    <CreateNew />
    <FilterList />
    </TodoList>
    </main>
    )}

export default App