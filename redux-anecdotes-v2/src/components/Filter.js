import React from 'react'
import {filterSetting} from '../reducers/filterReducer'
import PropTypes from 'prop-types'

class Filter extends React.Component {
    handleChange = (event) => {
      // input-kentän arvo muuttujassa event.target.value
      this.context.store.dispatch(filterSetting(event.target.value))
    }
    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
          filter <input onChange={this.handleChange}/>
        </div>
      )
    }
}

Filter.contextTypes = {
  store: PropTypes.object
}

export default Filter