// - remove 'supply chain' references
// - replace with consumer transaction/data privacy

import Icons from './Icons'

const social = {
    at: '@chainleaflabs',
    name: 'Chainleaf Labs',
    title: "Chainleaf Labs - Blockchain Certificate Verification & Supply Chain Management",
    url: 'https://welcome.chainleaflabs.com',
    image: '/images/social-preview.jpg',
    description: "Our innovative blockchain platform offers secure and transparent certificate verification and supply chain management solutions. Improve your business operations with tamper-proof, real-time tracking and validation."

}

const truth = {
    title: social.name,

    metadata: {
        title: social.name,
        description: social.description,
        keywords: "Blockchain, Certificate Verification, Supply Chain Management, Blockchain Technology, Secure Tracking, Real-time validation",
        author: social.name,
        viewport: "width=device-width, initial-scale=1",
        charset: "UTF-8",
        site_name: social.name,
        twitter: {
          card: "summary_large_image",
          site: social.at,
          title: social.title,
          description: social.description,
          image: social.image,
        },
        og: {
          title: social.title,
          type: "website",
          url: social.url,
          image: social.image,
          description: social.description,
          site_name: social.name
        },
        favicon: "/favicons/favicon.ico",
        "msapplication-TileColor": "#da532c",
        "theme-color": "#00faff"
      },


    nav:{
        external: {
            register: 'https://dev.chainleaflabs.com/auth/register',
            login: 'https://dev.chainleaflabs.com/auth/signin'
        },
        links:[
            {
                text:`Home`,
                href:`#home`
            },
            {
                text:`Vision`,
                href:`#vision`
            },
            {
                text:`Problem`,
                href:`#problem`
            },
            { 
                text:`Solution`,
                href:`#solution`
            },
            { 
                text:`Platform`,
                href:`#platform`
            },
            {
                text:`About`,
                href:`#about`
            },
            // {
            //     text:`Contact Us`,
            //     href:`#contact`
            // },

        ]
    },
    hero: {
        supheading: `The Next Generation of Supply Chain Trust and Security`,
        heading: `Uniting the Cannabis Community`,
        subheading: `through our Blockchain Network`,
        link: {
            text: `Get Started`,
            href: `https://dev.chainleaflabs.com/auth/register`
        }
    },
    footer: {
        copyright: `Copyright © Chainleaf Labs LLC 2023. All Rights Reserved`,
        socials: [
            {
                text: `twitter`,
                href: `https://twitter.com/1234`,
                // icon: 
            }
        ],
        sections: [
            {
                title: 'HOME',
                links: [
                    {
                        text: `Problem`,
                        href: `#problem`,
                    },
                    {
                        text: `Vision`,
                        href: `#vision`,
                    },
                    {
                        text: `Solution`,
                        href: `#solution`,
                    },
                    {
                        text: `About Us`,
                        href: `#about`,
                    },
                ]
            },
            {
                title: 'SUPPORT',
                links: [
                    {
                        text: `Contact Us`,
                        href: `#contact`,
                    },
                    {
                        text: `Login`,
                        href: `https://dev.chainleaflabs.com/auth/signin`,
                    },
                    {
                        text: `Register`,
                        href: `https://dev.chainleaflabs.com/auth/register`,
                    },
                ]
            }
        ]
    },
    sections:{
        'problem':{
            heading: `Problem`,
            subheading: `The Digital Platform`,
            content: `Blockchain technology to streamline efficiencies and ensure legitimacy in the supply chain`,
            subsections: [
                {
                    heading: `Difficult Certification Process`,
                    content: `Labs and growers must remain compliant while providing clients and consumers with accurate data and verifiable test documents`,
                    icon: Icons.lg.BeakerIcon
                },
                {
                    heading: `Credential Fraud`,
                    content: `The need for data transparency and trust in the agricultural supply chain is required to ensure reliability`,
                    icon: Icons.lg.CheckBadgeIcon
                },
                {
                    heading: `Consumer Data Privacy`,
                    content: `Chainleaf provides protection and security of consumer data and transactions to support a safe ecosystem`,
                    icon: Icons.lg.ChartPieIcon
                },
            ]
        },
        'vision':{
            heading: `VISION`,
            subheading: `Innovation`,
            content: ``,
            subsections: [
                // {
                //     heading: `Rapid, real-time traceability`,
                //     content: `With Chainleaf Labs' blockchain services, supply chain partners have access to the entire product lifecycle to view history and examine all paths to success`,
                //     icon: Icons.lg.QrCodeIcon,
                //     tags: ['tech', 'growers']
                // },
                {
                    heading: `Improved Efficiency VS Cost`,
                    content: `Give producers with the ability to share, document and analyze real-time data with all system partners for streamlined tracking, reporting and auditing`,
                    icon: Icons.lg.AdjustmentsHorizontalIcon,
                    tags: ['growers'],
                },
                {
                    heading: `Create Transparency`,
                    content: `Our platform facilitates data transparency using the power of distributed ledgers to validate transactions in a trusted and efficient way`,
                    icon: Icons.lg.EyeIcon,
                    tags: ['tech', 'consumers', 'growers'],
                },
                {
                    heading: `Validation and Standardization`,
                    content: `Enabling growers to share extensive data with labs, retailers and consumers, while safeguarding intellectual property`,
                    icon: Icons.lg.VariableIcon,
                    tags: ['tech', 'consumers'],
                },
                {
                    heading: `Resolve Feedback`,
                    content: `Discover the origins of consumer choices to secure a competitive edge in sales and assess potential market scope for grower products`,
                    icon: Icons.lg.AtSymbolIcon,
                    tags: ['tech', 'growers'],
                },
                {
                    heading: `Generate Action`,
                    content: `Integrate supply chain data with validated lab results and consumer information to produce practical insights`,
                    icon: Icons.lg.ForwardIcon,
                    tags: ['tech', 'growers'],
                },
                {
                    heading: `Compliance Efficiencies`,
                    content: `Prevent data alterations and ensure accuracy of reports with an immutable ledger`,
                    icon: Icons.lg.CommandLineIcon,
                    tags: ['tech', 'growers'],
                },
                {
                    heading: `Increase Value`,
                    content: `Integrating smart analytics to refine pricing strategies, improve demand prediction, and streamline inventory control`,
                    icon: Icons.lg.BriefcaseIcon,
                    tags: ['tech'],
                },
                // {
                //     heading: `Absolute Confidence`,
                //     content: `Give consumers confidence by providing seamless access to our verifiable product data directly from the package using existing QR code systems`,
                //     icon: Icons.lg.CheckBadgeIcon,
                //     tags: ['consumers', 'growers'],
                // },




                // {
                //     "heading": "Empowered Consumer Choices",
                //     "content": "With Chainleaf Labs' blockchain services, consumers gain the power to make informed choices about their purchases. Easily access verified product information, from cultivation to quality testing, ensuring your buying decisions are backed by transparency and authenticity.",
                //     "icon": Icons.lg.CheckBadgeIcon,
                //     "tags": ["tech", 'growers']
                // },

                {
                    "heading": "Empowered Consumer Choices",
                    "content": "Enable consumers to effortlessly access verified product information, ensuring transparent and credible decisions",
                    "icon": Icons.lg.CheckBadgeIcon,
                    "tags": ["tech", 'growers']
                },
                {
                    "heading": "Sustainable Sourcing",
                    // "content": "By leveraging our blockchain platform, consumers contribute to sustainable sourcing practices. Trace the journey of your chosen products, ensuring they meet environmental and ethical standards, while supporting growers and businesses committed to responsible practices.",
                    "content": "Trace your products journey to confirm their alignment with environmental and ethical standards to support responsible practices",
                    "icon": Icons.lg.GlobeEuropeAfricaIcon,
                    "tags": ["consumers", 'growers']
                },
                // {
                //     "heading": "Quality Assurance",
                //     "content": "Chainleaf Labs' blockchain technology ensures you receive products of the highest quality. Transparent supply chain information and lab-verified data guarantee that you're getting exactly what you expect every time.",
                //     "icon": Icons.lg.StarIcon,
                //     "tags": ["consumers", "tech"]
                // },
                {
                    "heading": "Quality Assurance",
                    "content": "Blockchain transactions guarantees transparent supply chain data and lab-verified information ensuring consistency in every purchase",
                    "icon": Icons.lg.StarIcon,
                    "tags": ["consumers", "tech"]
                },
                {
                    "heading": "Personalized Experiences",
                    // "content": "Experience personalized recommendations based on your preferences and past choices. Our blockchain-backed insights allow businesses to offer products that align with your tastes, ensuring a satisfying and personalized consumer experience.",
                    "content": "Tailored recommendations derived from preferences and purchase history",
                    "icon": Icons.lg.HeartIcon,
                    "tags": ["consumers", 'growers']
                },
                // {
                //     "heading": "Trust and Security",
                //     "content": "Shop with confidence knowing that your purchases are backed by an unalterable ledger. Our blockchain technology creates a secure environment where you can trust the accuracy of product information, transactions, and quality claims.",
                //     "icon": Icons.lg.LockClosedIcon,
                //     "tags": ["consumers", "tech"]
                // },
                {
                    "heading": "Trust and Security",
                    "content": "A secure environment where you can have complete confidence in the precision of product data, transactions, and quality assertions",
                    "icon": Icons.lg.LockClosedIcon,
                    "tags": ["consumers", "tech"]
                },
                // {
                //     "heading": "Real-Time Insights",
                //     "content": "Get real-time updates on product availability, trends, and more. Chainleaf Labs' platform gives you a direct connection to the pulse of the cannabis market, so you're always up to date on the latest developments.",
                //     "icon": Icons.lg.ChartBarIcon,
                //     "tags": ["consumers", "tech"]
                // },
                // {
                //     "heading": "Consumer Feedback Loop",
                //     "content": "Our platform values your feedback. By engaging with the blockchain-powered feedback loop, your opinions help shape the products and services you love, creating a collaborative ecosystem between consumers and businesses.",
                //     "icon": Icons.lg.ChatBubbleLeftEllipsisIcon,
                //     "tags": ["consumers", "tech", 'growers']
                // },
                {
                    "heading": "Educational Resources",
                    "content": "Access dependable information about various strains, cultivation, techniques, and more, empowering users with knowledge to make informed choices",
                    "icon": Icons.lg.BookOpenIcon,
                    "tags": ["consumers", "tech"]
                }

 


            ]
        },
        'solution':{
            heading: `solution`,
            subheading: `How It Works`,
            content: `Harnessing the power of blockchain technology, we are pioneering advanced supply chain solutions that offer an unprecedented level of data transparency. We're not just upgrading supply chain management - we're making businesses more transparent, efficient, and trustworthy.`,
            // This groundbreaking approach allows all participating entities to access comprehensive, real-time data directly from the blockchain, eliminating the need for tedious back-and-forth communication traditionally required for data access. More than just access, blockchain technology ensures that every recorded entry is untamperable, offering a secure ledger that guarantees accuracy and authenticity. This creates an ecosystem where all participants can confidently engage, knowing they are basing their decisions and actions on clear, precise, and trustworthy data. Our approach not only modernizes supply chain management but also fosters a new era of business transparency, efficiency, and integrity. `,
            subsections: [
                {
                    heading: `Digital Certificate`,
                    content: `End-to-end credibility provides secure product tracing and verifiable data for growers and consumers`,
                    icon: Icons.lg.ShieldCheckIcon
                },
                {
                    heading: `Supply Chain`,
                    content: `Give growers control and insight into their supply chain`,
                    icon: Icons.lg.AdjustmentsHorizontalIcon
                },
                {
                    heading: `Power of Data`,
                    content: `Unleash the power of large-scale data for end-to-end visibility `,
                    icon: Icons.lg.BriefcaseIcon
                },
            ]
        },
        'about':{
            heading: `about us`,
            subheading: `Who We Are`,
            content: `Chainleaflabs is a service-first digital platform designed to improve relationships for those in the agricultural technology industry. As a technology team, we encourage each other to grow and innovate. As a company, we support laboratories, medical clinics, consumers, manufactures by providing them access to data provided by farmers/growers.
            Our digital platform is powerful and scales to meet the needs of any business.
            `,

            images: [
                {
                    original: `/images/public-domain/9.jpg`,
                    alt: `grow data`,
                },
                {
                    original: `/images/public-domain/2.jpg`,
                    alt: `bottled biomes`,
                },
                {
                    original: `/images/public-domain/3.jpg`,
                    alt: `warehouse grow`,
                },
                {
                    original: `/images/public-domain/4.jpg`,
                    alt: `warehouse grow`,
                },
                {
                    original: `/images/public-domain/5.jpg`,
                    alt: `warehouse grow`,
                },
                {
                    original: `/images/public-domain/6.jpg`,
                    alt: `warehouse grow`,
                },
                {
                    original: `/images/public-domain/7.jpg`,
                    alt: `warehouse grow`,
                },
                {
                    original: `/images/public-domain/8.jpg`,
                    alt: `warehouse grow`,
                },
                {
                    original: `/images/public-domain/10.jpg`,
                    alt: `warehouse grow`,
                },
                {
                    original: `/images/public-domain/1.jpg`,
                    alt: `led bar`,
                },
                // {
                //     original: `/images/public-domain/11.jpg`,
                //     alt: `warehouse grow`,
                // },
                {
                    original: `/images/public-domain/12.jpg`,
                    alt: `warehouse grow`,
                },
                {
                    original: `/images/public-domain/13.jpg`,
                    alt: `warehouse grow`,
                },
            ]
        }
    },
    learnMore: {
        'problem': {
            'Supply Chain Failures and Bottlenecks': 'In the current landscape, supply chain failures and bottlenecks are common pain points in the cannabis industry. Delays, inaccuracies, and inefficiencies plague the system, causing frustration and hindering growth.',
            'Complex Certification Process': 'Navigating the complex certification process is a challenge for cannabis businesses. The multitude of requirements and regulations can lead to confusion, delays, and additional costs.',
            'Regulatory Restrictions Affect Sales': 'Stringent regulatory restrictions often impact the ability of cannabis businesses to operate and sell products efficiently. These restrictions limit market reach and hinder sales opportunities.',
          },
        "platform": {
            'A Groundbreaking Approach': 'Harnessing the power of blockchain technology, we are pioneering advanced supply chain solutions that offer an unprecedented level of data transparency. This groundbreaking approach allows all participating entities to access comprehensive, real-time data directly from the blockchain, eliminating the need for tedious back-and-forth communication traditionally required for data access. More than just access, blockchain technology ensures that every recorded entry is untamperable, offering a secure ledger that guarantees accuracy and authenticity. This creates an ecosystem where all participants can confidently engage, knowing they are basing their decisions and actions on clear, precise, and trustworthy data. Our approach not only modernizes supply chain management but also fosters a new era of business transparency, efficiency, and integrity.',
            'Enhanced Trust and Accountability': 'Our blockchain-based solution enhances trust and accountability throughout the cannabis supply chain. By providing an immutable record of transactions and activities, all participants can confidently rely on accurate information and build stronger business relationships.',
            'Real-Time Quality Control': 'Real-time data sharing allows for instant quality control checks. Producers, labs, and retailers can collaboratively monitor product quality, ensuring that only the best products reach consumers.',
            'Streamlined Compliance Reporting': 'Our platform simplifies compliance reporting by automating the collection and verification of necessary data. Businesses can easily generate comprehensive reports that meet regulatory requirements, reducing time and resources spent on paperwork.',
            'Efficient Inventory Management': 'Blockchain technology empowers businesses to manage their inventory more efficiently. Real-time visibility into stock levels, demand, and sales trends enables proactive decision-making, reducing excess stock and minimizing waste.',
            'Empowering Consumer Confidence': 'Consumers can verify the authenticity and origin of products with a simple scan. This transparency empowers consumers to make well-informed choices, ensuring they receive products that meet their expectations.',
            'Smart Analytics for Growth': 'Our solution goes beyond data storage. By harnessing the power of advanced analytics, businesses can uncover actionable insights that drive growth. From identifying market trends to optimizing product offerings, our platform supports data-driven decisions.',
            'Collaborative Innovation': 'Our blockchain ecosystem fosters collaboration and innovation. Businesses can seamlessly partner to create new products, refine processes, and develop breakthrough solutions that elevate the entire cannabis industry.',

        },
        "vision": {
            'Rapid, real-time traceability': 'Chainleaf Labs\' blockchain services provide rapid, real-time traceability for supply chain partners. From cultivation to distribution, our platform enables partners to access the entire product lifecycle. This transparency enables quick history checks, facilitates problem-solving, and empowers informed decision-making.',
            'Improved Efficiency VS Cost': 'Our solution empowers producers with the tools to improve efficiency while managing costs. Real-time data sharing enables seamless collaboration with system partners, simplifying tracking, reporting, and auditing processes. This synergy decreases operational redundancies and increases cost-effectiveness.',
            'Create Transparency': 'Transparency is at the heart of our platform. Using the power of distributed ledgers, we create end-to-end transparency from seed to sale. Every transaction is validated, creating a trusted and efficient way to ensure data transparency. With our technology, the entire supply chain becomes visible, ensuring ethical practices and fostering consumer trust.',
            'Validation and Standardization': 'Validation and standardization are essential in a diverse industry. Our platform enables growers to share extensive data with labs, retailers, and consumers while safeguarding intellectual property. This collaboration fosters a safe ecosystem anchored by immutable results, ensuring products meet the highest quality standards.',
            'Resolve Feedback': 'Our solution helps businesses resolve the mystery behind consumer decisions. By analyzing a wealth of data, businesses gain insights into consumer preferences, market trends, and purchasing behaviors. This knowledge equips businesses with a sales advantage and aids in estimating potential market size.',
            'Generate Action': 'Generating actionable insights is the essence of our platform. By combining massive supply chain data with verifiable lab results and consumer feedback, businesses can unlock valuable patterns and trends. These insights pave the way for informed decisions and strategic actions.',
            'Compliance Efficiencies': 'Compliance is streamlined with our battle-tested technology. The platform\'s capabilities eliminate human errors and malicious edits, ensuring reports remain valid, accurate, and up-to-date. Businesses can confidently meet compliance obligations, saving time and resources.',
            'Increase Value': 'Our solution adds value through smart analytics. By integrating data analytics, businesses can optimize pricing strategies, forecast demand accurately, and manage inventory efficiently. These insights significantly increase return on investment and drive sustainable growth.',
            'Absolute Confidence': 'Consumer confidence is paramount. Our platform provides seamless access to verifiable product data directly from packages using QR codes. This allows consumers to make choices with absolute confidence, knowing they\'re receiving authentic, high-quality products.',
            'Empowered Consumer Choices': 'With Chainleaf Labs\' blockchain services, consumers gain the power to make informed choices about their purchases. Easily access verified product information, from cultivation to quality testing, ensuring your buying decisions are backed by transparency and authenticity.',
            'Sustainable Sourcing': 'By leveraging our blockchain platform, consumers contribute to sustainable sourcing practices. Trace the journey of your chosen products, ensuring they meet environmental and ethical standards, while supporting growers and businesses committed to responsible practices.',
            'Quality Assurance': 'Chainleaf Labs\' blockchain technology ensures you receive products of the highest quality. Transparent supply chain information and lab-verified data guarantee that you\'re getting exactly what you expect, each and every time.',
            'Personalized Experiences': 'Experience personalized recommendations based on your preferences and past choices. Our blockchain-backed insights allow businesses to offer products that align with your tastes, ensuring a satisfying and personalized consumer experience.',
            'Trust and Security': 'Shop with confidence knowing that your purchases are backed by an unalterable ledger. Our blockchain technology creates a secure environment where you can trust the accuracy of product information, transactions, and quality claims.',
            'Real-Time Insights': 'Get real-time updates on product availability, trends, and more. Chainleaf Labs\' platform gives you a direct connection to the pulse of the cannabis market, so you\'re always up to date on the latest developments.',
            'Consumer Feedback Loop': 'Our platform values your feedback. By engaging with the blockchain-powered feedback loop, your opinions help shape the products and services you love, creating a collaborative ecosystem between consumers and businesses.',
            'Educational Resources': 'Explore the world of cannabis through educational resources integrated into our platform. Access reliable information about different strains, cultivation methods, and more, empowering you to make informed decisions.',
          }
    }
   
}

export default truth;