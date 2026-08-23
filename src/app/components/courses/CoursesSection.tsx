import React from "react";
import Image from "next/image";

export default function CoursesSection() {
  return (
    <section id="courses" className="text-primary px-4 lg:px-12 pt-14 lg:pt-18">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:py-4 ">
          Publications & Professional Service
        </h2>
        <ol className="pt-12 relative border-l border-gray-200 dark:border-gray-700 ">
          <li className="mb-10 ml-4 flex">
            <div className="flash-effect absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/uoc_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300">
                University of Crete (UOC) · September 2025 to May 2026
              </p>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                Teaching Assistant
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                <li>
                  Databases (HY-360): led 2 theoretical lab sessions, managed
                  the course website, and evaluated projects, midterms, and
                  finals.
                </li>
                <li>
                  Algorithms & Complexity (HY-380): maintained the course web
                  platform and evaluated weekly assignments and final exams.
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/forth_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300">
                HCI International Conference (Montreal) · July 2026
              </p>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                Session Chair & Host (Contract)
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                Managed technical hosting for 13 virtual sessions and stepped in
                as Session Chair for a live proceedings session, supporting 100+
                international speakers and attendees across the 6-day
                conference.
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/forth_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300">
                EDBT 2026 Publication
              </p>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                GSS: Graph Semantic Summarization
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                Co-authored research and built a Python pipeline using SPARQL,
                RDFlib, and Gemini/Groq APIs to extract and score explainable
                subgraphs from Knowledge Graphs.{" "}
                <a
                  href="https://ceur-ws.org/Vol-4192/TGD-paper6.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Paper
                </a>
              </p>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/uoc_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-300">
                Springer Publication
              </p>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                Bridging HIFUN into Practice
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                Authored Bachelor&apos;s thesis research on HIFUN, building a
                high-level functional query API with hybrid SQL–NoSQL database
                integration.{" "}
                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-032-12767-9_12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Springer Link
                </a>
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
