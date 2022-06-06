import React from "react";

const people = [
  {
    name: "Mr. Muhammad Fahad",
    role: "I.T Specialist",
     imageUrl:
     'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: "The Application is based on a unique workflow and its framework is advanced. Responsive and user friendly interface so one can explore its features and book venue directly.",
  },
  {
    name: "Ms Zainab sajid ",
    role: "Data Analyst",
    imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: "As a data analyst I was excited to collect and interpret data sets in order to resolve the giant problem which our society faces before there special events as we called it booking problem.     .",
  },
  {
    name: "Ms Sadaf Riaz",
    role: "Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Unique ideas with unique concepts are always welcome by engineers. Appreciate the new notion which forces us to work with various dimensions.    .",
  },
  {
    name: "Mr Sumair Shaukat",
    role: "Developer Team Lead",
    imageUrl:
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: "It's always a great opportunity dealing with a number of people to meet our manifest goal. The Hallogs Team works like a family to accomplish it.    .",
  },
  {
    name: "Mr. Wajahat Sher",
    role: "Media & Communications",
    imageUrl:
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: "Marketing is the spine of any business and experience of Hallogs marketing was quite different as it's related to “us”.",
  },
  // More people...
];

export default function Example() {
  return (
    <div className="bg-purple-50 ">
      <div className="bg-purple-50 ">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2> */}
            <p className="mt-1 text-4xl font-extrabold text-purple-600 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Teamwork makes the dream work
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-900">
              Teamwork is the ability to work together toward a common vision.
              The ability to direct individual accomplishments toward
              organizational objectives. It is the fuel that allows common
              people to attain uncommon results
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-12 px-4 max-w-5xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12   ">
          <h2
            className="text-3xl p-4  text-purple-500 font-extrabold text-center
           sm:text-4xl"
          >
            Meet Our Core Team
          </h2>

          <ul
          
            className="space-y-12 m-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover shadow-2xl border-4 border-purple-400 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-purple-500">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
