import React from "react";

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="text-white px-4 lg:px-12 pt-14 lg:pt-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:py-4 ">
          Courses
        </h2>
        <ol className="pt-12 relative border-l border-gray-200 dark:border-gray-700 ">
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <img
              src="/images/codewithmosh_logo.png"
              alt="Company Logo"
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Code With Mosh
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                Clean Coding and Refactoring
              </h3>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <img
              src="/images/codewithmosh_logo.png"
              alt="Company Logo"
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Code With Mosh
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                React 18: for Beginners
              </h3>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <img
              src="/images/codewithmosh_logo.png"
              alt="Company Logo"
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Code With Mosh
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                React 18: Intermediate Topics
              </h3>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company Logo"
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Udemy
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                Javascript Essentials
              </h3>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
            <img
              src="/images/codewithmosh_logo.png"
              alt="Company Logo"
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-400 dark:text-gray-500">
                Code With Mosh
              </p>
              <h3 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white">
                The Ultimate Git Course
              </h3>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default CoursesSection;
