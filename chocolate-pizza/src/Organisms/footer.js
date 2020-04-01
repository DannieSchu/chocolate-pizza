import React, { Component } from 'react';

export default class Footer extends Component {
    render () {
        return (
            <footer>
                <img 
                    alt = {this.props.logo.alt} 
                    src = {this.props.logo.src} />
                <aside>
                    <p>Delicious &copy 2013 &#183 All Rights Reserved.</p>
                    <p>Proudly puplished with Ghost.</p>
                </aside>
            </footer>
        )
    }
}