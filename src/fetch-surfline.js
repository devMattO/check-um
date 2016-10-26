import React, { Component } from 'react'

class TestComponent extends Component {
  constructor() {
      super()
      this.state = {
        data : {},
      }
      // Since the callback function changes context - we need to bind the context of the React component so that we can update state once we receive the data from Reddit
      this.onSurflineData = this.onSurflineData.bind(this);
  }
  onSurflineData ( data ) {
      let someStuff = data.target.response
      console.log(someStuff,'<----data');
      const dude = JSON.stringify(data.currentTarget.response)
      this.setState({
        analysis: dude,
        sort: dude.Sort,
        shtuff: someStuff
      })
  }
  componentDidMount () {
    let oReq = new XMLHttpRequest();
      oReq.addEventListener("load", this.onSurflineData);
      oReq.open("GET", "http://api.surfline.com/v1/forecasts/4750?resources=surf,analysis,sort&days=25&getAllSpots=false&units=e&usenearshore=true");
      oReq.setRequestHeader('Content-Type', 'application/json');
      oReq.send();
  }
  render(){
    return (
      <div className="daHighchart" >
        <div className="reportCardContainer">
          <div className="reportCardContent">
            <img role="presentation" src="http://camstills.cdn-surfline.com/pipelinecam/latest_full.jpg" />
            <TestComponent2 analysis={this.state.analysis} />
          </div>
        </div>
      </div>
    )
  }
}

class TestComponent2 extends Component {
  render(){
    let analysis = this.props.analysis
    console.log(typeof analysis,'<----thissssss');
    return (
      <div className="daHighchart" >
        <object classID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="543" height="425" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="movie" value="http://www.swellinfo.com/fl-home-embed.swf" /><param name="quality" value="high" /><param name="allowScriptAccess" value="always" /><param name="wmode" value="opaque" /><param name="FlashVars" value="timezone=HT&wave_map=enp_haw" /><embed src="http://www.swellinfo.com/fl-home-embed.swf" FlashVars="timezone=HT&wave_map=enp_haw" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" allowScriptAccess="always" type="application/x-shockwave-flash" width="543" height="425" wmode="opaque"></embed></object>
      </div>
    )
  }
}

TestComponent2.propTypes = {
  analysis: React.PropTypes.string
}

export default TestComponent
