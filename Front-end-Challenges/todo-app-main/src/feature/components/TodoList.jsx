import CreateNew from "./CreateNew"
import Theme from "./Theme"
import ShowList from "./ShowList"
import { useState } from "react"

const TodoList = () => {
    const [inputText,setInputText] = useState("");
    const createTodo=(e)=>{
     setInputText(e.target.value)
     console.log(`Parent component: ${inputText}`)
    }
    return (
        <section className="TODO-container">
            <Theme />
            <CreateNew createTextTodo={createTodo}/>
            <ShowList showInputText={inputText}/>
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