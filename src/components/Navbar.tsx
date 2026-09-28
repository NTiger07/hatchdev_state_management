import UserProfile from './UserProfile'

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-10 shadow-xs">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <span className="font-medium text-slate-700">App</span>
        <span>/</span>
        <span className="font-semibold text-slate-900">User Dashboard</span>
      </div>
      <div>
        <UserProfile variant="compact" />
      </div>
    </header>
  )
}

export default Navbar