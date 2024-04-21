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
    "Welkom op mijn creatieve uitwerking van mijn portfolio voor ITalent.",
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
      ],
    },
    {
      title: "Zelfreflectie",
      fileName: "pxl_logo.png",
      skills: [],
      softwareSkills: [],
    },
    {
      title: "Wat heb ik bijgeleerd?",
      fileName: "pxl_logo.png",
      skills: [
        "Dankzij I-Talent heb ik op meerdere vlakken kennis opgedaan. Niet enkel op vlak van technologie maar ook op vlak van sociale netwerken en connecties maken. Ik kan toch wel zeggen dat ik door I-Talent veranderd ben tegen vroeger.",
        "Bij de seminaries heb ik veel bijgeleerd op vlak van programmeren. Ik heb de seminaries in mijn eerste jaar I-Talent gekozen op basis van mijn interesses. Hoewel ik sommige seminaries die ik liever had gedaan toen, niet heb kunnen doen omdat er geen plaatsen meer waren. Zo had ik bijvoorbeeld ook nog graag het seminarie over Flutter meegedaan. In mijn tweede jaar heb ik meer gekeken naar de lengte van het seminarie als ik eerlijk ben. Maar de seminaries die ik toen gevolgd had waren eerlijk gezegd nog de interessantste. Dit komt doordat ik geen verwachtingen had op voorhand toen ik ze gekozen had. En hierdoor heb ik ook meer bijgeleerd over onderwerpen die in eerste instantie niet binnen mijn interesses zouden zitten.",
        "Tijdens de POP sessies heb ik belangrijke kennis opgedaan die mij tijdens mijn dagelijkse leven veel zal helpen. Tijdens de POP sessies heb ik geleerd hoeveel  tijd ik elke dag aan activiteiten spendeer, hoeveel invloed mijn gsm heeft op mijn concentratievermogen en beter te communiceren met mijn teamgenoten. Deze kennis ga ik nuttig kunnen gebruiken in de toekomst als ik activiteiten inplan of wat wil bespreken binnen een projectteam.",
        "Door de hackathon heb ik nu een beter zicht hoe het is om te werken in de cyber security sector. Ook heb ik tijdens de hackathon geleerd te werken onder stress.",
        "Het I-Talent avontuur heeft me doen inzien dat levenslang leren een noodzaak is voor mijn verdere carrière. Mijn visie hierop is dat streven om een beetje beter te zijn dan gisteren beter is dan helemaal niets te doen.",
      ],
      softwareSkills: [],
    },
    {
      title:
        "Welke zijn mijn sterktes? Op welke vlakken kan ik mezelf nog verbeteren?",
      fileName: "pxl_logo.png",
      skills: [
        "Dankzij I-Talent ben ik erachter gekomen dat naast mijn sterktes in het denken, doen en samenwerken, ik ook een sterk doorzettingsvermogen heb. Als ik merk dat een deadline dichterbij komt en het wat moeilijker wordt om deze te halen, zet ik mij volledig in zodat ik deze toch nog zou halen. Wat ik ook merk is dat mijn communicatie verbeterd is. Dankzij I-Talent en mijn stage ben ik beter geworden in mijn mening en problemen uit te leggen.",
        "Een punt waar ik nog in kan verbeteren is mijn concentratievermogen. Ik ben niet zo goed in het concentreren over een langere tijdspanne. Dit heb ik vooral gemerkt toen de seminaries wat te lang aan het duren waren naar mijn goesting. Wat nog een puntje is waar ik op kan verbeteren is mijn uitstelgedrag. Zo heb ik de bespreking van mijn activiteiten te lang uitgesteld en was het niet altijd even gemakkelijk om alle details te herinneren.",
      ],
      softwareSkills: [],
    },
    {
      title: "In welke mate heb ik de X-Factor?",
      fileName: "pxl_logo.png",
      skills: [
        "(Em)passie is een onderdeel geworden van mij sinds het eerste jaar. Toen ik voor deze richting gekozen had, had ik nog nooit iets met informatica gedaan. Maar vanaf het eerste moment dat ik programmeren kreeg, is mijn passie hiervoor ontstaan en alleen maar verder blijven groeien.",
        "Het vlak van ondernemend en innovatief is ook aanwezig. Voor mobile development moesten we een applicatie maken en we mochten zelf een technologie kiezen. Ik wilde al een tijdje Flutter leren en heb deze opportuniteit gebruikt om deze technologie grondig door te nemen.",
        "Het (Internationaal) samen(net)werken deel van de X-Factor ligt mij wel. Ik vind het leuk om in een team te werken en nieuwe mensen te leren kennen. In mijn laatste jaar ben ik ook bij een studentenvereniging gegaan en heb zo mijn netwerk nog eens uitgebreid",
        "Doorheen mijn opleiding heb ik veel ervaring en kennis opgedaan. Hiermee kan ik met overtuiging zeggen dat ik met zekerheid Multi- & disciplinariteit heb. Ik kan van alle aspecten die bij het maken van een applicatie horen wel iets. Ook heb ik ervaring in de cyber security. Verder sta ik ook nog open om bij te leren op allerlei vlakken.",
      ],
      softwareSkills: [],
    },
    {
      title: "Wie ben ik nu geworden en hoe ziet mijn leertraject eruit?",
      fileName: "pxl_logo.png",
      skills: [
        "In het begin was ik geen fan van het concept van I-Talent. Maar als ik er nu op terugkijk, is het wel heel waardevol voor mij geweest. Het heeft mij nieuwe vaardigheden aangeleerd en nieuwe inzichten gegeven die ik anders niet zou hebben nu. I-Talent dient als een uitbreiding op het leerstofpakket dat aangeboden wordt en geeft je de vrijheid om zelf te kiezen wat je nog wilt bijleren. Deze ervaring zal zonder twijfel goed van pas komen in de toekomst. Al is het voortdurend leren natuurlijk niet gedaan.",
      ],
      softwareSkills: [],
    },
    {
      title: "Hoe zie jij je toekomst?",
      fileName: "pxl_logo.png",
      skills: [
        "In de toekomst hoop ik een fijne werkplek te hebben met leuke collega’s, waar ik als functie de code van andere mensen nakijk en feedback geef. Liefst zou ik nog wat doorstuderen na mijn bachelor in de toegepaste informatica. Ik ben nog aan het twijfelen of ik voor een masterdiploma ga of ik een leerkrachtenopleiding ga doen.",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
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
      title: "POP sessies",
      experiences: [
        {
          title: "Brein aan het werk! Niet storen!",
          company: "PXL",
          company_url: "https://www.pxl.be/",
          logo_path: "pxl_logo.png",
          duration: "21 februari 2023",
          location: "PXL, Campus Elfde Linie",
          description:
            "Hoeveel tijd spenderen we elke dag aan verschillende activiteiten. Door deze POP sessie heb ik hier een zicht op gekregen.",
          color: "#000000",
        },
        {
          title: "POPping",
          company: "PXL",
          company_url: "https://www.pxl.be/",
          logo_path: "pxl_logo.png",
          duration: "21 februari 2023",
          location: "PXL, Campus Elfde Linie",
          description:
            "Tijdens deze POP sessie werd ons duidelijk gemaakt hoeveel invloed gsm gebruik werkelijk heeft op onze concentratie. En hoe we in de toekomst hier iets aan kunnen doen.",
          color: "#000000",
        },
        {
          title: "My Team and I",
          company: "PXL",
          company_url: "https://www.pxl.be/",
          logo_path: "pxl_logo.png",
          duration: "18 oktober 2023",
          location: "PXL, ISpace Corda 7",
          description:
            "Tijdens deze POP sessie hebben we met het het team van het research project verschillende opdrachten uitgevoerd en puzzels opgelost. Dit was nuttig voor het teamwork en groepssfeer te verbeteren.",
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
