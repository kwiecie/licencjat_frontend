import React, { useState } from 'react';
import PeriodDesc from './periodDesc';

import * as periodStyles from './period.module.scss'

const Period = ({ data, elements }) => {
  const { attributes: { title, dates }, id } = data;
  const periodElements = elements.filter(el => el.attributes.period.data.id === id);
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
          <div className={periodStyles.image}>
            image
          </div>
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