export function ShapeIcon() {
    return (
        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                    <stop id="stop1" stopColor="rgba(148, 223, 230, 0.38)" offset="0%" />
                    <stop id="stop2" stopColor="rgba(148, 223, 230, 0.88)" offset="100%" />
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient)"
                d="M19.4,-19.9C26.7,-16.9,35.2,-12.3,38.6,-5.1C42,2.2,40.2,12.2,34.9,19.1C29.7,26,21,29.9,11.9,33.7C2.8,37.4,-6.8,41.1,-13.2,38C-19.7,34.9,-23,25.1,-24.7,16.8C-26.4,8.6,-26.3,2,-24.9,-4C-23.4,-10,-20.4,-15.4,-16,-18.9C-11.6,-22.4,-5.8,-24,0.1,-24.1C6,-24.2,12.1,-22.9,19.4,-19.9Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth={0}
                style={{ transition: 'all 0.3s ease 0s' }}
            />
        </svg>
    );
}
