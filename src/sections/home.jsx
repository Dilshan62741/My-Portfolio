import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profilePicture from '../profilePicture.jpg';


export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
      `}</style>
      {/* Navigation */}
      

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-24 px-6"
      >
        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Text */}
          <div>
            <p className="text-gray-400 mb-2">Hi, I am</p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-gray-400">Dilshan </span>
              <span className="text-blue-400">Vimukthi</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 mb-6 animate-fade-in-up">
              Full Stack Developer : AI / ML Enthusiast : Software Engineer
            </p>

            <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
              Passionate Software Engineering undergraduate at LNBTI Japanese University. Transforming ideas into elegant digital solutions through clean code and innovation.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-500 font-medium hover:bg-blue-600 transition"
              >
                Get in touch
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
              >
                View projects
              </a>

              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Github size={26} />
              </a>

              <a
                href="https://www.linkedin.com/in/dilshan-vimukthi-3564aa251/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Linkedin size={26} />
              </a>

              {/* <a
                href="mailto:dilshanvimukthi1111@gmail.com"
                className="hover:text-blue-400 transition"
              >
                <Mail size={26} />
              </a> */}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1.5">
                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={profilePicture}
                      alt="Dilshan Vimukthi"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <span className="text-6xl font-bold text-purple-400">
                      DV
                    </span>
                  )}
                </div>
              </div>

              <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-purple-500 rounded-full blur-2xl opacity-20" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-blue-500 rounded-full blur-2xl opacity-20" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-400" size={32} />
        </div>
      </section>


    </div>
   
  );
  
}