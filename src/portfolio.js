/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tim Verbeeck Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Tim Verbeeck Portfolio",
    type: "website",
    url: "http://timverbeeck.com/",
  },
};

//Home Page
const greeting = {
  title: "Tim Verbeeck",
  logo_name: "TimVerbeeck",
  subTitle:
    "Welkom op mijn creatieve uitwerking van mijn portfolio voor Italent.",
  resumeLink: "",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/TimVerbeeckPXL",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/TimVerbeeckPXL",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/timverbeeck/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:tim.lucario@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Wie Ben ik?",
      fileName: "FullStackImg",
      skills: [
        "Ik ben Tim Verbeeck. Ik ben 20 jaar en ben afkomstig uit Genk. In mijn vrije tijd spreek ik het liefst af met mijn vrienden, om bordspellen te spelen, te gamen of een film te kijken. Daarnaast houd ik mij ook nog bezig met basketbal.",
        "Mijn sterktes zitten in het denken, doen en samenwerken. Ik probeer zo snel mogelijk problemen af te werken. Om dit te doen heb ik liefst wel wat richtlijnen nodig om dit effectief te kunnen doen. In een team ben ik de motivator van de groep. Ik ben competitief ingesteld en gefocust op het behalen van de doelstellingen. De leiding van een groep nemen ligt mij niet helemaal maar ik geef wel mijn mening waar nodig. En als ik mij aan een probleem zet dan blijf ik doorzetten tot het opgelost is.",
        "Over een paar jaar zou ik graag een baan hebben met voldoende voordelen zoals een bedrijfswagen en smartphone. Maar ook voldoende verlofdagen omdat ik veel belang hecht aan mijn vrije tijd. Mijn doel is om elke dag een beetje beter te zijn dan de dag ervoor.",
        "Ik kan frontend en backend applicaties maken, maar zou hier graag nog wat beter in worden. Op school hebben we de basis geleerd hierover, dus voor mij staat er nog wat werk op het programma om mijn vaardigheden hiervan te verbeteren.",
      ],
      softwareSkills: [
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        // {
        //   skillName: "JavaScript",
        //   fontAwesomeClassname: "simple-icons:javascript",
        //   style: {
        //     backgroundColor: "#000000",
        //     color: "#F7DF1E",
        //   },
        // },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Zelfreflectie",
      fileName: "pxl_logo.png",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hogeschool PXL",
      subtitle: "Toegepaste Informatica (in progress)",
      logo_path: "pxl_logo.png",
      alt_name: "PXL",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering languages like Java, .NET, PHP etc.",
        "⚡ Apart from this, I have done Seminars on Cloud development, Low Code, Testing etc.",
      ],
      website_link: "https://www.pxl.be",
    },
    {
      title: "Onze Lieve Vrouwlyceum Genk",
      subtitle: "Wetenschappen-Wiskunde",
      logo_path: "lyceum_logo.jpg",
      alt_name: "lyceum",
      duration: "2015 - 2021",
      descriptions: ["⚡ I have had 6 hours of mathematics every week etc."],
      website_link: "https://www.lyceumgenk.be",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "ITalent",
  subtitle: "Seminaries, Hackatons en Innovatieroute",
  description:
    "Ik heb de voorbije 2 jaar verschillende seminaries gevolds. Ook heb ik deelgenomen aan 1 hackaton en een innovatieroute. Zie hieronder de oplijsting:",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Seminaries",
      work: true,
      experiences: [
        {
          title:
            "Harmony Group: applicatie ontwikkeling met Outsystems (Reactive, mobile)",
          company: "Harmony Group",
          company_url: "https://harmonygroup.eu/",
          logo_path: "pxl_logo.png",
          duration: "28 februari 2023",
          location: "PXL: G412a",
          description:
            "Een eerste kennismaking met Outsystems en opbouwen applicatie met low code.",
          color: "#000000",
        },
        {
          title: "Axxes: Drinking a river of IoT data using Aka.Net",
          company: "Axxes",
          company_url: "https://www.axxes.com/",
          logo_path: "pxl_logo.png",
          duration: "14 maart 2023",
          location: "G412a",
          description:
            "Uitleg over Aka.Net en opbouwen eerste applicatie hierin.",
          color: "#0879bf",
        },
        {
          title:
            "Inetum-Realdolmen: Rapid app development: building a “candy delivery” app using low-code",
          company: "Inetum-Realdolmen",
          company_url: "https://www.realdolmen.com/nl",
          logo_path: "pxl_logo.png",
          duration: "28 maart 2023",
          location: "PXL: G410",
          description:
            "Uitgebreide uitleg over low code en opbouwen van de “candy delivery” app met low code.",
          color: "#0879bf",
        },
        {
          title: "Cloud Legends by Kabisa: Cloud Native Development",
          company: "Kabisa",
          company_url: "https://kabisa.nl/",
          logo_path: "pxl_logo.png",
          duration: "18 april 2023",
          location: "PXL",
          description: "Introductie tot coderen in de cloud.",
          color: "#0879bf",
        },
        {
          title: "AE: Application observability",
          company: "AE",
          company_url: "https://www.ae.be/en",
          logo_path: "pxl_logo.png",
          duration: "8 november 2023",
          location: "PXL: B122",
          description:
            "Uitleg over waarom gegevens zo belangrijk zijn en welke inzichten deze kunnen brengen.",
          color: "#0879bf",
        },
        {
          title: "Refleqt: Cypress / Playwright",
          company: "Refleqt",
          company_url: "https://refleqt.be/",
          logo_path: "pxl_logo.png",
          duration: "22 november 2023",
          location: "PXL: B122",
          description:
            "Uitleg over soorten testen en introductie in Cypress en Playwright.",
          color: "#0879bf",
        },
        {
          title: "ACA group: OWASP Top Ten risico's",
          company: "ACA group",
          company_url: "https://acagroup.be/nl/",
          logo_path: "pxl_logo.png",
          duration: "29 november 2023",
          location: "PXL: B124",
          description:
            "Uitleg over OWASP en de top 10 vaakst voorkomende risico's bij hacken. Zelf deze risico's proberen na te bootsen met de OWASP Juice Shop.",
          color: "#0879bf",
        },
        {
          title: "ACA group: From Hello World to Hello Work",
          company: "ACA group",
          company_url: "https://acagroup.be/nl/",
          logo_path: "pxl_logo.png",
          duration: "13 december 2023",
          location: "PXL: B124",
          description:
            "Uitleg over de basis van de fundamenten van de Agile methodologie en in pair programming features toevoegen aan de pizza shop.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Hackatons",
      experiences: [
        {
          title: "Cyber Security Challenge Belgium",
          company: "",
          company_url: "https://www.cybersecuritychallenge.be/",
          logo_path: "cscbe.png",
          duration: "8 maart 2024 - 9 maart 2024",
          location: "Online",
          description:
            "Mijn vaardigheden op het gebied van cybersecurity testen en verbeteren door middel van realistische en uitdagende scenario's.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Innovatieroute: Domain Driven Development (DDD)",
      experiences: [
        {
          title:
            "Cegeka: Een inleiding in Domain Driven Design en meer specifiek Event Storming.",
          company: "Cegeka",
          company_url: "https://www.cegeka.com/nl-be/",
          logo_path: "pxl_logo.png",
          duration: "28 september 2023",
          location: "PXL: G514",
          description:
            "De DDD essentials werden uitgelegd en hoe correct te Event Stormen.",
          color: "#000000",
        },
        {
          title: "Infosupport: Domain Driven Design",
          company: "Infosupport",
          company_url: "https://infosupport.com/",
          logo_path: "pxl_logo.png",
          duration: "5 + 12 oktober 2023",
          location: "PXL: G514",
          description:
            "Over een tijdspanne van 2 dagen kregen we uitleg over de volledige implementatie van een applicatie gebruikmakend van de DDD methode.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Extra's",
      experiences: [
        {
          title: "Research@Breakfast",
          company: "PXL",
          company_url: "https://www.pxl.be/",
          logo_path: "pxl_logo.png",
          duration: "7 maart 2023",
          location: "PXL catering",
          description:
            "Het multidisciplinair onderzoeksteam van expertisecentra PXL Innovatief Ondernemen en PXL Smart ICT deelde tijdens dit event cases en praktijkvoorbeelden om bedrijven te stimuleren om data optimaal te benutten.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tim.png",
    description:
      "I am available by email and LinkedIn. You can mail me, I will reply within 3 buisiness days.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
