import React from 'react'

function Cards({ image, name, url, desc }) {
  return (
    <div className="card" style={{ width: '18rem', height: '21rem', padding: '10px', margin: '10px' }}>
      <img src={image} className="card-img" alt={name} style={{ width: '6rem', margin: '0 auto' }} />
      <div className="card-body mt-5">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <a href={url} class="btn btn-primary">Website</a>
      </div>
    </div>
  )
}

export default Cards;