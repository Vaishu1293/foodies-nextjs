'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}) {

    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.control}>
                <input type="file" id={name} accept="image/png, image/jpeg" name={name} className={classes.input} ref={imageInput} />
                <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
            </div>
        </div>
    );
}