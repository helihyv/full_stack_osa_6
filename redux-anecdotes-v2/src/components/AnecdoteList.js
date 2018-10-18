import React from 'react'
import {voting} from '../reducers/anecdoteReducer'
import {notificationSetting, notificationClearing} from '../reducers/notificationReducer'
import Filter from './Filter'



class AnecdoteList extends React.Component {

  vote = (anecdote) => () => {
    this.props.store.dispatch(voting(anecdote.id))
    this.props.store.dispatch(notificationSetting(`you voted "${anecdote.content}"`))

    setTimeout(() => {
      this.props.store.dispatch(notificationClearing())
    }, 5000) 
  }

  render() {
    let anecdotes = this.props.store.getState().anecdotes
    const filterText = this.props.store.getState().filter 
    anecdotes = anecdotes.filter((anecdote) => anecdote.content.includes(filterText))

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store}/>
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

export default AnecdoteList
