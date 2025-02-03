import React from 'react';
import { Code2, Github, Linkedin } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/personalInfo';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">{personalInfo.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-600 hover:text-blue-600">Sobre Mí</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">Proyectos</a>
          <a href="#skills" className="text-gray-600 hover:text-blue-600">Habilidades</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contacto</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <Github className="w-5 h-5" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <Linkedin className="w-5 h-5" />
          </a>
          
        </div>
      </div>
    </header>
  );
}