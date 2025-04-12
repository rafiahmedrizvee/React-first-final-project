import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Get in Touch</h2>
                <p className="text-gray-600 text-center mb-8">Feel free to drop us a message. We'll get back to you as soon as possible!</p>
                
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input 
                            type="text" 
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                            placeholder="Your name" 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                            placeholder="you@example.com" 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea 
                            rows="5" 
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit" 
                        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;



