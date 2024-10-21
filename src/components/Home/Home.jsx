import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all stories from the backend
        const storyResponse = await axios.get(
          "http://localhost:8000/api/v1/user/story/showAllStory"
        );
        setStories(storyResponse.data.data || []);

        // Fetch all events from the backend
        const eventResponse = await axios.get(
          "http://localhost:8000/api/v1/user/event/showAllEvents"
        );
        setEvents(eventResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getTopItems = (items) => {
    return items.length <= 4 ? items : items.slice(0, 4);
  };

  return (
    <>
      {/* College Image Section */}
      <section className="mt-24"> {/* Add margin to avoid overlap with sticky header */}
        <img
          src="./collegeImage.jpg"
          alt="College Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0  bg-white bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl  font-bold text-white">
            Welcome to MAKAUT Alumni Platform
          </h1>
        </div>
      </section>

      {/* Principal Section */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src="./principal.jpg"
              alt="Principal"
              className="w-3/4 h-auto object-cover rounded-lg mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Dr. Gautam Majumdar</h2>
            <p className="text-gray-700">
            Gautam Majumdar is a distinguished academic leader and the Chancellor of Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal. With a rich background in engineering and education, he has significantly contributed to the development of technical education in India. Majumdar's leadership focuses on fostering innovation, research, and collaboration among educational institutions. He emphasizes the importance of integrating industry needs into academic programs to prepare students for the future. Under his guidance, MAKAUT has aimed to enhance its reputation and impact in higher education.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="flex-grow mt-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stories Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-6">Stories</h2>

            {getTopItems(stories).map((story, index) => (
              <div
                key={index}
                className="flex mb-6 hover:scale-105 transform transition-transform duration-200"
              >
                <img
                  src={story.image || "/default-story-image.png"}
                  alt={story.title}
                  className="w-24 h-24 mr-4 rounded-lg object-cover"
                />
                <div>
                  <span className="text-gray-500 text-sm block mb-1">
                    {story.date
                      ? new Date(story.date).toLocaleDateString()
                      : "Unknown Date"}
                  </span>
                  <h3 className="text-xl font-semibold mb-1">{story.title}</h3>
                </div>
              </div>
            ))}

            <a
              href="/stories"
              className="block text-center text-blue-600 font-bold hover:bg-blue-100 py-2 border-t border-gray-200 mt-4"
            >
              View All Stories
            </a>
          </div>

          {/* Programs & Events Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-6">
              Programs & Events
            </h2>

            {getTopItems(events).map((event, index) => (
              <div
                key={index}
                className="flex items-center mb-4 hover:scale-105 transform transition-transform duration-200"
              >
                <span className="font-bold text-lg mr-3">
                  {event.date
                    ? new Date(event.date).toLocaleDateString()
                    : "Unknown Date"}
                </span>
                <div>
                  <span className="text-gray-500 text-sm block">
                    {event.category}
                  </span>
                  <h4 className="text-md font-semibold">{event.title}</h4>
                  <p className="text-xs text-gray-600">
                    {event.description || "No description available"}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="/events"
              className="block text-center text-blue-600 font-bold hover:bg-blue-100 py-2 border-t border-gray-200 mt-4"
            >
              View All Upcoming Events
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
