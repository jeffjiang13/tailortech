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
    title: 'TailorTech Overview',
    content: `TailorTech is your go-to platform for SaaS Website Builder, Project Management, and Dashboard functionalities, equipped with Stripe for smooth payment processes. Here, you can manage your agency's and sub accounts' information seamlessly, toggle between light and dark themes, and leverage our detailed documentation for any assistance.`,
    id: 'tailortech-overview',
  },
  {
    title: 'Agency Information Management',
    content: `Setting up your agency is the first step towards unlocking the full potential of TailorTech. Enter your agency's name, email, phone number, and address to get started. You also have the option to white-label your agency, presenting your brand's logo across all sub accounts. Remember, your agency's goals can evolve with your business, so set and update them as needed.`,
    id: 'agency-information',
  },
  {
    title: 'User Profile Setup',
    content: `Your user profile is crucial for personalization and security. Add or update your profile picture, full name, email, and define your role within the agency. Ensuring this information is accurate and up-to-date helps in maintaining the integrity of your agency's operations.`,
    id: 'user-profile-setup',
  },
  {
    title: 'Sidebar Customization',
    content: `The sidebar is your navigation hub, providing quick access to various sections of the platform. Customize it to fit your needs by adding or removing menu links, and ensure your agency's logo and address are visible for easy identification.`,
    id: 'sidebar-customization',
  },
  {
    title: 'Danger Zone - Agency Deletion',
    content: `Be cautious when navigating to the Danger Zone. Deleting your agency is irreversible and results in the loss of all associated sub accounts, funnels, contacts, and other data. This action should only be considered as a last resort.`,
    id: 'danger-zone',
  },
  {
    title: 'Create a Subaccount',
    content: `To set up a new subaccount on our platform, start by preparing an account logo by either choosing a file or dragging and dropping an image, ensuring it does not exceed the 4MB limit. Next, specify the subaccount's name, which could either be the client's company name or a project name, and provide a primary contact email for the account. This email will serve both communication and login purposes. Additionally, a contact phone number should be added for the subaccount.

    The physical address of the subaccount's business is required, including the city, state or region, and the postal code, alongside the country of operation. These details are essential for creating a comprehensive profile for the subaccount. After filling in all necessary information, clicking on the "Save Account Information" button will finalize the creation of the subaccount. This process allows for efficient management of different clients or projects under a single agency umbrella, with the capability to switch between multiple subaccounts from the agency dashboard for effective management.`,
    id: 'create-subaccount',
  },
  {
    title: 'Invite or Add a Team Member',
    content: `Before inviting or adding a member, the member must sign up for an account on our platform. This ensures that the invited member can seamlessly access the dashboard and begin contributing immediately upon accepting the invitation. Navigate to the 'Team' section of your dashboard and select 'Send an Invitation' to enter the prospective member's email address and assign their role within the team. It's important to ensure that the email address is correct, as the invitation and instructions for joining will be sent there.`,
    id: 'invite-or-add-a-team-member',
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
