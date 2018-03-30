import React, { Component } from 'react'
import { arrayMove } from 'react-sortable-hoc'

import Input from '../components/Input'
import Tags from './Tags'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            tags: ["Javascript", "UI"],
            text: ""
        }

        this.handleClickContinue = this.handleClickContinue.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.onSortEnd = this.onSortEnd.bind(this)
    }

    // Log array when continue button clicked
    handleClickContinue(e) {
        console.log(this.state.tags)
    }

    // Handles changes to tag input
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    // Add new tag
    // prevent page reload on return key
    handleAdd(e) {
        e.preventDefault()
        if(this.state.text.trim()) {
            this.setState((prevState) => {
                return {
                    tags: [...prevState.tags, prevState.text],
                    text: ""
                }                
            })
        }
    }

    // Deletes particular tag
    handleDelete(text) {
        this.setState((prevState) => {
            return {
                tags: prevState.tags.filter(tag => tag !== text)
            }
        })        
    }

    // Change order of array in state when tags reordered
    onSortEnd({oldIndex, newIndex}) {
        this.setState((prevState) => {
            return {
                tags: arrayMove(this.state.tags, oldIndex, newIndex)
            }
        })
    }

    render() {
        return (
            <div className="tags-form">
                <Input 
                    text={this.state.text} 
                    handleChange={this.handleChange} 
                    handleAdd={this.handleAdd}
                    inputDisabled={this.state.tags.length >= 10}
                    addDisabled={!this.state.text.trim()}
                />
                <Tags 
                    tags={this.state.tags} 
                    deleteTag={this.handleDelete}
                    axis="xy"
                    onSortEnd={this.onSortEnd}
                />
                <button 
                    type="submit"
                    onClick={this.handleClickContinue}
                    className="button primary"
                    style={{ width: '30.5rem' }}
                >
                    Continue
                </button>
            </div>
        )
    }
}

export default Form