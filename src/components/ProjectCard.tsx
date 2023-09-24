import { IProjectCard } from "../types";

function ProjectCard({ name, image, description }: IProjectCard) {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <h2 className="heading-2">{name} &rarr;</h2>
      <p className="description">{description}</p>
    </div>
  );
}

export default ProjectCard;
