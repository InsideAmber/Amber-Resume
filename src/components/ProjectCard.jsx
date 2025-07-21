import React from 'react';

const ProjectCard = ({
  techStack,
  title,
  subTitle,
  description,
  featureTitle,
  featureLists,
  exploreBtn,
}) => {
  return (
    <>
      <div className="flex flex-wrap justify-start xs:justify-between pb-6">
        {techStack.map((item) => (
          <button
            key={item.id}
            className="ml-2 mt-2 px-4 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full"
          >
            {item.label}
          </button>
        ))}
      </div>
      <h3 className="vertical-timeline-element-title font-bold">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle font-light">
        {subTitle}
      </h4>
      <h3 className="mt-4 pr-6">{description}</h3>
      <div className="mt-4">
        <h3 className="font-semibold">{featureTitle}</h3>
        <ul className="list-disc">
          {featureLists.map((item) => (
            <li key={item.id} className="ml-6">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex justify-between dark:text-black">
        {exploreBtn.map((item) => (
          <a href={item.url} target="_blank" rel="noreferrer">
            <button
              key={item.id}
              className="xs:text-xs bg-gray-100 hover:bg-grey text-grey-darkest font-bold py-2 px-4 xs:px-1 rounded-lg inline-flex items-center"
            >
              {item.icon} &nbsp;
              <span>{item.name}</span>
            </button>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
