import React, { Component } from 'react';
import './Rezume.css';

import photo2 from './rezume-img/photo2.png';
import photo3 from './rezume-img/photo3.png';
import photo4 from './rezume-img/photo4.png';

export default class Rezume extends Component {
    state = {
        lightbox: null,
    };

    openLightbox = (src, alt) => {
        this.setState({ lightbox: { src, alt } });
    };

    closeLightbox = () => {
        this.setState({ lightbox: null });
    };

    render() {
        const { lightbox } = this.state;

        return (
            <section className="resume">
                <header className="resume-header">
                    <h1 className="resume-name">Шаньгина Дарья Витальевна</h1>
                    <p className="resume-role">15.02.2006 г.р.</p>
                    <ul className="resume-contacts">
                        <li>Калуга</li>
                        <li>ИСиТ 3 курс</li>
                        <li>КГУ им. К.Э. Циолковского</li>
                        <li>
                            <a href="https://github.com/shanichk" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </header>

                <section className="resume-block">
                    <h2>О себе</h2>
                    <p>
                        Студентка 3 курса направления «Информационные системы и технологии»
                        Инженерно-технологического института КГУ им. К.Э. Циолковского.
                        Разрабатываю учебные и личные проекты на Python и JavaScript. Учусь только на «отлично»,
                        совмещаю учёбу с проектной и творческой деятельностью.
                        Ищу стажировку во фронтенд-разработке, чтобы применить
                        навыки в реальных задачах. Хорошо умею работать в команде и частенько собираю группу для разработки
                        новых проектов. На данный момент подработываю репетитором информатики, SQL и Python.
                    </p>
                </section>

                <section className="resume-block">
                    <h2>Навыки</h2>
                    <div className="resume-skills">
                        <div className="resume-skill-group">
                            <h3>Языки и технологии</h3>
                            <ul>
                                <li>Python</li>
                                <li>SQL</li>
                                <li>HTML, CSS</li>
                                <li>React</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="resume-skill-group">
                            <h3>Главные достоинства</h3>
                            <ul>
                                <li>Люблю работать в команде</li>
                                <li>Готова усердно учиться и работать</li>
                                <li>Имею творческий взгляд</li>
                            </ul>
                        </div>
                        <div className="resume-skill-group">
                            <h3>Проекты в разработке</h3>
                            <ul>
                                <li>Этот сайт</li>
                                <li>Обучающая сюжетная игра для подготовки к поступлению на ИСиТ</li>
                                <li>Свой личный уникальный сайт для тестирования возможностей веб-разработки</li>
                                <li>Обучающее медицинское пространство (заморожено)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="resume-block">
                    <h2>Проекты</h2>

                    <article className="resume-project">
                        <h3>Сайт-портфолио на React</h3>
                        <p className="resume-project-meta">2026 · личный проект</p>
                        <p>
                            Сайт на React с маршрутизацией
                            через react-router-dom: разделы «Резюме», «Портфолио»,
                            «Контакты». Адаптивная вёрстка на Bootstrap.
                        </p>
                        <p className="resume-stack">
                            Стек: JavaScript, React, Bootstrap, CSS.
                        </p>
                    </article>

                    <article className="resume-project">
                        <h3>Проект мобильного приложения для туризма</h3>
                        <p className="resume-project-meta">
                            2026 · конкурс молодёжных проектов Калужской области
                        </p>
                        <p>
                            В составе команды разработала проект мобильного
                            приложения для развития молодёжного туризма в регионе.
                            Отвечала за проработку пользовательских сценариев
                            и презентацию проекта.
                        </p>
                        <p className="resume-stack">
                            Стек: проектирование, презентация, командная работа.
                        </p>

                        <div className="resume-photos">
                            <figure className="resume-photo">
                                <img
                                    src={photo2}
                                    alt="Проект мобильного приложения для туризма"
                                    onClick={() =>
                                        this.openLightbox(photo2, 'Проект мобильного приложения для туризма')
                                    }
                                />
                                <figcaption>Проект мобильного приложения для туризма</figcaption>
                            </figure>
                        </div>
                    </article>

                    <article className="resume-project">
                        <h3>Telegram-бот с расписанием КГУ</h3>
                        <p className="resume-project-meta">
                            2025 · университетский хакатон
                        </p>
                        <p>
                            В составе команды разработала Telegram-бота, который
                            показывает актуальное расписание занятий КГУ
                            им. К.Э. Циолковского. Отвечала за проектирование
                            логики взаимодействия с пользователем: команды,
                            сценарии запросов, формат вывода расписания по группе
                            и дню недели. Бот собран на Python с использованием
                            библиотеки для Telegram Bot API и парсит данные
                            с сайта университета.
                        </p>
                        <p className="resume-stack">
                            Стек: Python, Telegram Bot API, парсинг данных,
                            командная работа.
                        </p>

                        <div className="resume-photos">
                            <figure className="resume-photo">
                                <img
                                    src={photo3}
                                    alt="Telegram-бот с расписанием КГУ"
                                    onClick={() =>
                                        this.openLightbox(photo3, 'Telegram-бот с расписанием КГУ')
                                    }
                                />
                                <figcaption>Интерфейс бота в Telegram</figcaption>
                            </figure>
                        </div>
                    </article>

                    <article className="resume-project">
                        <h3>Приложение для обучения биологии и анатомии</h3>
                        <p className="resume-project-meta">
                            2024 · региональный этап «Я в деле»
                        </p>
                        <p>
                            В роли лидера команды «ByteBuddies» за две недели
                            подготовила альфа-версию приложения и интерактивный
                            стенд с динамичной моделью сердца и лотереей.
                            По итогам конкурса команда заняла 2 место.
                        </p>
                        <p className="resume-stack">
                            Стек: python, проектный менеджмент, командная работа, презентация.
                        </p>

                        <div className="resume-photos">
                            <figure className="resume-photo">
                                <img
                                    src={photo4}
                                    alt="Наш стенд проекта"
                                    onClick={() =>
                                        this.openLightbox(photo4, 'Наш стенд проекта')
                                    }
                                />
                                <figcaption>Наш стенд проекта</figcaption>
                            </figure>
                        </div>
                    </article>
                </section>

                <section className="resume-block">
                    <h2>Образование</h2>
                    <p>
                        <strong>КГУ им. К.Э. Циолковского</strong>,
                        Инженерно-технологический институт, 2024 — наст. время.
                    </p>
                    <p>
                        Направление 09.03.02 «Информационные системы и технологии»,
                        3 курс. Успеваемость — только «отлично».
                    </p>
                </section>

                {lightbox && (
                    <div className="lightbox" onClick={this.closeLightbox}>
                        <img src={lightbox.src} alt={lightbox.alt} />
                    </div>
                )}
            </section>
        );
    }
}