import React from 'react'
import RevealOnScroll from '../Ui/RevealOnScroll'

export default function Contact() {
    return (
        <section id='contact' className='min-h-screen font-mono flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className='px-4 w-150'>
                    <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600
                    bg-clip-text text-transparent text-center'>
                        Get In Touch
                    </h2>
                    <form action="https://formspree.io/f/xkgbqabk" method="POST" className='space-y-6' >
                        {/* <form className='space-y-6'> */}
                        <div className='relative'>
                            <input type='text' id='name' placeholder='姓名...' name='name' required
                                className='w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />

                        </div>
                        <div className='relative'>
                            <input type='email' id='email' placeholder='Examle@qq.com...' name='email' required
                                className='w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />

                        </div>
                        <div className='relative'>
                            <textarea type='message' id='message' placeholder='请输入消息...' name='message' rows={6} required
                                className='w-full bg-white/10 border border-r-white/10 rounded px-4 py-3 text-white transition 
                            focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' />

                        </div>

                        <button type='submit' className='w-full bg-gradient-to-r from-teal-500 to-indigo-600 flex justify-center 
                        cursor-pointer px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] py-3'>提交</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}
