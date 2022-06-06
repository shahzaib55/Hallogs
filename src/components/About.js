import React from "react";
const people = [
  {
    name: "Mr. Muhammad Sher Dil ",
    role: "Chief Executive Officer/ Founder",
  },
  {
    name: "Mr. Faisal Waseem ",
    role: "Director/ Co-Founder",
  },

  {
    name: "Ms. Sidrah Hassan Mughal  ",
    role: "Director/ Co-Founder",
  },
];
function About() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-5xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2> */}
            <p className="mt-1 text-3xl font-extrabold text-purple-600 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Hello! This is Hallogs
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              First-ever online venue booking mobile app
            </p>
          </div>
        </div>
      </div>
      {/* cero message */}
      <div className="bg-white pt-16 lg:py-24">
        <div className="pb-16 bg-purple-600 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full bg-gray-500"
               alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg
                      className="h-12 w-12 text-white opacity-25"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="mt-6 text-base font-medium text-white">
                      “There was an intense need to have a mobile phone
                      application that was used for booking marriage Halls and
                      Hotels, Event Gathering Places booking via mobile phones
                      and electronic gadgets. By using this Hallogs Mobile
                      Application, you cannot only view the venues in the
                      picture but also have a complete panoramic view along with
                      a virtual tour of the required venue, you may also read
                      the views about the place, people’s experience, and
                      comments. Before the finalization of any venue, you may
                      have a comparison of different places by using this
                      Hallogs Mobile Application.<br/> This ongoing trend was
                      amplified in 2020 as measures taken to curtail large
                      swaths of the economy to inhibit the spread of the
                      COVID-19 (coronavirus) pandemic made it more difficult to
                      purchase products or services in person. Instead, the
                      coronavirus pandemic spurred an uptick in online activity
                      as businesses were forced to make operational changes to
                      meet the shifting dynamics in the market.”
                    </p>
                  </div>
                  <footer className="mt-6">
                    <p className="text-xl font-bold text-white">
                      Mr. Muhammad Sher Dil
                    </p>
                    <p className="text-base font-medium text-indigo-100">
                      CEO at Hallogs
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-purple-600 sm:text-4xl">
                Board of Directors
              </h2>
              <p className="text-xl text-gray-900">
                The Hallogs (Private) Limited is governed by a 3 members board
                of directors. They are responsible for ensuring the
                organization’s mission.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <img
                        className="w-16 h-16 rounded-xl bg-gray-500 shadow-md lg:w-20 lg:h-20"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* bord direacato */}

      {/* new */}

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <p className="font-normal text-sm leading-3 text-gray-900 hover:text-indigo-800 cursor-pointer pb-2">
          About us
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold text-purple-500 lg:text-4xl text-3xl lg:leading-10 leading-9">
              Introduction
            </h2>
            <p className="text-md tracking-tighter leading-6  text-gray-900 mt-6">
              Hallogs (Private) Limited is a best booking service Pakistan-based
              company, registered in SECP.Hallogs is the first-ever
              user-friendly mobile app and website that is used to book
              comfortable, affordable and approachable event gatherings &
              congregation places online in Lahore. Hallogs provides a platform
              where aspirants meet with venue owners | Managements. Venue owner
              | Management will upload their place(s) availability status on
              app, similarly the public will book the place in accordance with
              their event budget, date & time. marriage hall availability in
              Lahore
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              className="lg:block hidden border-l-8 border-r-8 rounded-l-2xl rounded-r-2xl border-purple-500 w-full"
              src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="relative mt-24">
          <div className="grid sm:grid-cols-3   grid-cols-2 sm:gap-8 gap-4">
            <div className="z-20 w-12 h-12 bg-purple-600 shadow-lg rounded-full  flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5V21"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5V14"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <svg
              className="z-20 "
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#a248fe" />
              <path
                d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="z-20   sm:block hidden"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#9227fe" />
              <path
                d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-purple-600 mt-6">
              Founded
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              The need and idea of Hallogs is ages old but its implementation is
              done in 2022 by highly professionals who opt for an updated
              language..
            </p>
          </div>
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-purple-600 mt-6">
              Achivements
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              Our employee satisfaction scores are regularly above 98% and we
              encourage everyone at all levels to share their thoughts and
              opinions on what we can improve.
            </p>
          </div>
          <div className="sm:block hidden">
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-purple-600 mt-6">
              User
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              Hallogs know that on the user end booking is the most stressful
              thing so Our App will provide you services that aim to be
              creative, collaborative, comprehensible and most importantly,
              stress free.
            </p>
          </div>
        </div>
        <div className="sm:hidden block relative mt-8">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <svg
              className="z-20"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#1F2937" />
              <path
                d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4"></div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-purple-600">
              Our Mission
            </h2>
            <p className="font-normal text-base leading-6 text-gray-900 mt-6 w-full lg:w-10/12 xl:w-9/12">
              Bringing an online platform for you, where you can select and book
              your event gathering. place with ease inter alia promote your
              business with convenience.
            </p>

            <p className="font-normal text-base leading-6 text-gray-900 w-full lg:w-10/12 xl:w-9/12 mt-10"></p>
          </div>

          <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-purple-600">
              Our Strategy
            </h2>
            <p className="font-normal text-base leading-6 text-gray-900 mt-6 w-full lg:w-10/12 xl:w-9/12">
              Whatever the occasion, our Vision is to feed your requirements
              with some clicks.Hallogs assure you that the best you have.
            </p>
            {/* <h2>Our Vision</h2>
            <p className="font-normal text-base leading-6 text-gray-900 w-full lg:w-10/12 xl:w-9/12 mt-10"></p> */}
          </div>

          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              {/* <!-- Team Card --> */}
              <div className="flex p-4 shadow-md border-purple-500  border rounded-xl">
                <div className="mr-6 ">
                  <svg
                    className="mr-6"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="#9227fe"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z"
                      stroke=""
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-purple-600">
                    Team
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-900">
                    All of our Hallogs team members are unique and extremely
                    professionals. We are altogether a strong team who strive
                    for the best retaining and engaging on daily commitments. We
                    work hard every day to make sure that our people are
                    improving Hallogs’ App to deliver exceptional results for
                    our clients.
                  </p>
                </div>
              </div>

              {/* <!-- Board Card --> */}
              <div className="flex p-4 shadow-md border border-purple-500 rounded-xl">
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="#9227fe"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-purple-600">
                    Board
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-900">
                    The Hallogs (Private) Limited is governed by a 3 members
                    board of directors. They are responsible for ensuring the
                    organization’s mission.
                  </p>
                </div>
              </div>

              {/* <!-- Press Card --> */}
              <div className="flex p-4 shadow-md border-purple-500  border rounded-xl">
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="#9227fe"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 10.5L18 19.5L31.5 10.5"
                      fill="#fff"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-purple-600">
                    Press
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-900">
                    There’s important work to be done. Speak up with honesty and
                    candor.please feel free to Contact us!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* directors  */}
    </>
  );
}

export default About;
