import './App.css';
import Trick from './components/Trick';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className='main-nav'>
        <h1>Find the Best Dog Tricks</h1>
        <p>Everything you and Blue need to impress.</p>
      </header>
      <div className='content'>
        <div className='cards-container'>
          <div className='card'>
            <p>Basic</p>
            <Trick />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
