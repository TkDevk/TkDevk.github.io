const CreateNew = ({todoText}) => {
/*
    const handleAddTask = (e) => {
        let nuevaTask = {
          id: uuidv4(),
          title,
          completed: false,
        };
        if (e.key.toLowerCase() === "enter") {
          addTask(nuevaTask);
          setTitle("");
        }
      };
  */  

    return (   
        
        <section className="Create-new-container">
            <figure 
            className="Check-TODO">
            </figure>
            <input 
            className="Input-check-box" 
            type="text" 
            id="cbox" 
            placeholder="Create a new todo..." 
            size="50" 
            onChange={todoText}
            onKeyDown={(e) => handleAddTask(e)}
            />
        </section>
        
    )

}
export default CreateNew
