import React from 'react';

import Navigationitem from './Navigationitem/Navigationitem';
import classes from './Navigationitems.css';

const navigationitems = () => {
    return (
       <ul className = {classes.NavigationItems}>
           <Navigationitem link="/tasks" exact>Tasks</Navigationitem>
           <Navigationitem link ="/settings">Settings</Navigationitem>
           <Navigationitem link ="/Auth">Log in</Navigationitem>
       </ul>
    );
};

export default navigationitems;