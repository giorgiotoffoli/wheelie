import { useAuth } from '@/app/provider'

export default function LogoutButton() {
  const { logout } = useAuth()

  return (
    <button
      className="border-2 border-white text-black bg-white hover:bg-transparent hover:text-white transition duration-75 rounded-2xl p-3 m-12"
      onClick={() => logout()}
    >
      👋 Log Out
    </button>
  )
}
