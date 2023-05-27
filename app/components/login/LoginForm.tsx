export const LoginForm = () => {
  return (
    <div className="mt-32 bg-slate-500 p-5">
      <h3 className="text-center">Login</h3>
      <form className="flex space-y-1 items-center mt-1">
        <div className="grid grid-cols-1 ">
          <label htmlFor="email" className="mt-1">
            Email
          </label>
          <input type="text" className="mt-1 p-1" />
          <label htmlFor="nombre" className="mt-1">
            Password
          </label>
          <input type="password" className="mt-1 p-1" />
        </div>
      </form>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Ingregar con google
        </button>
      </div>
    </div>
  );
};
