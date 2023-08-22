import * as React from "react";
import "./style.css";
import { Button } from "../../button";

export const PageMain = () => {
  return (
    <div className="page-main">
      <section className="page-main__title-section">
        <div className="container">
          <div className="title-section">
            <h1 className="title-section__h1">Тандем</h1>
            <p className="title-section__thesis thesis">
              Сайт знакомств с любой точки мира
            </p>
            <Button className="title-section__button-create button">
              Создать аккаунт
            </Button>
          </div>
        </div>
      </section>
      <section className="page-main__description-section">
        <div className="container">
          <div className="description-section">
            <div className="description-section__flex-item-left"></div>
            <div className="description-section__flex-item-rigth">
              <p className="description-section__thesis thesis">
                Сайт знакомств с любой точки мира
              </p>
              <h3 className="description-section__h3">Тандем</h3>
              <p className="description-section__about about">
                Тандем – один из сервисов знакомств нового поколения, который
                выделяется среди прочих уникальным инновационным «умным
                поиском». Этот поиск работает следующим образом: Вы просто
                вводите в строку поиска описание того, с кем хотели бы
                познакомиться, например, «красивый парень из Питера, 25 лет»,
                или «прекрасная девушка 18-20 лет, Самара», и система выдает
                нужный результат.
              </p>
              <p className="description-section__about_bold about">
                Данный сервис позиционирует себя в качестве самой масштабной
                социальной сети в мире для знакомств с людьми, которые живут
                рядом друг с другом. То есть, это поиск людей, основанный на
                геолокации.
              </p>
              <div className="descripton-section__buttons-flex">
                <Button className="descripton-section__button-flex-item button">
                  Создать аккаунт
                </Button>
                <Button className="descripton-section__button-flex-item button">
                  Допустим
                </Button>
                <Button className="descripton-section__button-flex-item button">
                  Предположим
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
