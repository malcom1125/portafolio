import React from 'react';
import { Code2, Github, Linkedin } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/personalInfo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">{personalInfo.name}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github className="w-5 h-5" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}