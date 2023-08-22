import React, { useEffect } from 'react';

const DynamicHeatmap = () => {
    const dynamicData = [
        {
                lat: 12.9716,
                lng: 77.5946,
                value: 50,
                temperature: 75
            },
            {
                lat: 12.9717,
                lng: 77.5947,
                value: 30,
                temperature: 90
            },
            {
                lat: 12.9718,
                lng: 77.5948,
                value: 70,
                temperature: 110
            },
            {
                lat: 12.9719,
                lng: 77.5946,
                value: 25,
                temperature: 40
            },
            {
                lat: 12.9720,
                lng: 77.5949,
                value: 60,
                temperature: 70
            },
            {
                lat: 12.9721,
                lng: 77.5950,
                value: 40,
                temperature: 60
            },
            {
                lat: 12.9722,
                lng: 77.5951,
                value: 80,
                temperature: 130
            },
            {
                lat: 12.9723,
                lng: 77.5952,
                value: 20,
                temperature: 30
            },
            {
                lat: 12.9724,
                lng: 77.5953,
                value: 90,
                temperature: 120
            },
            {
                lat: 12.9725,
                lng: 77.5954,
                value: 10,
                temperature: 20
            },
            {
                lat: 12.9726,
                lng: 77.5955,
                value: 45,
                temperature: 80
            },
            {
                lat: 12.9927,
                lng: 77.5956,
                value: 70,
                temperature: 100
            },
            {
                lat: 12.9929,
                lng: 77.5959,
                value: 50,
                temperature: 70
            },
        // Your data array here...
    ];

    useEffect(() => {
        const mapOptions = {
            zoom: 16,
            center: new window.google.maps.LatLng(12.9716, 77.5946), // Bangalore
            mapTypeId: window.google.maps.MapTypeId.SATELLITE
        };

        const map = new window.google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        const heatMapData = dynamicData
            .filter(data => data.temperature > data.value)
            .map(data => ({
                location: new window.google.maps.LatLng(data.lat, data.lng),
                weight: 1
            }));

        const heatMap = new window.google.maps.visualization.HeatmapLayer({
            data: heatMapData,
            radius: 20 // Adjust the radius here (larger value for a bigger radius)
        });

        heatMap.setMap(map);
    }, []);

    return (
        <div>
            <div id="map-canvas" style={{ height: '100vh' }}></div>
        </div>
    );
};

export default DynamicHeatmap;
