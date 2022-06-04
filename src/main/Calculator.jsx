import './Calculator.css'
import React, { Component } from 'react'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(op) {
        const { current, operation, values } = this.state

        console.log(values)
        if (current === 0) {
            this.setState({ operation: op, current: 1, clearDisplay: true })
        } else {
            const equals = op === '='
            const currentOperation = operation
            const newValues = [...values]

            switch (currentOperation) {
                case '+':
                    newValues[0] = newValues[0] + newValues[1]
                    break;
                case '-':
                    newValues[0] = newValues[0] - newValues[1]
                    break;
                case '*':
                    newValues[0] = newValues[0] * newValues[1]
                    break;
                case '/':
                    newValues[0] = newValues[0] / newValues[1]
                    break;
            }

            newValues[1] = 0

            this.setState({
                displayValue: newValues[0],
                operation: equals ? null : op,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values: newValues
            })
        }
    }

    addDigit(n) {
        const { displayValue, clearDisplay, current, values } = this.state

        if (n === '.' && displayValue.includes('.')) return

        const clear = displayValue === '0' || clearDisplay
        const currentValue = clear ? '' : displayValue
        const newDisplay = currentValue + n
        this.setState({
            displayValue: newDisplay,
            clearDisplay: false
        })


        if (n !== '.') {
            const newValue = parseFloat(newDisplay)
            const newValues = [...values]
            newValues[current] = newValue
            this.setState({ values: newValues })
            console.log(newValues)
        }
    }

    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} ></Display>
                <Button label="AC" triple click={this.clearMemory} />
                <Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" operation click={this.setOperation} />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" operation click={this.setOperation} />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" operation click={this.setOperation} />
                <Button label="0" borderLeft double click={this.addDigit} />
                <Button label="." click={this.addDigit} />
                <Button label="=" borderRight operation click={this.setOperation} />
            </div>
        )
    }

}