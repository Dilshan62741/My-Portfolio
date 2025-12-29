import React from 'react';
import { Code, Server, Database, Palette, Brain, Wrench } from 'lucide-react';

function Skills() {
  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-purple-500 to-blue-500',
      borderColor: 'border-gray-600',
      bgColor: 'bg-gray-800',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      color: 'from-purple-500 to-blue-500',
      borderColor: 'border-gray-600',
      bgColor: 'bg-gray-800',
      skills: ['Node.js', 'Express.js', 'Flask', 'PHP', 'Laravel']
    },
    languages: {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-purple-500 to-blue-500',
      borderColor: 'border-gray-600',
      bgColor: 'bg-gray-800',
      skills: ['Python', 'Java', 'C', 'C++', 'C#', 'JavaScript', 'SQL', 'HTML', 'CSS']
    },
    databases: {
      title: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-blue-500',
      borderColor: 'border-gray-600',
      bgColor: 'bg-gray-800',
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL']
    },
    aiml: {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-blue-500',
      borderColor: 'border-gray-600',
      bgColor: 'bg-gray-800',
      skills: ['Supervised Learning', 'Unsupervised Learning', 'ANN', 'CNN', 'RNN', 'TensorFlow', 'Deep Learning']
    },
    tools: {
      title: 'Tools & Frameworks',
      icon: Wrench,
      color: 'from-purple-500 to-blue-500',
      borderColor: 'border-gray-600',
      bgColor: 'bg-gray-800',
      skills: ['Visual Studio', 'Git & GitHub', 'Google Colab', 'Jupyter Notebooks']
    }
  };

  const proficiencyLevels = [
    { name: 'React & JavaScript', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'Node.js & Express', level: 80 },
    { name: 'SQL & Databases', level: 82 },
    { name: 'AI & Machine Learning', level: 75 },
    { name: 'C/C++/Java', level: 78 }
  ];

  return (
    <div name="skills" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h1>
          <p className="text-xl text-gray-400">Technologies and tools I work with to build amazing solutions</p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.values(skillCategories).map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center p-1.5`}>
                    <div className="w-full h-full bg-gray-800 rounded flex items-center justify-center">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:border-gray-600 hover:bg-gray-750 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="mb-16">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Skill <span className="text-blue-400">Proficiency</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {proficiencyLevels.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-semibold">{skill.name}</span>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Soft <span className="text-blue-400">Skills</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { skill: 'Leadership', icon: '👑' },
                { skill: 'Teamwork', icon: '🤝' },
                { skill: 'Communication', icon: '💬' },
                { skill: 'Problem Solving', icon: '🧩' },
                { skill: 'Project Management', icon: '📊' },
                { skill: 'Time Management', icon: '⏰' },
                { skill: 'Adaptability', icon: '🔄' },
                { skill: 'Critical Thinking', icon: '🧠' },
                { skill: 'Creativity', icon: '🎨' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-all border border-gray-700 hover:border-gray-600"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-gray-300">{item.skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;