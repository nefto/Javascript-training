import React from 'react';

import classes from'./Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case 'input':
            inputElement = <input className={classes.InputElement}  onChange={props.changed} type={props.type} placeholder={props.placeholder}/>
            break;
        case 'textarea':
            inputElement = <textarea className={classes.InputElement}  onChange={props.changed} type={props.type} placeholder={props.placeholder}/>
            break;
            case 'select':
            let options = [];
            for (const key in props.options) {
                if (props.options.hasOwnProperty(key)) {
                    const element = props.options[key];
                   
                    options.push(
                        (
                            <option key={element.value} value={element.value}>{element.displayValue}</option>
                        )
                    )
                }
            }
            inputElement = <select className={classes.InputElement} onChange={props.changed} type={props.type} placeholder={props.placeholder}>{options}</select>
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props}/>
            break;
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;