import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Data from './Data';

function App() {

    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className='App'>
            <Header />
            <section className='card-list'>
                {cards}
            </section>
        </div>
    );
}

export default App;
