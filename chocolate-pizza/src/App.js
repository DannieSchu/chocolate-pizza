import React, { Component } from 'react';
import Header from './Organisms/header';
import Main from './Organisms/main';
import Footer from './Organisms/footer';
// import logo from './logo.svg';
import './App.css';

const smallLogo = { src: "logo.png", alt: "delicious logo" }
const paper = { src: "list-bg.png", id: "list-pic", alt: "ingredients background image"}
const socialLogos = 
    [
        { src: "fb-icon.png", alt:  "facebook icon" },
        { src: "twit-icon.png", alt: "twitter icon" },
        { src: "gp-icon.png", alt: "google icon" },
        { src: "insta-icon.png", alt:  "instagram icon" },
        { src: "flic-icon.png", alt:  "flic icon" },
        { src: "pint-icon.png", alt: "pinterest icon" },
        { src: "rss-icon.png", alt: "rss icon" },
        { src: "mail-icon.png", alt: "mail icon" },
    ];

const ingredients = [
        { type: "checkbox", name: "ingredients", value: "milk" },
        { type: "checkbox", name: "ingredients", value: "mascarpone" },
        { type: "checkbox", name: "ingredients", value: "salt" },
        { type: "checkbox", name: "ingredients", value: "figs" },
        { type: "checkbox", name: "ingredients", value: "brown-sugar" },
        { type: "checkbox", name: "ingredients", value: "water" },
        { type: "checkbox", name: "ingredients", value: "cream" },
        { type: "checkbox", name: "ingredients", value: "sugar", checked: true },
        { type: "checkbox", name: "ingredients", value: "yolks", checked: true },
        { type: "checkbox", name: "ingredients", value: "lemon" },
        { type: "checkbox", name: "ingredients", value: "butter" },
        { type: "checkbox", name: "ingredients", value: "pecans" },
];


export default class App extends Component {
  render() {
    return (
    <div className="App">
      <Header logo = {smallLogo} socialLogos = {socialLogos}  />
      <Main list = {ingredients} background = {paper} />
      <Footer logo = {smallLogo} />
    </div>
  );
}
}

export { ingredients, paper };