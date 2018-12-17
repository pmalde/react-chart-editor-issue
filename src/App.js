import React, {Component} from 'react';
import plotly from 'plotly.js/dist/plotly';
import MyPlotlyEditor from './MyPlotlyEditor';
import 'react-chart-editor/lib/react-chart-editor.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+points',
          marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ],
      layout: {width: 640, height: 480, title: 'A Fancy Plot'},
      config: {editable: true}
    }
  }

  render() {
    return (
      <div>
        <MyPlotlyEditor
          data={this.state.data}
          layout={this.state.layout}
          config={this.state.config}
          plotly={plotly}
        />
      </div>
    );
  }
}

export default App;
