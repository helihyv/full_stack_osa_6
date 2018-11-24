import React from 'react'
import {voting} from '../reducers/anecdoteReducer'
import {notificationSetting, notificationClearing} from '../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'



class AnecdoteList extends React.Component {

  vote = (anecdote) => async () => {
    
    this.props.voting(anecdote)
    this.props.notificationSetting(`you voted "${anecdote.content}"`)

    setTimeout(() => {
      this.props.notificationClearing()
    }, 5000) 
  }

  render() {

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {this.props.visibleAnecdotes.map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
  const filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.includes(filter))
  return filteredAnecdotes.sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps =  {
  voting,
  notificationSetting,
  notificationClearing}


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
