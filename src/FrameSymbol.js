import React from 'react'

export default class FrameSymbol extends React.Component {
  render() {
    const smallBoxSize = this.props.smallBoxSize
    const throws = this.props.throws

    const sum = throws.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )

    if (sum === 10 && throws.length === 1) {
      // strike
      return (
        <g>
          <line
            stroke="black"
            strokeWidth="1"
            x1={100 - smallBoxSize + 2}
            y1={smallBoxSize - 2}
            x2="98"
            y2="2"
          />

          <line
            stroke="black"
            strokeWidth="1"
            x1={100 - smallBoxSize + 2}
            y1="2"
            x2="98"
            y2={smallBoxSize - 2}
          />
        </g>
      )
    }

    if (sum === 10 && throws.length === 2) {
      // spare
      return (
        <line
          stroke="black"
          strokeWidth="1"
          x1={100 - smallBoxSize + 2}
          y1={smallBoxSize - 2}
          x2="98"
          y2="2"
        />
      )
    }

    // open
    return (
      <line
        stroke="black"
        strokeWidth="1"
        x1={100 - smallBoxSize + 2}
        y1={smallBoxSize / 2}
        x2="98"
        y2={smallBoxSize / 2}
      />
    )
  }
}
