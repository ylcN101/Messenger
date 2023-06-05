import getConversations from '../actions/getConversations'
import SideBar from '../components/sidebar/Sidebar'
import ConversationList from './components/ConversationList'

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const loadedConversations = await getConversations()
  return (
    // @ts-expect-error Server component
    <SideBar>
      <div className="h-full">
        <ConversationList initialItems={loadedConversations} />
        {children}
      </div>
    </SideBar>
  )
}
