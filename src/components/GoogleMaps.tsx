import React from "react";

interface GoogleMapProps {
    src: string;
    width?: string;
    height?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
    src,
    width = "100%",
    height = "400px",
}) => {
    return (
        <div className="w-full h-full">
            <iframe
                src={src}
                width={width}
                height={height}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
