/**
 * @description: React - a javascript library for building interfaces
 * @use - use for developing SPAs
 *  -virtual DOM - has
 *  -functional programming - uses
 *  -immutable data - aims to follow the principlas of 
 *      -make copies of object and replace them instead of modifying the original
 *  - React Applications are collections of components
 *  - Components - small User Interface Elements that display data as it changes over time
 * */


/**
 * @description: Virtual DOM 
 *  - modifying js objects is faster than modifying DOM objects
 *  - React maintains a virtual DOM and modifies real DOM only when it needs to
 *  - Never reads from the real DOM
 */

/**
 * @description: JSX - Javascript as XML
 *  -use tags to replace React.createElement'
 *  -in JSX we use className instead of class, because class is a reserverd word
 *  - JSX expressions are in {}e.g. {this.doStuff()}
 */


/**
 * @description: Babel - takes JSX and turns it into createElement calls
 * - A transpiler
 * - Works for JSX and ES6 and beyond 
 * - Babel needs to be included with NPM. 
 * - Need to mark tags to be transpiled with "text/babel"
 */
<script type="text/babel">
    ReactDOM.render(<ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>,
                document.getElementById('react-container'))
        </script>


/**
 * @description: Components - The User Interface elements that display data as it changes over time
 *  - Componets should be capitalized. 
 *  - takes in an obj
 *  - has a render function
 *  - optionally can have other methods
 *  - can use React.createClass or ES6 class
 *  - Stateless component Creation via const Comp = () => {return...}
 */
var MyComponent = React.createClass({
    render() {

    }
})

//vs 
createClass MyComponent extends React.Component {
    render() {
        return <div>
            <h1>Hello World</h1>
            <p>Component Numero Uno</p>
        </div>
    }
}
//vs Stateless Component - simple function which returns a react element
const MyComponent = () => {
                return <div>
                        <h1>Hello World</h1>
                        <p>This is my first React component!</p>
                    </div>
            }


/**
 * @description: properties
 *  -similar to adding attributes in HTML
 */
 var MyComponent = React.createClass({
                render() {
                    return <div>
                        <h1>{this.props.text}</h1>/*--HERE--*/
                    </div>
                }
            })

            ReactDOM.render(<MyComponent text="Hello World"/>,
                document.getElementById('react-container'))

    /**
     * @description: {this.props.children}
     *  - The content that is withing an instance of a Component.
     *  - We can reference it in your React Class with {this.props.children}
     */
    //{this.props.children} would be "This is 1" in the below 
    <MyComponent text="Hello World">
                    THis is 1
                    </MyComponent>

    //To show that content our component would have to do something like:
    var MyComponent = React.createClass({
                render() {
                    return <div>
                        <h1>{this.props.text}</h1>
                        <p>{this.props.children}</p>/*--Here--*/
                    </div>
                }
            })


    /**
     * @description: PropTypes - optional - tells what type of variable a prop should be.
     * -@type propType is an object. 
     *  -it contains pairs of propNames and functions for how to check the propTypes
     *  -each function gets the array of props and propName as params. 
     *  -good to use for erroring or handling bad input
     */
    var Board = React.createClass({
            propTypes: {
                count: function(props,propName){
                    if(typeof props[propName] !== "number"){
                        return new Error("the count must be a number")
                    }

                    if(props[propName] > 100) {
                        return new Error("Creating " + props[propName] + " notes is silly")
                    }
                }
            },
            render() {
                return (
                    <div className="board">
                        {this.props.count}
                    </div>);
            }
        });
        
        ReactDOM.render(<Board count={5000}/>, 
            document.getElementById('react-container'))

/**
 * @description: Handling Events 
 *  -in our JSX we can handle events like onClick
 *  -syntax is eventName={function}
 */

    //here we are in a component called stuff, that has a method called doStuff() and we want to use it in our render
    render(){
        <div>
            <button onClick={this.doStuff}>DO STUFF!</button>
        </div>
    }

    //here we're handling the change of state onChange={this.handleCheck}
    handleCheck() {
        this.setState({ checked: !this.state.checked })
    },
    render() {
        var msg;
        if (this.state.checked) {
            msg = "checked";
        } else {
            msg = "unChecked";
        }
        return (
            <div>
                <input type="checkbox"
                    onChange={this.handleCheck} 
                    defaultChecked={this.state.checked}/>
                <p>This box is {msg}</p>
            </div>
        )
    }

    //Similarly, we can handle updating the state onRemove using onRemove={this.remove}
     remove(id) {
                var notes = this.state.notes.filter(note => note.id !== id);
                this.setState({notes});
            },
    eachNote(note) {
        return (
        <Note   key={note.id} 
                id={note.id} 
                onChange={this.update} 
                onRemove={this.remove}>
                {note.note}
        </Note>)
    }
/**
 * @description: State
 */
    /**
     * @description: getInitialState() -when our component renders it will be the initial state of the application(component)
     *  - You define once per component
     * @return {object} - the state of the object
     */
    getInitialState() {
        return {checked: false}
    }
    /**
     * @description: setState({state: newValue})
     * @param {Object} - contains the state and the newValue to set that state to. 
     * @example: the below modifies the initialState defined above
     */
    handleCheck() {
        this.setState({checked: !this.state.checked})
    }
/**
 * @description:reference or refs
 *  -It's how you access the values of UI elements
 *  -Declare ref as ref="{string}name"
 *  -use with this.refs.name.value
*/
save() {
    var val = this.refs.newText.value;/**using ref */
    this.setState({editing: false});
},
renderForm() {
    return (
        <div className="note">
            <textarea ref="newText"></textarea>/**HERE */
            <button onClick={this.save}>SAVE</button>
        </div>
    )
}

/**
 * @description: key - used to ensure that the state and identity of our components is maintained through multiple renders
 */
            eachNote(note) {
                return (<Note key={note.id}
                              id={note.id}
                              onChange={this.update}
                              onRemove={this.remove}>
                          {note.note}
                        </Note>)
            },
            render() {
                return (<div className='board'>
                           {this.state.notes.map(this.eachNote)}
                           <button onClick={() => this.add('New Note')}>+</button>
                        </div>)
            }

/**
 * @description: Component Lifecycle - Hooks for createion, lifetime, and teardown of components
 *  -Allows to add libraries, load data, at specific times
 */

    /**Mounting */
    getInitialState() //- called once and sets the default for a state
    componentWillMount() // called right before the render. last chance to affect state before render
    render() //only required method
    componentDidMount() //fire right after the render



    /**Updating */
    componentWillReceiveProps() //once called will give the opportunity to change object and affect state
    shouldComponentUpdate()//invoked right before rendering. used for optimization. tells wether or not to rerender component
    shouldComponentUpdate(nextProps, nextState) {
                return this.props.children !== nextProps.children || this.state !== nextState;
            }

    componentWillUpdate()//invoked right before rendering. used for optimization
    render()//used to update
    componentDidUpdate()//fire right after everything n the dom is updated

    /**UnMounting */
    unmountComponentAtNode(document.querySelector())//gets rid of component at node
    componentWillUnmount()//called right before component is unmounted



    getDefaultProps()//called once before component render to set up defaults for our component
    getDefaultProps() {
        return {
            backgroundColor: "blue",
            height: 200,
            width: 200
        }
    },
    render() {
        return (<div id='myDiv'>
                <div style={this.props}></div>
            </div>)
    }



    /**
     * @description: Fetch - library to load for getting data from external source
     * fetch(url).then((results) => {modRedults = doStuff(); return modResults;}).then(modify again if need to)
     */
    /**grabs a bunch of meat sentences. Parses them down to individual pieces.  */
    var url = `http://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`;
                    fetch(url)
                        .then((results) => {results.json()[0].split('. ').forEach(
                            sentence => this.add(sentence);})
                        .then((array) => {console.log(array); return array[0];})
                        .then((text) => text.split('. '))
                        .then((array) => array.forEach(
                            sentence => this.add(sentence)))
                        .catch((err)=>{console.log("didn't connect to the API", err)})

    /**
     * @description: React draggable - makes wrapped component draggable
     * <ReactDraggable> {JSX} </ReactDraggable>
     */

    render() {
              return ( <ReactDraggable>
                {(this.state.editing) ? this.renderForm()
                                          : this.renderDisplay()}
                </ReactDraggable>)

            }

/**
 * @description:create-react-app
 *  -command line tool that can be used to build our react application
 *  */
//to install
 npm install -g create-react-app
 //to set up an app
 cd <drag dest folder here>
 //creating your app
 create-react-app $NAME

 //Next 
 cd $name

 npm start//start your developement server
   npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd butt
  npm start

/**
 * @description: Importing a module as an npm installation
 * npm nstall --save <MODULENAME>
 */
npm install --save react-draggable

/**
 * @description: A full react app
 */
//The following is MyModule.js file for a Module that we want to use called MyModule
import React from 'react';

var MyModule = ReactCreateClass({
    render() {return (<div>Hi!</div>)}
})

export default MyModule;

//now if we wanted to use this in my main App which we'll call MyApp.js

import React from 'react';
import MyModule from './MyModule'

//which could now use <MyModule />

/**
 * @description:index.js - This is where ReactDOM.render() is happeneing
 */


