import React from 'react'


export default function PageLayout({ children }) {
  return (
    <div>
        <PageLayout>
            {children}
        </PageLayout>
    </div>
  )
}
