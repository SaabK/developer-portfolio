export interface Project {
  name: string;
  image: string;
  description: string;
}

export interface Comapany {
  name: string;
  image: string;
}

export interface Social {
  name: string;
  image: string;
  href: string;
}

// Props

export interface IProjectCard extends Project {}
