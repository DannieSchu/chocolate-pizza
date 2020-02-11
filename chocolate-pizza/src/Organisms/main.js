import React, { Component } from 'react';
import Heading from './heading';
import Text from '../Molecules/text';
import Checklist from '../Molecules/checklist';
import AuthorInfo from '../Organisms/author-info';
// import ingredients from '../App';
// import paper from '../App';

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className="border" />
                <Heading />
                <Text />
                <Checklist ingredients = {this.props.ingredients} paper = {this.props.paper} />
                <AuthorInfo authorInfo = {this.props.authorInfo} />  
            </main>
        )
    }
}