import React from 'react'

const Home = () => {
  const logout = ()=>{
    localStorage.clear()
    setTimeout(()=>{
      window.location.reload()
    },1500
    );
  }
  return (
    <div>
      {/* <button onClick={logout}>ออกจากระบบ</button> */}
      <button
                    onClick={logout}
                    className="items-center text-center bg-blue-200 border-gray-300 text-black rounded-lg shadow-md mt-5 px-6 py-2 hover:bg-gray-200"
                  >
                    login
                  </button>
    </div>

  )
}

export default Home
