import React, { Component } from 'react';
import photo from '../components/photo1.png';
import star from '../components/star1.png';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <section className="hero">
                <img src={star} alt="" className="hero-star" />

                <div className="hero-avatar">
                    <img src={photo} alt="Дарья" />
                </div>

                <div className="hero-card">
                    <h1 className="hero-title">Привет! Я Дарья.</h1>
                </div>
\
                <div className="hero-text">
                    <p>
                        Я студентка КГУ им. К.Э.Циолковского, а это - мой сайт-партфолио. Я сделала его за короткий срок специально для стажировки, плюс я давно интересовалась веб-дизайном и пишу статью о старом инди-вебе, но об этом позже.
                    </p>
                    <p>
                        Здесь вы найдёте моё резюме, портфолио и контакты.
                        Заглядывайте!
                    </p>
                </div>
            </section>
        );
    }
}