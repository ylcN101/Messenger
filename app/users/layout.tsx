import React from 'react'
import SideBar from '../../app/components/sidebar/Sidebar'

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // @ts-expect-error Server Component
    <SideBar>
      <div className="h-full">{children}</div>
    </SideBar>
  )
}
