const initialState =  ''

const notificationReducer = (state = initialState, action) => {

  switch (action.type) {
  default:
    return state
  case 'SET_NOTIFICATION':
    return action.text
  case 'CLEAR_NOTIFICATION':
    return initialState
  }
}


export const notify = (text, seconds) => {
  return async (dispatch) => {

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })

    },seconds*1000)

    dispatch({
      type: 'SET_NOTIFICATION',
      text
    })
  }

}

export default notificationReducer