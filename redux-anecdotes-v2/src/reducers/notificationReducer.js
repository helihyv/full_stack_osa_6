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

export const notificationSetting = (text) => {
    return {
        type: 'SET_NOTIFICATION',
        text
    }

}

export const notificationClearing = () => {
    return {
        type: 'CLEAR_NOTIFICATION'
    }

}

export default notificationReducer