import ShowList from './feature/components/ShowList'
import TodoList from './feature/components/TodoList'
import FilterList from './feature/components/FilterList'
import './main.css'

const App = ()=>{
  return(
    <main className='Body'>
      <picture className='BackGround-image'>
        <img src="bg-desktop-light.jpg" 
             alt="Background Image" />
      </picture>
      <article className='Main-container'>
    <TodoList />
    <ShowList />
    <FilterList />
    </article>
    </main>
    )}

export default App