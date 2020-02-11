import React, { Component } from 'react';
// import socialLogos from '../Molecules/social-logos'

export default class Header extends Component {
render() {
    const elements = this.props.socialLogos.map(socialLogo => {
        return (
            <img
                src = {socialLogo.src} 
                alt = {socialLogo.alt} />
        )
    }
    )
    return (
        <header>
            <div className="logo-header">
                <img 
                        alt = {this.props.logo.alt} 
                        src = {this.props.logo.src} />
                <div>
                    <h2>Delicious</h2>
                    <p className="sub-heading">The Best Food Block on the Web.</p>
                </div>
            </div>
            <div className="social-logos">
                {elements} 
            </div>
        </header>
    )
}
}