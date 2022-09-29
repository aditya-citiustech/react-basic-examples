import React from 'react'
import Child from './child'
export default function ParentContent() {
  return (
    <div>
     <h1>Content Projection</h1>
      <h3>parent</h3>
     <button>Main</button>
     <Child>
     <button>Secondary</button>
     </Child>
    </div>
  )
}
