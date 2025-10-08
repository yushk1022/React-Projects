
import styles from "./Button.module.css"

//Making Reuseble component Using props
// use this button props in => ContactForm.jsx
// props use for reuseble code write once use multiple times

//const Button = (props) => { 
  const Button = ({ isOutline, icon, text, ...rest }) => {
  
  return (                                              
     
    <button 
      {...rest}
    className={isOutline ? styles.outline_btn : styles.primary_btn}>      
        {icon}                            
        {text}
    </button>
    
  )
}

export default Button