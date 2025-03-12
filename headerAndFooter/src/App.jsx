import Header from './components/Header'
import Footer from './components/Footer'

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
    <>
      <Header NavList={navLink}/>
      <Footer FooterLink={footerLink}></Footer>
    </>
  )
}

export default App
