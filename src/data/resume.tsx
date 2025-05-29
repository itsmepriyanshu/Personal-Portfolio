import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Priyanshu Gupta",
  initials: "PG",
  url: "https://priyanshugupta.dev",
  location: "Biratnagar, Nepal",
  locationLink: "https://www.google.com/maps/place/biratnagar",
  description:
    "Frontend Developer passionate about creating beautiful, responsive web applications. I love crafting user experiences and building modern interfaces.",
  summary:
    "As a dedicated Frontend Developer, I specialize in creating engaging and responsive web applications using modern technologies like React, Next.js, and TypeScript. I have experience working on various projects ranging from e-commerce platforms to complex web applications. [I completed my education in computer science](/#education) and [gained valuable experience through internships](/#work), including a full-stack web development role at IIDT. I'm passionate about staying up-to-date with the latest frontend technologies and best practices, constantly learning new frameworks and tools to deliver exceptional user experiences.",
  avatarUrl: "", // Remove or set to empty if image doesn't exist
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Git",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "priyanshuxy123@gmail.com",
    tel: "+91-9059443511, +977-9862182038",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/itsmepriyanshu",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanshu-gupta-823669237",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/itspriyanshu33",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "IIDT",
      href: "https://iidt.ac.in",
      badges: ["Internship"],
      location: "New Delhi, India",
      title: "Full Stack Web Developer",
      logoUrl: "", // Remove or set to empty if image doesn't exist
      start: "June 2024",
      end: "August 2024",
      description:
        "Developed and maintained web applications using React.js for frontend and Node.js for backend development. Built responsive user interfaces with modern CSS frameworks and implemented RESTful APIs. Collaborated with the development team to deliver high-quality web solutions and gained hands-on experience with full-stack development practices. Worked on database integration using MongoDB and implemented user authentication systems.",
    },
    {
      company: "Tech Solutions Inc",
      badges: ["Freelance"],
      href: "#",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "", // Remove or set to empty if image doesn't exist
      start: "January 2024",
      end: "Present",
      description:
        "Working as a freelance frontend developer, creating responsive web applications for various clients. Specializing in React.js and Next.js development with a focus on performance optimization and user experience. Delivered multiple projects including e-commerce platforms, portfolio websites, and business dashboards using modern frontend technologies and best practices.",
    },
  ],
  education: [
    {
      school: "Sri Venkateswara College Of Engineering & Technology (Autonomous)",
      href: "https://svcetedu.org/",
      degree: "Bachelor's in Computer Science and Engineering",
      logoUrl: "", // Remove or set to empty if image doesn't exist
      start: "2022",
      end: "2025",
    },
    {
      school: "Shikshadeep College",
      href: "http://shikshadeep.edu.np/",
      degree: "Intermediate (+2)",
      logoUrl: "", // Remove or set to empty if image doesn't exist
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      href: "https://ecommerce-demo.com",
      dates: "March 2024 - April 2024",
      active: true,
      description:
        "Built a fully responsive e-commerce platform using React.js and Next.js with features like product catalog, shopping cart, user authentication, and payment integration. Implemented modern UI/UX design principles and optimized for performance and SEO.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "MongoDB",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://ecommerce-demo.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshugupta/ecommerce-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Portfolio Website",
      href: "https://portfolio-demo.com",
      dates: "February 2024 - March 2024",
      active: true,
      description:
        "Designed and developed a modern portfolio website showcasing projects and skills. Built with React.js and styled with Tailwind CSS, featuring smooth animations and responsive design across all devices.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://portfolio-demo.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshugupta/portfolio-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Task Management App",
      href: "https://taskmanager-demo.com",
      dates: "January 2024 - February 2024",
      active: true,
      description:
        "Created a comprehensive task management application with features like task creation, categorization, due dates, and progress tracking. Implemented drag-and-drop functionality and real-time updates using React.js and modern state management.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Material-UI",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://taskmanager-demo.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/priyanshugupta/task-manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "February 2024",
      location: "Online",
      description:
        "Participated in the national level hackathon focusing on solving real-world problems using technology. Developed a web application for educational purposes.",
      image: "",
      links: [],
    },
  ],
} as const;