import './index.css'

const GameItem = props => {
  const {thumbNailDetails} = props
  const {id, thumbnailUrl} = thumbNailDetails

  return (
    <li className="img-container">
      <img src={thumbnailUrl} alt={id} className="thumbnail" />
    </li>
  )
}

export default GameItem
