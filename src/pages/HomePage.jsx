import logo from '../assets/react.png'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

    const navigate = useNavigate();

    return(
         <div className='w-full h-[100vh] bg-black bg-[radial-gradient(circle_at_center,_rgba(55,0,70,0.4),_rgba(0,0,0,0.95))] flex flex-col items-center gap-y-10'>
                <img 
                  className='w-[300px] mt-40 animate-float'
                  src={logo} 
                  alt="logo">
                </img>
                <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.6)] mb-6">
                  Welcome to React Royale
                </h1>
                <button 
                onClick={() => navigate("/register")}
                className="px-10 py-4 bg-yellow-400 text-purple-900 text-3xl font-extrabold rounded-[30px] border-[4px] border-purple-800 shadow-[0_6px_0_0_rgba(91,33,182,1)] hover:translate-y-[-2px] hover:shadow-[0_8px_0_0_rgba(91,33,182,1)] active:shadow-none active:translate-y-[6px] transition-all duration-150 cursor-pointer">
                 PLAY!
                </button>
        </div>
    )
}

export default HomePage