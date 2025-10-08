
import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactHeader from './Components/ContactHeader/ContactHeader' // import from ContactHeader.jsx
import Navigation from './Components/Navigation/Navigation'  // import from Navigation.jsx
function App() {
  
  return (
      <div>
        <Navigation/>
        <main className='main_container'>
         <ContactHeader/>
         <ContactForm/>
        </main>
        
      </div>
  )
}

export default App
