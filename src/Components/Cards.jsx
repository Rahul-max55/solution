import React , {useState} from 'react'

const Cards = ({ id, image, name, price }) => {
    
    const [zoom, setZoom] = useState("1")

    const handleOver = () => {
        setZoom("1.075")
    }
    const onMouseOver = () => {
        setZoom("1")
    }


  return (
      <div className="card" onMouseOver={handleOver} onMouseLeave={onMouseOver} style={{transform:`scale(${zoom})`}} >
          <img src={image} alt={name} />
          <div className="details">
              <h5>{name}</h5>
              <p>{price}</p>
          </div>
      </div>
  )
}

export default Cards