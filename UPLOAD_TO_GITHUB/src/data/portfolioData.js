// ============================================================
// Portfolio Data – Srikanth M
// ============================================================

export const personalInfo = {
    name: 'Srikanth M',
    displayName: 'Srikanth',
    title: 'Computer Science Engineering Graduate',
    roles: ['Python Developer', 'Full Stack Developer', 'Backend Developer'],
    email: 'srikanthvenomy@gmail.com',
    phone: '+91 9591726986',
    github: 'https://github.com/venomy46',
    linkedin: 'https://www.linkedin.com/in/srikanth-m-b22105276/',
};

export const summary = `Computer Science Engineering graduate with practical experience gained through academic and independent projects. Strong foundation in programming, backend development, and web technologies, with experience in designing and implementing structured applications. Interested in software development roles involving problem-solving, system design, and continuous learning.`;

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
    },
    {
        id: 2,
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
