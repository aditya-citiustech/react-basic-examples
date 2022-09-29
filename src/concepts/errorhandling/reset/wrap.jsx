import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorHandling from './errorhandling'
import Bomb from './bomb'


export default function Wrap() {
    const [explode, setExplode] = React.useState(false)
    return (
      <div>
        <button onClick={() => setExplode(e => !e)}>toggle explode</button>
        <ErrorBoundary
          FallbackComponent={ErrorHandling}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          {explode ? <Bomb /> : null}
        </ErrorBoundary>
      </div>
    )
}
