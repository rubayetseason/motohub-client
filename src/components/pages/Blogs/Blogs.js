import React from "react";

const Blogs = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl my-5">Blogs</h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">
                What are the different ways to manage a state in a React
                application?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Every React component has a built-in state. This state is an
                object which stores the property values that belong to a
                component. State is able to keep data from different components
                in-sync because each state update re-renders all relevant
                components. The built-in way that React provides for setting
                component states is by using setState() and adding “local state”
                to a class. There are several other ways to manage state​s in
                React, including the use of - 1. Hooks 2. React Context API 3.
                Apollo Link State
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">
                How does prototypical inheritance work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object.getPrototypeOf and Object. The
                built-in Object function is one of JavaScript’s fundamental
                objects. It has a prototype property on it that points to its
                prototype object—Object.prototype. Object.prototype is a
                prototypal JavaScript object and it is at the top of the
                prototype chain, so its [[Prototype]] internal slot is null.
                Object.prototype contains a bunch of internal methods that are
                available to all objects (like .toString() and valueOf()). All
                built-in objects (string, function, etc.) in JavaScript descend
                from the Object.prototype object, and every object’s prototype
                chain ultimately links back to Object.prototype.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">
                What is a unit test? Why should we write unit tests?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                A unit test is a type of software test that focuses on
                components of a software product. The purpose is to ensure that
                each unit of software code works as expected. A unit can be a
                function, method, module, object, or other entity in an
                application’s source code. The objective of a unit test is to
                test an entity in the code, ensure that it is coded correctly
                with no errors, and that it returns the expected outputs for all
                relevant inputs. Unit tests are typically created by developers
                during the coding phase of a project, and are written as code
                that exists in the codebase alongside the application code it is
                testing. Many unit testing frameworks exist that help developers
                manage and execute unit tests. Well-written unit tests act as
                documentation for your code. Any developer can quickly look at
                your tests and know the purpose of your functions. It simplifies
                the debugging process. Unit testing is an integral part of
                extreme programming
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-400">
                React vs. Angular vs. Vue?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                React is a UI library, Angular is a fully-fledged front-end
                framework, while Vue.js is a progressive framework. They can be
                used almost interchangeably to build front-end applications, but
                they’re not 100 percent the same, so it makes sense to compare
                them and understand their differences. Each framework is
                component-based and allows the rapid creation of UI features.
                However, they all have a different structure and architecture.
                Angular, React, and Vue are all under very active development.
                They regularly release new versions and maintain the existing
                ones. As the current level of support is high in each case, one
                can safely use any of these frameworks. It’s important to note
                that Angular is not growing as fast as before, while Vue — even
                though it started more recently — seems to be growing a lot. As
                previously stated, we can’t predict which frameworks will remain
                relevant in the long term, but each project has a great
                community behind it and is constantly evolving. Before jumping
                into a new framework, one should consider first one's team’s
                experience can be a deciding factor when choosing a new
                technology. Similarly, one have to consider the talent that is
                available in one's area so that one can hire developers for
                one's project. Finally, when it comes to the project itself, the
                complexity and scope can also affect your choice of framework.
                By taking into account all the key differences, I hope you can
                decide which is the best front-end framework for your goals and
                needs.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
