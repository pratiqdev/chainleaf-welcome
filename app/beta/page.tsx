import Button from "@/blocks/Button"


const Page = () => {
    return (
        <div className="bg-slate-500 min-h-screen">
            <div className="h-20" />

            <div className="bg-white p-4 rounded-lg mx-auto mt-4 w-min shadow-lg flex flex-col gap-4">
                <h2>Become a Chainleaf Certified Lab</h2>
                <Button>Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="light">Light</Button>
                <Button variant="link">Link</Button>
            </div>
        
        </div>
    )
}

export default Page
