import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../organisms/project-create';
import './ProjectCreate.scss';

const ProjectCreateTemplate = (props) => {
	const {pageTitle, selectList, setState, prevLink, nextLink} = props;
	const onSelect = (event) => {
		const eventTarget = event.target;
		const {value} = eventTarget;
		const prevSelected = eventTarget.closest("ul").querySelector(".selected");
		if(prevSelected) {
			prevSelected.classList.remove("selected")
		} 
		eventTarget.closest("li").classList.add("selected");
		setState(value);
	};
	const onChange = (event) => {
		const eventTarget = event.target;
		const {value} = eventTarget;
		setState(value);
	}
   
	const lis = selectList.map((item) => {
		return (
			<li key={item.value} value={item.value} onClick={onSelect}>{item.text}</li>
		)
	});
	lis.push(
		<li key={0} onClick={onSelect}>
			<input type="number" pattern="\d*" placeholder="직접입력" onChange={onChange} />
		</li>
	);
	return (
		<div className="project-create">
			<header>
				<Link to="/">X</Link>
			</header>
			<h1>{pageTitle}</h1>
			<ul>
				{lis}
			</ul>
			<Navigation nextLink={nextLink} prevLink={prevLink} />
		</div>
	);
};

export default ProjectCreateTemplate;