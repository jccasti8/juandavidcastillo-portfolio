import {RevealOnScroll} from '../RevealOnScroll'

export const About = () => {

    const frontendSkills = [
        "React", 
        "Flutter", 
        "TailwindCSS",
    ];
    const backendSkills = [
        "Node.js", 
        "Python", 
        "MongoDB",
        "PostgresSQL",
        "GraphQL",
    ];

    return (
    <section 
    id = "about" 
    className="min-h-sscreen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className=" max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-800 to-cyan-200 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">Passionate developer with expertise in builindg scalable web applications and creating innovative solutions.</p>

                    <div className=" grid grid-cols-1 md:grid-cols2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2"></div>
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,245,0.2)] transition
                                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2"></div>
                                {backendSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,245,0.2)] transition
                                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className=" text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Bachelor of Science in Computer Science</strong> - University of Houston (2018-2024)
                            </li>
                            <li>Relevant Coursework: Algorithms & Data Structures, Software Design, Data Science, Database Systems</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </RevealOnScroll>

    </section>
    );
}