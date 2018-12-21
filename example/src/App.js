import React, { Component } from 'react';
import { of } from 'rxjs';
import { VirtualList } from 'vist';

class App extends Component {
  constructor(props) {
    super(props);

    const data = new Array(5000).fill(0).map((_, i) => i);

    this.state = {
      data: of(data)
    };
  }

  render() {
    return (
      <VirtualList
        data$={this.state.data}
        options$={of({ height: 60 })}
        style={{ height: 400, border: '1px solid black' }}
      >
        {item => (
          <p style={{ height: 59, margin: 0, borderBottom: '1px solid green' }}>
            No. {item}
          </p>
        )}
      </VirtualList>
    );
  }
}

export default App;
