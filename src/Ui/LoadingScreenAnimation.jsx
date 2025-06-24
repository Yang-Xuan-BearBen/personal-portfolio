import React, { useEffect, useState } from 'react'

export default function LoadingScreenAnimation({ onComplete }) {
    const [text, setText] = useState("");

    const fullText = "Glad to have you here !"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index >= fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 800)
            }
        }, 100)

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div onClick={() => { onComplete() }}
            className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center
            justify-center gap-5'>

            <div className='w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden'>
                <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animation-loading-bar'></div>
            </div>

            <div className='mb-4 text-2xl font-semibold'>
                {/* Glad to have you here ! */}
                {text}
                <span className='animate-blink ml-1 text-2xl font-bold'> | </span>
            </div>

            <div className='w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden'>
                <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animation-loading-bar'></div>
            </div>


            <div className='text-2xl text-center mt-3 cursor-pointer '>
                <span className='bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent'>
                    Click anywhere to skip
                </span>
            </div>
        </div>
    )
}
