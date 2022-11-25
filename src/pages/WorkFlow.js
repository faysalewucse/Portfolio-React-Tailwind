import React from "react";

function WorkFlow() {
  return (
    <section
      id="workflow-section"
      className="bg-gray-900 text-white text-center py-[5%] lg:px-72"
    >
      <div className="lg:grid lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-1 col-span-2">
          <h5 className="after:content-[''] after:bg-green-600 after:inline-block after:h-[3px] after:relative after:align-middle after:ml-5 after:w-1/5 before:content-[''] before:bg-green-600 before:inline-block before:h-[3px] before:relative before:align-middle before:w-1/5 before:mr-5">
            How Do I work?
          </h5>
          <i className="fa fa-arrow-down text-green-600 font-bold" />
          <h1 className="text-4xl font-semibold">My Workflow</h1>
          <hr className="w-1/2 mx-auto border-2 border-green-600 my-1" />
          <p className="text-justify text-xl p-5">
            I always follow specific steps when I’m working on a design project.
            In this way I can keep everything organised and it creates moments
            to talk about the project with my clients.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5">
          <button className="text-md border border-green-500 w-1/2 mx-auto lg:w-full p-3 rounded">
            Preparing
          </button>
          <button className="text-lg border border-green-500 w-1/2 mx-auto lg:w-full p-3 rounded">
            Design
          </button>
          <button className="text-md border border-green-500 w-1/2 mx-auto lg:w-full p-3 rounded">
            Development
          </button>
          <button className="text-md border border-green-500 w-1/2 mx-auto lg:w-full p-3 rounded">
            Details
          </button>
        </div>
        <p className="col-span-2 text-justify lg:border border-green-600 p-5 text-xl">
          For the Project at first I mostly ask questions and talk with my
          clients about what and how they want to complete their project. I want
          to get a super clear ideae of what they want and need. Only then can I
          deliver a product that both parties are happy with.
        </p>
      </div>
    </section>
  );
}

export default WorkFlow;