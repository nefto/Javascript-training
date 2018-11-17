import React from 'react';

import logoImage from '../../assets/Logo/logo.png';
import classes from './Logo.css'

const logo = (props) => {
    return (
        <div className={classes.Logo}
            style ={{height: props.height}}>
            <img src={logoImage} alt="Logo"/>
        </div>
    );
};

export default logo;