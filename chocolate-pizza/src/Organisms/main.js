import React, { Component } from 'react';
import Heading from './heading';
import Text from '../Molecules/text';
import Checklist from '../Molecules/checklist';
import ingredients from '../App';
import paper from '../App';

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className="border" />
                <Heading />
                <Text />
                <Checklist list = {ingredients} background = {paper} />
                <section>
                    <div className="border"></div>
                    <div className="author-info">
                        <img src="van-pic.png" alt="vanessa" />
                        <div className="author-text">
                            <h3>Vanessa Stevenson</h3>
                            <p>Food Enthusiast, photography fan. Add a pinch of raw foodism and thats pretty much who I am.</p>
                        </div>
                        <button className="sub-heading">Share Recipe</button>
                    </div>
                </section>
            </main>
        )
    }
}