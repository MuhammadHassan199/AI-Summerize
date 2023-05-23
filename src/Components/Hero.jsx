import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col '>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <img src={logo} alt='sumz-logo' className='w-28 object-container'/>
      <button type='buttom' onClick={()=> window.open('https://github.com/MuhammadHassan199/AI-Summerize')} className='black_btn'>Github</button>
      </nav>
      <h1 className='head_text'>
        Summerize Articles With <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summerize, an open-source article
        summerize that transforms lengthy articles into clear and concise
        summerizes
      </h2>
      </header>
      
  )
}

export default Hero