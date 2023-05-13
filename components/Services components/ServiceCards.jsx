import React from 'react'
import ServiceCard from './ServiceCard'
import Link from 'next/link'
import ReviewSlider from "../../components/ReviewSlider/RatingsSlider";
import TrustPilotReview from '../TrustPilot/TrustPilotReview';
import YtSlider from "../YtSlider/Slider"

function ServiceCards() {
    return (
        <div className="flex flex-col space-y-14 p-2 gap-8">


            <ServiceCard heading={"Certified YouTube Consultant"}
                heading2={`Unlock Your YouTube  Potential with a Certified YouTube Strategist`}
                para={`Get a comprehensive channel evaluation and Tailored Content Strategy that help you unlock the secrets to YouTube Channel Growth , connect with your audience, and build your brand on this exciting platform. Ready to take your channel to new heights? `}
                btntext={`Let${"'"}s get started`} link={"/consultation"} images={"/Images/Services/Certified YouTube Consultant.png"} />

            <ServiceCard heading={"YouTube SEO"}
                heading2={"Supercharge Your Videos with YouTube SEO Services"}
                para={`Get Your Videos Ranked on YouTube Search Results to drive consistent traffic and engaged subscribers. Optimize your videos with winning strategies to dominate the world${"'"}s second-largest search engine.`}
                btntext={"Dominate YouTube Search Now"} bgColor={""} link={"/consultation"} images={"/Images/Services/Youtube SEO.png"} />


            {/* rating of the gogle clietns review section */}

            <ReviewSlider />


            {/* </div> */}


            <ServiceCard heading={"YouTube Keywords Research"}
                heading2={"Crush the Competition with Winning YouTube Keywords"}
                para={`Boost your YouTube channel${"'"}s organic growth and visibility by using winning keywords having high search volume, low competition, and rising trends.`}
                btntext={"Elevate your YouTube Game"} bgColor={""} link={"/consultation"} images={"/Images/Services/Keywords Research.jpg"} />

            {/* Automated  */}

            <ServiceCard heading={"YouTube Automation"}
                heading2={"Earn passive income with Faceless YouTube videos."}
                para={`Start your Faceless Automated YouTube channel with our YouTube Automation Services! From niche selection to channel setup, faceless video creation, and channel management, we${"'"}ve got you covered.`}
                btntext={"Get started today"} bgColor={""} link={"/consultation"} images={"/Images/Services/YouTube Automation.webp"} />

            {/* <div className="bg-cover bg-center bg-[url('/Images/blob_bg_2.png')]"> */}

            <ServiceCard heading={"YouTube Monetization"}
                heading2={"Get your Channel Monetized with Organic Monetization Strategies"}
                para={`Monetize your YouTube channel sustainably with a winning Monetization Strategies. Boost your earnings and maximize your content${"'"}s value without harmful promotions that can hurt your channel${"'"}s organic growth.`}
                btntext={"Skyrocket Your Profits Today"} bgColor={""} link={"/consultation"} images={"/Images/Services/YouTube Monetization.png"} />

            <ServiceCard heading={"YouTube Promotion Services "}
                heading2={"Captivate Your Ideal Audience & Skyrocket Leads with Organic Promotion"}
                para={"Maximize Your YouTube Potential with our Organic YouTube Promotion Services. Effectively target and engage with the right audience to not only Grow your YouTube Channel but also to Generate Leads and boost your online presence."}
                btntext={"Promote your Channel Now"} bgColor={""} link={"/consultation"} images={"/Images/Services/YouTube Promotion_1.png"} />


            <ServiceCard heading={"Overall YouTube Channel Management"}
                heading2={"Level Up Your YouTube Game with Expert Growth Management"}
                para={`Our expert strategies and optimization techniques are the secret sauce to skyrocketing your subscribers and engagement. Let${"'"}s unleash your channel${"'"}s full potential and dominate the online space!`}
                btntext={"Let us Help you Grow"} bgColor={""} link={"/consultation"} images={"/Images/Services/Overall YouTube Channel Management.png"} />

            <TrustPilotReview />

        </div>

    )
}

export default ServiceCards