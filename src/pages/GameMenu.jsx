import logo from '../assets/react.png';

const GameMenu = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-purple-950 to-black flex flex-col items-center py-10 px-4 text-white font-sans">
      
      <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.6)] mb-6">
        React Royale
      </h1>

      <div className="flex items-center gap-4 mb-10">
        <img src={logo} alt="profile" className="w-16 h-16 rounded-full border-4 border-yellow-400" />
        <div>
          <p className="text-xl font-bold">Player123</p>
          <p className="text-sm text-gray-300">Level 5</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-lg w-full">
        {[
          { label: '🗡️ Battle', color: 'yellow', border: 'purple' },
          { label: '🛒 Shop', color: 'blue', border: 'blue' },
          { label: '📦 Cards', color: 'pink', border: 'pink' },
          { label: '🚪 Logout', color: 'red', border: 'red' },
        ].map(({ label, color, border }) => (
          <button
            key={label}
            className={`
              relative
              bg-gradient-to-t from-${color}-500 to-${color}-400
              text-${border}-900
              font-extrabold
              text-xl
              rounded-3xl
              border-4
              border-${border}-800
              shadow-[0_8px_0_0_rgba(0,0,0,0.6)]
              hover:from-${color}-400 hover:to-${color}-300
              active:translate-y-[6px] active:shadow-none
              transition-all duration-150
              px-6 py-4
              select-none
              cursor-pointer
              before:absolute before:-top-1 before:-left-1 before:right-1 before:bottom-1
              before:rounded-3xl
              before:bg-white before:opacity-10
              before:pointer-events-none
            `}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mt-16 text-sm text-gray-400">v1.0.0 - made with ❤️ in React</p>
    </div>
  );
};

export default GameMenu;
