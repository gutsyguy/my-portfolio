const data = {
    projects:[
    {
        _id: "Pax1",
        title: 'Pax (Game)',
        collabs: "Elijah Cononigo",
        category: 'Game development',
        projectType: "Hackathon",
        projectFor: "Project for Lancer Hacks",
        date: "February 11, 2023",
        skills: 'Godot',
        description: 'A game about Schizophrenia.',
        github: 'https://github.com/gutsyguy/git-init-game',
        image: '/images/Pax.png',
        tools: ["Godot Engine"]
    },
    {
        _id: "Pax2",
        title: 'Pax (web)',
        category: 'Web development',
        skills: 'Next.js',
        description: 'A website about mental health.',
        github: 'https://github.com/Alex-RV/PaxGitInit',
        image: '/images/Pax.png'
    },
    {
        _id: "Next-Step",
        title: 'Next Step',
        category: 'Web development',
        skills: 'Next.js, Tailwind',
        description: 'Connecting students and mentors.',
        github: 'https://github.com/gutsyguy/NextStep',
        image: '/images/NextStep.png'
    },
    {
        _id: "Memeware",
        title: 'Memeware',
        category: 'Miscellaneous',
        skills: 'C++, SDL2',
        description: 'A maleware that shows memes.',
        github: 'https://github.com/JulianBarbera/memeware',
        image: '/images/Memeware.png'
    },
    {
        _id: "Elgoog",
        title: 'Elgoog',
        category: 'Web Dev',
        skills: 'Next.js, typescript, tailwind.',
        description: 'A reverse search engine',
        github: 'https://github.com/Alex-RV/DALY',
        image: '/images/Elgoog.png'
    },
    {
        _id: "Meal-Missionary",
        title: 'Meal Missionary',
        category: 'Web Dev',
        skills: 'Next.js, express, mongodb',
        description: 'Connecting charities and resturants',
        github: 'https://github.com/Alex-RV/Meal-Missionary',
        image: '/images/MealMissionary.png'
    },
    {
        _id: "Pacepals",
        title: 'Pacepals',
        category: 'Mobile Dev',
        skills: 'Flutter',
        description: 'A fitness mobile app',
        github: 'https://github.com/gutsyguy/pacepals',
        image: '/images/Pacepals.png'
    },
    {
        _id: "JointShape",
        title: 'JointShape',
        category: '3d modeling',
        skills: 'Fusion360',
        description: 'A joined shape',
        github: '',
        image: '/images/jointshape.png'
    },
    {
        _id: "Pyramid",
        title: 'Pyramid',
        category: '3d modeling',
        skills: 'Fusion360',
        description: 'A pyramid',
        github: '',
        image: '/images/pyramid.png'
    },
],
    timeline:[
        {
            title:"Google Code Next",
            type:"Apprenticeship",
            date:"September 2020 - Present",
            description:"Joined during freshman year"
        },
        {
            title:'Team Edge',
            type:"program",
            date:'July 2021 - June 2022',
            description:' A yearlong program where I build websites with the flask framework and a camera with the raspberry pi'        
        },
        {
            title:'Launch',
            type: "program",
            date: 'July 2022 - Present',
            description: 'An entreprenuership program.'
        },
        {
            title: 'Code Next Hacks 5',
            type: "event",
            date:'August 2022',
            description: ' A 3 day hackathon where I build chat-app with react.js and firebase and won first place.'
        },
        {
            title: 'Los altos 6',
            type: "event",
            date: 'September 2022',
            description:'A 24 hour hackathon where I created game with Unity'
        },
        {
            title:'Unite hacks',
            type:"event",
            date:'October 2022',
            description: ' A twelve hour hackathon where I made a game with Godot'
        },
        {
            title: 'Epoche hacks',
            type: "event", 
            date: 'December 2022',
            description:'A twelve hour hackathon where I created Maleware with C++'
        },
        {
            title: 'Git init 2023',
            type: "event",
            date: 'January 2023',
            description: ' A 12 hour hackthon where I created a game with Godot'
        },
        {
            title: "Lancer Hacks",
            type: "event",
            date: "February 2023",
            description: "A 12 hour hackathon where I created a reverse search engine"
        },
        {
            title:"Mountain Hacks",
            type: "event",
            date:"March 2023",
            description: "Won best UX/UI design"
        },
        {
            title: "Los Altos Hacks 7",
            type: "event",
            date: "February 2023",
            description: "A 24 hour hackathon where I created a fitness mobile app"
        },
        {
            title:"Anova Hacks",
            type:"event",
            date:"April 2023",
            description:"Won best social good"
        },
        {
            title:"Flutter workshop",
            type:"event",
            date:"March 2023",
            description:"Developing the curriculum for a flutter workshop set to be taught on june 3rd"
        }
    ],
    skills:
        {
            Languages:[
                {
                    image: '/images/python.png',
                    name: 'Python',
                    profiency: '90%',
                    level: 'Advanced'
                },
                {
                    image: '/images/javascript.png',
                    name: 'Javascript',
                    profiency: '90%',
                    level: 'Advanced'
                },
                {
                    image: '/images/kotlin.png',
                    name: 'Kotlin',
                    profiency: '80%',
                    level: 'Advanced'
                },
                {
                    image: '/images/typescript.png',
                    name: 'Typescript',
                    profiency: '85%',
                    level: 'Advanced'
                },
                {
                    image: '/images/CSharp.png',
                    name: 'C#',
                    profiency: '80%',
                    level: 'Advanced'
                },
                {
                    image: '/images/java.png',
                    name: 'Java',
                    profiency: '75%',
                    level: 'Advanced'
                },
                {
                    image: '/images/swift.png',
                    name: 'Swift',
                    profiency: '60%',
                    level: 'Intermediate'
                },
                {
                    image: '/images/html.png',
                    name: 'HTML',
                    profiency: '90%',
                    level: 'Advanced'
                },
                {
                    image: '/images/css.png',
                    name: 'CSS',
                    profiency: '90%',
                    level: 'Advanced'
                },
                {
                    image: '/images/sql.png',
                    name: 'SQL',
                    profiency: '90%',
                    level: 'Advanced'
                },
                
            ]
            ,
            Frameworks:[
                {
                    image: '/images/react.png',
                    name: 'React',
                    profiency: '80%',
                    level: 'Advanced'
                },
                {
                    image: '/images/express.png',
                    name: 'Express',
                    profiency: '70%',
                    level: 'Intermediate'
                },
                {
                    image: '/images/unitylogo.png',
                    name: 'Unity',
                    profiency: '80%',
                    level: 'Advanced'
                },
                {
                    image: '/images/android.png',
                    name: 'Android Development',
                    profiency: '80%',
                    level: 'Advnaced'
                },
                {
                    image: '/images/godot.png',
                    name: 'Godot',
                    profiency: '60%',
                    level: 'Intermediate'
                },
                {
                    image: '/images/tailwind.png',
                    name: 'Tailwind css',
                    profiency: '90%',
                    level: 'Advanced'
                },
                {
                    image: '/images/flutterlogo.png',
                    name: 'Flutter',
                    profiency: '70%',
                    level: 'Intermediate'
                },
                {
                    image: '/images/tensorflowlogo.png',
                    name: 'Tensorflow',
                    profiency: '60%',
                    level: 'Intermediate'
                },
                {
                    image: '/images/pytorch.png',
                    name: 'Pytorch',
                    profiency: '70%',
                    level: 'Intermediate'
                },
                {
                    image: '/images/flask.png',
                    name: 'Flask',
                    profiency: '80%',
                    level: 'Advanced'
                },
                {
                    image: '/images/nextlogo.png',
                    name: 'Next.js',
                    profiency: '85%',
                    level: 'Advanced'
                },
            ],
            Miscellanous:[
                {
                    image: '/images/blender.png',
                    name: 'Blender',
                    profiency: '80%',
                    level: 'Advanced'
                },
                {
                    image: '/images/fusion360.png',
                    name: 'Fusion 360',
                    profiency: '70%',
                    level: 'Intermediate'
                },
                {
                    image: '/images/firebase.png',
                    name: 'Firebase',
                    profiency: '50%',
                    level: 'Familiar'
                },
                {
                    image: '/images/raspberryPi.png',
                    name: 'Raspberry Pi',
                    profiency: '80%',
                    level: 'Advanced'
                },
            ]
        },
}

export default data