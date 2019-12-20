import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
	const {prevLink, nextLink, isValid} = props;
	const onclickNext = (event) => {
		if(event.target.classList.contains('disable')) 
			event.preventDefault();
	};
	return (
		<nav>
			{prevLink ?<Link to={prevLink}>이전</Link> : ''}
			{nextLink? (
				<Link
					to={nextLink}
					className={!isValid ? 'disable' : ''}
					onClick={onclickNext}
				>
                    다음
				</Link>
			) : ''}
		</nav>
	);
};

export default Navigation;