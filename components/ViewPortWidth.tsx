'use client'
import React, { useState, useEffect } from 'react';

function ViewportWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <p style={{position:"absolute", top: 0, left: "500px"}}>{width}px wide</p>
        </div>
    );
}

export default ViewportWidth;