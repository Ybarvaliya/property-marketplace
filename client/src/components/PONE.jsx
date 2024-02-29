import img from '../Assets/h1.png'

import './PONE.css'

const PONE = () => {
  return (
    <div>
        <h1 className='t1'>CONNECTING DREAMS TO REALITY</h1>
        <h1 className='t2'>YOUR PREMIER</h1>
        <h1 className='t3'>REAL ESTATE MARKETPLACE</h1>
        <h5 className='t4'>where every serach ends with a home</h5>
        <div className='flex'>
            <button className='btn'>Find Your Home </button>
            <button className='btn'>List Your Property </button>
        </div>
        <img src={img} alt="image" />
    </div>
  )
}

export default PONE