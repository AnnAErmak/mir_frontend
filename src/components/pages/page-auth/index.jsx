import * as React from 'react';
import './style.css';

export const PageAuth = () => {
    return (
        <div>
            <form className='form-auth'>
                <h3>Вход</h3>
                <input placeholder='Логин' />
                <input type='password' placeholder="Пароль"/>
                <button>Вход</button>
                <a href='#'>Создать аккаунт</a>
            </form>
        </div>
    );
};