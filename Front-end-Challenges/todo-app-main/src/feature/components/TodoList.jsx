import CreateNew from "./CreateNew"
import Theme from "./Theme"
import ShowList from "./ShowList"
const TodoList = () => {
    return (
        <section className="TODO-container">
            <Theme />
            <CreateNew />
            <ShowList />
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