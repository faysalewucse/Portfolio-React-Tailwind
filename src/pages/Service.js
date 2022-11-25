import React from "react";

export const Service = () => {
  const services = [
    {
      name: "MERN Stack Development",
      description:
        "Get a full responsive website from me using MERN Stack Development. Which means the web application will be used MongoDB, Express, ReactJS, NodeJs.",
      icon: "node",
    },
    {
      name: "Design to Code",
      description:
        "Get the best converesion from PSD,XD,AI,Figma to HTMl Code with Basic SEO compatible.Will be full Responsive and fast Loading. And, I won't leave you till your satisfaction.",
      icon: "html5",
    },
    {
      name: "Wordpress Development",
      description:
        "Get the best custom WordPress website design and developed in 2020 using best technology. And, I won't leave you till your satisfaction.",
      icon: "wordpress",
    },
  ];
  return (
    <section
      id="services-section"
      className="lg:px-72 px-6 bg-gray-800 py-[3%] text-white text-center"
    >
      <div className="max-w-7xl mx-auto">
        <h6 className="border border-green-500 inline-block py-2 px-8 font-bold">
          <i className="fa fa-arrow-left" /> What You will Get form Me?{" "}
          <i className="fa fa-arrow-right" />
        </h6>
        <h1 className="text-4xl my-5 font-bold">My Services</h1>
        <hr className="w-2/12 mx-auto border-2 border-green-500" />
        <p className="my-5 w-2/3 mx-auto text">
          I have experienced in both Web development and App Development. I have
          designed website for my jobs purpose and also for local client. I have
          also design UI/UX, Flayer, Business Card, Vector Portrait etc.I also
          experienced in making Logo and Typography.
        </p>
        <hr className="w-2/12 mx-auto border-2 border-green-500 mb-5" />
        <i className="fa fa-arrow-down"></i>
        <br />
        <i className="fa fa-arrow-down mb-5" />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-left gap-5">
          {services.map((service) => {
            return (
              <div className="group/item relative border border-green-600 px-5 py-10 hover:bg-gray-900 hover:cursor-pointer">
                <i className={`fa-brands fa-${service.icon} text-5xl`}></i>
                <h4 className="mt-4 text-3xl font-bold my-2">{service.name}</h4>
                <p className="lead">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
