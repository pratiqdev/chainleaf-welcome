import Icons from './Icons'

const truth = {
    title:`Chainleaf Labs`,
    meta: {
        title: `Chainleaf Labs`,
        description: `Verifiable Certificate Solutions`,
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
                text:`About`,
                href:`#about`
            },
            {
                text:`Problem`,
                href:`#problem`
            },
            {
                text:`Vision`,
                href:`#vision`
            },
            {
                text:`Solution`,
                href:`#solution`
            },
            {
                text:`Contact Us`,
                href:`#contact`
            },

        ]
    },
    hero: {
        supheading: `The Next Generation of Trust and Security`,
        heading: `Revolutionize Your Industry With Blockchain Technology:`,
        subheading: `Explore The Possibilities`,
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
                        text: `About Us`,
                        href: `#about`,
                    },
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
            content: `In a world where speed, accuracy and connectivity...`,
            subsections: [
                {
                    heading: `Supply Chain Failures`,
                    content: `Sint ipsum anim ut elit fugiat aute consequat. Aute dolor qui reprehenderit deserunt magna laboris labore.`,
                    icon: Icons.lg.ChartPieIcon
                },
                {
                    heading: `Difficult Certification Process`,
                    content: `Cupidatat incididunt sint qui ea fugiat deserunt. Pariatur dolore cupidatat amet ad excepteur quis aliquip.`,
                    icon: Icons.lg.BeakerIcon
                },
                {
                    heading: `Credential Fraud`,
                    content: `Aliquip nisi eiusmod do duis excepteur aliqua enim nulla eiusmod.`,
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
                    heading: `Tracking`,
                    content: `Creating supply chain efficiency by utilizing blockchain technology to build a smarter marketplace for suppliers and consumers.`,
                    icon: Icons.lg.QrCodeIcon
                },
                {
                    heading: `Automation`,
                    content: `In consectetur est esse ipsum labore adipisicing laboris ipsum nulla culpa fugiat ea.`,
                    icon: Icons.lg.AdjustmentsHorizontalIcon
                },
                {
                    heading: `Business Value`,
                    content: `Pariatur labore cillum tempor commodo sint aliqua et.`,
                    icon: Icons.lg.BriefcaseIcon
                },
            ]
        },
        'solution':{
            heading: `solution`,
            subheading: `How It Works`,
            content: ``,
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
            content: `Duis elit id voluptate sint. Deserunt ullamco fugiat Lorem aute magna esse laborum. Consectetur tempor nostrud sint magna Lorem eiusmod velit nulla laborum ullamco. Est pariatur duis laboris enim pariatur deserunt ullamco. Voluptate enim anim voluptate ut.
            Aliqua sunt cillum tempor ipsum. Sint mollit anim nostrud exercitation incididunt nisi ex ut exercitation voluptate. In deserunt aliquip consequat sint duis elit. Laboris reprehenderit eu Lorem cillum sint. Dolor id nisi ipsum id proident voluptate culpa quis incididunt dolore. Adipisicing ut aliquip cillum anim nostrud ea amet amet ea incididunt dolore. Laborum ea consectetur ea ad sit quis duis quis reprehenderit non ut.`,
            subsections: [
                {
                    name: `Michael J`,
                    handle: `pratiqdev`,
                    title: 'Lead UI/UX',
                    link: 'https://github.com/pratiqdev',
                    image: 'https://placekitten.com/800/800'
                },
                {
                    name: `Another P`,
                    handle: `pratiqdev`,
                    title: 'Smart Contract Author',
                    link: 'https://linkedin.com/in/another-p',
                    image: 'https://placekitten.com/1000/800'
                },
                {
                    name: `Johnno`,
                    handle: `beepo`,
                    title: 'Microservice Architect',
                    link: 'https://linkedin.com/in/johnno',
                    image: 'https://placekitten.com/800/1000'
                },

            ]
        }
    }
   
}

export default truth;