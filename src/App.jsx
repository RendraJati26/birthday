import { useRef, useState } from 'react'
import './App.css'
import { easeIn, motion } from 'framer-motion'
import bg from '../src/assets/bg.jpg'
import audio from '../src/assets/audio.mp3'
import gift from '../src/assets/gift.gif'

function App() {
  console.log(bg)
  const [bagian, setBagian] = useState(0)
  const audioRef = useRef(null);

  const handleMulai = () => {
    audioRef.current.play();
    setBagian(1)
  }
  return (
    <>
      <audio ref={audioRef} controls className='absolute top-[1000]'>
        <source src={audio} type="audio/mpeg" />
      </audio>

      <div className="bg-cover bg-center w-screen h-screen absolute bg-[url('../src/assets/bg.jpg')]">

      </div>
      <div className={` text-white w-screen h-screen flex justify-center items-center `}>
        {bagian == 0 && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 120 } }}
            className={`bg-[rgba(0,0,0,0.7)] rounded-xl w-[60%] h-[60%] md:w-[30%] flex flex-col justify-center items-center `}>
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.2 } }}
              className='text-3xl text-center'>...........</motion.h1>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.4 } }}
              className='flex gap-10'>
              <button onClick={() => handleMulai()} className='btn bg-pink-500 rounded text-white mt-10 px-4 py-2'>mulai</button>
            </motion.div>
          </motion.div>
        )}
        {bagian == 1 && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 120 } }}
            className={`bg-[rgba(0,0,0,0.7)] rounded-xl w-[90%] h-[90%] md:w-[50%] flex flex-col justify-center items-center `}>
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.2 } }}
              className='text-3xl text-center'>...........</motion.h1>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.4 } }}
              className='flex gap-10'>
              <button onClick={() => setBagian(2)} className='btn bg-pink-500 rounded text-white mt-10 px-4 py-2'>Next</button>
            </motion.div>
          </motion.div>
        )}
        {bagian == 2 && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 120 } }}
            className={`bg-[rgba(0,0,0,0.7)] rounded-xl p-10 w-[90%] h-[90%] md:w-[50%] flex flex-col justify-center items-center ${bagian == 2 ? "inline" : "hidden"}`}>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.2 } }}
              className='text-3xl mb-5 text-center'>...........</motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.4 } }}
              className='text-center'>...........</motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.6 } }}
              className='flex gap-10'>
              <button onClick={() => setBagian(1)} className='btn bg-pink-500 rounded text-white mt-10 px-4 py-2'>Back</button>
              <button onClick={() => setBagian(3)} className='btn bg-pink-500 rounded text-white mt-10 px-4 py-2'>Next</button>
            </motion.div>
          </motion.div>
        )}
        {bagian == 3 && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 120 } }}
            className={`bg-[rgba(0,0,0,0.7)] rounded-xl p-10 w-[90%] h-[90%] md:w-[50%] flex flex-col justify-center items-center`}>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.2 } }}
              className='text-3xl mb-5 text-center'>...........</motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.4 } }}

              className='text-center'>...........</motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.6 } }}
              className='flex gap-10'>
              <button onClick={() => setBagian(2)} className='btn bg-pink-500 rounded text-white mt-10 px-4 py-2'>Back</button>
              <button onClick={() => setBagian(4)} className='btn bg-pink-500 rounded text-white mt-10 px-4 py-2'>Next</button>
            </motion.div>
          </motion.div>
        )}
        {bagian == 4 && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 120 } }}
            className={`bg-[rgba(0,0,0,0.7)] rounded-xl p-10 w-[90%] h-[90%] md:w-[50%] flex flex-col justify-center items-center`}>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.2 } }}
              className='text-3xl mb-5 text-center'>...........</motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.4 } }}

              className='text-center'>...........</motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.6 } }}
              className='flex gap-10'>
              <button onClick={() => setBagian(3)} className='btn bg-pink-500 rounded text-white mt-10 px-4 py-2'>Back</button>
              <button onClick={() => setBagian(5)} className='btn bg-pink-500 rounded text-white mt-10 px-4 py-2'>Next</button>
            </motion.div>
          </motion.div>
        )}
        {bagian == 5 && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 120 } }}
            className={`bg-[rgba(0,0,0,0.7)] rounded-xl p-10 w-[90%] h-[90%] md:w-[50%] flex flex-col justify-center items-center`}>
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.2 } }}
              src={gift} className='rounded-xl' alt="" />
            <motion.p
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 1, transition: { type: "spring", duration: 1, stiffness: 30, delay: 0.4 } }}
              className='text-center mt-5'>...........</motion.p>

          </motion.div>
        )}
      </div >
    </>
  )
}

export default App
