"use client";

import Icons from '@/lib/Icons';
import truth from '@/lib/truth';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';


const Gallery = () => {
    return <ImageGallery 
            items={truth.sections.about.subsections as any} 
            showThumbnails={false} 
            showFullscreenButton={false}
            showPlayButton={false}
            renderItem={(item:any)=>
                <div className="w-full h-auto relative rounded-lg">
                    <Image className="image-gallery-image w-full h-auto rounded-lg" alt="" src={item.image} width={800} height={800}/>
                    <div className="fixed gallery-bio">
                        <div className="bg-gradient-to-b from-transparent to-white h-6 w-full" />
                        <div className="p-4 bg-white rounded-b-lg h-auto">
                            <div className="text-primary-6 font-bold text-xl">{item.name}</div>
                            <a href={item.linkedin ?? item.github} className="text-sm text-primary-5">{item.handle} -&gt;</a>
                            <div className="mt-4">{item.bio}</div>
                        </div>
                    </div>
                </div>
            }
        />;
    
}

export default Gallery