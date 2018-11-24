import React from 'react'
import {anecdoteCreation} from '../reducers/anecdoteReducer'
import {notify} from '../reducers/notificationReducer'
import {connect} from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value

    this.props.anecdoteCreation(content)
   
    this.props.notify(`added the new anecdote "${content}"`, 10) 
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  anecdoteCreation,
  notify
}


export default connect (
  null,
  mapDispatchToProps
)(AnecdoteForm)
