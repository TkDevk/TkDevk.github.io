import TodoList from './feature/components/TodoList'
import './main.css'
import { useState, useEffect } from "react";
const App = () => {

  const setDarkMode = () => {
    document.querySelector('.Body').setAttribute("data-theme","dark");
    document.querySelector('.Create-new-container').setAttribute("data-theme","dark");   
    document.querySelector('.Input-check-box').setAttribute("data-theme","dark");   
    document.querySelector('.Check-TODO').setAttribute("data-theme","dark");   
    document.querySelector('.Footer-filter').setAttribute("data-theme","dark");
    document.querySelector('.Clear-todos').setAttribute("data-theme","dark");    
    document.querySelector('.Todos-remain').setAttribute("data-theme","dark");
    document.querySelector('.Justify-h6').setAttribute("data-theme","dark");    
    document.querySelector('.TitleTODO').setAttribute("data-theme","dark");  
    document.querySelector('.IconTheme').setAttribute("data-theme","dark"); 
    document.querySelector('.TODO-list-container').setAttribute("data-theme","dark"); 
    document.querySelector('.New-todo').setAttribute("data-theme","dark"); 

  }

 const setLight = ()=>{
  document.querySelector('.Body').setAttribute("data-theme","light");
  document.querySelector('.Create-new-container').setAttribute("data-theme","light");  
  document.querySelector('.Input-check-box').setAttribute("data-theme","light");   
  document.querySelector('.Check-TODO').setAttribute("data-theme","light");   
  document.querySelector('.Footer-filter').setAttribute("data-theme","light");
  document.querySelector('.Clear-todos').setAttribute("data-theme","light");    
  document.querySelector('.Todos-remain').setAttribute("data-theme","light");
  document.querySelector('.Justify-h6').setAttribute("data-theme","light");    
  document.querySelector('.TitleTODO').setAttribute("data-theme","light"); 
  document.querySelector('.IconTheme').setAttribute("data-theme","light"); 
  document.querySelector('.TODO-list-container').setAttribute("data-theme","light"); 
  document.querySelector('.New-todo').setAttribute("data-theme","light"); 
 }


  const [darkMode, setDarkModeState] = useState(false);
  useEffect(() => {
     darkMode?setDarkMode() : setLight();
 }, [darkMode]);
   
  const changeColor = () => {
   setDarkModeState((prevMode) => !prevMode);
 };
    return (
      <main
        className="Body"
        data-theme="light"       
      >
        <picture className='BackGround-image'>
          <img src={darkMode? "bg-desktop-dark.jpg" : "bg-desktop-light.jpg"}
          alt="Background Image" />
        </picture>
        <article className='Main-container'>
          
          <TodoList changeColor={changeColor}  darkMode={darkMode}/>
        </article>
      </main>
  );
}

export default App;