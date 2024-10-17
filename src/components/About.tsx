import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Research team" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About ARSS</h2>
            <p className="text-gray-600 mb-4">
              Academic Research Software Solution (ARSS) is dedicated to providing cutting-edge educational tools and software for higher education institutions. Our mission is to empower researchers, educators, and students with innovative technology that enhances the academic research process.
            </p>
            <p className="text-gray-600 mb-4">
              With a team of experienced developers and education experts, we create solutions that address the unique challenges faced by the academic community. Our tools are designed to streamline research workflows, facilitate collaboration, and accelerate the pace of scientific discovery.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Learn more about our team</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;