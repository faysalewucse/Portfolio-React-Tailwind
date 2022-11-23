import React from "react";

export default function Portfolio() {
  const categories = [
    {
      name: "All",
      filter: "all",
    },
    {
      name: "Web App",
      filter: "category-a",
    },
    {
      name: "Mobile App",
      filter: "category-b",
    },
  ];
  const projects = [
    {
      name: "Online Food Delivery System",
      image: "FoodsBd",
    },
  ];
  return (
    <section
      id="portfolio-section"
      className="py-5 bg-gray-900 text-white text-center px-12 lg:px-72"
    >
      <div className="">
        <h6 className="border border-green-500 py-2 px-5 inline-block">
          <i className="fa fa-arrow-left"></i> What I have Made?
          <i className="fa fa-arrow-right"></i>
        </h6>
        <h1 className="text-3xl font-bold my-3">Portfolio Showcase</h1>
        <hr className="lg:w-1/12 w-1/2 mx-auto border border-green-500 my-2" />
        <i className="fa fa-arrow-down"></i>
        <br />
        <i className="fa fa-arrow-down"></i>
        <div className="flex justify-center gap-2 my-5">
          {categories.map((category) => {
            return (
              <button
                className="bg-white text-black px-2 rounded hover:bg-green-500 hover:text-white transition-all duration-300"
                type="button"
                data-filter={category.filter}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 border border-green-500 p-5">
          {projects.map((project) => {
            return (
              <div className="rounded-lg">
                <h1 className="font-bold tracking-wider mb-2">
                  {project.name}
                </h1>
                <img
                  className="img-fluid rounded-lg transform bg-blue-400 hover:bg-blue-600 transition duration-500 hover:scale-105"
                  src={`./images/portfolio/${project.image}.jpg`}
                  alt={project.name}
                />
                {/* <div className="flex gap-5 justify-center">
              <a
                href="https://foodsbd.netlify.app/"
                target="blank"
                className="border border-green-500 p-2 rounded"
              >
                Live Demo
              </a>
              <a
                href="https://foodsbd.netlify.app/"
                target="blank"
                className="border border-green-500 p-2 rounded"
              >
                Source
              </a>
            </div> */}
              </div>
            );
          })}
          {/* <div className="mix category-a">
            <a
              href="https://foodsbd.netlify.app/"
              target="blank"
              className="border border-green-500"
            >
              <img
                className="img-fluid hvr-grow"
                src="./images/portfolio/FoodsBd.jpg"
                alt="foodsbd"
              />
            </a>
            <h4>Online Food Ordering System</h4>
          </div>
          <div className="mix category-a">
            <a href="https://dreamy-creponne-8d2692.netlify.app" target="blank">
              <img
                className="img-fluid hvr-grow"
                src="./images/portfolio/LLQ.jpg"
                alt="llq"
              />
            </a>
            <h4>Quran Learning WebApp</h4>
          </div>
          <div className="mix category-a" data-order="3">
            <a href="https://steady-belekoy-27cb0c.netlify.app/" target="blank">
              <img
                className="img-fluid hvr-grow"
                src="./images/portfolio/Assuzud.jpg"
                alt="perfumance"
              />
            </a>
            <h4>AsSuzud Perfume Shop</h4>
          </div>
          <div className="mix category-b" data-order="4">
            <img
              className="img-fluid hvr-grow"
              src="./images/portfolio/Muhasaba.jpg"
              alt=""
            />
            <h4>An Islamic App for Dua & Jikir</h4>
          </div>
          <div className="mix category-a" data-order="4">
            <a href="https://learnwithsumit.com/certificates/verify/LWSCTXN-8JXIW67G">
              <img
                className="img-fluid hvr-grow"
                src="./images/portfolio/redux.png"
                alt=""
              />
            </a>
            <h4>6 Redux Project LWS</h4>
          </div> */}
        </div>
        <a className="btn button" href="/">
          LOAD MORE PROJECTS
        </a>
      </div>
    </section>
  );
}
