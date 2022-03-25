import React, { useRef, useState } from 'react';


const MyLi = (props) => {
    
    const navRef = useRef()
    const isActive = () => {
        navRef.current.classList.add('active')
    }
    
    return <li ref = {navRef} className={props.className} onClick = {isActive}>{props.title}</li>;
};

export default MyLi;
