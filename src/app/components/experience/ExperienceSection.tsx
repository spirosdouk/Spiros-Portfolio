import React from "react";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section id="experience" className=" text-primary  px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:py-4 ">
          Experience
        </h2>
        <ol className="pt-12 relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4 flex">
            <div className="flash-effect absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/logicea_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                September 2024 - Currently
              </time>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                (FullTime) Software Engineer at Logicea, Remote
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                <li>
                  Collaborated with designers, engineering teams, and accounting
                  staff to modernize legacy accounting platforms and build SSO
                  hubs across products.
                </li>
                <li>
                  Rebuilt a legacy Laravel multi-tenant platform with Next.js,
                  React, TypeScript, and MySQL, improving page load speed and
                  maintainability.
                </li>
                <li>
                  Built a single account hub with NextAuth, AWS Cognito, Stripe,
                  and REST APIs for login, subscriptions, and purchases across
                  apps.
                </li>
                <li>
                  Stabilized AADE/myDATA tax integrations with a
                  TypeScript/Node.js caching layer, cutting external calls by
                  85%.
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="flash-effect absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/forth_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                October 2024 - Currently
              </time>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                (Research Fellow) Software Engineer at ICS-FORTH, Heraklion
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                <li>
                  Worked with researchers and engineers across FORTH and partner
                  universities on full-stack apps and EU-funded research
                  (GreenInCities).
                </li>
                <li>
                  Built the GreenInCities monitoring platform for Profitis Ilias
                  Park with Next.js, React, TypeScript, and Socket.IO for
                  real-time sensor streams.
                </li>
                <li>
                  Integrated NestJS and MongoDB to store and stream NGSI-LD
                  broker data into multi-widget dashboards.
                </li>
                <li>
                  Secured REST APIs with Keycloak OIDC, JWT verification, and
                  refresh-token sessions for multi-tenant partner logins.
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-10 ml-4 flex">
            <div className="absolute w-3 h-3 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <Image
              src="/images/logicea_logo.png"
              alt="Company Logo"
              width={48}
              height={48}
              className="w-12 h-12 mt-1 mr-4"
            />
            <div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                June 2024 - September 2024
              </time>
              <h3 className="text-sm lg:text-lg font-semibold  dark:text-white">
                (Internship) Frontend Developer Intern at Logicea, Hybrid
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                <li>
                  Built a demo web app with React, Next.js, TypeScript, and Git
                  in an agile team of 7 intern developers.
                </li>
                <li>
                  Built responsive UI components from Figma specs using HTML and
                  CSS.
                </li>
                <li>
                  Reviewed PRs in daily Git sessions with a senior developer to
                  match company engineering standards.
                </li>
              </ul>
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
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                Expected 2027
              </time>
              <h3 className="text-sm lg:text-lg font-semibold dark:text-white">
                (Masters Degree) University of Crete, Department of Computer
                Science
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                FORTH-ICS Graduate Research Scholarship Recipient.
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
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                Graduated
              </time>
              <h3 className="text-sm lg:text-lg font-semibold dark:text-white">
                (Bachelors Degree) University of Crete, Department of Computer
                Science
              </h3>
              <p className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                FORTH-ICS Undergraduate Research Scholarship Recipient.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
