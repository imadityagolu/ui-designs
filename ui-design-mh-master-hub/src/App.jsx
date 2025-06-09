import './App.css'
import Header from './components/header.jsx';
import PeopleCards from './components/peopleCards.jsx';
import Selector from './components/selector.jsx';
import Clients from './components/Clients.jsx';
import Portfolios from './components/Portfolios.jsx';
import Clientsay from './components/ClientSay.jsx';
import FrequentQuestions from './components/FrequentQuestions.jsx';
import JoinBoard from './components/JoinBoard.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <>
    <Header />
    <PeopleCards/>
    <Selector/>
    <Clients/>
    <Portfolios/>
    <Clientsay/>
    <FrequentQuestions/>
    <JoinBoard/>
    <Footer/>
    </>
  )
}
export default App
