import * as React from "react";
import "./style.css";
import { Form } from "../../form";
import { Button } from "../../button";

export const PageAuth = () => {
  return (
    <Form>
      <h3>Вход</h3>
      <input placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <Button>Вход</Button>
      <a href="#">Создать аккаунт</a>
    </Form>
  );
};
