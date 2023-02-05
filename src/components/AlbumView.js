import React from 'react'
import { useParams } from 'react-router-dom'

export default function AlbumView() {
    const {id} = useParams()

  return (
    <div>
        <h2>The id passed was: {id}</h2>
        <p>Album data goes here!</p>
    </div>
  )
}
