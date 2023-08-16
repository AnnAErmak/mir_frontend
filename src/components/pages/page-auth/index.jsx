import * as React from 'react';
import './style.css';
import {Form} from "../../form";

export const PageAuth = () => {
    return (
        <Form>
            <h3>Вход</h3>
            <input placeholder='Логин' />
            <input type='password' placeholder="Пароль"/>
            <button>Вход</button>
            <a href='#'>Создать аккаунт</a>
        </Form>
    );
};