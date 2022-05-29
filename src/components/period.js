import React from 'react';
import * as periodStyles from './period.module.scss'

const Period = ({ data }) => {
  const { attributes: { title, dates } } = data;
  return (
    <div className={periodStyles.periodSections}>
      <section className={periodStyles.period} id={title}>
        <h1 className={periodStyles.title}>
          {title}
        </h1>
        <p>
          {dates}
        </p>
        </section>
    </div>
    
  )
}

export default Period