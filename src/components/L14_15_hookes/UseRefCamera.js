import React, { useRef, useState, useEffect } from 'react';

const UseRefCamera = () => {
    const videoRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);

    const toggleCamera = () => {
        setIsCameraOn(prevState => !prevState);
    };

    useEffect(() => {
        if (isCameraOn) {
            startCamera();
        } else {
            stopCamera();
        }

        // Cleanup function
        return () => {
            stopCamera();
        };
    }, [isCameraOn]);

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                videoRef.current.srcObject = stream;
            })
            .catch(error => {
                console.error('Error accessing camera:', error);
            });
    };

    const stopCamera = () => {
        const stream = videoRef.current?.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => {
                track.stop();
            });
            videoRef.current.srcObject = null;
        }
    };


    return (
        <div className='bg-lime-300 m-4 p4 rounded-xl w-100'>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%', padding: '20px' }}>
                {isCameraOn ? (
                    <div>
                        <video
                            ref={videoRef}
                            autoPlay
                            style={{ width: '100%', height: '300px', borderRadius: '30px' }}
                        />
                    </div>
                ) : (
                    <div
                        style={{ width: '100%', height: '300px', borderRadius: '30px', }}
                    >
                        Preview is not available
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', 'position': 'relative', 'alignItems': 'center', }}>
                <button
                    onClick={toggleCamera}
                    className='camera-btn text-black'
                    style={{ 'position': 'absolute', 'bottom': '40%', fontSize: '50px' }}
                >
                    {isCameraOn ?
                        <i className='bx bxs-video-off'></i>
                        :
                        <i className='bx bxs-video'></i>
                    }
                </button>


            </div>
        </div>
    );
};

export default UseRefCamera;
