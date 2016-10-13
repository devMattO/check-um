import React, { Component } from 'react'
import Fetch from 'react-fetch'
import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts'

class TestComponent extends Component{
  render(){
    const surf_conditions = this.props.Sort
    let config = {
      title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: Highcharts.getOptions().colors[2] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    }
    return (
      <div className="daHighchart">
        <ReactHighcharts config={config} />
      </div>
    )
  }
}


class SurflineData extends Component {
  render() {
  let forecastDates = []
  let waveHeights = []
  let greatSuccess = (data) => {
    console.log(data.Sort.dateStamp,'<----data.Sort.dateStamp');
      data.Sort.dateStamp.map((el,index)=>{
        forecastDates.push(el[0])
        return forecastDates
      })
      data.Sort.height1.map((el,index)=>{
        waveHeights.push(el[0])
        return waveHeights
      })
    this.setState({
      _forecastDates: forecastDates,
      _waveHeights: waveHeights
    })
  }
  console.log(forecastDates,'fd')
  console.log(waveHeights,'waveHeights')
    return (
      <div>
        <img role="presentation" src="http://camstills.cdn-surfline.com/pipelinecam/latest_full.jpg" />
        <Fetch onSuccess={greatSuccess} url="http://api.surfline.com/v1/forecasts/4750?resources=surf,analysis,wind,weather,tide,sort&days=25&getAllSpots=false&units=e&usenearshore=true&interpolate=true">
          <TestComponent />
        </Fetch>
      </div>
    )
  }
}

TestComponent.propTypes = {
  surf_conditions: React.PropTypes.objectOf(React.PropTypes.array)
}

SurflineData.propTypes = {
  banana: React.PropTypes.array
}


export default SurflineData