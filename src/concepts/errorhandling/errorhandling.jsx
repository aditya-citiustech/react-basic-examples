import React from 'react'

export default function ErrorHandler({ error }) {
    return (
        <div>ErrorHandler
            <p>An error occurred:</p>
            <pre>{error.message}</pre>
        </div>
    )
}
