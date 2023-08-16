import * as React from 'react';
import './style.css';
import {Form} from "../../form";

export const PageReg = () => {
    return (
        <Form>
            <h3>Регистрация</h3>
            <input placeholder='Имя' />
            <input type='email' placeholder="email"/>
            <input type='password' placeholder="пароль"/>
            <input type='password' placeholder="повторить пароль"/>
            <div>
                <input type='checkbox' className='checkbox'  />
                <p>By pressing Continue, you agree to the
                    <a href='#'>Terms of Service</a> and
                    <a href='#'>Privacy Policy</a>
                </p>
            </div>
            <button>Создать аккаунт</button>
        </Form>
    );
};