'use client'
import React, { useMemo } from 'react'
import { Conversation, User } from '@prisma/client'
import useOtherUsers from '@/app/hooks/useOtherUser'
import Link from 'next/link'
import { HiChevronLeft, HiEllipsisHorizontal } from 'react-icons/hi2'
import Avatar from '@/app/components/Avatar'

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUsers(conversation)
  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`
    }

    return 'Active'
  }, [conversation])

  return (
    <section className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Link
          href="/conversations"
          className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer">
          <HiChevronLeft size={32} />
        </Link>
        <Avatar user={otherUser} />
        <div className="flex flex-col">
          <p>{conversation.name || otherUser.name}</p>
          <p className="text-sm font-light text-neutral-500">{statusText}</p>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        onClick={() => {}}
        className="text-sky-500 cursor-pointer hover:text-sky-600 transition"
      />
    </section>
  )
}

export default Header
