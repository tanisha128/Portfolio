import React from 'react'
import './Project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Food Delight App',
    description: 'A web application that allows users to explore and order food from various restaurants.',
    image: 'images/food.png',
    link:'https://github.com/tanisha128/Food-Delight',


  },
  {
    title: 'Keeper App',
    description: 'A note-taking application that helps users keep track of their tasks',
    image: "images/keeper.png",
    link: 'https://github.com/tanisha128/keeper-app',
  },
 

  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects and skills',
    image: "images/portfolio.png",
    link: 'https://github.com/tanisha128/Portfolio'
  },
  {
    title: 'Nike Store Clone',
    description: 'A clone of the Nike store website, featuring product listings and a shopping cart.',
    image: "images/nike.png",
    link: 'https://github.com/tanisha128/Nike_project',
  },
   {
    title: 'TODO List',
    description: 'A simple TODO list application to manage daily tasks efficiently.',
    image: "images/todo.png",
    link:'https://github.com/tanisha128/ToDo-List',
  },
  
];

export default function Project() {
  return (
    <div className='projects'>
      <h2>MY PROJECTS</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className='card'>
              <img src={project.image} alt='Project screenshot' />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
  href={project.link}
  className='btn'
  target='_blank'
  rel='noopener noreferrer'
>
  View Project
</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

