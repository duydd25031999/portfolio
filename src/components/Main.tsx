import React from 'react';
import ResumeLeft from './ResumeLeft.tsx'
import ResumeRight from './ResumeRight.tsx'
import { ResumeProps } from './app.type'

const Main: React.FC<ResumeProps> = ({ data }) => (
    <main className="main bd__container" id="main">
        <div className="resume">
            <ResumeLeft data={data} />
            <ResumeRight data={data} />
        </div>
    </main>
)

export default Main;
