import React from 'react'
import * as characterStyles from './character.module.scss'

const Character = ({ data }) => {
  const { attributes: { name, description, picture } } = data;
  const image = picture.data && picture.data.attributes.url;
  return (
    <div className={characterStyles.character}>
        {image && <img src={`https://brzoza.wzks.uj.edu.pl/19_kwiecien/backend/${image}`} className={characterStyles.image} alt={name}></img>}
        <h2 className={characterStyles.name}>
          {name}
        </h2>
        <p>
          {description}
        </p>
    </div>
  )
}

export default Character