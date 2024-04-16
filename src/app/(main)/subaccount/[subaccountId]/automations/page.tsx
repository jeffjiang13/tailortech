import React from 'react';
import Image from 'next/image';
import BlurPage from '@/components/global/blur-page'

const UnderConstructionPage = () => {
  return (
    <BlurPage>
        <div className="flex flex-col justify-center items-center">
            <Image
                src="/assets/building.jpg" // Make sure to replace this with your own image path
                alt="Under Construction"
                width={600}
                height={600}
                className="rounded-tl-2xl rounded-2xl border-2 border-muted shadow-2xl shadow-blue-500"
            />
            <h1 className="text-2xl font-bold text-center mt-8">{"We're Building Something Exciting!"}</h1>
            <p className="text-center mt-4">{"Our website is currently under construction. We'll be here soon with our new awesome site, subscribe to be notified."}</p>
            <div className="mt-8">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 border border-gray-300 rounded-md"
                />
                <button className="bg-blue-500 text-white p-2 ml-2 rounded-md hover:bg-blue-400">Notify Me!</button>
            </div>
        </div>
    </BlurPage>
  );
};

export default UnderConstructionPage;
