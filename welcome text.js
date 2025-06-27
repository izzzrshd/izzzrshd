import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// Load a font (included with Three.js examples)
const loader = new FontLoader();

loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {

    // Create text geometry
    const textGeometry = new TextGeometry('Welcome!', {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
    });

    // Create material
    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    // Create mesh
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Position the text in front of the camera
    textMesh.position.set(-1.5, 1.6, -3); // adjust to fit your scene
    textMesh.castShadow = true;

    // Add to scene
    scene.add(textMesh);
});