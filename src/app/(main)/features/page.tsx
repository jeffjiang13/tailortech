import React from 'react';
import { FaRocket, FaUsers, FaPaintBrush, FaLock, FaStripe, FaChartBar, FaCloudUploadAlt, FaTasks, FaBell, FaCodeBranch, FaLightbulb, FaAdjust } from 'react-icons/fa';

const features = [
  {
    title: 'Multivendor SaaS Platform',
    description: 'Cater to a broad range of businesses with multi-vendor support.',
    icon: <FaRocket className="text-primary-500" size={22} />,
  },
  {
    title: 'Agency & Sub Accounts',
    description: 'Efficiently manage multiple client accounts under a single dashboard.',
    icon: <FaUsers className="text-primary-500" size={22} />,
  },
  {
    title: 'Website & Funnel Builder',
    description: 'Create stunning, high-converting websites and funnels with ease.',
    icon: <FaPaintBrush className="text-primary-500" size={22} />,
  },
  {
    title: 'Role-based Access Control',
    description: 'Assign roles and permissions for team collaboration.',
    icon: <FaLock className="text-primary-500" size={22} />,
  },
  {
    title: 'Stripe Integration',
    description: 'Facilitate secure and seamless financial transactions with Stripe Connect.',
    icon: <FaStripe className="text-primary-500" size={22} />,
  },
  {
    title: 'Custom Dashboards',
    description: 'Track performance, sales, and more with tailored dashboards.',
    icon: <FaChartBar className="text-primary-500" size={22} />,
  },
  {
    title: 'Media Storage',
    description: 'Store and manage digital assets efficiently.',
    icon: <FaCloudUploadAlt className="text-primary-500" size={22} />,
  },
  {
    title: 'Project Management System',
    description: 'Manage your projects with comprehensive tools and a Kanban board.',
    icon: <FaTasks className="text-primary-500" size={22} />,
  },
  {
    title: 'Notifications',
    description: 'Stay updated with real-time alerts and notifications.',
    icon: <FaBell className="text-primary-500" size={22} />,
  },
  {
    title: 'Performance Metrics',
    description: 'Analyze funnel and agency performance to optimize strategies.',
    icon: <FaCodeBranch className="text-primary-500" size={22} />,
  },
  {
    title: 'Light & Dark Mode',
    description: 'Enhance user experience with theme options.',
    icon: <FaAdjust className="text-primary-500" size={22} />,
  },
];

const Features = () => {
  return (
    <div className="py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-xl text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Everything you need, all in one place
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore the wide range of features designed to streamline your workflow and boost your productivity.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-blue-500">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
