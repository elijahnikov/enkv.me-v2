export type ExperienceType = {
  company: string;
  roles: {
    id: number;
    title: string;
    duration: string;
    pointers: Array<string>;
    stack: Array<string>;
  };
  location: string;
  localeImage: string;
  website: string;
};

export const experience: Array<ExperienceType> = [
  {
    company: "Airfinity",
    website: "https://www.airfinity.com/",
    location: "London, UK",
    localeImage: "/airfinity_logo.png",
    roles: {
      id: 1,
      title: "Software Developer",
      duration: "July 2023 - Present",
      pointers: [
        `Led the initiative and development to transition from third-party software to an internally developed visualization solution built from the ground up in React/TypeScript. Greatly enhanced developer experience, performance, user experience and retention. This strategic shift resulted in substantial cost and time efficiencies, delivering considerable value to the company and its customers.`,
        `Collaborating closely with product managers and analysts to expand and refine our SaaS offering, researching and developing new features for said SaaS application, ensuring it delivers enhanced value to customers/clients.`,
        `Engineered and implemented a suite of complex, reusable React UI components while leading a comprehensive design system overhaul. This initiative significantly improved application performance and enhanced UI/UX across multiple products.`,
        `Spearheaded the development of a new, greenfield data visualization project for a major client, utilizing Next.js, React, and TypeScript. Led the entire process from initial concept to final delivery, creating a bespoke solution that met the client's needs for data and analysis.`,
      ],
      stack: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "React Query",
        "Cypress",
        "Vercel",
        "AWS",
      ],
    },
  },
  {
    company: "QuantSpark",
    roles: {
      id: 2,
      title: "Software Developer",
      duration: "April 2022 - July 2023",
      pointers: [
        `Developed front-end and back-end solutions for various clients at a data science and analytics consultancy to enhance client data comprehension and strategic value.`,
        `Used my skills in React and TypeScript to lead front-end development of major new features within a space allocation application for a top 4 UK supermarket, aiding them in determining their supermarket/warehouse layout across the year. Led front-end development of major new features within an investment management application for a top US investment firm.`,
        `Collaborated closely with team members, clients, and stakeholders to successfully accomplish project objectives through effective communication and coordination.`,
      ],
      stack: [
        "TypeScript",
        "JavaScript",
        "React",
        "Python",
        "Flask",
        "PostgreSQL",
        "Cypress",
      ],
    },
    location: "London, UK",
    localeImage: "/quantspark_logo.png",
    website: "https://www.quantspark.com/askqs",
  },
  {
    company: "HP",
    roles: {
      id: 3,
      title: "Full Stack Developer",
      duration: "July 2020 - August 2021",
      pointers: [
        `Gained experience in designing and developing enterprise level web applications and services to aid HP's marketing and sales teams across UK and Europe.`,
        `Led the development of a full stack campaigns orchestration web application that automates and executes marketing campaigns, allowed HP to move to a more modern solution whilst simultaneously bringing a ton of value in terms of cost and time.`,
        `Collaborated with a globally dispersed team to gather project requirements, present innovative concepts, and solicit valuable feedback, resulting in successful task completion and improved project outcomes.`,
      ],
      stack: ["JavaScript", "React", "Java", "Node.js", "PostgreSQL"],
    },

    location: "Reading, UK",
    localeImage: "/hp_logo.png",
    website: "https://www.hp.com/gb-en/home.html",
  },
];
