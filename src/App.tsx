import { Link } from "react-router-dom";

function App() {
  return (
    <body className="bg-gray-100 font-sans leading-normal tracking-normal">
      <div className="container mx-auto p-4">
        {/* <!-- Header Section --> */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-4xl font-bold mb-2">Danny Gonzalez</h1>
          <h2 className="text-xl text-gray-600 mb-4">Front-End Developer</h2>
          <p className="text-gray-600">Email: dannygz0710@gmail.com</p>
          <p className="text-gray-600">Phone: (615) 047-0623</p>
          <div>
          <Link
            to="https://github.com/dannygz0710"
            className="text-gray-600 hover:text-gray-950" >
            GitHub: github.com/dannygz0710</Link>

          </div>
          <Link
            to="https://www.linkedin.com/in/danny-gonzalez-067880219"
            className="text-gray-600 hover:text-gray-950"
          >
            Linkedin: linkedin.com/in/danny-gonzalez-067880219
          </Link>
        </div>
        {/* <!-- Summary Section --> */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="text-gray-700">
            I am passionate about everything related to technology with 2 year of experienceand studying for more than five years , especially
            web and mobile development, my stack of technologies includes 
            <span className="font-bold mx-2">Typescript, Reactjs, Next Js, Redux, Css.</span> 
           
          </p>
          <p className="text-gray-700 mt-2">
          I enjoy creating solutions that can help people in the future,and it motivates me to learn new things every day.
          </p>
        </div>
        {/* <!-- Skills Section --> */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>HTML5, CSS3, JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS, Bootstrap, Material Ui</li>
            <li>Git, GitHub</li>
            <li>Responsive Design</li>
            <li>Next Js</li>
            <li>Typescript</li>
          </ul>
        </div>
        {/* <!-- Experience Section --> */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold ">
              Front-End Developer at Go Design
            </h3>
            <p className="text-gray-600 my-1">Dec 2018 - Sep 2020</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Developed and maintained web applications using React and Redux
              </li>
              <li>
                Implemented responsive design principles to ensure applications
                worked on all devices
              </li>
              <li>
                Collaborated with designers and back-end developers to create
                seamless user experiences
              </li>
              <li>Worked on bug fixing and performance optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Freelance</h3>
            <p className="text-gray-600">sep 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Assisted in the development of web applications using NextJs
              </li>
              <li>
                Participated in code reviews and contributed to the improvement
                of code quality
              </li>
              <li>Worked on bug fixing and performance optimization</li>
            </ul>
          </div>
        </div>
        {/* <!-- Education Section --> */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600">
              University Rafael Urdaneta, 2015 - 2017
            </p>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">
              Master Degree 
            </h3>
            <p className="text-gray-600">
              Acamica, 2018
            </p>
          </div>
        </div>
        {/* <!-- Footer Section --> */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 text-center">&copy; {new Date().getFullYear()} by Danny Gonzalez</p>
        </div>
      </div>
    </body>
  );
}

export default App;


