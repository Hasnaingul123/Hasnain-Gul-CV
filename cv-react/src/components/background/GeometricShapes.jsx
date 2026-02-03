/**
 * Geometric shapes background component with natural colors
 */
const GeometricShapes = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none overflow-hidden">
            {/* Shape 1 - Sage */}
            <div
                className="floating-shape absolute w-[300px] h-[300px] bg-gradient-to-br from-sage-200/20 to-sage-300/20 backdrop-blur-sm"
                style={{
                    top: '10%',
                    left: '10%',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    animationDelay: '0s'
                }}
            />

            {/* Shape 2 - Terra */}
            <div
                className="floating-shape absolute w-[200px] h-[200px] bg-gradient-to-br from-terra-200/20 to-terra-300/20 rounded-full backdrop-blur-sm"
                style={{
                    top: '60%',
                    right: '15%',
                    animationDelay: '5s'
                }}
            />

            {/* Shape 3 - Sand */}
            <div
                className="floating-shape absolute w-[250px] h-[250px] bg-gradient-to-br from-sand-200/20 to-earth-300/20 backdrop-blur-sm"
                style={{
                    bottom: '10%',
                    left: '20%',
                    borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                    animationDelay: '10s'
                }}
            />
        </div>
    );
};

export default GeometricShapes;
