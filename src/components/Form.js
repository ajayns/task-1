import React, { Component } from 'react'
import { arrayMove } from 'react-sortable-hoc'

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
        this.handleDelete = this.handleDelete.bind(this)
        this.onSortEnd = this.onSortEnd.bind(this)
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

    handleDelete(text) {
        this.setState((prevState) => {
            return {
                tags: prevState.tags.filter(tag => tag !== text)
            }
        })        
    }

    onSortEnd({oldIndex, newIndex}) {
        this.setState((prevState) => {
            return {
                tags: arrayMove(this.state.tags, oldIndex, newIndex)
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                    text={this.state.text} 
                    handleChange={this.handleChange} 
                    handleAdd={this.handleAdd}
                    inputDisabled={this.state.tags.length >= 10}
                    addDisabled={!this.state.text.trim()}
                />
                <Tags 
                    tags={this.state.tags} 
                    deleteTodo={this.handleDelete}
                    axis="xy"
                    onSortEnd={this.onSortEnd}
                />
                <input 
                    type="submit"
                    value="Continue"
                    className="button primary"
                    style={{ width: '30.5rem' }}
                />
            </form>
        )
    }
}


export default Form