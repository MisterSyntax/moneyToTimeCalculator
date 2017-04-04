<!DOCTYPE html>
<html>
    <head>
        <script src="https://fb.me/react-15.2.1.js"></script>
        <script src="https://fb.me/react-dom-15.2.1.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
        <title>Intro to State</title>
    </head>
    <body>
        <div id='react-container'></div>
        <script type="text/babel">
        
        var Checkbox = React.createClass({
            getInitialState() {
                return {checked: false}
            },
            handleCheck() {
                this.setState({checked: !this.state.checked})
            }
            render() {
                return (
                    <div>
                        <input type="checkbox" />
                        <p></p>
                    </div>
                )
            }
        })        
        ReactDOM.render(<Checkbox></Checkbox>, document.getElementById('react-container'));
        </script>
    </body>
</html>



