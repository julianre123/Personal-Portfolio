//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/project1.png";
import Project2 from "./assets/img/projects/project2.png";
import Project3 from "./assets/img/projects/project3.png";
import Project4 from "./assets/img/projects/project4.png";
import Project5 from "./assets/img/projects/project5.png";
import Project6 from "./assets/img/projects/project6.png";
import Project7 from "./assets/img/projects/project7.png";
import project8 from "./assets/img/projects/project8.png";
import project9 from "./assets/img/projects/project9.png";
import project10 from "./assets/img/projects/project10.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/julianre_2018/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/julianre123",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/julianre1/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
   {
    id: "7",
    image: Project7,
    name: "Amazon-clone",
    category: "Web Development",
    gitHub: "https://github.com/julianre123/Amazon-clone",
    site: "https://julian-amazon-clone.netlify.app/",
  },
  {
    id: "8",
    image: project8,
    category: "Web Development",
    name: "Adidas-men Clone",
    gitHub: "https://github.com/julianre123/adidas-men-homepage",
    site: "https://adidas-men.netlify.app/",
  },
  {
    id: "5",
    image: Project6,
    name: "Admin-Dashboard",
    category: "Web Development",
    gitHub: "https://github.com/julianre123/Adming-Dashboard-App",
    site: "https://julian-admin-dashboard.netlify.app",
  },
  {
    id: "1",
    image: project9,
    name: "Everest Gym App",
    category: "Web Development",
    gitHub: "https://github.com/julianre123/gym__app__julian",
    site: "https://everestgymapp.netlify.app/",
  },
  {
    id: "2",
    image: project10,
    name: "HyperErgo E-commerce",
    category: "Web Development",
    gitHub: "https://github.com/julianre123/hyperergo",
    site: "https://julian-ecommerce.netlify.app/",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web development",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "julimasterxd@gmail.com",
  },
];
