import React from 'react';

const YouTubeVideo = ({ videoUrl }) => {
    return (
        <div>
            <iframe 
                width="560" 
                height="315" 
                //src="https://www.youtube.com/embed/3IcwuQf5NTc?si=MxAAEieJONA6luoh"
                src={videoUrl}  
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default YouTubeVideo;