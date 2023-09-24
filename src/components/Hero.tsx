import { companies, projects } from "../data/data";
import ProjectCard from "./ProjectCard";

function Hero() {
  return (
    <section id="hero" className="container padding-block">
      <div id="intro">
        <h1 className="heading-1">
          Helping companies build better, scalable software.
        </h1>
        <p className="description">
          Award-winning web developer and author, with over 15+ years of working
          experience with Fortune 500 companies like Apple, Google, Facebook,
          and more.
        </p>
      </div>

      <ul role="list" id="companies" className="flex">
        {companies.map((company, index) => (
          <li key={index}>
            <img src={company.image} alt={company.name} />
          </li>
        ))}
      </ul>

      <section className="even-columns" id="projects">
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </section>
    </section>
  );
}

export default Hero;
