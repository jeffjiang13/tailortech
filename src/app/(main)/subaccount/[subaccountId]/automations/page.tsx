import React from 'react';
import Image from 'next/image';
import BlurPage from '@/components/global/blur-page'
import Link from 'next/link';

const UnderConstructionPage = () => {
  return (
    <BlurPage>
        <div className="flex flex-col justify-center items-center">
            <Image
                src="/assets/temp-banner.png"
                alt="banner"
                width={600}
                height={600}
                className="rounded-tl-2xl rounded-2xl border-2 border-muted shadow-2xl shadow-blue-500"
            />
            <h1 className="text-2xl font-bold text-center mt-8">{"SAAS Automation Builder - ZapFlow"}</h1>
            <p className="text-center mt-4">{"Check out our partner for automation. Start now by visiting ZapFlow and sign up to streamline your business and enhance your workflow efficiency."}</p>
            <div className="mt-8 font-bold mr-[4rem]">Try now → {" "}
                <Link href="https://jj-zapflow.vercel.app/">
                <button className="relative bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 active:bg-blue-600 active:shadow-lg transform active:scale-95 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                    <span className="relative">ZapFlow</span>
                </button>
                </Link>
            </div>
        </div>
    </BlurPage>
  );
};

export default UnderConstructionPage;
