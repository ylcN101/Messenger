import { create } from 'zustand'

interface ActiveListStore {
  members: string[]
  addMember: (id: string) => void
  removeMember: (id: string) => void
  setMembers: (ids: string[]) => void
}

const useActiveList = create<ActiveListStore>((set) => ({
  members: [],
  addMember: (id) => set((state) => ({ members: [...state.members, id] })),
  removeMember: (id) =>
    set((state) => ({ members: state.members.filter((m) => m !== id) })),
  setMembers: (ids) => set({ members: ids }),
}))

export default useActiveList
