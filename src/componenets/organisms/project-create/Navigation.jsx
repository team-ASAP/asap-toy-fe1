import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const {prevLink, nextLink} = props;
    return (
      <nav>
        {prevLink ?<Link to={prevLink}>좌</Link> : ''}
        {nextLink? <Link to={nextLink}>우</Link> : ''}
      </nav>
    );
};

export default Navigation;