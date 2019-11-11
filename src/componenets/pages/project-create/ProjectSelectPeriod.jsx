import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCreate.scss';

const ProjectSelectPeriod = () => {
    // TODO ul 컴포넌트로 분리
    const list = ["30 Days", "3 Months", "6 Months"];
    const lis = list.map((item, index) => {
        let className = '';
        if(index === 0) {
            className = "selected";
        }
        return (
          <li key={item} className={className}>{item}</li>
        )
    });
    lis.push(<li><input placeholder="직접입력" /></li>);
    return (
      <div className="project-create">
        <header>
          <Link to="/">X</Link>
        </header>
        <h1>
        스터디 기간을 <br />
        알려주세요
        </h1>
        <ul>
          {lis}
        </ul>
        <nav> 좌 우 </nav>
      </div>
    );
};

export default ProjectSelectPeriod;
