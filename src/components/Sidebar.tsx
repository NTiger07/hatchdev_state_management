import UserProfile from './UserProfile'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'
import type { RootState } from '../redux/store'

const Sidebar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <aside className="w-72 bg-slate-900 text-slate-100 flex flex-col justify-between shrink-0 p-5 border-r border-slate-800/80 min-h-screen">
      <div className="space-y-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 px-1 py-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-900/30">
            H
          </div>
          <div>
            <h1 className="text-base font-semibold text-white tracking-tight leading-tight">HatchDev</h1>
            <p className="text-xs text-slate-400">State Management Demo</p>
          </div>
        </div>

        {/* Navigation / Info */}
        <nav className="space-y-1">
          <div className="px-3 py-2 rounded-lg text-sm font-medium bg-slate-800/90 text-white flex items-center gap-3">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </div>
        </nav>

        {/* User Profile in Sidebar */}
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-1">
            Redux State Preview
          </p>
          <UserProfile variant="card" />
        </div>
      </div>

      {/* Action footer */}
      <div className="pt-4 border-t border-slate-800/80">
        <button
          onClick={handleLogout}
          disabled={!user.name && !user.email}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-rose-300 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/40 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar