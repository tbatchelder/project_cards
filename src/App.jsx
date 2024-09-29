import './App.css';
import Trick from './components/Trick';

function App() {
  // const [count, setCount] = useState(0)

  const dogTricks = [
    { title: "Sit", category: "Basic", description: "Dog sits down on its hind legs." },
    { title: "Stay", category: "Basic", description: "Dog remains in the same spot." },
    { title: "Shake Hands", category: "Basic", description: "Dog shakes hands." },
    { title: "Fetch", category: "Basic", description: "Dog gets stick."}
  ]

  return (
    <>
      <header className='main-nav'>
        <h1>Find the Best Dog Tricks</h1>
        <p>Everything you and Blue need to impress.</p>
      </header>
      <div className='content'>
        <div className='cards-container'>
          {dogTricks.map((trick) => { return (<Trick key={trick.title} category={trick.category} title={trick.title} description={trick.description} />) })}
          
        </div>
      </div>
    </>
  )
}

export default App
