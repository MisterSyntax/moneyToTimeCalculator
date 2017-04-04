import React from 'react';

var Calculator = React.createClass({
    getInitialState() {
        return {
            showResults: false,
            timeCost: 0
        }
    },
    /**
     * @description: Ensures that only keys that effect the form are numbers, decimals, commas, arrow keys, enter, backspace
     * @param: the keypress event
     * @returns: {boolean} : true or false depending on wether it was good input
     */
    validateInputKeyPress(event) {
        console.log(event.which);
        return (event.key.match(/[0-9.,]/) || event.which.toString().match(/^(?:13|3[7-9]|40)$/)) ? (true) : (event.preventDefault(), false);
    },
    /**
     * @description: submits the form, and calculates the value
     */
    generateHours() {
        var cost = this.refs.cost.value.replace(/[^\d.]/g, "");
        var salary = this.refs.salary.value.replace(/[^\d.]/g, "");
        var salaryType = document.getElementById("salaryType").options[document.getElementById("salaryType").options.selectedIndex].value;
        var hoursPerSalary = 1;
        var hoursSpent = 0;

        if (salaryType === "annually") {
            hoursPerSalary = 52 * 40;
        } else if (salaryType === "monthly") {
            hoursPerSalary = (52 / 12) * 40;
        } else if (salaryType === "weekly") {
            hoursPerSalary = 40;
        }

        this.setState({showResults:true,timeCost:(cost / (salary / hoursPerSalary)).toFixed(2)});

    },
    render() {
        return (
            <div id="calculator">
                <div>
                    It cost:
                        <input id="cost" onKeyPress={this.validateInputKeyPress} placeholder="$3.50" ref="cost">
                    </input>
                    , and I make $<input id="salary" onKeyPress={this.validateInputKeyPress} placeholder="$45,000" ref="salary"></input>
                    <select id="salaryType">
                        <option value="annually">per year</option>
                        <option value="monthly">per month</option>
                        <option value="weekly">per week</option>
                        <option value="hourly">per hour</option>
                    </select>
                </div>
                <div>
                    <button id="calculator-submit" className="pure-button pure-button-primary" onClick={this.generateHours}>How much of my life does this cost?</button>
                </div>
                {this.state.showResults ? (<div>{this.state.timeCost} hours</div>) : (<div>bye</div>) }
            </div>
        );
    }
})

export default Calculator;