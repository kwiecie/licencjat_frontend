import React, { useState } from 'react'
import PeriodDesc from './periodDesc'
import * as periodStyles from './period.module.scss'

const Period = ({ data, elements }) => {
  const { attributes: { title, dates, image }, id } = data;
  //console.log(image.data.attributes.url);
  const periodElements = elements.filter(el => el.attributes.period.data.id === id);
  const picture = image.data && image.data.attributes.url;
  const [activePeriod, setActivePeriod] = useState(null);
  return (
    <div className={periodStyles.periodSection}>
      <section className={periodStyles.period} id={title}>
        <h1 className={periodStyles.title}>
          {title}
        </h1>
        <p>
          {dates}
        </p>
        <div className={periodStyles.container}>
          {/* <div className={periodStyles.image}>
            image
          </div> */}
          {picture && <img src={`https://brzoza.wzks.uj.edu.pl/19_kwiecien/backend/${picture}`} 
            className={periodStyles.image} 
            alt={`${title} - ilustracja `}>
          </img>}
          <div className={periodStyles.desc}>  
            {periodElements.map((element, idx) => (
              <PeriodDesc 
                data={element} 
                key={element.id} 
                idx={idx}
                isActive={activePeriod === idx} 
                setActivePeriod={setActivePeriod} 
              />
            ))
            }
          </div>
        </div>
        </section>
    </div>
  )
}

export default Period