import React from 'react';
import Link from 'next/link';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Waveify Showcase
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore amazing wave animations and generators created with Waveify
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Wave Generator Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Wave Generator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create beautiful wave animations with customizable parameters
            </p>
            <Link 
              href="/generator/wave"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Wave Generator
            </Link>
          </div>

          {/* Terminal Generator Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Terminal Generator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Generate terminal-style loading animations
            </p>
            <Link 
              href="/generator/terminal"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Try Terminal Generator
            </Link>
          </div>

          {/* Typing Generator Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Typing Generator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create typewriter effect animations
            </p>
            <Link 
              href="/generator/typing"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Try Typing Generator
            </Link>
          </div>

          {/* Loader Generator Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              Loader Generator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create custom loading spinners and animations
            </p>
            <Link 
              href="/generator/loader"
              className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              Try Loader Generator
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-block bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-6 py-3 rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Showcase | Waveify',
  description: 'Explore amazing wave animations and generators created with Waveify',
};
