// src/components/ui/InterventionMap.jsx
"use client"; // Obligatoire car Leaflet manipule le DOM direct
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import du CSS Leaflet CRUCIAL

// Configuration de la zone (À personnaliser)
// Pour trouver tes coordonnées : https://www.google.com/maps (clic droit > coordonnées)
const CENTER_POSITION = [42.40503798395047, -2.1216604305513815]; // Ex: Paris (Remplace par ta ville centrale)
const ZONE_RADIUS = 50000; // Rayon en mètres (ici 15km)

export default function InterventionMap() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {setIsMounted(true);}, []);

    // 2. Si on n'est pas encore monté côté client, on renvoie NULL
    // // Cela empêche Leaflet d'essayer d'accéder à 'window' ou au DOM trop tôt
    if (!isMounted) {
        return (
        <div className="h-full w-full bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-500 text-sm">
            Chargement de la carte...
            </div>
            );
        }
        
return (
    <div className="h-full w-full rounded-3xl overflow-hidden shadow-inner border-4 border-white/50 relative z-0">
      <MapContainer
        center={CENTER_POSITION}
        zoom={8}
        scrollWheelZoom={false} // UX : Empêche de zoomer la carte quand on scrolle la page
        className="h-full w-full"
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        {/* Fond de carte OpenStreetMap (Style clair "CartoDB Positron" pour faire pro) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* Dessin de la Zone */}
        <Circle
          center={CENTER_POSITION}
          radius={ZONE_RADIUS}
          pathOptions={{
            color: "#E07A5F", // Ta couleur Secondary
            fillColor: "#E07A5F",
            fillOpacity: 0.2, // Transparence pour voir les rues dessous
            weight: 2, // Epaisseur bordure
          }}
        >
          <Popup>
            <div className="text-center">
              <span className="font-bold text-primary">Zone d'intervention d'Atomic Dog</span>
              <br />
              Je me déplace dans un rayon de 50km environ autour de Alcanadre.
            </div>
          </Popup>
        </Circle>
      </MapContainer>
    </div>
  );
}