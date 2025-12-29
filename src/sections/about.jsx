// pages/About.jsx
import React from 'react';
import { GraduationCap, Award, Heart, Target } from 'lucide-react';
import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element
      name="about"
      className="min-h-screen px-6 py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-300">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A short overview of my background, interests, and direction
          </p>
        </header>

        <div className="space-y-16">
          {/* Story */}
          <section className="bg-black/40 border border-gray-700/50 rounded-xl px-8 py-8 text-center backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <Target size={20} />
              </div>
              <h2 className="text-xl font-semibold">My Story</h2>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              I am an undergraduate software engineer at <span className="text-blue-400 font-medium">LNBTI Japanese
              University</span>, dedicated to developing innovative technological
              solutions that address real world challenges. My expertise spans
              <span className="text-blue-400 font-medium"> AI and ML</span>, software engineering, and <span className="text-blue-400 font-medium">full stack development</span>.
            </p>
          </section>

          {/* Education */}
          <section className="bg-black/40 border border-gray-700/50 rounded-xl px-8 py-8 text-center backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-xl font-semibold">Education</h2>
            </div>

            <h3 className="text-lg font-medium text-blue-400 mb-1">
              BSc (Hons) in Software Engineering
            </h3>

            <p className="text-gray-300 mb-4">
              Lanka Nippon BizTech Institute (LNBTI)
            </p>

            <div className="flex justify-center flex-wrap gap-3">
              <span className="px-4 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm">
                Third Year Undergraduate
              </span>
              <span className="px-4 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30 text-sm font-medium text-green-400">
                GPA 3.29
              </span>
            </div>
          </section>

          {/* Certificates */}
          <section className="bg-black/40 border border-gray-700/50 rounded-xl px-8 py-8 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3 mb-6 text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <Award size={20} />
              </div>
              <h2 className="text-xl font-semibold">Certificates & Courses</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { name: 'HackerRank Basic SQL', status: 'Completed', type: 'done' },
                { name: 'HackerRank Intermediate SQL', status: 'Completed', type: 'done' },
                { name: 'AI & Machine Learning – SKYREK', status: 'Ongoing', type: 'progress' },
                { name: 'MERN Development Course – SKYREK', status: 'Ongoing', type: 'progress' },
                { name: 'WordPress Development Course', status: 'Ongoing', type: 'progress' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50"
                >
                  <span className="text-gray-200 text-sm font-medium">
                    {item.name}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.type === 'done'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section className="bg-black/40 border border-gray-700/50 rounded-xl px-8 py-8 text-center backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <Heart size={20} />
              </div>
              <h2 className="text-xl font-semibold">Interests & Focus</h2>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              My main interests include artificial intelligence, machine
              learning, and modern web development. I enjoy experimenting with
              new tools and learning through real projects.
            </p>
          </section>

          {/* AI / ML Journey */}
          <section className="bg-black/40 border border-gray-700/50 rounded-xl px-8 py-8 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-center mb-6 text-blue-400">
              AI / ML Journey
            </h2>

            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-center mb-8">
              My journey in artificial intelligence and machine learning began
              with understanding how machines learn from data and make
              decisions, and gradually evolved into practical applications.
            </p>

            <div className="space-y-6 max-w-2xl mx-auto text-center">
              <div>
                <h3 className="text-blue-400 font-medium">Foundation</h3>
                <p className="text-gray-400 text-sm">Python · Data Analysis</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-medium">Machine Learning</h3>
                <p className="text-gray-400 text-sm">Scikit-learn · Pandas</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-medium">Deep Learning</h3>
                <p className="text-gray-400 text-sm">TensorFlow · Keras</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-medium">
                  Generative AI <span className="text-gray-400">(Current)</span>
                </h3>
                <p className="text-gray-400 text-sm">LLMs · Diffusion Models</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Element>
  );
}