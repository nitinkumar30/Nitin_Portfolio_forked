import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myphotu from '../public/assets/myphotu.jpg';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          {/* <p className='py-2 text-gray-600'>
             I am not your average developer
          </p> */}
          <p className='py-2 text-gray-600'>
          An experienced Python developer with good knowledge of Web Development and Cyber Security.An Automation Engineer in TCS also a Master's student with Arka Jain University, Jamshedpur. I&apos;ve worked on projects across various technologies along with ML, DS and other latest techs. I love doing automation in my spare time and I am always looking to learn new things.
Currently, I am fascinated by Automation and I am working on a project to build a web application to automate the process of searching jobs in Indeed. Most of my projects are open sourced in Github.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning HTML, JS, CS, Bootstrap and was even more
            enthused with making websites interactive. I then started
            freelancing for local companies. I am
            now spending my time building projects with Python Automation and
            learning new technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image
                  src={myphotu}
                  alt='/'
                />
        </div>
      </div>
    </div>
  );
};

export default About;
