import React, { Component } from 'react';
import './Masthead.css';


export default class Element extends Component {

    componentDidMount() {
        require('../../js/external/twitter.js')();
    }

    render() {

        return (
            <div className="Masthead">
                <div className="Masthead__item">
                    <span className="Masthead__label white">Conçu, écrit et réalisé par</span>
                    <span className="Masthead__details">Florian Bouhot, Nicolas Grellier, Corentin Parbaud, Tom Vergez et Thomas Vinclair<a href="//twitter.com/cuej_info?lang=fr" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
            {/* CHAP 0 - Introduction */}
             
                <div className="Masthead__item">
                    <span className="Masthead__label white">Développeur</span>
                    <span className="Masthead__details">Raphaël Dardeau<a href="//twitter.com/iron_dev" className="twitter-follow-button" data-show-count="false" data-lang="fr" data-dnt="true">Suivre</a></span>
                </div>
                <div className="Masthead__item">
                    <span className="Masthead__label"></span>
                    <span className="Masthead__details"></span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Photos :</span> Juliette Mariage ; archives de Serge Aimetti ; collections personnelles de Guy et Annie Rossi</span>
                </div>
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Vidéos :</span> Florian Bouhot, Nicolas Grellier, Corentin Parbaud, Tom Vergez et Thomas Vinclair ; Ludovic Romanens</span>
                </div>
            
            <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Crédits iconographiques :</span> Cooking spaghetti by Juraj Sedlák, Applause by Oleksandr Panasovskyi, Repeat by Jessigue, Heart by Juicy Fish, Running by Mourad Mokrane, Swimming by National Park Service, US, Cyclist by corpus delicti, Podium by Fauzan Adiima, Chronometer by Aldric Rodríguez, Confetti by Angriawan Ditya Zulkarnain, worldwide by mynamepong, Medal by Milky - Digital innovation, Laurel Wreath by Charlotte Vogel from the Noun Project</span>
                </div>
            
                <div className="Masthead__item Masthead__item--full">
                    <span className="Masthead__details"><span className="Masthead__label white">Remerciements :</span> TF1 et Ludovic Romanens ; Juliette Mariage, Quentin Monaton, Thomas Raout et la famille Rossi</span>
                </div>
            </div>
        );
    }
}
