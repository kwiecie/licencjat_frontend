import React from 'react';

import * as perioddescStyles from './perioddesc.module.scss'


const PeriodDesc = ({ data }) => {
    const { attributes: { title, description } } = data;
    return (
        <div className={perioddescStyles.div}>
          <h2>
            {title}
          </h2>
          <a className={perioddescStyles.desc} activeClassName={perioddescStyles.activeDesc}>
            {description}
          </a>
        </div>
    )
}

export default PeriodDesc