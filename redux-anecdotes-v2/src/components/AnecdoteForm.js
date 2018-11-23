import React from 'react'
import {anecdoteCreation} from '../reducers/anecdoteReducer'
import {notificationSetting, notificationClearing} from '../reducers/notificationReducer'
import {connect} from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.anecdoteCreation(content)
  
    this.props.notificationSetting(`added the new anecdote "${e.target.anecdote.value}"`) 

    e.target.anecdote.value = ''
    
    setTimeout( () => {
      this.props.notificationClearing()
    }, 5000)

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
  notificationSetting,
  notificationClearing
}


export default connect (
  null,
  mapDispatchToProps
)(AnecdoteForm)
