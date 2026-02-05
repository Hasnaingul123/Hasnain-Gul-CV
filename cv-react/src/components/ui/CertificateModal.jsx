import { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Certificate Modal Component - Displays certificates in a lightbox
 */
const CertificateModal = ({ isOpen, onClose, certificateImage, certificateTitle }) => {
    // Close modal on ESC key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <i className="fas fa-certificate"></i>
                        {certificateTitle}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-white hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:rotate-90"
                        aria-label="Close modal"
                    >
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                </div>

                {/* Certificate Image */}
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <img
                            src={certificateImage}
                            alt={certificateTitle}
                            className="w-full h-auto object-contain max-h-[70vh]"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
                    <a
                        href={certificateImage}
                        download
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                        <i className="fas fa-download"></i>
                        Download Certificate
                    </a>
                    <button
                        onClick={onClose}
                        className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

CertificateModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    certificateImage: PropTypes.string,
    certificateTitle: PropTypes.string
};

export default CertificateModal;
