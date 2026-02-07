import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
  {
    id: 1,
    title: "Online Ordering System for Cafe & Restaurant",
    url: "online-ordering-system",
    category: "Web Application",
    img: "/images/signcafe1.png",
    ProjectHeader: {
      title: "Online Ordering System",
      publishDate: "2024",
      tags: "Frontend / React",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Online Ordering System",
        img: "/images/signcafe1.png",
      },
      {
        id: uuidv4(),
        title: "Ordering Flow",
        img: "/images/signcafe2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Project Type",
          details: "Work Experience",
        },
        {
          id: uuidv4(),
          title: "Industry",
          details: "Cafe & Restaurant",
        },
        {
          id: uuidv4(),
          title: "Usage",
          details: "Used by one local cafe",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://signcafe.ir/menu",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The goal of this project was to build a responsive online ordering system that allows customers to browse the menu, place orders, and submit them directly to the cafe with a simple and intuitive user experience.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "JavaScript", "TailwindCSS", "REST API"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Designing a smooth ordering flow while keeping the interface simple for non-technical users was one of the main challenges. The application needed to be fast, clear, and mobile-friendly.",
        },
        {
          id: uuidv4(),
          details:
            "Handling different order states and providing real-time feedback to users required careful state management and clean component structure.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },

  {
    id: 2,
    title: "Class Management System",
    url: "class-management-system",
    category: "Web Application",
    img: "/images/class1.png",
    ProjectHeader: {
      title: "Class Management System",
      publishDate: "2024",
      tags: "Frontend / React",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Class Management Dashboard",
        img: "/images/class2.png",
      },
      {
        id: uuidv4(),
        title: "Class Management Dashboard",
        img: "/images/class1.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Project Type",
          details: "Personal Project",
        },
        {
          id: uuidv4(),
          title: "Status",
          details: "In Progress",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "This project focuses on building a class management system that helps instructors manage students, classes, and schedules through a clean and structured dashboard interface.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "JavaScript", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "The main challenge was designing reusable components and scalable state management to support future features such as authentication and role-based access.",
        },
        {
          id: uuidv4(),
          details:
            "Special attention was given to UI consistency and usability to ensure the system remains easy to use as it grows.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },

  {
    id: 3,
    title: "E-commerce Website",
    url: "ecommerce-website",
    category: "Web Application",
    img: "/images/project2.png",
    ProjectHeader: {
      title: "E-commerce Website",
      publishDate: "2022",
      tags: "Frontend / React",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "E-commerce Homepage",
        img: "/images/project2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Project Type",
          details: "Personal Project",
        },
        {
          id: uuidv4(),
          title: "Year",
          details: "2022",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "The objective of this project was to build a complete e-commerce frontend experience including product listing, product details, and shopping cart functionality using React.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "JavaScript", "CSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Implementing shopping cart logic and managing application state efficiently was a key challenge in this project.",
        },
        {
          id: uuidv4(),
          details:
            "This project helped strengthen my understanding of component-based architecture and frontend application flow.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },

  // -------------------------------

  // {
  // 	id: 1,
  // 	title: 'Google Health Platform',
  // 	url: 'google-health-platform',
  // 	category: 'Web Application',
  // 	img: '/images/web-project-2.jpg',
  // 	ProjectHeader: {
  // 		title: 'Google Health Platform',
  // 		publishDate: 'Jul 26, 2021',
  // 		tags: 'UI / Frontend',
  // 	},
  // 	ProjectImages: [
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Google Health Platform',
  // 			img: '/images/ui-project-1.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Google Health Platform',
  // 			img: '/images/web-project-2.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Google Health Platform',
  // 			img: '/images/mobile-project-2.jpg',
  // 		},
  // 	],
  // 	ProjectInfo: {
  // 		ClientHeading: 'About Client',
  // 		CompanyInfo: [
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Name',
  // 				details: 'Company Ltd',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Services',
  // 				details: 'Web Development',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Website',
  // 				details: 'https://company.com',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Phone',
  // 				details: '555 8888 888',
  // 			},
  // 		],
  // 		ObjectivesHeading: 'Objective',
  // 		ObjectivesDetails:
  // 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  // 		Technologies: [
  // 			{
  // 				title: 'Tools & Technologies',
  // 				techs: [
  // 					'HTML',
  // 					'CSS',
  // 					'JavaScript',
  // 					'Vue.js',
  // 					'TailwindCSS',
  // 					'AdobeXD',
  // 				],
  // 			},
  // 		],
  // 		ProjectDetailsHeading: 'Challenge',
  // 		ProjectDetails: [
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 		],
  // 		SocialSharingHeading: 'Share This',
  // 		// SocialSharing: [
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Twitter',
  // 		// 		icon: <FiTwitter />,
  // 		// 		url: 'https://twitter.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Instagram',
  // 		// 		icon: <FiInstagram />,
  // 		// 		url: 'https://instagram.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Facebook',
  // 		// 		icon: <FiFacebook />,
  // 		// 		url: 'https://facebook.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'LinkedIn',
  // 		// 		icon: <FiLinkedin />,
  // 		// 		url: 'https://linkedin.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Youtube',
  // 		// 		icon: <FiYoutube />,
  // 		// 		url: 'https://www.youtube.com/c/StomanStudio',
  // 		// 	},
  // 		// ],
  // 	},
  // },
  // {
  // 	id: 2,
  // 	title: 'Phoenix Digital Agency',
  // 	url: 'phoenix-digital-agency',
  // 	category: 'Mobile Application',
  // 	img: '/images/mobile-project-2.jpg',
  // 	ProjectHeader: {
  // 		title: 'Phoenix Digital Agency',
  // 		publishDate: 'Jul 26, 2021',
  // 		tags: 'Mobile Application',
  // 	},
  // 	ProjectImages: [
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Phoenix Digital Agency',
  // 			img: '/images/ui-project-1.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Phoenix Digital Agency',
  // 			img: '/images/web-project-2.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Phoenix Digital Agency',
  // 			img: '/images/mobile-project-2.jpg',
  // 		},
  // 	],
  // 	ProjectInfo: {
  // 		ClientHeading: 'About Client',
  // 		CompanyInfo: [
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Name',
  // 				details: 'Company Ltd',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Services',
  // 				details: 'UI Design & Frontend Development',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Website',
  // 				details: 'https://company.com',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Phone',
  // 				details: '555 8888 888',
  // 			},
  // 		],
  // 		ObjectivesHeading: 'Objective',
  // 		ObjectivesDetails:
  // 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  // 		Technologies: [
  // 			{
  // 				title: 'Tools & Technologies',
  // 				techs: [
  // 					'HTML',
  // 					'CSS',
  // 					'JavaScript',
  // 					'Vue.js',
  // 					'TailwindCSS',
  // 					'AdobeXD',
  // 				],
  // 			},
  // 		],
  // 		ProjectDetailsHeading: 'Challenge',
  // 		ProjectDetails: [
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 		],
  // 		SocialSharingHeading: 'Share This',
  // 		// SocialSharing: [
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Twitter',
  // 		// 		icon: <FiTwitter />,
  // 		// 		url: 'https://twitter.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Instagram',
  // 		// 		icon: <FiInstagram />,
  // 		// 		url: 'https://instagram.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Facebook',
  // 		// 		icon: <FiFacebook />,
  // 		// 		url: 'https://facebook.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'LinkedIn',
  // 		// 		icon: <FiLinkedin />,
  // 		// 		url: 'https://linkedin.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Youtube',
  // 		// 		icon: <FiYoutube />,
  // 		// 		url: 'https://www.youtube.com/c/StomanStudio',
  // 		// 	},
  // 		// ],
  // 	},
  // },
  // {
  // 	id: 3,
  // 	title: 'Project Management UI',
  // 	url: 'project-management-ui',
  // 	category: 'UI/UX Design',
  // 	img: '/images/ui-project-1.jpg',
  // 	ProjectHeader: {
  // 		title: 'Project Management UI',
  // 		publishDate: 'Jul 26, 2021',
  // 		tags: 'UI / Frontend',
  // 	},
  // 	ProjectImages: [
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Project Management UI',
  // 			img: '/images/ui-project-1.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Project Management UI',
  // 			img: '/images/web-project-2.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Project Management UI',
  // 			img: '/images/mobile-project-2.jpg',
  // 		},
  // 	],
  // 	ProjectInfo: {
  // 		ClientHeading: 'About Client',
  // 		CompanyInfo: [
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Name',
  // 				details: 'Company Ltd',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Services',
  // 				details: 'UI Design & Frontend Development',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Website',
  // 				details: 'https://company.com',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Phone',
  // 				details: '555 8888 888',
  // 			},
  // 		],
  // 		ObjectivesHeading: 'Objective',
  // 		ObjectivesDetails:
  // 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  // 		Technologies: [
  // 			{
  // 				title: 'Tools & Technologies',
  // 				techs: [
  // 					'HTML',
  // 					'CSS',
  // 					'JavaScript',
  // 					'Vue.js',
  // 					'TailwindCSS',
  // 					'AdobeXD',
  // 				],
  // 			},
  // 		],
  // 		ProjectDetailsHeading: 'Challenge',
  // 		ProjectDetails: [
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 		],
  // 		SocialSharingHeading: 'Share This',
  // 		// SocialSharing: [
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Twitter',
  // 		// 		icon: <FiTwitter />,
  // 		// 		url: 'https://twitter.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Instagram',
  // 		// 		icon: <FiInstagram />,
  // 		// 		url: 'https://instagram.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Facebook',
  // 		// 		icon: <FiFacebook />,
  // 		// 		url: 'https://facebook.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'LinkedIn',
  // 		// 		icon: <FiLinkedin />,
  // 		// 		url: 'https://linkedin.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Youtube',
  // 		// 		icon: <FiYoutube />,
  // 		// 		url: 'https://www.youtube.com/c/StomanStudio',
  // 		// 	},
  // 		// ],
  // 	},
  // },
  // {
  // 	id: 4,
  // 	title: 'Cloud Storage Platform',
  // 	url: 'cloud-storage-platform',
  // 	category: 'UI/UX Design',
  // 	img: '/images/ui-project-2.jpg',
  // 	ProjectHeader: {
  // 		title: 'Cloud Storage Platform',
  // 		publishDate: 'Jul 26, 2021',
  // 		tags: 'Web & Cloud',
  // 	},
  // 	ProjectImages: [
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Cloud Storage Platform',
  // 			img: '/images/ui-project-1.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Cloud Storage Platform',
  // 			img: '/images/web-project-2.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Cloud Storage Platform',
  // 			img: '/images/mobile-project-2.jpg',
  // 		},
  // 	],
  // 	ProjectInfo: {
  // 		ClientHeading: 'About Client',
  // 		CompanyInfo: [
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Name',
  // 				details: 'Company Ltd',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Services',
  // 				details: 'UI Design & Frontend Development',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Website',
  // 				details: 'https://company.com',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Phone',
  // 				details: '555 8888 888',
  // 			},
  // 		],
  // 		ObjectivesHeading: 'Objective',
  // 		ObjectivesDetails:
  // 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  // 		Technologies: [
  // 			{
  // 				title: 'Tools & Technologies',
  // 				techs: [
  // 					'HTML',
  // 					'CSS',
  // 					'JavaScript',
  // 					'Vue.js',
  // 					'TailwindCSS',
  // 					'AdobeXD',
  // 				],
  // 			},
  // 		],
  // 		ProjectDetailsHeading: 'Challenge',
  // 		ProjectDetails: [
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 		],
  // 		SocialSharingHeading: 'Share This',
  // 		// SocialSharing: [
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Twitter',
  // 		// 		icon: <FiTwitter />,
  // 		// 		url: 'https://twitter.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Instagram',
  // 		// 		icon: <FiInstagram />,
  // 		// 		url: 'https://instagram.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Facebook',
  // 		// 		icon: <FiFacebook />,
  // 		// 		url: 'https://facebook.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'LinkedIn',
  // 		// 		icon: <FiLinkedin />,
  // 		// 		url: 'https://linkedin.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Youtube',
  // 		// 		icon: <FiYoutube />,
  // 		// 		url: 'https://www.youtube.com/c/StomanStudio',
  // 		// 	},
  // 		// ],
  // 	},
  // },
  // {
  // 	id: 5,
  // 	title: 'WeTalk Social Application',
  // 	url: 'wetalk-social-app',
  // 	category: 'Mobile Application',
  // 	img: '/images/mobile-project-1.jpg',
  // 	ProjectHeader: {
  // 		title: 'WeTalk Social Application',
  // 		publishDate: 'Jul 26, 2021',
  // 		tags: 'UI / Frontend',
  // 	},
  // 	ProjectImages: [
  // 		{
  // 			id: uuidv4(),
  // 			title: 'WeTalk Social Application',
  // 			img: '/images/ui-project-1.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'WeTalk Social Application',
  // 			img: '/images/web-project-2.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'WeTalk Social Application',
  // 			img: '/images/mobile-project-2.jpg',
  // 		},
  // 	],
  // 	ProjectInfo: {
  // 		ClientHeading: 'About Client',
  // 		CompanyInfo: [
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Name',
  // 				details: 'Company Ltd',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Services',
  // 				details: 'UI Design & Frontend Development',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Website',
  // 				details: 'https://company.com',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Phone',
  // 				details: '555 8888 888',
  // 			},
  // 		],
  // 		ObjectivesHeading: 'Objective',
  // 		ObjectivesDetails:
  // 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  // 		Technologies: [
  // 			{
  // 				title: 'Tools & Technologies',
  // 				techs: [
  // 					'HTML',
  // 					'CSS',
  // 					'JavaScript',
  // 					'Vue.js',
  // 					'TailwindCSS',
  // 					'AdobeXD',
  // 				],
  // 			},
  // 		],
  // 		ProjectDetailsHeading: 'Challenge',
  // 		ProjectDetails: [
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 		],
  // 		SocialSharingHeading: 'Share This',
  // 		// SocialSharing: [
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Twitter',
  // 		// 		icon: <FiTwitter />,
  // 		// 		url: 'https://twitter.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Instagram',
  // 		// 		icon: <FiInstagram />,
  // 		// 		url: 'https://instagram.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Facebook',
  // 		// 		icon: <FiFacebook />,
  // 		// 		url: 'https://facebook.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'LinkedIn',
  // 		// 		icon: <FiLinkedin />,
  // 		// 		url: 'https://linkedin.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Youtube',
  // 		// 		icon: <FiYoutube />,
  // 		// 		url: 'https://www.youtube.com/c/realstoman',
  // 		// 	},
  // 		// ],
  // 	},
  // },
  // {
  // 	id: 6,
  // 	title: 'Apple New Design System',
  // 	url: 'apple-new-design-system',
  // 	category: 'Web Application',
  // 	img: '/images/web-project-1.jpg',
  // 	ProjectHeader: {
  // 		title: 'Apple New Design System',
  // 		publishDate: 'Jul 26, 2021',
  // 		tags: 'UI / Frontend',
  // 	},
  // 	ProjectImages: [
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Apple New Design System',
  // 			img: '/images/ui-project-1.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Apple New Design System',
  // 			img: '/images/web-project-2.jpg',
  // 		},
  // 		{
  // 			id: uuidv4(),
  // 			title: 'Kabul Apple New Design System',
  // 			img: '/images/mobile-project-2.jpg',
  // 		},
  // 	],
  // 	ProjectInfo: {
  // 		ClientHeading: 'About Client',
  // 		CompanyInfo: [
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Name',
  // 				details: 'Company Ltd',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Services',
  // 				details: 'UI Design & Frontend Development',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Website',
  // 				details: 'https://company.com',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				title: 'Phone',
  // 				details: '555 8888 888',
  // 			},
  // 		],
  // 		ObjectivesHeading: 'Objective',
  // 		ObjectivesDetails:
  // 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  // 		Technologies: [
  // 			{
  // 				title: 'Tools & Technologies',
  // 				techs: [
  // 					'HTML',
  // 					'CSS',
  // 					'JavaScript',
  // 					'Vue.js',
  // 					'TailwindCSS',
  // 					'AdobeXD',
  // 				],
  // 			},
  // 		],
  // 		ProjectDetailsHeading: 'Challenge',
  // 		ProjectDetails: [
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
  // 			},
  // 			{
  // 				id: uuidv4(),
  // 				details:
  // 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
  // 			},
  // 		],
  // 		SocialSharingHeading: 'Share This',
  // 		// SocialSharing: [
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Twitter',
  // 		// 		icon: <FiTwitter />,
  // 		// 		url: 'https://twitter.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Instagram',
  // 		// 		icon: <FiInstagram />,
  // 		// 		url: 'https://instagram.com/realstoman',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Facebook',
  // 		// 		icon: <FiFacebook />,
  // 		// 		url: 'https://facebook.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'LinkedIn',
  // 		// 		icon: <FiLinkedin />,
  // 		// 		url: 'https://linkedin.com/',
  // 		// 	},
  // 		// 	{
  // 		// 		id: uuidv4(),
  // 		// 		name: 'Youtube',
  // 		// 		icon: <FiYoutube />,
  // 		// 		url: 'https://www.youtube.com/c/StomanStudio',
  // 		// 	},
  // 		// ],
  // 	},
  // },
];
