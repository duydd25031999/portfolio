import React from "react";
import ItemslistData from "./ItemslistData.jsx";

const TimelineContent = ({ isEducation, isExperence, isLast, item }) => (
  <div className="timeline__content">
    <div className="timeline__time">
      <span className="timeline__rounder"></span>
      {!isLast && <span className="timeline__line"></span>}
    </div>

    <div className="timeline__data bd-grid">
      <h3 className="timeline__title">{item.title}</h3>
      <span className="timeline__subtitle">
        {isExperence && item.company}
        {isEducation && item.studies}
        <span className="timeline__year">| {item.year}</span>
      </span>

      <div className="itemslist__data">
        {item.description.map((element, i) => (
          <ItemslistData isSkills list={element} key={i} />
        ))}
      </div>
    </div>
  </div>
);

TimelineContent.defaultProps = {
  isEducation: false,
  isExperence: false,
};

export default TimelineContent;
