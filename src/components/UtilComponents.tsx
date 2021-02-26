import React from "react";
import { TimelineProps, ListItemProps } from "./app.type";

export const Timeline: React.FC<TimelineProps> = ({
  title,
  where,
  time,
  last,
  experience,
  description,
}) => (
  <div className="timeline__content">
    <div className="timeline__time">
      <span className="timeline__rounder"></span>
      {!last && <span className="timeline__line"></span>}
    </div>

    {experience ? (
      <div className="bd__grid timeline__data ">
        <h3 className="timeline__title">{title}</h3>
        <span className="timeline__studies">{`${time} | ${where} `}</span>
        <p className="timeline__year">{description}</p>
      </div>
    ) : (
      <div className="timeline__data bd__grid">
        <h3 className="timeline__title">{title}</h3>
        <span className="timeline__studies">{where}</span>
        <span className="timeline__year">{time}</span>
      </div>
    )}
  </div>
); 

export const ListItem: React.FC<ListItemProps> = ({ text }) => (
  <li className="list-item__name">
    <span className="list-item__circle"></span>
    {text}
  </li>
);
