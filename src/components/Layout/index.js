import React from 'react'
import Header from '../Header'
export default function index(props) {
  return (
    <>
     <Header/>
     {props.children}
     </>
  )
}
