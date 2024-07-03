import React from 'react'
import { useParams } from 'react-router-dom'

export default function Category() {
    const {categoryName} = useParams()
    console.log(categoryName)
  return (
    <div style={{width: '85vw', backgroundColor: 'black', color: 'white'}}>Category</div>
  )
}
