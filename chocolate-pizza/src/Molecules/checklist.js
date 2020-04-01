import React, { Component } from 'react';

export default class Checklist extends Component {
    render() {
        const listItems = this.props.ingredients.map(ingredient => {
            return (
                <label>
                    <input
                        type = {ingredient.type}
                        name = {ingredient.name}
                        value = {ingredient.value}
                        checked = {ingredient.checked} />
                    {ingredient.text}
                </label>
            )
        }
        )

        return (
            <section>
                <img 
                    src = {this.props.paper.src} 
                    id = {this.props.paper.id}
                    alt = {this.props.paper.alt} />
                <form>
                    {listItems}
                </form>
            </section>
        )
    }
}
