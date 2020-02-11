import React, { Component } from 'react';
import Header from './Organisms/header';
import Main from './Organisms/main';
import Footer from './Organisms/footer';
import './App.css';

const authorInfo = {
  author: 'Vanessa Stevenson',
  text: `Food Enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.`,
  image: 'van-pic.png',
  button: 'Share Recipe'
}
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
        { type: "checkbox", name: "ingredients", value: "milk", text: "1/2 cup mascarpone" },
        { type: "checkbox", name: "ingredients", value: "mascarpone", text: "1/2 cup mascarpone" },
        { type: "checkbox", name: "ingredients", value: "salt", text: "1/2 tsp pink salt" },
        { type: "checkbox", name: "ingredients", value: "figs", text: "1lb Black Mission Figs" },
        { type: "checkbox", name: "ingredients", value: "brown-sugar", text: "1/2 cup brown sugar" },
        { type: "checkbox", name: "ingredients", value: "water", text: "2-4 tbsp water" },
        { type: "checkbox", name: "ingredients", value: "cream", text: "1 1/2 cups heavy cream" },
        { type: "checkbox", name: "ingredients", value: "sugar", text: "1/3 granulated sugar", checked: true },
        { type: "checkbox", name: "ingredients", value: "yolks", text: "egg yolks", checked: true },
        { type: "checkbox", name: "ingredients", value: "lemon", text: "1 lemon, juiced" },
        { type: "checkbox", name: "ingredients", value: "butter", text: "2 tbsp butter" },
        { type: "checkbox", name: "ingredients", value: "pecans", text: "1 cup honey roasted pecans, roughly chopped" },
];

export default class App extends Component {
  render() {
    return (
    <div className="App">
      <Header logo = {smallLogo} socialLogos = {socialLogos}  />
      <Main ingredients = {ingredients} paper = {paper} authorInfo = {authorInfo}/>
      <Footer logo = {smallLogo} />
    </div>
    );
  }
}