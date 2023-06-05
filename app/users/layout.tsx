import React from 'react'
import SideBar from '../../app/components/sidebar/Sidebar'
import getUsers from '../actions/getUsers'
import UserList from './components/UserList'

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const users = await getUsers()
  return (
    // @ts-expect-error Server Component
    <SideBar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </SideBar>
  )
}
