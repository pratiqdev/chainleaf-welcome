
export type ExplainProps = {
    content: React.ReactNode;
    link?: {
        url: string;
        text: string;
    }
}

const Explain = ({content, link}:ExplainProps) => {

    return (
        <div className="group relative mx-1 inline-block z-10">
            <button className="bg-transparent hover:bg-white duration-200 hover:text-black text-primary-5 border border-primary-5 w-[1.2em] h-[1.2em] rounded-full text-bold flex items-center justify-center text-xs p-2">?</button>
            <div className="absolute bg-gray-100 border border-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 text-black p-2 rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 duration-200 delay-500 text-xs mt-2 w-[20rem] translate-x-[-45%]">
                {content}
            </div>
        </div>
      
      
    )
}

export default Explain