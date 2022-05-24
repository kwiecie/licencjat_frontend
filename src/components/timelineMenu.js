import React from 'react';
import * as timelineMenuStyles from './timelinemenu.module.scss'

const TimelineMenu = ({ data }) => {
  const { attributes: { title, dates } } = data;
  return (
    <div className={timelineMenuStyles.timelineMenu}>
        <ul>
            <li>
                <a href={`#${title}`}>
                    {title}{dates}
                </a>
            </li>
        </ul>
    </div>
  )
}

export default TimelineMenu