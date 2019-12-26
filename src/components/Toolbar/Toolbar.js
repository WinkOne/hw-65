import React from 'react';
import './Toolbar.css';
import Navigations from "../Navigations/Navigations";




const Toolbar = () => {
    return (
        <header className={'Toolbar'}>
            <Navigations/>
        </header>
    );
};

export default Toolbar;