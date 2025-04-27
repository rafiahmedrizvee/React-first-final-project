import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white text-gray-800  min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 bg-primary text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to the Online Embassy
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Bringing embassy services to your fingertips with speed, safety, and
          convenience.
        </p>
      </section>

      {/* Mission */}
      <section className="py-12 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto">
          To provide seamless digital access to embassy services for citizens
          and residents abroad, fostering global connectivity and support.
        </p>
      </section>

      {/* Vision */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="max-w-3xl mx-auto">
          A world where embassies are just a click away—efficient, transparent,
          and always within reach.
        </p>
      </section>

      {/* What We Offer */}
      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Visa Applications</h3>
            <p>
              Quick and secure visa processing for tourists, students, and
              workers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Document Legalization</h3>
            <p>
              Digitally submit and track legalization of official documents.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
            <p>Get fast help during emergencies abroad—available 24/7.</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
        <p className="max-w-3xl mx-auto">
          Integrity, Accessibility, Innovation, Transparency, and Respect for
          all users and citizens we serve.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["Ambassador", "Digital Officer", "Support Lead"].map(
            (role, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded">
                <div className="h-24 w-24 mx-auto rounded-full bg-blue-200 mb-4" />
                
                <h4 className="text-xl font-bold">{role}</h4>
                <p className="text-gray-600">
                  Expert in embassy tech and services
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Journey</h2>
        <ul className="max-w-4xl mx-auto space-y-6">
          <li>
            <strong>2021:</strong> Idea born from need during travel
            restrictions
          </li>
          <li>
            <strong>2022:</strong> MVP launched in 3 countries
          </li>
          <li>
            <strong>2023:</strong> Full rollout in over 25 locations
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white p-6 shadow-md rounded">
            "The online process was super smooth. I renewed my passport without
            visiting the consulate!" – Jane D.
          </blockquote>
          <blockquote className="bg-white p-6 shadow-md rounded">
            "Saved me a flight across the country. Everything was handled online
            in hours." – Karim B.
          </blockquote>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-8">FAQs</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          <div>
            <h4 className="font-bold">Is it secure to apply online?</h4>
            <p>Yes, we use encrypted systems and government protocols.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I track my application?</h4>
            <p>
              Yes, real-time tracking is available for all service requests.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 md:px-20 bg-primary text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Have a question? Need help with your documents? We’re here for you
          anytime, anywhere.
        </p>
       <Link to='/contact'>
       <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded hover:bg-primary transition">
          Contact Support
        </button>
       </Link>
      </section>
    </div>
  );
};

export default About;
