import { useState } from 'react';
import './App.css';
import Trick from './components/Trick';

function App() {
  // const [count, setCount] = useState(0)

  const dogTricks = [
    { title: "Sit", category: "Basic", description: "Dog sits down on its hind legs." },
    { title: "Stay", category: "Self-Control", description: "Dog remains in the same spot." },
    { title: "Shake Hands", category: "Communication", description: "Dog shakes hands." },
    { title: "Fetch", category: "Utility", description: "Dog gets stick."}
  ]

  const category = [
    "All",
    "Basic",
    "Acting",
    "Communication",
    "Agility",
    "Scent Work",
    "Affection",
    "Self-Control",
    "Utility",
    "Cute Tricks"
  ];

  const handleClick = (category) => {
    // console.log(category) 
    if (category === "All") {
      setFilteredTricks(dogTricks)
    } else {
      const newTricks = dogTricks.filter(trick => trick.category === category)
      setFilteredTricks(newTricks)
    }
  }

  const [filteredTricks, setFilteredTricks] = useState(dogTricks);
  
  return (
    <>
      <header className='main-nav'>
        <h1>Find the Best Dog Tricks</h1>
        <p>Everything you and Blue need to impress.</p>
        <div className='category-nav'>
          {category.map((cat) => {return (<button className='category-button' key={cat} onClick={()=>handleClick(cat)}>{cat}</button>)})}
        </div>
      </header>
      <div className='content'>
        <div className='cards-container'>
          {filteredTricks.map((trick) => { return (<Trick key={trick.title} category={trick.category} title={trick.title} description={trick.description} />) })}
          
        </div>
      </div>
    </>
  )
}

export default App
