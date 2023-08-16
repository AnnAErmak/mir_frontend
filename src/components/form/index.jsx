import * as React from 'react';
import './style.css'

export const Form = ({children}) => {
    return (
            <form className='form'>
                {children}
            </form>
    );
};