import Icons from './Icons'

const social = {
    at: '@chainleaflabs',
    name: 'Chainleaf Labs',
    title: "Chainleaf Labs - Blockchain Certificate Verification & Supply Chain Management",
    url: 'https://welcome.chainleaflabs.com',
    image: '/images/social-preview.png',
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
        supheading: `The Next Generation of Trust and Security`,
        heading: `The revolutionary digital blockchain platform`,
        subheading: `connecting people, business, and data of today.`,
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
            content: `In a world where speed, accuracy and connectivity define optimal supply chains the blockchain is essential`,
            content_v2: `Supply chains depend on speed, accuracy and connectivity only provided by blockchain based systems`,
            content_v3: `Harness the potential of blockchain and unlock a new era of efficiency, transparency, and trust`,
            subsections: [
                {
                    heading: `Supply Chain Failures`,
                    content: `Supply chain customers and partners want more information about industry products and practices`,
                    icon: Icons.lg.ChartPieIcon
                },
                {
                    heading: `Difficult Certification Process`,
                    content: `Labs and growers must remain compliant while providing clients and consumers with accurate data and verifiable test documents`,
                    icon: Icons.lg.BeakerIcon
                },
                {
                    heading: `Credential Fraud`,
                    content: `The need for data transparency and trust in the cannabis supply chain is needed to ensure reliability`,
                    icon: Icons.lg.CheckBadgeIcon
                },
            ]
        },
        'vision':{
            heading: `VISION`,
            subheading: `Innovation`,
            content: ``,
            subsections: [
                {
                    heading: `Rapid, real-time traceability`,
                    content: `With Chainleaf Labs' blockchain services, supply chain partners have access to the entire product lifecycle to view history and examine all paths to success`,
                    icon: Icons.lg.QrCodeIcon
                },
                {
                    heading: `Improved Efficiency VS Cost`,
                    content: `Empowering producers with the ability to share, document and analyze real-time data with all system partners for simplified tracking, reporting and auditing`,
                    icon: Icons.lg.AdjustmentsHorizontalIcon
                },
                {
                    heading: `Create Transparency`,
                    content: `Our platform supports data transparency from seed to sale using the power of distributed ledgers to validate transactions in a trusted and efficient way`,
                    icon: Icons.lg.EyeIcon
                },
                {
                    heading: `Validation and Standardization`,
                    content: `Enabling growers to share extensive data with labs, retailers and consumers while protecting IP to create a safe ecosystem protected by immutable results`,
                    icon: Icons.lg.VariableIcon
                },
                {
                    heading: `Resolve Feedback`,
                    content: `Find the source of consumer decisions to gain the sales advantage and estimate the potential market size for your products or services`,
                    icon: Icons.lg.AtSymbolIcon
                },
                {
                    heading: `Generate Action`,
                    content: `Combine mass data of supply chains with verifiable lab results and consumer data to generate actionable insights`,
                    icon: Icons.lg.ForwardIcon
                },
                {
                    heading: `Compliance Efficiencies`,
                    content: `Rely on a battle-tested abilities to remove human error, malicious edits and keep reports valid and up-to-date`,
                    icon: Icons.lg.CommandLineIcon
                },
                {
                    heading: `Increase Value`,
                    content: `Maximize return on investment by integrating smart analytics to optimize pricing, demand forecasting, and inventory management`,
                    icon: Icons.lg.BriefcaseIcon
                },
                {
                    heading: `Absolute Confidence`,
                    content: `Give consumers confidence by providing seamless access to our verifiable product data directly from the package using existing QR code systems`,
                    icon: Icons.lg.CheckBadgeIcon
                },




            ]
        },
        'solution':{
            heading: `solution`,
            subheading: `How It Works`,
            content: `Harnessing the power of blockchain technology, we are pioneering advanced supply chain solutions that offer an unprecedented level of data transparency. This groundbreaking approach allows all participating entities to access comprehensive, real-time data directly from the blockchain, eliminating the need for tedious back-and-forth communication traditionally required for data access. More than just access, blockchain technology ensures that every recorded entry is untamperable, offering a secure ledger that guarantees accuracy and authenticity. This creates an ecosystem where all participants can confidently engage, knowing they are basing their decisions and actions on clear, precise, and trustworthy data. Our approach not only modernizes supply chain management but also fosters a new era of business transparency, efficiency, and integrity. `,
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
            content: `Chainleaflabs is a service-first digital platform designed to improve relationships for those in the cannabis industry. As a technology team, we encourage each other to grow and innovate. As a company, we support laboratories, medical clinics, consumers, manufactures by providing them access to data provided by farmers/growers.
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
                    alt: `warehouse cannabis grow`,
                },
                {
                    original: `/images/public-domain/4.jpg`,
                    alt: `warehouse cannabis grow`,
                },
                {
                    original: `/images/public-domain/5.jpg`,
                    alt: `warehouse cannabis grow`,
                },
                {
                    original: `/images/public-domain/6.jpg`,
                    alt: `warehouse cannabis grow`,
                },
                {
                    original: `/images/public-domain/7.jpg`,
                    alt: `warehouse cannabis grow`,
                },
                {
                    original: `/images/public-domain/8.jpg`,
                    alt: `warehouse cannabis grow`,
                },
                {
                    original: `/images/public-domain/10.jpg`,
                    alt: `warehouse cannabis grow`,
                },
                {
                    original: `/images/public-domain/1.jpg`,
                    alt: `led bar`,
                },
                // {
                //     original: `/images/public-domain/11.jpg`,
                //     alt: `warehouse cannabis grow`,
                // },
                {
                    original: `/images/public-domain/12.jpg`,
                    alt: `warehouse cannabis grow`,
                },
                {
                    original: `/images/public-domain/13.jpg`,
                    alt: `warehouse cannabis grow`,
                },
            ]
        }
    }
   
}

export default truth;