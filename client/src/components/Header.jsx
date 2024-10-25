import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState('');  const navigate = useNavigate();
  const [toggleMenu, settoggleMenu] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`); 
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
          <span className='text-slate-500'>Estate</span>
          <span className='text-slate-700'>Hub</span>
        </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-slate-100 rounded-lg flex items-center p-3'>
          <input type='text' placeholder='Search...'
          className='bg-transparent focus:outline-none w-24 sm:w-64'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
          <button>
            <FaSearch className='text-slate-500'/>
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden text-lg sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden text-lg sm:inline text-slate-700 hover:underline'>About</li>
          </Link>      
          <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'/>            
            ) : (
              <li className=' text-slate-700 text-lg hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
        
        {toggleMenu && <nav className='block md:hidden'>
            <ul onClick={()=>settoggleMenu(!toggleMenu)} className='flex flex-col bg-secondary fixed top-16 p-3 py-4 left-0 w-full h-1/4'>
              <Link to='/'>
                <li className='w-full h-full text-right py-2'>Home</li>
              </Link>
              <Link to='/about'>
                <li className='w-full h-full text-right '>About</li>
              </Link>
            </ul> 
        </nav>}
        <button onClick={() => settoggleMenu(!toggleMenu)}  className='block sm:hidden'><HiOutlineBars3 size={24} className=''/></button>
      </div>
    </header>
  )
}
