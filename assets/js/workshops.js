var workshops = [
    {
        name : 'Digital Literacy and Computational Thinking',
        introduction : 'Basic concepts about computer usage and algorithms',
        information : ['This introductory workshop will cover the basics about using computers.', 'The students will learn concepts about software and hardware, practice using productivity software and other cloud applications, and learn about some commonly used algorithms.'],
        tools : 'Google Drive, printed materials, office supplies',
        duration : '6 weeks',
        image : 'problem.jpg',

        completeSyllabus : [
            {
                name : 'M1 - Fundamentals',
                topics : [
                    'Computer basics and hardware', 
                    'Where are computers used?', 
                    'IT systems and how they work', 
                    'World Wide Web and the Internet'
                ]
            },
            {
                name : 'M2 - Productivity applications',
                topics : [
                    'Productivity applications (Word processing, spreadsheets, presentations)',
                    'Cloud services (Google Drive)',
                    'Working with files and folder',
                    'Collaboration and communication using the web'
                ]
            },
            {
                name : 'M3 - Tools',
                topics : [
                    'Virtual communities',
                    'Proper internet searching techniques',
                    'Programming languages',
                    'Online tools (CodePen & TinkerCAD)'
                ]
            },
            {
                name : 'M4 - Computational thinking',
                topics : [
                    'Problem solving',
                    'Handling abstractions',
                    'Data collection',
                    'Exploring algorithms'
                ]
            },
            {
                name : 'M5 - Algorithms and coding',
                topics : [
                    'Finding patterns',
                    'Developing algorithms',
                    'Coding structures (variables, data types)',
                    'More coding (flow control, nesting)',
                    'Debugging'
                ]
            },
            {
                name : 'M6 - More algorithms',
                topics : [
                    'Sorting algorithms',
                    'Search algorithms',
                    'Image representation'
                ]
            }
        ]
    },

    {
        name : 'Robotics Fundamentals',
        introduction : 'Build your first robot',
        information : ['This workshop will teach the students the basics of electronics and robotics.', 'The students will learn how to build and program a robot using Arduino, and then have a friendly competition between their robots.'],
        tools : 'Arduino',
        duration : '12 weeks',
        image : 'arduino.png',

        imgs : ['assets/img/robotics/KIT10.png', 'assets/img/robotics/KIT11.png', 'assets/img/robotics/KIT20.png', 'assets/img/robotics/KIT21.png', 'assets/img/robotics/KIT30.png', 'assets/img/robotics/KIT31.png'],
        captions : [
            'KIT 1: Through this kit, the aim is for the student to be able to integrate the digital software tools with the tools in the physical world, in such a way that all the theory can be put into practice. So that the student feels comfortable handling the basic components of electronics both in their simulators and through their physical kit.',
            'KIT 1: Through this kit, the aim is for the student to be able to integrate the digital software tools with the tools in the physical world, in such a way that all the theory can be put into practice. So that the student feels comfortable handling the basic components of electronics both in their simulators and through their physical kit.',
            'KIT 2: Combining new elements, sensors, actuators and accessories, we seek to increase the student\'s creative capacity to size solutions for real life applications. By generating this kit, you will be able to arm yourself with the physical world as well as in the digital world, integrating the previous systems and their knowledge bases.',
            'KIT 2: Combining new elements, sensors, actuators and accessories, we seek to increase the student\'s creative capacity to size solutions for real life applications. By generating this kit, you will be able to arm yourself with the physical world as well as in the digital world, integrating the previous systems and their knowledge bases.',
            'KIT 3: Having the modern tools of wireless communications we want to give each student the power to communicate technology with bluetooth and internet technologies for sending and receiving data. We seek that the management of hardware and software go hand in hand in such a way as to generate technological solutions applicable to real life through kits oriented towards automation and intelligent monitoring.',
            'KIT 3: Having the modern tools of wireless communications we want to give each student the power to communicate technology with bluetooth and internet technologies for sending and receiving data. We seek that the management of hardware and software go hand in hand in such a way as to generate technological solutions applicable to real life through kits oriented towards automation and intelligent monitoring.'
        ],
        miniCaptions : [
            'KIT 1: Put the theory into practice.',
            'KIT 1: Put the theory into practice.',
            'KIT 2: Sensors and actuators.',
            'KIT 2: Sensors and actuators.',
            'KIT 3: Automation and intelligent monitoring.',
            'KIT 3: Automation and intelligent monitoring.'
        ],

        completeSyllabus : [
            {
                name : 'M1 - Engineering Fundamentals\n\nDefine the basic elements of engineering, the way of thinking and solving problems of daily life.',
                topics : [
                    'What is engineering?',
                    'Engineering languages',
                    'Logical thinking',
                    'Problem solving',
                    'Creative thinking'
                ]
            },
            {
                name : 'M2 - Electricity Fundamentals\n\nWe begin to see the fundamental tools of any integrated circuit. See what it is made up of and feed the most basic level until you can develop more complex ideas.',
                topics : [
                    'Electricity',
                    'Voltage',
                    'Current',
                    'Power',
                    'Practical Exercises'
                ]
            },
            {
                name : 'M3 - Electronics Fundamentals\n\nWe are going to know the elements that allow us to interact with the digital world in such a way that we can create our first electronic circuits with the help of our first kit.',
                topics : [
                    'Electronic circuits',
                    'Integrated circuits',
                    'Transistors',
                    'Resistors',
                    'Capacitors',
                    'Inductors',
                    'Practical Exercises'
                ]
            },
            {
                name : 'M4 - CAD & 3D Printing\n\nWe started working on design from turning our ideas on paper into tangible ideas through 3D design to creating out ideas in the physical world using 3D printers and more.',
                topics : [
                    'Basic geometry',
                    'Design system',
                    'Software introduction',
                    '3D design',
                    'Combination of figures',
                    'Export and print',
                    'Workint with KIT #1'
                ]
            },
            {
                name : 'M5 - Introduction to programming\n\nWe begin to understand the communication language of machines. The way that we can write the orders and commands so that they can respond to our programs.',
                topics : [
                    'Introduction to programming',
                    'Flowchart',
                    'Logical sequences',
                    'Block programming',
                    'Variables',
                    'Cycles',
                    'Conditionals',
                    'Practical Exercises'
                ]
            },
            {
                name : 'M6 - Programmation advance\n\nWe begin to connect everything around us, the physical part of sensors and actuators with the digital world in such a way that we can generate programs and electronic applications and communicate through different sources.',
                topics : [
                    'Introduction to C++',
                    'Introduction to Arduino IDE',
                    'Arduino and hardware',
                    'I/O management',
                    'Use of actuators',
                    'Use of transducers and sensors',
                    'Practical Exercises'
                ]
            },
            {
                name : 'M7 - Robotics\n\nWe know about the world of power and about precision control over different control elements which lead us to be able to build more sophisticated solutions already with applications and purposes.',
                topics : [
                    'Introduction to robotics',
                    'Robotics fundamentals',
                    'Use of DC motors',
                    'Use of servo motors',
                    'Use of stepper motors',
                    'Project',
                    'This weekk we will deliver KIT #2 to start getting involved with the elements and put into practice the knowledge acquired.'
                ]
            },
            {
                name : 'M8 - Prepare to compete',
                topics : [
                    'Generate a small bootcamp to assure students got their robot build, program and ready to compete.'
                ]
            },
            {
                name : 'M9 - Robotics competition',
                topics : [
                    'Create a small competition between students. Competition should make students to compete (cooperate & compete). Competition should validate the learning objectives of past modules. Examples: Line-following Rover, Autonomours Rover not bumping into walls, Light-following Rover, etc.'
                ]
            },
            {
                name : 'M10 - Electronic applications',
                topics : [
                    'Motivate students to create their own electronic solution.',
                    'Explain more projects based on other electronic kits (more robotics, IoT, etc).',
                    'Show student other projects using YouTube or similar platforms.',
                    'Inspire students to build their own electronic solution based on intermediate or advanced hardware.',
                    'This week we will deliver KIT #3.'
                ]
            },
            {
                name : 'M11 - Creating your own electronic solution',
                topics : [
                    'Generate a small bootcamp to assure students got their electronic solution build, program and ready to compete.'
                ]
            },
            {
                name : 'M12 - Pitch your own electronic solution',
                topics : [
                    'Create an event where students prepare an elevator pitch of their electronic solution. Their technology should solve a real problem in their communities or environment. Research of the best possible solution should have been done by students.'
                ]
            }
        ]
    },

    {
        name : 'Front-end web development with React',
        introduction : 'Create a beautiful website using the React framework',
        information : ['This workshop will teach the students how to create their first website.', 'The students will learn how to use HTML, CSS and JS to make websites. Then, the React framework will help them to simplify the process.'],
        tools : 'React',
        duration : '12 weeks',
        image : 'react.jpg',

        completeSyllabus : [
            {
                name : 'M1 - HTML, CSS & JavaScript',
                topics : [
                    'HTML tags',
                    'Styling with CSS',
                    'Box model',
                    'Basic JS syntax',
                    'JS arrays and functions'
                ]
            },
            {
                name : 'M2 - More JavaScript and Github',
                topics : [
                    'Working with the DOM',
                    'Getting elements',
                    'Modifying elements',
                    'Version control software',
                    'Github',
                    'Branching and merging',
                    'Collaboration workflow'
                ]
            },
            {
                name : 'M3 - Even more JavaScript',
                topics : [
                    'High-order functions',
                    'Classes and objects',
                    'JSON',
                    'Map and filter',
                    'Aynchronous JavaScript',
                    'Promises',
                    'Async / await'
                ]
            },
            {
                name : 'CSS Frameworks',
                topics : [
                    'CSS frameworks',
                    'Material',
                    'Responsive design',
                    'Basic components',
                    'Forms'
                ]
            },
            {
                name : 'M5 - Working with APIs',
                topics : [
                    'REST APIs',
                    'Connecting with an external API',
                    'Fetching data',
                    'Parsing data'
                ]
            },
            {
                name : 'M6 - React basics',
                topics : [
                    'JSX syntax',
                    'Thinking in React',
                    'Describing the UI'
                ]
            },
            {
                name : 'M7 - Components and props',
                topics : [
                    'Designing components',
                    'Component lifecycle',
                    'Passing props',
                    'Conditional rendering',
                    'Rendering lists'
                ]
            },
            {
                name : 'M8 - Handling state',
                topics : [
                    'Adding interactivity',
                    'Responding to events',
                    'Updating state'
                ]
            },
            {
                name : 'M9 - State management',
                topics : [
                    'Reacting to input',
                    'Designing structure',
                    'Sharing between components',
                    'Preserving and resetting',
                    'Working with a reducer'
                ]
            },
            {
                name : 'M10 - Routing',
                topics : [
                    'How routes works',
                    'Adding routes to your web app'
                ]
            },
            {
                name : 'M11 - Authentication',
                topics : [
                    'Auth basics',
                    'Working with an auth provider',
                    'Integrating with your web app'
                ]
            },
            {
                name : 'M12 - Deployment',
                topics : [
                    'Hosting',
                    'Cloud providers'
                ]
            }
        ]
    },


    {
        name : 'Developmental (career) mentoring program',
        introduction : 'Three-month mentoring process to develop a web solution.',
        information : ['The fourth and final phase, consists  in a three-month mentoring process, in which the students are going to develop a web solution for a non-profit organization, and will have the support of mentors from XumaK and the University, for the approach of the solution, the clients relationship, and the development and implementation of the solution.'],
        tools : 'Mentors',
        duration : '8 weeks',
        image : 'group.png',

        completeSyllabus : []
    }

    /*
        imgs : ['https://picsum.photos/id/973/200/300', 'https://picsum.photos/id/974/200/300', 'https://picsum.photos/id/975/200/300', 'https://picsum.photos/id/976/200/300'],
        captions : ['Módulo 1', 'Módulo 2', 'Módulo 3', 'Módulo 4']
    */
];