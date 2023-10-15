export default function Login() {
  return (
    <main className="h-screen">
      <h2 id='header-route'>/login</h2>
      <div id='content'>
        <div className='w-1/2 mx-auto pt-10'>
          <h2 className='font-semibold text-2xl'>Login</h2>
          <p className='pt-5'>Login to your account.</p>
          <form action='/login' method='post' id='login'>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' className='text-black' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' className='text-black' />
            </div>
            <div>
              <button type='submit' className='btn btn-primary'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}