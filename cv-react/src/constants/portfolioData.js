// Personal Information
export const personalInfo = {
    name: "Hasnain Gul",
    title: "AI/ML Engineer | Deep Learning Specialist | RAG Expert",
    tagline: "Building enterprise-grade AI applications with expertise in NLP, Deep Learning, and RAG Architectures",
    profileImage: "/assets/images/9011.jpg",
    email: "contact@hasnaingul.me",
    phone: "+92 347 9555964",
    location: "UET Mardan, Mardan",
    linkedin: "https://www.linkedin.com/in/hasnain-gul-27a8382b9",
    github: "https://github.com/Hasnaingul123"
};

// Navigation Links
export const navigationLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
];

// About Content
export const aboutContent = {
    paragraphs: [
        "Aspiring AI/ML Engineer with a strong foundation in Deep Learning, NLP, and RAG Architectures. Proven experience in building full-stack AI applications, including enterprise-grade disinformation detection systems and educational tools.",
        "Proficient in Python, FastAPI, and Scikit-learn, with a Bachelor's degree from UET Mardan. Passionate about deploying scalable AI solutions to solve real-world problems.",
        "My expertise spans from developing multi-modal analysis systems to creating intelligent RAG-based applications that ground answers in user-provided content, significantly reducing model hallucinations."
    ],
    education: [
        {
            degree: "BSc Computer Software Engineering",
            institution: "University of Engineering and Technology (UET), Mardan",
            details: "CGPA: 3.1 | Currently in 8th semester"
        },
        {
            degree: "Intermediate (Pre-Engineering)",
            institution: "Govt College Peshawar",
            details: "Marks: 955/1100"
        },
        {
            degree: "Matriculation",
            institution: "Read Public School and College, Harichand",
            details: "Marks: 928/1100"
        }
    ]
};

// Certificates and Internships
export const certificates = [
    {
        id: 1,
        title: "Deep Neural Networks",
        issuer: "GIKI (8-Week Bootcamp)",
        date: "2024",
        description: "Intensive training in Deep Neural Networks with hands-on experience in backpropagation and model optimization",
        downloadUrl: "/certificates/GIKi Bootcamp certificate.jpg",
        type: "certificate",
        icon: "fa-certificate"
    },
    {
        id: 2,
        title: "Machine Learning Specialization",
        issuer: "Coursera (DeepLearning.AI)",
        date: "2024",
        description: "Comprehensive ML specialization covering supervised and unsupervised learning algorithms",
        downloadUrl: "/certificates/Machine Learning Specialization_page-0001.jpg",
        type: "certificate",
        icon: "fa-certificate"
    },
    {
        id: 3,
        title: "Retrieval Augmented Generation (RAG)",
        issuer: "Coursera",
        date: "2024",
        description: "Advanced RAG implementation techniques for building grounded AI applications",
        downloadUrl: "/certificates/RAG certificate_page-0001.jpg",
        type: "certificate",
        icon: "fa-certificate"
    },
    {
        id: 4,
        title: "AI For Everyone",
        issuer: "Coursera",
        date: "2024",
        description: "Foundational understanding of AI technologies and their business applications",
        downloadUrl: "/certificates/AI For Everyone_page-0001.jpg",
        type: "certificate",
        icon: "fa-certificate"
    },
    {
        id: 5,
        title: "AI Research Trainee - GIKI Bootcamp",
        issuer: "GIK Institute (GIKI)",
        date: "8 Weeks",
        description: "Completed intensive training in Deep Neural Networks with hands-on capstone projects focusing on Advanced Neural Networks",
        downloadUrl: "/certificates/GIKi Bootcamp certificate.jpg",
        type: "internship",
        icon: "fa-briefcase"
    },
    {
        id: 6,
        title: "AI/ML Intern",
        issuer: "Codsoft",
        date: "1 Month",
        description: "Developed ML models for real-world applications including recommendation systems and predictive analytics",
        downloadUrl: "/certificates/Internship Certificate.png",
        type: "internship",
        icon: "fa-briefcase"
    }
];

// Projects
export const projects = [
    {
        id: 1,
        title: "Advanced Multi-Modal Disinformation Intelligence System",
        description: "Enterprise-grade platform for detecting and analyzing disinformation across text, images, and videos using Graph Databases, Deep Learning, and Multi-Modal AI.",
        tech: ["Python", "Graph Database", "Deep Learning", "Multi-Modal AI", "FastAPI", "Next.js"],
        category: "ai-ml",
        icon: "fa-shield-alt"
    },
    {
        id: 2,
        title: "RAG-Based Educational Assistant",
        description: "Intelligent Q&A system that grounds answers in user-provided educational content, reducing hallucinations by 85% using advanced RAG architecture.",
        tech: ["Python", "RAG", "LangChain", "Vector DB", "NLP"],
        category: "ai-ml",
        icon: "fa-graduation-cap"
    },
    {
        id: 3,
        title: "Sentiment Analysis Dashboard",
        description: "Real-time sentiment analysis tool for social media data with interactive visualizations and trend detection capabilities.",
        tech: ["Python", "NLP", "Streamlit", "Pandas", "Scikit-learn"],
        category: "data-science",
        icon: "fa-chart-line"
    },
    {
        id: 4,
        title: "Customer Churn Prediction Model",
        description: "ML model achieving 92% accuracy in predicting customer churn, enabling proactive retention strategies.",
        tech: ["Python", "Scikit-learn", "XGBoost", "Feature Engineering"],
        category: "analytics",
        icon: "fa-users"
    },
    {
        id: 5,
        title: "Movie Recommendation System",
        description: "Collaborative filtering-based recommendation engine with content-based hybrid approach for personalized suggestions.",
        tech: ["Python", "Collaborative Filtering", "Pandas", "NumPy"],
        category: "ai-ml",
        icon: "fa-film"
    },
    {
        id: 6,
        title: "Sales Forecasting Dashboard",
        description: "Time series forecasting tool with ARIMA and Prophet models for accurate sales predictions and business planning.",
        tech: ["Python", "Time Series", "Prophet", "Plotly"],
        category: "analytics",
        icon: "fa-chart-bar"
    }
];

// Skills
export const skills = [
    {
        category: "Programming Languages",
        icon: "fa-code",
        items: ["Python (Advanced)", "SQL"]
    },
    {
        category: "AI/ML Frameworks",
        icon: "fa-brain",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face"]
    },
    {
        category: "Data Science",
        icon: "fa-chart-line",
        items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
        category: "Deep Learning",
        icon: "fa-project-diagram",
        items: ["Neural Networks", "CNNs", "RNNs", "Transformers", "Transfer Learning"]
    },
    {
        category: "NLP & RAG",
        icon: "fa-language",
        items: ["LangChain", "Vector Databases", "Embeddings", "RAG Architecture", "Prompt Engineering"]
    },
    {
        category: "Web Development",
        icon: "fa-globe",
        items: ["FastAPI", "Flask", "Streamlit", "Next.js", "React"]
    },
    {
        category: "Databases",
        icon: "fa-database",
        items: ["PostgreSQL", "Neo4j (Graph DB)", "MongoDB", "ChromaDB", "Pinecone"]
    },
    {
        category: "Tools & Platforms",
        icon: "fa-tools",
        items: ["Git", "Docker", "Jupyter", "VS Code", "Google Colab"]
    }
];

// Floating Tech Icons for Hero Section
export const floatingTechIcons = [
    { icon: "fab fa-python", tech: "Python", position: { top: '20%', left: '20%' } },
    { icon: "fas fa-brain", tech: "AI", position: { top: '50%', right: '20%' } },
    { icon: "fas fa-chart-line", tech: "Data", position: { bottom: '20%', left: '40%' } }
];

// Filter Categories for Projects
export const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'web-dev', label: 'Web Development' }
];

// Contact Information
export const contactInfo = [
    {
        id: 1,
        icon: "fa-envelope",
        label: "Email",
        value: "contact@hasnaingul.me",
        link: "mailto:contact@hasnaingul.me"
    },
    {
        id: 2,
        icon: "fa-phone",
        label: "Phone",
        value: "+92 347 9555964",
        link: "tel:+923479555964"
    },
    {
        id: 3,
        icon: "fa-map-marker-alt",
        label: "Location",
        value: "UET Mardan, Mardan",
        link: null
    },
    {
        id: 4,
        icon: "fab fa-linkedin",
        label: "LinkedIn",
        value: "Hasnain Gul",
        link: "https://www.linkedin.com/in/hasnain-gul-27a8382b9"
    },
    {
        id: 5,
        icon: "fab fa-github",
        label: "GitHub",
        value: "@Hasnaingul123",
        link: "https://github.com/Hasnaingul123"
    }
];
