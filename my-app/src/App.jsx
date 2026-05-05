import { useRef, useState } from 'react'
import './App.css'
import { CardComp } from './card'

function Search({ setName, setImg, setWeight, setHeight }) {
  const inputRef = useRef(null);

  async function getData(name) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      return data;
    } catch {
      return null;
    }
  }

  async function handleClick() {
    const currName = inputRef.current.value;
    setName("Loading...");

    const data = await getData(currName);
    if(!data) {
      setName("Pokemon Not Found");
      setImg("https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png")
      setWeight("N/A");
      setHeight("N/A");
    }
    else {
      setName(data.name);
      setImg(data.sprites.front_default);
      setWeight(data.weight);
      setHeight(data.height);
    }
  }

  return(
    <div>
      <input placeholder='Ditto' ref={inputRef}></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

function App() {
  const [name, setName] = useState("Ditto");
  const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(3)

  return (
    <>
      <h1>Welcome To Pokesearch</h1>

      <Search 
        setName={setName} 
        setImg={setImg} 
        setWeight={setWeight} 
        setHeight={setHeight}
      />


      <div className='pokemon-container'>

        <CardComp 
          name={name} 
          img={img}
          weight={weight}
          height={height}
        />

      </div>
    </>
  )
}

export default App
