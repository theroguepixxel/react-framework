# react-framework

## **Note:-** This is a work in progress and not complete.(I am still working on it.)


# Installation
To install this package, run:
```
npm install --save @trp/react-framework
```

This assumes that you are using `npm` as your package manager.

#Usage

In your React Project root file 
assuming here as

_index.js_

```
import React from 'react'
import ReactDOM from 'react-dom'
import ReactFramework from "@trp/react-framework"
import Config from "./Config"

// initialize the registry of the framework.
ReactFramework.initialiseRegistry(Config);

// Create your React App
let App = ReactFramework.createApp();

let mountNode = document.getElementById('app-root') 

if (mountNode && App !== null) {
    ReactDOM.render(<App />, mountNode);
}
```

Now in your `./Config.js` file

```
import { HelloWorldModule } from "./Modules/HelloWorld"


export default {
    modules: [
        HelloWorldModule
    ]
}

```

Define all your Modules in a `Modules` directory

Now in your `./Modules/HelloWorld` directory, create a file named `index.js`

In your module `index.js`
```
import { RFModule } from "@trp/react-framework/Module"
import React from "react"



class HelloWorldComponent extends React.Component {
    render() {
        <h1>I am your Hello World Component.</h1>
    }
}




@RFModule({
    ModuleName: "HelloWorld",   // name of your module
    layoutComponents: {
        "App.EmptyLayout": {    // The Layout where your Component gets rendered.
            main: [             // The Section of the Layout.
                HelloWorldComponent
            ]
        }
    }
})
export class HelloWorldModule {}
```

Here we are telling React Framework to render our `HelloWorldComponent` to render inside the `main` section of the layout named `EmptyLayout` of the main `App` module.