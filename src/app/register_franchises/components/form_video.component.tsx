

import React, { useState, ChangeEvent} from 'react';


const Form_video = ({}) => {

    const [urlVideo, setUrlVideo] = useState<String>("")
    const [urlSite, setUrlSite] = useState<String>("")

    const handleUrlVideoChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.includes('embed')) {
            setUrlVideo(event.target.value);
            
        } else {
            // Transforma a URL em um link de incorporação
            const videoId = event.target.value.split('v=')[1].split('&list=')[0];
            setUrlVideo(`https://www.youtube.com/embed/${videoId}`);
        
        }
        
    };

    const handleUrlSiteChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUrlSite(event.target.value);
    };

    return(
        <React.Fragment>
            <div className="video-upload-container">
                                    
                <label className="label_text franchise_label--video" id="franchiseDescription" htmlFor="franchise_video-url">URL de vídeo sobre sua Franquia <span>(opcional) &#9432;</span></label>

                <input 
                    type="url" 
                    id="franchise_video-url" 
                    placeholder="https://.."
                    onChange={handleUrlVideoChange}
                />

                <div className="videos-preview" id="preview_container-others">
                    {
                        urlVideo ? 
                        (<iframe src={String(urlVideo)} width={560} height={315} 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}/>
                        ) : (
                            <span>videos</span>
                        )
                        
                    }
                    
                </div>

                <div className="franchise-site-url">
                    <label
                    className="franchise_label--video" htmlFor="franchise_site-url">URL do site de sua Franquia<span>(opcional) &#x24D8;</span></label>
                    <input 
                        type="url" 
                        id="franchise_site-url" 
                        placeholder="https://.."
                        onChange={handleUrlSiteChange}
                    />
                </div>

            </div>
            <style jsx>{`

            label {
                display: block;
                margin-top: 45px;
                padding-left: 0.5rem;
                margin-bottom: 0.2rem;
                color: #666;
                font-family: var(--font_primary);
                font-size: 0.8rem;
            }

            .label_text{
                margin-top: 45px;
                padding-left: 0.5rem;
                margin-bottom: 0.2rem;
            }
            input[type="url"]{
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                box-sizing: border-box;
            }           
            span{
                font-size: 0.8rem;
                color: rgb(158, 157, 157);
                padding-top: 48px;
                align-content: end;
                text-align: end;
                margin-bottom: 0;
                margin-left: 1rem;
            }
            
            .franchise_label--video{
                margin-top: 22px;
            }
            
            .videos-preview{
                display: flex;
                flex-wrap: wrap;
            
                width: 100%;
                min-height: 150px;
                max-height: 100%;
            
                margin-top: 4rem;
                border: 1px solid #ccc;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            
            `}</style>
        </React.Fragment>
    )
}

export default Form_video;