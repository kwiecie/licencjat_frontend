import React from 'react';

import * as perioddescStyles from './perioddesc.module.scss'


const PeriodDesc = ({ data, isActive, setActivePeriod, idx }) => {
    const { attributes: { title, description } } = data;
    console.log(data);
    const handleToggle = () => {
      setActivePeriod(isActive ? null : idx);
    }
    return (
        <div className={perioddescStyles[isActive ? "divOpen" : "divClosed"]}>
          <button className={perioddescStyles[isActive ? "buttonClosed" : "buttonOpen"]} onClick={handleToggle}>
            <h2>
              {title}
            </h2>
          </button>
          <p className={perioddescStyles[isActive ? " " : "descClosed"]} activeClassName={perioddescStyles.activeDesc}>
            {description}
          </p>
        </div>
    )
}

export default PeriodDesc