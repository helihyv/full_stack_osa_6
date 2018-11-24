import anecdotesService from '../services/anecdotes'

const reducer = (store = [], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1} ]
  }
  if (action.type === 'CREATE') {

    return [...store,  action.anecdote ]
  }

  if (action.type==='INIT_ANECDOTES') {
    return action.data
  }

  return store
}

export const anecdoteCreation = (anecdote) => {
  return {
    type: 'CREATE',
    anecdote 
  }
} 

export const voting = (id) => {
  return {
    type: 'VOTE',
    id 
  }
} 

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}
export default reducer