import Icons from './Icons'

const truth = {
    title:`Chainleaf Labs`,
    meta: {
        title: `Chainleaf Labs`,
        description: `Verifiable Certificate Solutions`,
    },


    nav:{
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
            href: `/getting-started`
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
                    content: `...content...`,
                    icon: Icons.lg.CheckIcon
                },
                {
                    heading: `Dummy Heading`,
                    content: `...content...`,
                    icon: Icons.lg.CheckIcon
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
                    content: `...content...`,
                    icon: Icons.lg.QrCodeIcon
                },
                {
                    heading: `Automation`,
                    content: `...content...`,
                    icon: Icons.lg.CheckIcon
                },
                {
                    heading: `Business Value`,
                    content: `...content...`,
                    icon: Icons.lg.CheckIcon
                },
            ]
        }
    }
   
}

export default truth;