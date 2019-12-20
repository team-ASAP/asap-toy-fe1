import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../organisms/project-create';
import './ProjectCreate.scss';
import { PageTitle } from '../atoms/project';

const ProjectCreateTemplate = (props) => {
	const {pageTitle, selectList, state, setState, prevLink, nextLink} = props;
	const [isValid, setValid] = useState(false);
	useEffect(() => {
		if(!state) {
			setValid(false);
			return 
		}
		setValid(true);

	}, [state]);
	const onSelect = useCallback(event => {
		const eventTarget = event.target;
		const {value} = eventTarget;
		const prevSelected = eventTarget.closest("ul").querySelector(".selected");
		if(prevSelected) {
			prevSelected.classList.remove("selected")
		} 
		eventTarget.closest("li").classList.add("selected");
		setState(value);
	}, [state]);
	const onChange = useCallback(event => {
		const eventTarget = event.target;
		const {value} = eventTarget;
		setState(value);
	}, [state]);
   
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
			<PageTitle title={pageTitle} />
			<ul>
				{lis}
			</ul>
			<Navigation nextLink={nextLink} prevLink={prevLink} isValid={isValid} />
		</div>
	);
};

export default ProjectCreateTemplate;