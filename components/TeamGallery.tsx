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
            showNav={false}
            showBullets={true}
            renderItem={(item:any)=>
                <div className="w-full h-auto relative rounded-b-lg image-gallery-pseudo-container overflow-hidden">
                    <Image className="image-gallery-image w-full h-auto rounded-lg" alt="" src={item.image} width={800} height={800}/>
                    <div className="fixed gallery-bio flex flex-col gap-2 pb-8 rounded-b-lg">
                        <div className="flex justify-center items-center gap-4">
                            <div className="text-primary-6 font-bold text-sm">{item.name}</div>
                            <div className="text-primary-4">|</div>
                            <div className="text-primary-6 font-semibold text-sm">{item.title}</div>
                            <div className="text-primary-4">|</div>
                            {item.link && <a href={item.link} className="text-sm font-semibold text-primary-6">View -&gt;</a>}
                        </div>
                        <div className="flex gap-4 justify-center">
                        </div>
                    </div>
                </div>
            }
        />;
    
}

export default Gallery