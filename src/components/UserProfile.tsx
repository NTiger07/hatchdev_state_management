import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

interface UserProfileProps {
  variant?: 'card' | 'compact'
}

const UserProfile = ({ variant = 'card' }: UserProfileProps) => {
  const user = useSelector((state: RootState) => state.user)
  const isLoggedIn = Boolean(user.name && user.email)
  const initial = user.name ? user.name.trim().charAt(0).toUpperCase() : '?'

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm shadow-xs ${
            isLoggedIn
              ? 'bg-indigo-600 text-white ring-2 ring-indigo-100'
              : 'bg-slate-200 text-slate-500'
          }`}
        >
          {isLoggedIn ? (
            initial
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          )}
        </div>
        <div className="text-left text-xs">
          {isLoggedIn ? (
            <>
              <p className="font-semibold text-slate-800 leading-tight">{user.name}</p>
              <p className="text-slate-500 leading-tight">{user.email}</p>
            </>
          ) : (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
              No user logged in
            </span>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3 w-full">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0 shadow-xs ${
          isLoggedIn
            ? 'bg-indigo-500 text-white ring-2 ring-indigo-400/30'
            : 'bg-slate-700 text-slate-400'
        }`}
      >
        {isLoggedIn ? (
          initial
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        {isLoggedIn ? (
          <>
            <p className="text-sm font-medium text-white truncate">{user.name}</p>
            <p className="text-xs text-slate-400 truncate">{user.email}</p>
          </>
        ) : (
          <div>
            <p className="text-sm font-medium text-slate-300">No user logged in</p>
            <p className="text-xs text-slate-500">Sign in to sync state</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile