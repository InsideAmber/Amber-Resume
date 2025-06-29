import React from 'react';
import { MdWork } from 'react-icons/md';

import ProjectCard from './ProjectCard';
import CustomProjectCard from './CustomProjectCard';
import {
  projectOneCardData,
  projectTwoCardData,
  projectThreeCardData,
  projectFourCardData,
} from '../constants';

const CustomProjectTimeline = () => {
  return (
    <>
      <ol className="relative border-l border-gray-400 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <MdWork />
          </span>
          <CustomProjectCard
            techStack={projectOneCardData.techStack}
            title={projectOneCardData.title}
            subTitle={projectOneCardData.subTitle}
            description={projectOneCardData.description}
            featureTitle={projectOneCardData.featureTitle}
            featureLists={projectOneCardData.featureLists}
            exploreBtn={projectOneCardData.exploreBtn}
            client={true}
          />
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <MdWork />
          </span>
          <CustomProjectCard
            techStack={projectTwoCardData.techStack}
            title={projectTwoCardData.title}
            subTitle={projectTwoCardData.subTitle}
            description={projectTwoCardData.description}
            featureTitle={projectTwoCardData.featureTitle}
            featureLists={projectTwoCardData.featureLists}
            exploreBtn={projectTwoCardData.exploreBtn}
            client={true}
          />
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <MdWork />
          </span>
          <CustomProjectCard
            techStack={projectThreeCardData.techStack}
            title={projectThreeCardData.title}
            subTitle={projectThreeCardData.subTitle}
            description={projectThreeCardData.description}
            featureTitle={projectThreeCardData.featureTitle}
            featureLists={projectThreeCardData.featureLists}
            exploreBtn={projectThreeCardData.exploreBtn}
            client={true}
          />
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <MdWork />
          </span>
          <CustomProjectCard
            techStack={projectFourCardData.techStack}
            title={projectFourCardData.title}
            subTitle={projectFourCardData.subTitle}
            description={projectFourCardData.description}
            featureTitle={projectFourCardData.featureTitle}
            featureLists={projectFourCardData.featureLists}
            exploreBtn={projectFourCardData.exploreBtn}
            client={false}
          />
        </li>
      </ol>
    </>
  );
};

export default CustomProjectTimeline;
