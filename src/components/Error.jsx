import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16  text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl text-gray-900 font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded text-white bg-violet-400 "
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
