import React, { Component } from 'react'

import Input from './Input'
import Tags from './Tags'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            tags: ["Javascript", "UI"],
            text: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.tags)
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleAdd(e) {
        if(this.state.text.trim()) {
            this.setState((prevState) => {
                return {
                    tags: [...prevState.tags, prevState.text],
                    text: ""
                }                
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    text={this.state.text} 
                    handleChange={this.handleChange} 
                    handleAdd={this.handleAdd}
                />
                <Tags tags={this.state.tags}/>
                <input type="submit" value="Continue"/>
            </form>
        )
    }
}


export default Form