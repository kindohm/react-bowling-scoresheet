import React from 'react'
import ScorecardFrame from './ScorecardFrame'

export default class Scorecard extends React.Component {
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
  }

  render() {
    const frameNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const frames = frameNumbers.map(frameNumber => {
      const throws = [this.getRandomIntInclusive(0, 10)]

      if (throws[0] !== 10) {
        throws.push(this.getRandomIntInclusive(0, 10 - throws[0]))
      }

      return {
        frameNumber,
        throws,
        score: 300
      }
    })

    const scorecardFrames = frames.map(frame => {
      return <ScorecardFrame key={frame.frameNumber} frame={frame} />
    })

    return (
      <div>
        <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">
          {scorecardFrames}
        </svg>
      </div>
    )
  }
}
