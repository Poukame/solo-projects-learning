import './App.css';
import Hero from './components/Hero';
import Details from './components/Details';
import Contact from './components/Contact';
import Body from './components/Body';
import Social from './components/Social';

function App() {
    return (
        <div className='root'>
            <Hero />
            <div className='container'>
            <Details />
            <Contact />
            <Body />
            <Social />
            </div>
        </div>
    );
}

export default App;
