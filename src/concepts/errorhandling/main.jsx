import React from 'react'
import City from './city'
import Country from './country'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorHandler from './errorhandling'

export default function Main() {
  return (
    <div>
        <h4>Main</h4>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
        <City/>
        <Country/>
        </ErrorBoundary>
    </div>
  )
}
