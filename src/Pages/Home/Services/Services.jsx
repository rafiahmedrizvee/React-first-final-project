import React from 'react';
import { FaPassport, FaUserShield, FaGavel, FaGlobeAmericas } from 'react-icons/fa';

const services = [
  {
    title: 'Visa Services',
    icon: <FaPassport className="text-4xl text-blue-600" />,
    description: 'Apply for tourist, business, or student visas with our streamlined online system.',
  },
  {
    title: 'Passport Renewal',
    icon: <FaUserShield className="text-4xl text-green-600" />,
    description: 'Renew your passport securely online without visiting the embassy in person.',
  },
  {
    title: 'Consular Assistance',
    icon: <FaGlobeAmericas className="text-4xl text-purple-600" />,
    description: 'Get help during emergencies, legal matters, or travel issues abroad.',
  },
  {
    title: 'Notarial & Legal Services',
    icon: <FaGavel className="text-4xl text-red-600" />,
    description: 'We provide document notarization and legal certification for citizens abroad.',
  },
];

function Services() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          The Online Embassy provides fast, secure, and reliable services for citizens and travelers.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center items-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
