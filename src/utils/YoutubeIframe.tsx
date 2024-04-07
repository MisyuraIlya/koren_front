import React from 'react';

const YoutubeIframe = ({ link }: { link: string | null }) => {

    const convertToEmbeddedLink = (youtubeLink: string) => {
        const videoId = youtubeLink.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|.*&v=))([^&\n?#]+)/)?.[1]
        const embeddedLink = `https://www.youtube.com/embed/${videoId}`;
        return embeddedLink;
    }

    return (
        <>
            {link &&
                <iframe width="760" height="415" src={convertToEmbeddedLink(link)} frameBorder="0" allowFullScreen></iframe>
            }
        </>
    );
};

export default YoutubeIframe;
