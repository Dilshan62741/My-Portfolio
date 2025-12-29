import React from 'react';
import { Mail, MapPin, Github, Linkedin, Copy } from 'lucide-react';

export default function Contact() {
  const handleCopy = () => {
    navigator.clipboard.writeText('dilshanvimukthi1111@gmail.com');
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
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
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="w-full max-w-4xl rounded-2xl bg-gray-900 border border-gray-800 p-10 shadow-2xl relative z-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-1.5">
              <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-400">
                DV
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold">Dilshan Vimukthi</h1>
            <p className="text-blue-400 text-sm">Software Engineer</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <MapPin size={14} />
              <span>Sri Lanka</span>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        {/* Email */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">
            Email Address
          </p>

          <div className="flex items-center justify-between gap-4 bg-gray-800 border border-gray-700 rounded-xl px-5 py-4">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={18} className="text-blue-400" />
              <span>dilshanvimukthi1111@gmail.com</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition text-gray-300"
            >
              <Copy size={14} />
              Copy
            </button>
          </div>
        </div>

        {/* Social Profiles */}
        <div>
          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">
            Social Profiles
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/Dilshan62741"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-gray-800 border border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center">
                <Github className="text-gray-300" />
              </div>
              <div>
                <p className="font-medium text-white">GitHub</p>
                <p className="text-sm text-gray-400">@dilshanvimukthi</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dilshan-vimukthi-3564aa251/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-gray-800 border border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center">
                <Linkedin className="text-gray-300" />
              </div>
              <div>
                <p className="font-medium text-white">LinkedIn</p>
                <p className="text-sm text-gray-400">Dilshan Vimukthi</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}