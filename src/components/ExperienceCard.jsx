import React from 'react';

const ExperienceCard = ({
  title,
  location,
  description,
  list,
  techStack,
  isParagraph,
  isTime,
}) => {
  return (
    <>
      <h3 className="vertical-timeline-element-title font-semibold text-gray-900 dark:text-white">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-gray-600 dark:text-gray-300">
        {location} &nbsp;
        <span className="font-semibold">{isTime && isTime}</span>
      </h4>
      <h3 className="mt-4 font-normal text-gray-800 dark:text-gray-200 pr-6">
        {description}
      </h3>
      <ul className="mt-4 list-disc pl-5 space-y-1 font-sans text-sm text-gray-800 dark:text-gray-300 leading-relaxed pr-6">
        {list.map((item) => (
          <li key={item.id} className="ml-4">
            {item.text}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap justify-start pb-6">
        {techStack.map((item) => (
          <button
            key={item.id}
            className="ml-2 mt-2 px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default ExperienceCard;
