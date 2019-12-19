import React, { useState } from 'react';
import { ProjectCreateTemplate } from '../../template';

const ProjectSelectPeriod = () => {
	// TODO ul 컴포넌트로 분리
	const [period, setPeriod] = useState(); 
	const list = [
		{value: 30 , text:"30 Days"},
		{value: 90 , text: "3 Months"}, 
		{value: 180 , text: "6 Months"}
	];
	return (
		<ProjectCreateTemplate
			pageTitle={`스터디 기간을
        알려주세요`}
			setState={setPeriod}
			selectList={list}
			nextLink="/new/perssonal"
		/>
	)
};

export default ProjectSelectPeriod;
