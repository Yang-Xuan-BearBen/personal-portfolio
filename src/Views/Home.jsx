import React from 'react'
import profileImg from '../assets/profileImg.jpg'
import resume from '../assets/resume.pdf'
import { LuDownload } from "react-icons/lu";


export default function Home() {
    return (
        <section id='home'
            className='min-h-screen flex flex-col items-center justify-center lg:flex-row-reverse gap-9 lg:gap-15'>
            
            <div className='text-center z-10 px-4'>
                <img src={profileImg} alt="Profile Image"
                    className='w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] 
                    object-cover object-bottom hover:translate-y-1 transition-all' />
            </div>

            <div className='text-center font-mono z-10 px-4'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl lg:max-w-[500px] font-semibold mb-6 px-1
                    bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent
                    leading-right'>
                    I am Yang Xuan
                </h1>
                <p className='text-gray-300 text-lg mb-8 max-w-lg mx-auto'>
                    I am from CUG 
                    这里应该是你的个人简介内容...
                </p>
                <div className='flex justify-center items-center space-x-4'>
                    <a href="#contact"
                        className='bg-gradient-to-r from-teal-500 to-indigo-600 flex flex-row py-3 px-6 rounded 
                        hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition font-medium 
                        relative overflow-hidden'>
                        Contact Me
                    </a>
                    <a href={resume} download
                        className='bg-gradient-to-r from-teal-500 to-indigo-600 flex flex-row py-3 px-6 rounded 
                        hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition font-medium 
                        relative overflow-hidden'>
                        <p>Resume</p>
                        <span className='h-5 ml-3 text-white'>
                            <LuDownload />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}
