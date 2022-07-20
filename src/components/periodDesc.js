import React from 'react';

const PeriodDesc = ({ data }) => {
    const { attributes: { title, description } } = data;
    return (
        <div>
          <h2>
            {title}
          </h2>
          <p>
            {description}
          </p>
        </div>
    )
}

export default PeriodDesc