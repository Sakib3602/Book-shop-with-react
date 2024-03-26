import PropTypes from "prop-types";

const StoryCard = ({e}) => {
    const {author,story,title} = e
  return (
    <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-purple-100 text-gray-900">
      <article>
        <h2 className="text-3xl font-bold">
          {title}
        </h2>
        <p className="mt-4 text-gray-700 flex-auto
        ">
         {story}
        </p>
        <div className="flex items-center mt-8 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-10 h-10 rounded-full bg-gray-500"
          />
          <div>
            <h3 className="text-sm font-medium">{author}</h3>
            <time datetime="2021-02-18" className="text-sm text-gray-800">
              Feb 18th 2021
            </time>
          </div>
        </div>
      </article>
    </div>
  );
};

StoryCard.propTypes = {};

export default StoryCard;
