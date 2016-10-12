import React, { Component } from 'react'
import Fetch from 'react-fetch'

class SurflineData extends Component{
  render() {
    React.propTypes = {
      Location: React.PropTypes.objectOf(React.PropTypes.string),
      Surf: React.PropTypes.any,
      _metadata: React.PropTypes.any,
      id: React.PropTypes.string,
      lat: React.PropTypes.string,
      lon: React.PropTypes.string,
      name: React.PropTypes.string,
      timeZoneString: React.PropTypes.string,
      timezone: React.PropTypes.number,
    }
    return (
      <div>
        <Fetch url="http://api.surfline.com/v1/forecasts/2134?resources=surf">
          <TestComponent />
        </Fetch>
      </div>
    )
  }
}

class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}

export default SurflineData