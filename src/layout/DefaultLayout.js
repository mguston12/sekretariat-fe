import React, { useEffect, useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import CheckLoggedIn from './CheckLoggedIn'

const DefaultLayout = () => {
  return (
    <>
      <CheckLoggedIn isLoggedIn={true} />

      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100">
          <AppHeader />
          <div className="body flex-grow-1">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
