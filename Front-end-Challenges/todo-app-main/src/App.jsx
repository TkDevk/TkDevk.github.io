import TodoList from './feature/components/TodoList'
import './main.css'

const App = () => {
    return (
      <main
        className="Body"
        data-theme="light"       
      >
        <picture className='BackGround-image'>
          <img src="bg-desktop-light.jpg" alt="Background Image" />
        </picture>
        <article className='Main-container'>
          <TodoList />
        </article>
      </main>
  );
}

export default App;