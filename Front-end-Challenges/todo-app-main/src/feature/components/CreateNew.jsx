const CreateNew = () => {
    return (
        <section className="Create-new-container">
            <label htmlFor="cbox">
                <input className="Input-check-box" type="checkbox" id="cbox" value="todo_checkbox" />
                Create a new todo...
                <span className="Check-mark"></span>
                </label>
        </section>
    )

}
export default CreateNew