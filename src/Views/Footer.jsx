import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { AiFillZhihuCircle } from "react-icons/ai";
import { FaQq } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className='min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300
            font-mono mb-10'>
                <div className='flex gap-10 p-4 justify-center text-white'>
                    <a href='https://github.com/Yang-Xuan-BearBen'
                        className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gray-800 text-white'
                        target='_blank'>
                        <FaGithubSquare />
                    </a >
                    <a href='https://www.zhihu.com/people/tian-wei-leng-69'
                        className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-500 text-white'
                        target='_blank'>
                        <AiFillZhihuCircle />
                    </a >
                    <a href='https://github.com/Yang-Xuan-BearBen'
                        className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-red-500 text-white'
                        target='_blank'>
                        <FaQq />
                    </a >
                </div>
            </div>
        </footer>
    )
}
