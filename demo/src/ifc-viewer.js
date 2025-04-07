import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { IfcAPI } from 'web-ifc/web-ifc-api.js';

const IfcViewer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ifcApi = new IfcAPI();
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        const initIfcApi = async () => {
            await ifcApi.Init();
            containerRef.current.appendChild(renderer.domElement);
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.position.z = 5;

            // Load IFC model
            const ifcLoader = new IfcAPI();
            // Replace 'path/to/your/ifc-file.ifc' with the actual path to your IFC file
            const modelID = await ifcLoader.OpenModel(/* IFC data as a string or UInt8Array */, /* optional settings object */);

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            };

            animate();
        };

        initIfcApi();

        return () => {
            ifcApi.CloseModel();
            containerRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef}></div>;
};

export default IfcViewer;