 // Creating Function for Nav Bar // Function sortcut => rafce
 // first making componets in src then creating nav bar

 import styles from './Navigation.module.css'

const Navigation = () => {
  //  console.log(styles);

  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/images/logo.png" alt="logo" />
        </div>

        <ul className="">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation  // export in app.jsx