import { useState, type FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/user/userSlice'
import type { RootState } from '../redux/store'

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email) {
      console.log('Logging in with:', { name, email })
      dispatch(setUser({ name, email }))
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
          {user.isLoggedIn ? 'Switch or Update Account' : 'Welcome Back'}
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          {user.isLoggedIn
            ? 'Enter new details to update the global Redux user state.'
            : 'Please login to continue and synchronize your session.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g. Jane Doe"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition text-sm shadow-xs"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="e.g. jane@example.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition text-sm shadow-xs"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg transition shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 cursor-pointer active:scale-[0.99]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            {user.isLoggedIn ? 'Update Profile' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login