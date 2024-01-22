import PropTypes from "prop-types"

const Theme = ({changeColor:changeColor, darkMode:darkMode}) => {
  

 /**I had to use useEffect because its initial state it wasn't working, i had to click to twice in order to change the theme, so using useEffect i can assure that the darkMode state it will be charge as soon as the component is updated */
 

  return (
    <header className="ThemeTODO">
      <h1 className="TitleTODO">Todo</h1>
      <picture
        onClick={changeColor}
        className="IconTheme">
        <img
          src={darkMode ? "icon-sun.svg" : "icon-moon.svg"}
          alt="" />
      </picture>
    </header>
  )

}
Theme.propTypes={
  changeColor:PropTypes.any, 
  darkMode:PropTypes.any,
}
export default Theme