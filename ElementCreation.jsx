/** 
 * @description: ReactDOM.render(DOMElement, exisistingDOMElement)
 * @param {DOMElement} - the element we want to create using React.createElement
 * @param {DOMElement} exisistingDOMElement-  An existing DOM element where we want to place our new element.
*/
ReactDOM.render(
            React.createElement("div",null, "Hello World"),
            document.getElementById("react-container")
        );

/**
 * @description: React.createElement(type, [props],[...children])
 * @param: {string} type - the type of element we want to create e.g. div, a, etc
 * @param: {array} props - the props we want the element to have ..?
 * @param: {string|Component} children - the children of the element we want to create
 */
React.createElement("div",null, "Hello World")


/**
 * @description: JSX - Javascript as XML
 *  -use tags to replace React.createElement
 *  -used with Babel which converts from JSX to React.createElement
 *  - to use text/babel, your script tag needs "type='text/babel'"
 *  -
 */
<script type="text/babel">
            ReactDOM.render(<ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
               </ul>,
                document.getElementById('react-container'))
        </script>