import React from "react";

const TimelineContent = ({ isEducation, isExperence, isLast, item }) => (
    <div className="timeline__content">
        <div className="timeline__time">
            <span className="timeline__rounder"></span>
            {!isLast && <span className="timeline__line"></span>}
        </div>

        <div className="timeline__data bd-grid">
            <h3 className="timeline__title">{item.title}</h3>
            {
                isEducation && (
                    <>
                        <span className="timeline__studies">{item.studies}</span>
                        <span className="timeline__year">{item.year}</span>
                    </>
                )
            }

            {
                isExperence && (
                    <>
                        <span className="timeline__company">{item.company}</span>
                        <span className="timeline__description">{item.description}</span>
                    </>
                )
            }

        </div>
    </div>
)

TimelineContent.defaultProps = {
    isEducation: false,
    isExperence: false,
}

export default TimelineContent;