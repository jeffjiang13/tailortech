'use client';

import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

interface Section {
  title: string;
  content: string;
  id: string;
}

const sections: Section[] = [
  // Your sections...
  {
    title: 'Getting Started',
    content: `Start by signing up for an account and configuring your workspace. Follow our step-by-step guide to get your first project off the ground.`,
    id: 'getting-started',
  },
  {
    title: 'Integrating Stripe',
    content: `Learn how to integrate Stripe for payment processing with our platform. This section covers setup, configuration, and security best practices.`,
    id: 'integrating-stripe',
  },
  {
    title: 'Building Your First Funnel',
    content: `Discover how to use the funnel builder to create high-converting sales funnels. Includes tips on layout, design, and optimization.`,
    id: 'building-funnel',
  },
  {
    title: 'Using the Kanban Board',
    content: `Get to grips with the Kanban board for project management. This guide includes creating tasks, managing workflows, and customizing your board.`,
    id: 'kanban-board',
  },
  {
    title: 'Customizing Dashboards',
    content: `Custom dashboards allow you to keep track of what's important. Learn how to create and customize dashboards for your needs.`,
    id: 'customizing-dashboards',
  },
  {
    title: 'Frequently Asked Questions',
    content: `Have a question? Check out our FAQ section for answers to the most common questions about our platform.`,
    id: 'faq',
  },
  {
    title: 'Advanced Project Management',
    content: `Master advanced project management techniques within our platform. Learn how to leverage milestones, dependencies, and time tracking to drive project success.`,
    id: 'advanced-project-management',
  },
  {
    title: 'Efficient Team Collaboration',
    content: `Foster a collaborative environment with our suite of communication tools. Discover how to use chat, task assignments, and file sharing to enhance teamwork.`,
    id: 'team-collaboration',
  },
  {
    title: 'Security and Data Protection',
    content: `Your data's security is our top priority. Understand our security measures, data encryption standards, and how you can ensure your account remains secure.`,
    id: 'security-data-protection',
  },
  {
    title: 'Custom Integrations and APIs',
    content: `Unlock the full potential of our platform with custom integrations. Learn how to connect your favorite tools and use our API for tailored workflows.`,
    id: 'custom-integrations-apis',
  },
  {
    title: 'Optimizing Funnel Performance',
    content: `Maximize your funnels' efficiency with A/B testing, analytics, and performance benchmarks. Get insights into improving conversion rates and user engagement.`,
    id: 'optimizing-funnel-performance',
  },
  {
    title: 'Managing Subscriptions and Billing',
    content: `Navigate the complexities of subscription management and billing. From setting up recurring payments to handling cancellations, learn everything you need.`,
    id: 'managing-subscriptions-billing',
  },
  // New additions
  {
    title: 'Deploying Your Projects',
    content: `Go live with confidence. This section covers deployment best practices, domain setup, and how to monitor your live projects for any issues.`,
    id: 'deploying-projects',
  },
  {
    title: 'User Engagement and Analytics',
    content: `Understand your audience better with our analytics tools. Learn how to track user engagement, analyze behavior, and make data-driven decisions.`,
    id: 'user-engagement-analytics',
  },
  {
    title: 'Tips and Tricks',
    content: `Speed up your workflow with these pro tips and tricks. Discover hidden features, shortcuts, and ways to maximize productivity on our platform.`,
    id: 'tips-tricks',
  },
  {
    title: 'Troubleshooting Common Issues',
    content: `Encountered a problem? Find solutions to common issues faced by our users, from login troubles to integration errors.`,
    id: 'troubleshooting-common-issues',
  },
];

interface DocumentationSectionProps {
  title: string;
  content: string;
}

const DocumentationSection: React.FC<DocumentationSectionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold pl-3">{title}</span>
        {isOpen ? (
          <ChevronDownIcon className="w-5 h-10 pr-2 text-gray-400" />
        ) : (
          <ChevronRightIcon className="w-5 h-10 pr-2 text-gray-400" />
        )}
      </button>
      {isOpen && <p className="pb-4 pl-4 pr-4 text-left">{content}</p>}
    </div>
  );
};

const Documentation = () => {
  return (
    <div className="min-h-screen mt-20 text-center">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold">Documentation</h1>
        <p className="mt-2 text-lg">
          Everything you need to know to get started and make the most out of our platform.
        </p>
        <div className="mt-6 shadow overflow-hidden rounded-md">
          <ul className="divide-y divide-gray-200 border-2 rounded-md">
            {sections.map((section) => (
              <DocumentationSection key={section.id} {...section} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
