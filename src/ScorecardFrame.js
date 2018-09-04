import React from 'react'
import './ScorecardFrame.css'
import FrameSymbol from './FrameSymbol'

export default class ScorecardFrame extends React.Component {
  smallBoxSize = 30

  render() {
    const frame = this.props.frame
    const frameNumber = frame.frameNumber

    const transform = `translate(${frameNumber * 100},0)`
    return (
      <g transform={transform}>
        <rect
          fill="white"
          stroke="black"
          strokeWidth="1px"
          width="100"
          height="100"
        />
        <line
          stroke="black"
          strokeWidth="1px"
          x1={100 - this.smallBoxSize}
          y1="0"
          x2={100 - this.smallBoxSize}
          y2={this.smallBoxSize}
        />
        <line
          stroke="black"
          strokeWidth="1px"
          x1={100 - this.smallBoxSize}
          y1={this.smallBoxSize}
          x2="100"
          y2={this.smallBoxSize}
        />
        <text x="30" y="25" className="frameThrow1">
          {frame.throws[0] || ''}
        </text>
        <text x="25" y="80" className="frameScore">
          {frame.score}
        </text>
        <FrameSymbol throws={frame.throws} smallBoxSize={this.smallBoxSize} />
      </g>
    )
  }
}
