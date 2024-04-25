import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.scss';

const projects = [
  {
    id: 1,
    name: 'AirBnB Clone',
    description:
      'MERN project: React, Node, Express, MongoDB, Typescript, TailWind',
    image: './assets/images/300x200.png',
    category: 'Full-stack',
    demo: 'https://booking-app-front-1v42.onrender.com/',
    github: 'https://github.com/garold664/booking-app',
  },
  {
    id: 2,
    name: 'Posts Feed',
    description:
      'React project: React, Typescript, Firebase, Sass. You can add new posts, sort posts by title, date, author, reactions number or content.',
    image: './assets/images/300x200.png',
    category: 'React',
    demo: 'https://garold664.github.io/react-redux-posts/',
    github: 'https://github.com/garold664/react-redux-posts/',
  },
  {
    id: 3,
    name: 'YouTube main page Clone',
    description: 'React project: React, Typescript, Tailwind.',
    image: './assets/images/300x200.png',
    category: 'Small projects',
    demo: '',
    github: 'https://github.com/garold664/youtube-homepage-clone',
  },
  {
    id: 4,
    name: 'Pink Website',
    description: 'Responsive Website: Gulp, Sass, Vanilla js',
    image: './assets/images/300x200.png',
    category: 'Responsive Websites',
    demo: 'https://garold664.github.io/myPortfolio/portfolio/pink/index.html',
    github: '',
  },
  {
    id: 5,
    name: 'Mishka Website',
    description: 'Responsive Website: Gulp, Sass, Vanilla js',
    image: './assets/images/300x200.png',
    category: 'Responsive Websites',
    demo: 'https://garold664.github.io/myPortfolio/portfolio/mishka/index.html',
    github: '',
  },
];

const projectCategories = [
  ...new Set(projects.map((project) => project.category)),
];

export default function Portfolio() {
  const [category, setCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  function filterProjects(event: React.MouseEvent<HTMLButtonElement>) {
    // console.log(event.target.innerText);
    // const categoryName = event.target.innerText;
    setCategory((event.target as HTMLButtonElement).innerHTML);
  }

  useEffect(() => {
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  }, [category]);

  function CategoryButton({ title }: { title: string }) {
    return (
      <button
        onClick={filterProjects}
        className={`${styles.portfolioCategoryBtn} ${
          title === category && styles.active
        }`}
      >
        {title}
      </button>
    );
  }

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.portfolioContainer}>
        <h2 className={styles.portfolioTitle}>Portfolio</h2>
        <ul className={styles.portfolioCategories}>
          <li>
            <CategoryButton title="All" />
          </li>
          {projectCategories.map((project) => (
            <li key={project}>
              <CategoryButton title={project} />
            </li>
          ))}
        </ul>

        <ul className={styles.portfolioList}>
          {filteredProjects.map((project) => (
            <li className={styles.portfolioItem} key={project.id}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.portfolioImg}
              />
              <div className={styles.portfolioInfo}>
                <h3 className={styles.portfolioProjectTitle}>{project.name}</h3>
                <div className={styles.portfolioLinks}>
                  {project.github && (
                    <a href={project.github} target="_blank">
                      <img src="./assets/icons/github.svg" alt="" />
                    </a>
                  )}
                  <a href={project.demo} target="_blank">
                    demo
                  </a>
                </div>
                <p className={styles.portfolioDescription}>
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
