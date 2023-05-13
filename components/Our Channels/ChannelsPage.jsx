import React, { useEffect } from 'react';
import ChannelsPageCard from "./ChannelsPageCard"

function ChannelPage() {



    const portfolioData = [

        {
            "SectionId": "Space_Matters",
            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@spacemattersdoc/" target="_blank">
                        1. Space Matters
                    </a>
                </div>
            )
            ,

            "para": (
                <p>
                    Looking for out-of-this-world content? Look no further than <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@spacemattersdoc/" target="_blank" >Space Matters</a></span>,
                    the expertly curated YouTube channel that&#39;s skyrocketed to over 50K subscribers and 7 million views with <strong>just 27 videos</strong>.
                    As masters of faceless videos and automated channels, we know what it takes to make your YouTube presence take off.
                    Explore the mysteries of the universe with Space Matters – because when it comes to YouTube growth, we&#39;re light years ahead of the competition.
                </p>
            ),
            "channleURL": (
                <iframe width="100%" height="100%"
                    src="https://www.youtube.com/embed/PC3_TFiwyoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                </iframe>
            ),

            "list": (
                <ul className='list-disc text-left mb-[2.5rem] space-y-2 '>
                    <li>Niche: Space</li>
                    <li>Type: Faceless YouTube Channel</li>
                    <li>Target Audience: Worldwide, BS-<strong>USA</strong></li>
                </ul>
            )
        },

        {
            "SectionId": "9_Figure_Life",

            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@9figurelifechannel" target="_blank">
                        2. 9 Figure Life
                    </a>
                </div>
            )
            ,

            "para": (
                <p>
                    Looking to live the <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@9figurelifechannel" target="_blank" >9 Figure Life</a></span> ?
                    Look no further! Our luxury lifestyle YouTube channel is the ultimate destination for luxury enthusiasts.
                    Our <strong>faceless videos</strong> have garnered over 24 million views and 132K loyal subscribers,
                    all thanks to our expert team&#39;s proven strategies for YouTube growth.
                </p>
            ),

            "channleURL": (
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Sln02m5eT6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            ),


            "list": (
                <ul className='list-disc text-left mb-[2.5rem] space-y-2'>
                    <li>Niche: Luxury & Lifestyle</li>
                    <li>Type: Faceless YouTube Channel</li>
                    <li>Target Audience: Worldwide, BS-<strong>USA</strong></li>
                </ul>
            )
        },

        {
            "SectionId": "Joyous_Travel",

            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@JoyousTravelYT" target="_blank">
                        3. Joyous Travel
                    </a>
                </div>
            )
            ,

            "para": (
                <p>
                    Looking to explore the world without leaving your seat?  <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@JoyousTravelYT" target="_blank" >Joyous Travel</a></span>  is the ultimate destination for armchair adventurers!
                    With over 14 million views and 100K subscribers, our travel channel is proof of our expertise in Understanding YouTube Algorithm,
                    creating captivating, <strong>faceless YouTube videos</strong> for Automated YouTube Channels.
                </p>
            ),


            "channleURL": (
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2vqvBzb0xJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            ),


            "list": (
                <ul className='list-disc text-left mb-[2.5rem] space-y-2'>
                    <li>Niche: Travel</li>
                    <li>Type: Faceless YouTube Channel</li>
                    <li>Target Audience: Worldwide, BS-<strong>Sweden</strong></li>
                </ul>
            )

        },

        {
            "SectionId": "Wild_Iron",

            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@Wild_Iron" target="_blank">
                        4. Wild Iron
                    </a>
                </div>
            ),

            "channleURL": (
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CqxjzfudGAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            ),

            "para": (
                <p>
                    Looking for a channel that packs a punch? Look no further than <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@Wild_Iron" target="_blank" >Wild Iron</a></span>! Our channel specializes in exploring the world of modern military
                    weapons and technology, bringing you the latest and greatest in firepower and tactical gear.
                    With over 58 million views and 150K subscribers, we know how to find the low competition niches that give you the first mover advantage.
                </p>
            ),
            "list": (
                <ul className='list-disc text-left mb-[2.5rem] space-y-2'>
                    <li>Niche: Military (Sub-Niche: Modern Military Technology)</li>
                    <li>Type: Faceless YouTube Channel</li>
                    <li>Target Audience: Worldwide, BS-<strong>USA</strong></li>
                </ul>
            )

        },

        {
            "SectionId": "Body_Hub",


            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@BodyHub" target="_blank">
                        5. Body Hub
                    </a>
                </div>
            )
            ,

            "para": (
                <p>
                    Welcome to  <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@BodyHub" target="_blank" >Body Hub</a></span>  - where health and fitness come to life! With over 128 million views and 1.3 million subscribers, our channel is proof that we know how to build a loyal audience by consistent quality content creation that engages viewers and drives growth. Let us help you reach your YouTube goals with our expert growth strategies.
                </p>
            ),
            "channleURL": (
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z6KKo85V9Ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            ),
            "list": (
                <ul className='list-disc text-left mb-[2.5rem] space-y-2'>
                    <li>Niche: Health & Fitness</li>
                    <li>Type: Faceless YouTube Channel</li>
                    <li>Target Audience: Worldwide, BS-<strong>AUSTRALIA</strong></li>
                </ul>
            )
        },

        {
            "SectionId": "Future_Lab",
            "ChannelName": (
                <div>
                    <a href="https://www.youtube.com/@FromFutureLab" target="_blank">
                        6. Future Lab
                    </a>
                </div>
            )
            ,

            "para": (
                <p>

                    Looking to electrify your ride? Look no further than  <span className='text-[#139dff] font-semibold'><a href="https://www.youtube.com/@FromFutureLab" target="_blank" >Future Lab</a></span> ! Our cutting-edge channel delivers expert insights on modern electric solutions for vehicles. With over 52 million views and 225k subscribers across just 56 videos, our channel is the proof of our expertise in YouTube content ideas and <strong>YouTube SEO</strong>.
                </p>
            ),


            "channleURL": (
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NNFxPqFthB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            ),

            "list": (
                <ul className='list-disc text-left mb-[2.5rem] space-y-2'>
                    <li>Niche: Automotive Industry (Sub-Niche: Modern Electric Solutions)</li>
                    <li>Type: Faceless YouTube Channel</li>
                    <li>Target Audience: Worldwide, BS-<strong>USA</strong></li>
                </ul>
            )
        },
    ]

    return (
        <div>
            {portfolioData.map((item, index) => (
                <div key={index} className="mb-20">
                    <ChannelsPageCard channleURL={item.channleURL} ChannelName={item.ChannelName} para={item.para} SectionId={item.SectionId} list={item.list} />
                </div>
            ))}
        </div>
    )
}

export default ChannelPage