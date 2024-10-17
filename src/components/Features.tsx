import React from 'react';
import { BookOpen, PenTool, Database, Users } from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Digital Libraries', description: 'Access vast collections of academic resources' },
  { icon: PenTool, title: 'Research Tools', description: 'Advanced tools for data analysis and visualization' },
  { icon: Database, title: 'Data Management', description: 'Secure and efficient research data management solutions' },
  { icon: Users, title: 'Collaboration Platform', description: 'Connect with researchers worldwide' },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;