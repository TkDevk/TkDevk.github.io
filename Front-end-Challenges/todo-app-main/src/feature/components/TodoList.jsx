import CreateNew from "./CreateNew"
import Theme from "./Theme"
import ShowList from "./ShowList"
import { useState } from "react"

const TodoList = () => {
    const [textTodo,setInputTodo] = useState("Hola");
    const todoText=(e)=>{
     setInputTodo(e.target.value)
    }
      

    return (
        <section className="TODO-container">
            <Theme />
            <CreateNew todoText={todoText}/>
            <ShowList textTodo={textTodo}/>
            <span className='Dragdrop'>
                Drag and drop to reorder list
            </span>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </footer>

        </section>
    )
}

export default TodoList