import React, { Component } from 'react';
import './Contacts.css';

import mailGif from './contacts-img/mail.gif';
import telegramGif from './contacts-img/telegram.gif';
import vkGif from './contacts-img/vk.gif';
import githubGif from './contacts-img/github.gif';
// Если файла github.gif нет — закомментируйте строку выше
// и раскомментируйте строку ниже:
// const githubGif = 'https://placehold.co/240x240/143e52/ffffff?text=GitHub';

export default class Contacts extends Component {
    render() {
        return (
            <section className="contacts">
                <header className="contacts-header">
                    <h1 className="contacts-title">Контакты</h1>
                    <p className="contacts-subtitle">
                        Свяжитесь со мной удобным способом
                    </p>
                </header>

                <div className="contacts-grid">
                    <a
                        className="contact-card"
                        href="mailto:shanginadv@tksu.ru"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={mailGif} alt="Учебная почта" />
                        <span className="contact-label">Учебная почта</span>
                        <span className="contact-value">shanginadv@tksu.ru</span>
                        <span className="contact-tooltip">
                            Сейчас откроется почтовый клиент
                        </span>
                    </a>

                    <a
                        className="contact-card"
                        href="https://t.me/da_shanya"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={telegramGif} alt="Telegram" />
                        <span className="contact-label">Telegram</span>
                        <span className="contact-value">@da_shanya</span>
                        <span className="contact-tooltip">
                            Сейчас перейдёшь в Telegram
                        </span>
                    </a>

                    <a
                        className="contact-card"
                        href="https://vk.ru/cyanstar"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={vkGif} alt="ВКонтакте" />
                        <span className="contact-label">ВКонтакте</span>
                        <span className="contact-value">vk.ru/cyanstar</span>
                        <span className="contact-tooltip">
                            Сейчас перейдёшь во ВКонтакте
                        </span>
                    </a>

                    <a
                        className="contact-card"
                        href="https://github.com/shanichk"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={githubGif} alt="GitHub" />
                        <span className="contact-label">GitHub</span>
                        <span className="contact-value">github.com/shanichk</span>
                        <span className="contact-tooltip">
                            Сейчас перейдёшь на GitHub
                        </span>
                    </a>
                </div>
            </section>
        );
    }
}