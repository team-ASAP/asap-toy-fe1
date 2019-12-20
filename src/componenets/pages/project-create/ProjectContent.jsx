import React,{useState, useCallback, useEffect}from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../../organisms/project-create';
import '../../template/ProjectCreate.scss';
import { PageTitle } from '../../atoms/project';

const ProjectContent = () => {
	const [title, setTitle] = useState(''); 
	const [isValid, setValid] = useState(false);
    
	useEffect(() => {
		if(title.trim().length === 0) {
			setValid(false);
			return 
		}
		setValid(true);

	}, [title]);

	const onTitleChange = useCallback(e => {
		setTitle(e.target.value);
	}, [title]); 

    
	const onContentChange = useCallback(e => {
		setTitle(e.target.value);
	}, [title]); 

	return (
		<div className="project-create">
			<header>
				<Link to="/">X</Link>
			</header>
			<PageTitle title="어떤 프로젝트를 만들고 싶으신가요?" />
			<input type="text" pattern="\d*" placeholder="스터디 제목을 입력해주세요" onChange={onTitleChange} />
			<textarea placeholder="스터디를 소개해주세요" onChange={onContentChange} />
			<Navigation isValid={isValid} nextLink="/new/period" />
		</div>
	)
};

export default ProjectContent;