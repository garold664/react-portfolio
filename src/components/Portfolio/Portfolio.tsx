import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.scss';

const projects = [
  {
    id: 1,
    name: 'AirBnB Clone',
    description:
      'MERN project: React, Node, Express, MongoDB, Typescript, TailWind',
    image: 'https://via.placeholder.com/300x200',
    category: 'Full-stack',
  },
  {
    id: 2,
    name: 'Posts Feed',
    description:
      'React project: React, Typescript, Firebase, Sass. You can add new posts, sort posts by title, date, author, reactions number or content.',
    image: 'https://via.placeholder.com/300x200',
    category: 'React',
  },
  {
    id: 3,
    name: 'YouTube main page Clone',
    description: 'React project: React, Typescript, Tailwind.',
    image: 'https://via.placeholder.com/300x200',
    category: 'Small projects',
  },
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
          {projects.map((project) => (
            <li key={project.id}>
              <CategoryButton title={project.category} />
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
