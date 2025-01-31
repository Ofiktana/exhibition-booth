import React from 'react'
import Header from '../NavHeader/Header'
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default DefaultLayout