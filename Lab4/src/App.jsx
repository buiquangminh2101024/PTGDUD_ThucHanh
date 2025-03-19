import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Search from './components/Search.jsx'

function App() {
  const navLink = ['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us']
  const footerLink = [
    {
      id: 'Learn More',
      content: ['Our cooks', 'See Our Feature', 'FAQ']
    },
    {
      id: 'Shop',
      content: ['Gift Subscription', 'Send Us Feedback']
    },
    {
      id: 'Recipes',
      content: ['What to Cook This Weekend', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Christmas']
    },
  ]
  return (
    <div className='m-6 rounded-md overflow-hidden shadow-md'>
      <Header NavLink={navLink}/>
      <section className='px-40 pt-10 flex'>
        <Search/>
      </section>
      <Footer FooterLink={footerLink}/>
    </div>
  )
}

export default App
