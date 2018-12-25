# vist

> Virtual-list component build with react and rxjs

[![NPM](https://img.shields.io/npm/v/vist.svg)](https://www.npmjs.com/package/vist)

## Selling Point

Vist won't create or remove any DOM when you scroll the list, it will reuse the existing DOM and only change their position and data. But when you resize your window, you'll find the DOM's number is changed, so your virtual list will always have just right number of DOM.

## Install

```bash
npm install --save vist
```

## Usage

```javascript
import React from 'react'
import { VirtualList } from 'vist'

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
```

## Props

* `data$`: `Observable<any>` data source of the list.
* `options$`: `Observable<IVirtualListOptions>` options of the virtual list.
* `style`: style of VirtualList container.

IVirtualListOptions

* `height`: `number` item height, it's **necessary**, vist use this property to calculate how many rows should be rendered actually.
* `spare`: `number` default 3 spare rows out of the view.
* `sticky`: `boolean` default true, which means whether scrollTop need to stick to the container's top when the data is changed.

## License

MIT © [musicq](https://github.com/musicq)
