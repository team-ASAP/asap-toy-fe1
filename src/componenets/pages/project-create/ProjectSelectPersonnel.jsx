import React, { useState } from 'react';
import { ProjectCreateTemplate } from '../../template';

const ProjectSelectPersonnel = () => {
	const [personnel , setPersonnel ] = useState(); 
	const list = [
		{value: 2 , text:"1-2 명"},
		{value: 4 , text: "3-4 명"}, 
		{value: 6 , text:"5-6명"}];
	return (
		<ProjectCreateTemplate
			pageTitle={`최대 몇 사람과 
        함께 하고 싶습니까?`}
			state={personnel}
			setState={setPersonnel}
			selectList={list}
			prevLink="/new/period"
		/>
	)
};

export default ProjectSelectPersonnel;