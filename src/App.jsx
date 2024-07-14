import Card from './components/Card';
import cardImg from './assets/card_img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Card
        title="Card Title"
        description="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <img src={cardImg} className="card-img-top" alt="Card"/>
      </Card>

      <Card
        title="Special title treatment"
        description="With supporting text below as a natural lead-in to additional content."
      >
      </Card>
    </>
  )
}

export default App;