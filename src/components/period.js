import React from 'react';
import PeriodDesc from './periodDesc';

import * as periodStyles from './period.module.scss'

const Period = ({ data, elements }) => {
  const { attributes: { title, dates }, id } = data;
  const periodElements = elements.filter(el => el.attributes.period.data.id === id);
  return (
    <div className={periodStyles.periodSection}>
      <section className={periodStyles.period} id={title}>
        <h1 className={periodStyles.title}>
          {title}
        </h1>
        <p>
          {dates}
        </p>
        {periodElements.map(element => (
            <PeriodDesc data={element} key={element.id} />
          ))
        }
        </section>
    </div>
  )
}

export default Period