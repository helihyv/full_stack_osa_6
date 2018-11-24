import React from 'react'
import {voting} from '../reducers/anecdoteReducer'
import {notify} from '../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'



class AnecdoteList extends React.Component {

  vote = (anecdote) => async () => {
    
    this.props.voting(anecdote)
    this.props.notify(`you voted "${anecdote.content}"`,10) 
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
  notify
}


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
