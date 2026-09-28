import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            {user.isLoggedIn && user.name ? `Welcome back, ${user.name}!` : 'User Dashboard'}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {user.isLoggedIn
              ? 'Your state is actively persisted and synchronized in the Redux store.'
              : 'Fill in the login form below to authenticate and update global state.'}
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium self-start sm:self-auto border ${
            user.isLoggedIn
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200/70'
              : 'bg-slate-100 text-slate-600 border-slate-200'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              user.isLoggedIn ? 'bg-emerald-500' : 'bg-slate-400'
            }`}
          />
          {user.isLoggedIn ? 'Session Active' : 'Logged Out'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Current User
          </span>
          <p className="text-base font-semibold text-slate-800 mt-1 truncate">
            {user.name || 'Not set'}
          </p>
        </div>
        <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Email Address
          </span>
          <p className="text-base font-semibold text-slate-800 mt-1 truncate">
            {user.email || 'Not set'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserPage