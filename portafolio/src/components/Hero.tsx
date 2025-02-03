import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          {personalInfo.name}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          {personalInfo.role}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {personalInfo.bio}
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contactar
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
}