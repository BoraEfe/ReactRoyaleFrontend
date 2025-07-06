import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validatie / API call hier indien nodig
    navigate("/GameMenu");
  };

  return (
    <div className='w-full h-[100vh] bg-black bg-[radial-gradient(circle_at_center,_rgba(55,0,70,0.4),_rgba(0,0,0,0.95))] flex flex-col items-center'>
      
      <p className="text-white font-sans font-extrabold text-4xl drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] select-none mt-20">
        Welcome to React Royale!
      </p>

      <p className="text-white font-sans font-extrabold text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] mt-2 mb-8 select-none">
        Fill in all the fields to start playing
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md px-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="px-5 py-3 rounded-xl text-lg font-bold text-purple-900 bg-white border-4 border-purple-800 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="px-5 py-3 rounded-xl text-lg font-bold text-purple-900 bg-white border-4 border-purple-800 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="px-5 py-3 rounded-xl text-lg font-bold text-purple-900 bg-white border-4 border-purple-800 placeholder-purple-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <button
          type="submit"
          className="mt-4 px-10 py-4 bg-yellow-400 text-purple-900 text-2xl font-extrabold rounded-[30px] border-[4px] border-purple-800 shadow-[0_6px_0_0_rgba(91,33,182,1)] hover:translate-y-[-2px] hover:shadow-[0_8px_0_0_rgba(91,33,182,1)] active:shadow-none active:translate-y-[6px] transition-all duration-150 cursor-pointer"
        >
          CREATE!
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
