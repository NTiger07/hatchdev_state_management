import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'

const App = () => {
  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 p-6 sm:p-8 max-w-4xl w-full mx-auto space-y-6">
          <UserPage />
          <Login />
        </main>
      </div>
    </div>
  )
}

export default App