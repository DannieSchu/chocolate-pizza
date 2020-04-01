import React, { Component } from 'react';

export default class Heading extends Component {
    render() {
        return (
            <section>
                <h1>Chocolate Pizza</h1>
                <div className="article-heading">
                    <p className="sub-heading">Posted on 15 Dec 2013 / Desserts</p>
                    <div className="print">
                        <img src="print-icon.png" alt="print icon" />
                        <p className="sub-heading">Print</p>
                    </div>
                </div>
                <img src="choco-pizza.png" id="choco-pizza" alt="chocolate pizza" />
            </section>   
        )
    }
}

