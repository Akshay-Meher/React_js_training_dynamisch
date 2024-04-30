// FilePreviewModal.js
import React from 'react';
import './Modal.css';
import img2 from '../../Images/images/img2.jpg'

const FilePreviewModal = ({ file, onClose }) => {
    const renderFilePreview = () => {
        if (file) {
            const fileType = file.type.split('/')[0];
            console.log('fileType', fileType);
            console.log('previewUrl', file);
            switch (fileType) {
                case 'image':
                    return (
                        <img src={URL.createObjectURL(file)} alt={file.name} />
                    )
                case 'application':
                    // return <embed src={file.previewUrl} type={file.type} width="100%" height="100%" />;
                    return (
                        <iframe
                            src={file}
                            title={file.name}
                            style={{ width: '100%', height: '400px', border: 'none' }}
                        />
                    );

                default:
                    return <p>Preview not available for this file type</p>;
            }
        } else {
            return <p>No file selected</p>;
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h1>File Preview</h1>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div className="file-preview">
                    {/* <img src={img2} alt="" /> */}

                    {renderFilePreview()}
                </div>
            </div>
        </div>
    );
};

export default FilePreviewModal;