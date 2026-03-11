// ============================================================
// Portfolio Data – Srikanth M
// ============================================================

export const personalInfo = {
    name: 'Srikanth M',
    displayName: 'Srikanth',
    title: 'Fresher Full-Stack Developer',
    roles: ['Full Stack Developer', 'Python Developer', 'Backend Developer'],
    email: 'srikanthvenomy@gmail.com',
    phone: '+91 9591726986',
    github: 'https://github.com/venomy46',
    linkedin: 'https://www.linkedin.com/in/srikanth-m-b22105276/',
    resume: '/SrikanthM_developer.pdf',
};

export const summary = `Fresher Full-Stack Developer and Computer Science Engineering graduate passionate about building end-to-end web applications. Skilled in Python, React.js, Node.js, and RESTful API design, with hands-on experience shipping real projects to production. Eager to contribute to a team where I can grow rapidly and solve meaningful problems.`;

export const education = [
    {
        id: 1,
        degree: 'B.E. in Computer Science Engineering',
        institution: 'Visvesvaraya Technological University (VTU)',
        location: 'India',
        year: '2022 – 2026',
        score: 'CGPA: 8.0',
        icon: '🎓',
    },
    {
        id: 2,
        degree: 'Pre-University Course (PUC)',
        institution: 'Karnataka Board of Pre-University Education',
        location: 'Karnataka, India',
        year: '2020 – 2022',
        score: 'Score: 74%',
        icon: '📚',
    },
    {
        id: 3,
        degree: 'High School (SSLC)',
        institution: 'Karnataka State Board',
        location: 'Karnataka, India',
        year: '2020',
        score: 'Score: 84%',
        icon: '🏫',
    },
];

export const skills = [
    {
        category: 'Languages',
        icon: '💻',
        items: ['Python', 'C++', 'C', 'Java', 'SQL', 'C#'],
    },
    {
        category: 'Web Technologies',
        icon: '🌐',
        items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'REST APIs'],
    },
    {
        category: 'Data & Analytics',
        icon: '📊',
        items: ['Pandas', 'NumPy', 'Excel', 'Power BI (Basics)'],
    },
    {
        category: 'Databases',
        icon: '🗄️',
        items: ['MySQL', 'MongoDB'],
    },
    {
        category: 'Tools & Platforms',
        icon: '🛠️',
        items: ['Git', 'GitHub', 'VS Code'],
    },
];

export const projects = [
    {
        id: 1,
        title: 'Hangman AI Game',
        subtitle: 'AI-Powered Word Guessing Game',
        description: [
            'Built a fully interactive Hangman game where an AI engine picks and evaluates words based on letter frequency.',
            'Deployed as a 100% static HTML/JS app — no backend required — via Vercel for instant load times.',
            'Features smooth animations, difficulty levels, and a responsive design playable on any device.',
        ],
        techStack: ['JavaScript', 'HTML', 'CSS', 'AI Logic', 'Vercel'],
        color: 'from-emerald-500/20 to-teal-600/20',
        borderColor: 'border-emerald-500/30',
        icon: '🤖',
        liveLink: 'https://hangman-ai-game.vercel.app',
        githubLink: 'https://github.com/venomy46/Hangman-Ai-Game',
    },
    {
        id: 2,
        title: 'Bharat Stock Portfolio',
        subtitle: 'Real-Time Indian Stock Market Tracker',
        description: [
            'Developed a Flask-based web application to track and manage Indian (NSE/BSE) stock portfolios in real time.',
            'Integrated live stock data feeds and built a WebSocket-powered dashboard for live price updates.',
            'Deployed on Render with production-grade settings including proper port binding and WebSocket support.',
        ],
        techStack: ['Flask', 'Python', 'WebSocket', 'HTML', 'CSS', 'JavaScript', 'Render'],
        color: 'from-orange-500/20 to-amber-600/20',
        borderColor: 'border-orange-500/30',
        icon: '📊',
        liveLink: 'https://bharath-portfolio-zzet.onrender.com',
        githubLink: 'https://github.com/venomy46/Bharath-portfolio',
    },
    {
        id: 3,
        title: 'Foodie Vision',
        subtitle: 'Smart Food Recipe Web Application',
        description: [
            'Developed a FastAPI-based web application for food image upload and recipe presentation.',
            'Implemented backend logic and integrated a responsive frontend using HTML, CSS, and JavaScript.',
            'Structured application output to display ingredients and preparation steps.',
        ],
        techStack: ['FastAPI', 'Python', 'HTML', 'CSS', 'JavaScript'],
        color: 'from-sky-500/20 to-blue-600/20',
        borderColor: 'border-sky-500/30',
        icon: '🍽️',
        liveLink: 'https://food-app-recipe-bfst.onrender.com',
        githubLink: 'https://github.com/venomy46/Foodie-vision',
    },
    {
        id: 4,
        title: 'Student Stress Predictor',
        subtitle: 'Predictive Analysis of Student Stress Levels',
        description: [
            'Academic project developed using C# for analyzing student-related data.',
            'Designed logic to evaluate stress levels based on academic and lifestyle parameters.',
        ],
        techStack: ['C#'],
        color: 'from-violet-500/20 to-purple-600/20',
        borderColor: 'border-violet-500/30',
        icon: '📈',
    },
];

export const certifications = [
    {
        id: 1,
        title: 'AWS Cloud Foundations',
        issuer: 'Amazon Web Services',
        icon: '☁️',
        color: 'from-orange-500/10 to-yellow-500/10',
        border: 'border-orange-500/25',
    },
    {
        id: 2,
        title: 'Google Cloud Career Foundations (GCCF)',
        issuer: 'Google Cloud',
        icon: '🌩️',
        color: 'from-blue-500/10 to-cyan-500/10',
        border: 'border-blue-500/25',
    },
    {
        id: 3,
        title: 'Introduction to SQL',
        issuer: 'Simplilearn',
        icon: '🗃️',
        color: 'from-green-500/10 to-teal-500/10',
        border: 'border-green-500/25',
    },
    {
        id: 4,
        title: 'Fundamentals of Databases',
        issuer: 'Simplilearn',
        icon: '💾',
        color: 'from-sky-500/10 to-indigo-500/10',
        border: 'border-sky-500/25',
    },
];
