import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/**
 * CafeMap
 *
 * Interactive map displaying the cafe's location.
 *
 * Built with React Leaflet and powered by OpenStreetMap tiles,
 * allowing visitors to zoom, pan, and inspect the surrounding area.
 *
 * Features:
 * - Responsive container with a fixed aspect ratio.
 * - Scroll wheel zoom interaction.
 * - Marker identifying the cafe's position.
 * - Popup containing location details.
 *
 * @returns {JSX.Element}
 */
const CafeMap = () => {
    return (
        /*
         * The wrapper controls the map dimensions, clipping,
         * border radius, and visual styling.
         */
        <div className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm aspect-[4/3] lg:aspect-video">
            <MapContainer
                center={[51.505, -0.09]} // Initial map center coordinates
                zoom={13} // Default zoom level
                scrollWheelZoom // Enable zooming via mouse wheel
                className="h-full w-full">
                {/* OpenStreetMap tile provider */}
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Cafe location marker */}
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Arlowe & Bean
                        <br />
                        124 Heirloom Lane
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default CafeMap;
