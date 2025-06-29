import React from 'react';

const CustomProjectCard = ({
  techStack,
  title,
  subTitle,
  description,
  featureTitle,
  featureLists,
  exploreBtn,
  client
}) => {
  return (
    <>
      <div className='flex items-center'>
        <h3 className="vertical-timeline-element-title font-bold text-xl font-display dark:text-white">{title}</h3>
        {client && <span className='text-xs dark:text-gray-400'>/Client</span>}
      </div>
      <h4 className="vertical-timeline-element-subtitle italic font-serif text-gray-600 dark:text-gray-300">
        {subTitle}
      </h4>
      <h3 className="mt-4 font-sans text-gray-800 dark:text-gray-200">{description}</h3>
      <div className="mt-4">
        <h3 className="font-semibold dark:text-white">{featureTitle}</h3>
        <ul className="list-disc pl-5 space-y-1 font-sans text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
          {featureLists.map((item) => (
            <li key={item.id} className="ml-6">
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-start pb-6">
        {techStack.map((item) => (
          <button
            key={item.id}
            className="ml-2 mt-2 px-4 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium rounded-full"
          >
            {item.label}
          </button>
        ))}
      </div>
      {!client && <div className="gap-2 mt-2 flex justify-start xs:justify-around xs:mr-8 dark:text-white">
  {exploreBtn.map((item) => {
    const isDisabled = !item.url || item.url.trim() === "";

    return isDisabled ? (
      // 🔒 Disabled button without <a> wrapper
      <button
        key={item.id}
        className="xs:text-xs bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed font-bold py-2 px-4 xs:px-1 rounded-lg inline-flex items-center"
        disabled
      >
        {item.icon} &nbsp;
        <span>{item.name}</span>
      </button>
    ) : (
      // ✅ Enabled button with valid URL
      <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
        <button
          className="xs:text-xs bg-white hover:bg-slate-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 xs:px-1 rounded-lg inline-flex items-center"
        >
          {item.icon} &nbsp;
          <span>{item.name}</span>
        </button>
      </a>
    );
  })}
</div>
}
    </>
  );
};

export default CustomProjectCard;
