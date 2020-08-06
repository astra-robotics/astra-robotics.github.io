import React from 'react';
import Nav from 'react-bootstrap/Nav'

function Navs(props) {
    const pages = props.pages;
    const navs = pages.map((page) => {
        return (<Nav.Link href={page.url}>{page.name}</Nav.Link>);
    });
    return navs;
}

export default Navs;