import React, { useState } from 'react';
import GEE from '../assets/GEE.png'
import HotMap from '../assets/HotMap.png'
import NetMarket from '../assets/NetMarket.png'
import LiberayScreen from '../assets//LiberayScreen.png'
import RevealOnScroll from '../Ui/RevealOnScroll'

export default function Projects() {
    const [projects, setProjects] = useState([
        { image: GEE, title: 'GEE', description: 'A web application that allows users to search for and purchase books online.', link: 'https://github.com/Abdulaziz-Abdulhameed/GEE' },
        { image: HotMap, title: 'HotMap', description: 'A web application that allows users to search for and purchase books online.', link: 'https://github.com/Abdulaziz-Abdulhameed/HotMap' },
        { image: NetMarket, title: 'NetMarket', description: 'A web application that allows users to search for and purchase books online.', link: 'https://github.com/Abdulaziz-Abdulhameed/NetMarket' },
        { image: LiberayScreen, title: 'Library Screen', description: 'A web application that allows users to search for and purchase books online.', link: 'https://github.com/Abdulaziz-Abdulhameed/LibraryScreen' }
    ]);

    return (
        <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600
                    bg-clip-text text-transparent text-center'>
                        Features Projects
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {projects.map((project, index) => (
                            <div key={index} className='p-6 rounded-xl flex flex-col items-center justify-center border-2
                        border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]
                        hover:-translate-y-1 transition-all hover:bg-cyan-900'>
                                {/* 标题 */}
                                <h3 className='font-semibold text-xl mb-4'>
                                    {project.title}
                                </h3>

                                {/* 描述 */}
                                <p className='text-gray-300 mb-4'>{project.description}</p>

                                {/* 技术栈 */}
                                <div className='flex flex-wrap sm:items-center gap-2 mb-4'>
                                    {["React", "JavaScript", "CSS", "HTML", "Node.js", "Express.js", "MongoDB"].map((tech, index) => (
                                        <span key={index} className='bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-balance
                                    hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition cursor-pointer'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* 链接/图片 */}
                                <div className='flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 
                            hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer rounded-xl'>
                                    <p className='text-gray-200'> View Project</p>
                                    <a href={project.link} className='flex justify-center items-center font-bold text-blue-400 transition-colors
                                hover:text-white'>
                                        <img src={project.image} alt={`${project.title}`} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
