import walmartImage from "../assets/Logos/Walmart.svg";
import jpMorganImage from "../assets/Logos/JP Morgan.svg";
import visaImage from "../assets/Logos/Visa.svg";
import tinderImage from "../assets/Logos/Tinder.svg";
import samsungImage from "../assets/Logos/Samsung.svg";
import verizonImage from "../assets/Logos/Verizon.svg";

export const companies = [
  {
    name: "walmart",
    image: walmartImage,
  },
  {
    name: "j.p morgan",
    image: jpMorganImage,
  },
  {
    name: "visa",
    image: visaImage,
  },
  {
    name: "tinder",
    image: tinderImage,
  },
  {
    name: "samsung",
    image: samsungImage,
  },
  {
    name: "verizon",
    image: verizonImage,
  },
];

import spenseImage from "../assets/Spense.png";
import yelpCampImage from "../assets/YelpCamp.png";
import { Project, Social } from "../types";

export const projects: Project[] = [
  {
    name: "Spense.com",
    image: spenseImage,
    description:
      "Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc",
  },
  {
    name: "YelpCamp.com",
    image: yelpCampImage,
    description:
      "Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favourite in 2021.",
  },
];

import twitterIcon from "../assets/Social Icons/Twitter.svg";
import linkedInIcon from "../assets/Social Icons/LinkedIn.svg";
import githubIcon from "../assets/Social Icons/Github.svg";

export const social: Social[] = [
  {
    name: "twitter",
    href: "#",
    image: twitterIcon,
  },
  {
    name: "linkedin",
    href: "#",
    image: linkedInIcon,
  },
  {
    name: "github",
    href: "#",
    image: githubIcon,
  },
];
