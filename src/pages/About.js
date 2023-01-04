import React from "react";

export default function About() {
  const info = {
    name: "Faysal Ahmad",
    email: "faysal.ewucse@gmail.com",
    phone: "+8801634495020",
    address: "DSCC-13, Amtola, Sharulia, Demra, Dhaka",
    education:
      "I am a student of Computer Science and Engineering in East West University. My school was Shamsul Haque Khan School and College and My College was Dr. Mahbubur Rahman Mollah College. I Got GPA 5.0 both SSC and HSC. I currently have a CGPA more then 3. I like to code and I have a lot of patience and passion to learn new things everyday. I am very practical and hard working and self motivated.",
  };
  return (
    <section id="about-section">
      <div className="bg-gray-800 text-white py-[5%] lg:px-56">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-8 items-center">
          <img
            src="images/profile.jpg"
            alt="profile"
            className="lg:h-96 lg:w-96 h-48 w-48 mx-auto object-cover rounded-full col-span-3 "
          />

          <hr className="border-2 border-green-600 lg:rotate-90 m-5" />
          <div className="lg:col-span-4 lg:text-2xl">
            <div className="flex gap-5">
              <table>
                <tr>
                  <td className="font-bold px-5">Name</td>
                  <td>:</td>
                  <td>{info.name}</td>
                </tr>
                <tr>
                  <td className="font-bold px-5">Email</td>
                  <td>:</td>
                  <td>{info.email}</td>
                </tr>
                <tr>
                  <td className="font-bold px-5">Address</td>
                  <td>:</td>
                  <td>{info.address}</td>
                </tr>
                <tr>
                  <td className="font-bold px-5">Phone</td>
                  <td>:</td>
                  <td>{info.phone}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <p className="px-5 mt-5 font-bold lg:text-3xl">Education</p>
        <p className="px-5 text-justify lg:text-2xl">{info.education}</p>
      </div>
    </section>
  );
}
