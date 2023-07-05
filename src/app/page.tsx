"use client"

import { link } from 'fs'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'


export default function Home() {
  const [todos, setTodo] = useState([])
  const [error, setError] = useState({})

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => console.log(res.slice(0,10)))
    .catch(err => setError(err))
  }, [])

  return (
    <div>
      <h1>open the console</h1>
    </div>
  )
}
