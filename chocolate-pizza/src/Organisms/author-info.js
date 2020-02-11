import React, { Component } from 'react';

export default class AuthorInfo extends Component {
    render() {
        return (
            <section>
                <div className="border" />
                <div className="author-info">
                    <img 
                        src = {this.props.authorInfo.image} alt = "vanessa" />
                    <div className="author-text">
                        <h3>{this.props.authorInfo.author}</h3>
                        <p>{this.props.authorInfo.text}</p>
                    </div>
                    <button className="sub-heading">{this.props.authorInfo.button}</button>
                </div>
            </section>
        )
    }
}