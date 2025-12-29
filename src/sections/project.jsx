import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Map
} from 'lucide-react';

export default function Projects() {
  const [imageError, setImageError] = useState({});

  const projects = [
    {
      title: 'Supun Shoe Mart',
      description:
        'An online shoe store system with separate roles for administrators and customers. The system supports product management, shopping cart functionality, order tracking, and online payments.',
      icon: ShoppingCart,
      image: '/projectShoeMart.png',
      color: 'blue',
      url: "https://github.com/Dilshan62741/Shoe-Mart",
      tags: ['React', 'Node.js', 'MySQL', 'Express'],
    },
    {
      title: 'All in One Tourist Support System (TOURNEXUS)',
      description:
        'A comprehensive web based tourism platform designed for Sri Lanka. The system integrates hotel bookings, tour guide services, vehicle rentals, and AI powered trip planning into a single platform.',
      icon: Map,
      image: '/projectTournexus.png',
      color: 'purple',
      url: "https://github.com/SE02-SAD-Group-Project2025/Tour-Nexus",
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: 'text-blue-400',
        gradient: 'from-purple-500 to-blue-500',
      },
      purple: {
        text: 'text-purple-400',
        gradient: 'from-purple-500 to-blue-500',
      },
    };
    return colors[color];
  };

  return (
    <div id="projects" className="min-h-screen px-6 py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }
        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        }
        .project-image {
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Selected academic and personal projects demonstrating practical development experience
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);

            return (
              <article
                key={index}
                className="project-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 flex flex-col"
              >
                {/* Image Section */}
                <div className="project-image-wrapper h-48 flex items-center justify-center p-4">
                  {!imageError[index] ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image w-full h-full object-contain"
                      onError={() => setImageError({...imageError, [index]: true})}
                    />
                  ) : (
                    <Icon size={60} className={`${colors.text} opacity-30`} />
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className={`text-xl font-bold mb-3 ${colors.text}`}>
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-md bg-gray-800 border border-gray-700 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  
                  <button 
                  
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-750 hover:border-blue-500 transition-all duration-300 text-gray-300 font-medium"
                  onClick={() => window.open(project.url, "_blank")}
                   
                  >
                    View Project
                  
                    <ExternalLink size={16} />
                    
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">
            Additional projects and enhancements are currently in progress.
          </p>
          <a
            href="https://github.com/Dilshan62741"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            <Github size={20} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}