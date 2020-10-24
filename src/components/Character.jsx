import React from 'react'

export default function Character({ character }) {
  const { name, status } = character
  return (
    <div>
      <p>Name: { name }</p>
      <p>Status: { status }</p>
    </div>
  )
}
