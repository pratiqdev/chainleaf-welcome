"use client"
import { useAuth } from "@/components/AuthProvider";
import Tails from "@/components/Tails";
import { Step } from "@/components/guide";



export const GrowerSteps: Step[] = [
    {
        title: "1 Complete your profile",
        text: "Add important details to your account like business location, entity type and more.",
        img: "/images/chainleaf/app-mobile.png",
        substeps: [
            (props:any) => { 
                return (
                    <div>
                        <h4>1. Add important details to your account like business location, entity type and more.</h4>
                        <p>Find local certified labs that meet your business requirements.</p>
                        <p>Allow users to find your products by name, location or certification.</p>
                        <p>Get notifications and updates about local regulation changes.</p>
                        <button onClick={props.substepUp}>Skip</button>
                        <button onClick={() => console.log('ayoo')}>Next</button>
                    </div>
                )
            },
            () => {
                return (
                    <div>
                        <h4>2. Add important details to your account like business location, entity type and more.</h4>
                        <p>Find local certified labs that meet your business requirements.</p>
                        <p>Allow users to find your products by name, location or certification.</p>
                        <p>Get notifications and updates about local regulation changes.</p>
                    </div>
                )
            },
        ]
    
    },
    {
        title: "2 Find Local Labs",
        text: "Add important details to your account like business location, entity type and more.",
        img: "/images/chainleaf/app-desktop.png",
        substeps: [
            () => {
                return (
                    <div>
                        <h4>1. Add important details to your account like business location, entity type and more.</h4>
                        <p>Find local certified labs that meet your business requirements.</p>
                        <p>Allow users to find your products by name, location or certification.</p>
                        <p>Get notifications and updates about local regulation changes.</p>
                    </div>
                )
            },
            () => {
                return (
                    <div>
                        <h4>2. Add important details to your account like business location, entity type and more.</h4>
                        <p>Find local certified labs that meet your business requirements.</p>
                        <p>Allow users to find your products by name, location or certification.</p>
                        <p>Get notifications and updates about local regulation changes.</p>
                    </div>
                )
            },
        ]

    },
    // {
    //     title: "Complete your profile",
    //     text: "",
    //     img: "/images/chainleaf/app-mobile.png",
    //     component: () =>
    //         <div>
    //             <h4 className="text-semibold text-lg">What is the name of your Company?</h4>
    //             <Tails.label>
    //                 <Tails.input placeholder="Company Name"/>
    //             </Tails.label>

    //             <h4 className="text-semibold text-lg">What should we call you?</h4>
    //             <Tails.label>
    //                 <Tails.input placeholder="Display Name" />
    //             </Tails.label>
    //         </div>
    // },
    // {
    //     title: "Find Local Labs",
    //     text: "Find local certified labs that meet your business requirements and start testing.",
    //     img: "/images/chainleaf/login-mobile.png",
    //     component: () => 
    //     <div>
    //         <p>Simplified certification and testing with data directly from laboratories.</p>
    //         <p>Share your certification data with the community for complete transparency.</p>
    //         <p>Get notifications and updates about local regulation changes.</p>
    //     </div> 
     
    // }
]