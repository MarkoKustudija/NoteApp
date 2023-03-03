

import React from 'react'
import { Outlet } from 'react-router-dom'
import NotesNavigation from '../components/layout/NotesNavigation'

function NotesRootLayout() {
  return (
    <>
    <NotesNavigation />
    <Outlet />
  </>
  )
}

export default NotesRootLayout