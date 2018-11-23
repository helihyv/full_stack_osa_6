import React from 'react'
import {voting} from '../reducers/anecdoteReducer'
import {notificationSetting, notificationClearing} from '../reducers/notificationReducer'
import Filter from './Filter'
import PropTypes from 'prop-types'



class AnecdoteList extends React.Component {

  vote = (anecdote) => () => {
    this.context.store.dispatch(voting(anecdote.id))
    this.context.store.dispatch(notificationSetting(`you voted "${anecdote.content}"`))

    setTimeout(() => {
      this.context.store.dispatch(notificationClearing())
    }, 5000) 
  }

  render() {
    let anecdotes = this.context.store.getState().anecdotes
    const filterText = this.context.store.getState().filter 
    anecdotes = anecdotes.filter((anecdote) => anecdote.content.includes(filterText))

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote( anecdote )}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
