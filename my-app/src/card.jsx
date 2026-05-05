import './card.css'

export function CardComp({ name, img, weight, height }) {
  
  return(
    <div className="pokemon-card">
      <h2 className="pokemon-name">{name}</h2>
      <img className="pokemon-img" src={img}></img>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  )
}