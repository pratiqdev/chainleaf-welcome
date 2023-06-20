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
            content: ``,
            subsections: [
                {
                    name: `Michael J`,
                    handle: `pratiqdev`,
                    title: 'Lead UI/UX',
                    linkedin: 'https://linkedin.com/in/michael-jannetta',
                    github: 'https://gitthub.com/pratiqdev',
                    bio: `Hailing from Michigan, I am a 32-year-old seasoned developer with a decade-long background in front-end development and a few years of full-stack expertise. With a unique blend of skills in 3D modelling, CAD design, game design, electronics, and embedded systems, my portfolio extends beyond conventional boundaries.`,
                    image: 'https://placekitten.com/800/800'
                },
                {
                    name: `Another P`,
                    handle: `pratiqdev`,
                    title: 'Lead UI/UX',
                    linkedin: 'https://linkedin.com/in/michael-jannetta',
                    github: 'https://gitthub.com/pratiqdev',
                    bio: `Hailing from Michigan, I am a 32-year-old seasoned developer with a decade-long background in front-end development and a few years of full-stack expertise. With a unique blend of skills in 3D modelling, CAD design, game design, electronics, and embedded systems, my portfolio extends beyond conventional boundaries. I embrace innovation and strive to push the limits of technology in every project.`,
                    image: 'https://placekitten.com/800/800'
                },

            ]
        }
    }
   
}

export default truth;