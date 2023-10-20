"use client"
import { useAuth } from "@/components/AuthProvider";
import Select from "@/components/Select";
import Tails from "@/components/Tails";
import { Step } from "@/components/guide";
import { SubstepController } from "@/components/guide";
import clsx from "clsx";
import { useCallback, useRef, useState, useEffect } from "react";

const baseButton = "px-2 py-2 bg-primary-5 hover:bg-primary-4  text-white dark:text-black rounded text-sm md:text-md"
const dimButton = "text-gray-700 dark:text-gray-400 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800"

const StepNav = ({ controller, callback, last = false }: { controller: SubstepController, callback?: Function, last?: boolean }) => {
    return (
        <div className="flex justify-between font-semibold mt-6" onClick={() => callback && callback()}>
            <button className={clsx(baseButton)} onClick={() => controller.substepDown()}>&lt;- Back</button>
            <div className="flex gap-4">
                <button className={clsx(baseButton, dimButton)} onClick={() => controller.substepUp()}>Skip</button>
                <button className={clsx(baseButton)} onClick={() => last ? controller.stepUp() : controller.substepUp()}>Next -&gt;</button>
            </div>
        </div>
    )
}


export const GrowerSteps: Step[] = [
    {
        title: "Complete your profile",
        img: "/images/chainleaf/app-mobile.png",
        substeps: [


            ({ controller }: { controller: SubstepController }) => {
                const {auth} = useAuth()
                return (
                    <div className="flex flex-col flex-1 justify-between">
                        <div>
                            <h4 className="mb-6">Profile for <b>{auth?.email ?? 'this account'}</b> is incomplete. Add important details to your account like business location, entity type and more.</h4>
                            <div className="text-gray-700 dark:text-gray-400 leading-4 text-xs">
                                <p>Find local certified labs that meet your business requirements.</p>
                                <div className="w-full px-10 md:pl-0 my-2" ><div className="w-full h-[1px] bg-primary-5" /></div>
                                <p>Allow users to find your products by name, location or certification.</p>
                                <div className="w-full px-10 md:pl-0 my-2" ><div className="w-full h-[1px] bg-primary-5" /></div>
                                <p>Get notifications and updates about local regulation changes.</p>
                            </div>
                        </div>
                        <StepNav controller={controller} />
                    </div>
                )
            },



            ({ controller }: { controller: SubstepController }) => {
                const {auth, setAuth} = useAuth()
                const [entity, setEntity] = useState(() => auth?.profile?.entityName)
                const [display, setDisplay] = useState(() => auth?.profile?.displayName)
    

                const submit = useCallback(() => {
                    setAuth((x:any) => ({
                        ...x,
                        profile: {
                            entityName: entity,
                            displayName: display
                        }
                    }))
                }, [entity, display, setAuth])

                return (
                    <div className="flex flex-col flex-1 justify-between">
                        <div>
                            <h4 className="text-left text-lg">What is your Company Name?</h4>
                            <Tails.input onChange={(e:any) => setEntity(e.target.value)} defaultValue={entity} placeholder="Entity Name" />

                            <h4 className="text-left text-lg mt-4">What should we call you?</h4>
                            <Tails.input  onChange={(e:any) => setDisplay(e.target.value)} defaultValue={display} placeholder="Display Name" />
                            {/* <button onClick={submit} >SUBMIT</button>
                            <pre>{JSON.stringify(auth)}</pre> */}
                        </div>
                        <StepNav controller={controller} callback={submit}/>
                    </div>
                )
            },


            ({ controller }: { controller: SubstepController }) => {
                const {auth, setAuth} = useAuth()
                const [address, setAddress] = useState(() => auth?.location?.address)
                const [state, setState] = useState(() => auth?.location?.state)
                const [zip, setZip] = useState(() => auth?.location?.zip)
    

                const submit = useCallback(() => {
                    setAuth((x:any) => ({
                        ...x,
                        location: {
                            address,
                            state,
                            zip
                        }
                    }))
                }, [address, state, zip, setAuth])

                return (
                    <div className="flex flex-col flex-1 justify-between">
                        <div>
                            <h4 className="text-left text-lg">Where does your company operate?</h4>
                            <Tails.label>
                                Address
                                <Tails.input onChange={(e:any) => setAddress(e.target.value)} defaultValue={address} placeholder="Address" />
                            </Tails.label>

                            <Tails.label>
                                State
                                <Tails.input onChange={(e:any) => setState(e.target.value)} defaultValue={state} placeholder="State" />
                            </Tails.label>

                            <Tails.label>
                                Zip
                                <Tails.input onChange={(e:any) => setZip(e.target.value)} defaultValue={zip} placeholder="Zip Code" />
                            </Tails.label>

                        </div>
                        <StepNav controller={controller} callback={submit} last/>
                    </div>
                )
            },
        ]

    },
    {
        title: "Find Local Labs",
        img: "/images/chainleaf/app-desktop.png",
        substeps: [

            ({ controller }: { controller: SubstepController }) => {
                const {auth} = useAuth()
                return (
                    <div className="flex flex-col flex-1 justify-between">
                        <div>
                            <h4 className="mb-6">Find local certified labs that meet your business requirements and start testing.</h4>
                            <div className="text-gray-700 dark:text-gray-400 leading-4 text-xs">

                                <p>Simplified certification and testing with data directly from laboratories.</p>
                                <div className="w-full px-10 md:pl-0 my-2" ><div className="w-full h-[1px] bg-primary-5" /></div>
                                <p>Share your certification data with the community for complete transparency.</p>
                                <div className="w-full px-10 md:pl-0 my-2" ><div className="w-full h-[1px] bg-primary-5" /></div>
                                <p>Get notifications and updates about local regulation changes.</p>
                            </div>
                        </div>
                        <StepNav controller={controller} />
                    </div>
                )
            },

            //! select product types
            ({ controller }: { controller: SubstepController }) => {
                const {auth, setAuth} = useAuth()
                const [cert_types, setCertTypes] = useState(() => auth?.find_labs?.cert_types)

                const submit = () => {
                    setAuth((x:any) => ({
                        ...x,
                        cert_types
                    }))
                }
   

                return (
                    <div className="flex flex-col flex-1 justify-between">
                        <div>
                            <h4 className="text-left text-lg">1. What types of products do you need certified?</h4>
                            <Select 
                                placeholder="Select multiple or type"
                                className="mt-4 text-left" 
                                onChange={(v:any) => setCertTypes(v)}
                                options={[
                                    'Fresh Produce',
                                    'Livestock/Animal Products',
                                    'Seafood/Aquaculture',
                                    'Dairy Products',
                                    'Alcoholic Beverages',
                                    'Organic Crops',
                                    'Cannabis Products',
                                    'Wild Harvest',
                                ]} 
                            />
                      

                        </div>
                        <StepNav controller={controller} callback={submit}/>
                    </div>
                )
            },



            //! select licenses
            ({ controller }: { controller: SubstepController }) => {
                const {auth, setAuth} = useAuth()
                const [licenses, setLicenses] = useState(() => auth?.find_labs?.licenses)

                const submit = () => {
                    setAuth((x:any) => ({
                        ...x,
                        licenses
                    }))
                }

                
    // For Cannabis Growers:
    // Cannabis Cultivation License: Allows for the legal cultivation of cannabis plants.
    // Cannabis Processing License: Required for processing cannabis into consumable products.
    // Cannabis Distribution License: Needed to transport and distribute cannabis products.
    // Cannabis Retail License: Required for operating a cannabis dispensary or retail establishment.
    // Seed-to-Sale Tracking Compliance: Ensures proper tracking of cannabis plants from cultivation to sale.
    // Testing Lab Certification: For laboratories that analyze and certify the quality and safety of cannabis products.
    // Local Cannabis Business Permits: Many cities and municipalities have their own permits and licenses for cannabis businesses.
    
    // For Produce Growers:
    // Good Agricultural Practices (GAP) Certification: Ensures safe and sanitary practices during cultivation and harvesting.
    // USDA Organic Certification: For organic fruits and vegetables, ensuring adherence to organic farming standards.
    // Pesticide Applicator License: Required for the safe and legal use of pesticides and herbicides.
    // Food Safety Certifications: Depending on the nature of the product, certifications like Safe Quality Food (SQF) may be required.
    // Hazard Analysis and Critical Control Points (HACCP) Certification: Ensures food safety through systematic analysis of production processes.
    // Water Rights Certificate: In regions with water rights systems, a certificate is necessary to ensure that water use for irrigation complies with legal regulations.
    // Conservation Compliance Certification: Promotes sustainable land and water resource management.
    // Livestock and Meat Processing Licenses: For those involved in the production, processing, and sale of meat and animal products.
    // Dairy Licenses: Required for the production and sale of dairy products like milk, cheese, and yogurt.
    // Animal Welfare Certifications: Such as "Certified Humane" for products derived from animals raised under humane conditions.
    // Alcohol Production and Distribution Licenses: For wineries, breweries, and distilleries.
    // Wild Harvesting Permits: Required for gathering wild or foraged products like mushrooms, herbs, or other non-cultivated items.
    // Local Produce Market Permits: For growers who sell their produce at local markets, street fairs, or other similar venues.

    // For Cannabis Growers:
    // Cannabis Cultivation License: Sometimes referred to as "Marijuana Cultivation License" or "THC Cultivation License."
    // Cannabis Processing License: May also be called a "Marijuana Extraction License" or "THC Processing License."
    // Cannabis Distribution License: Occasionally known as a "Marijuana Distribution License" or "THC Distribution License."
    // Cannabis Retail License: Sometimes referred to as a "Marijuana Retail License" or "THC Retail License."
    // Seed-to-Sale Tracking Compliance: Often associated with "Cannabis Track and Trace" or "THC Tracking Compliance."
    // Testing Lab Certification: May also be referred to as "Cannabis Testing Lab Accreditation" or "THC Testing Certification."
    // Local Cannabis Business Permits: These permits are issued by local authorities and may have various names depending on the jurisdiction.

    // For Produce Growers:
    // Good Agricultural Practices (GAP) Certification: Often simply referred to as "GAP Certification."
    // USDA Organic Certification: Also known as "Organic Certification" or "NOP Certification" (National Organic Program).
    // Pesticide Applicator License: May be called a "Pesticide License" or "Herbicide License."
    // Food Safety Certifications: Such as "SQF Certification" (Safe Quality Food Certification) or "BRC Certification" (British Retail Consortium Certification).
    // Hazard Analysis and Critical Control Points (HACCP) Certification: Generally referred to as "HACCP Certification."
    // Water Rights Certificate: Sometimes referred to as "Water Allocation Permit" or "Water Use Rights."
    // Conservation Compliance Certification: Often associated with "Conservation Compliance Programs."
    // Livestock and Meat Processing Licenses: These may include "Meat Processing License" or "Slaughterhouse License."
    // Dairy Licenses: Also known as "Milk Processing License" or "Cheese Manufacturing License."
    // Animal Welfare Certifications: Various organizations provide specific animal welfare certifications, such as "Certified Humane" or "Animal Welfare Approved."
    // Alcohol Production and Distribution Licenses: These may include "Winery License," "Brewery License," or "Distillery License."
    // Wild Harvesting Permits: Often simply referred to as "Foraging Permits" or "Wildcrafting Permits."
    // Local Produce Market Permits: These permits are issued by local markets or event organizers and may vary in name.
    

                return (
                    <div className="flex flex-col flex-1 justify-between">
                        <div>
                            <h4 className="text-left text-lg">2. What types of licenses or certifications do you require?</h4>
                            <Select 
                                placeholder="Select multiple or type"
                                className="mt-4 text-left" 
                                onChange={(v:any) => setLicenses(v)}
                                options={[
                                    'Winery/Brewery/Distillery License',
                                    'Pesticide/Herbicide License',
                                    'Organic/NOP Certification',
                                    'Conservation Compliance',
                                    'GAP Certification',
                                    'Cannabis Production/Cultivation License',
                                    'Cannabis Distribution/Retail License',
                                    'Cannabis Testing Lab Accreditation',
                                    'STS Tracking Compliance',
                                    'Certified Humane',
                                    'Water Allocation Permit',
                                    'HACCP Certification',
                                    'Foraging/Wildcrafting Permits',
                                    'Food Safety/SQF',
                                    'Milk Processing License',
                                    'Cheese Manufacturing',
                                    'Meat Processing License',
                                ]} 
                            />
                        

                        </div>
                        <StepNav controller={controller} callback={submit}/>
                    </div>
                )
            },


            //! search for labs
            ({ controller }: { controller: SubstepController }) => {
                const {auth, setAuth} = useAuth()
                const [search, setSearch] = useState(() => auth?.location?.zip ?? auth?.location?.state ?? auth?.location?.address)
                const [loading, setLoading] = useState(false)
                const [done, setDone] = useState(false)
                const toRef = useRef<any>(null)
    

                // const submit = useCallback(() => {
                //     setAuth((x:any) => ({
                //         ...x,
                //         profile: {
                //             entityName: entity,
                //             displayName: display
                //         }
                //     }))
                // }, [auth, entity, display])

                useEffect(() => {
                    setLoading(search ? true : false)
                    setDone(search ? false : false)
                   toRef.current = setTimeout(() => {
                        setLoading(false)
                        setDone(search ? true : false)
                   }, Math.random() * 2000)
                }, [auth, search])

                return (
                    <div className="flex flex-col flex-1 justify-between">
                        <div>
                            <h4 className="text-left text-lg">Search for Local Labs</h4>
                            <Tails.input onChange={(e:any) => setSearch(e.target.value)} defaultValue={search} placeholder="Entity Name" />

                            <div className="flex justify-center items-center">
                                {!done && loading && <p className="text-2xl text-gray-500">Loading...</p>}
                                {done && !loading && <p>Done!</p>}
                            </div>
                      

                        </div>
                        <StepNav controller={controller} />
                    </div>
                )
            },

            


        ]

    },

]