import { ScrollControls, Scroll, Sky, Environment, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { GreatBath } from './City/GreatBath'
import { Citadel } from './City/Citadel'
import { LowerTown } from './City/LowerTown'
import { Overlay } from './Overlay'
import * as THREE from 'three'

const CameraController = () => {
    const scroll = useScroll()

    useFrame((state) => {
        const offset = scroll.offset // 0 to 1

        // Calculate camera position based on scroll
        // Start: [0, 5, 10] -> looking at Great Bath
        // Mid 1: Move to look at Great Bath closer
        // Mid 2: Move to Citadel [0, 8, -20]
        // End: Move to Lower Town [0, 5, -50]

        const targetPos = new THREE.Vector3(0, 5, 10)
        const targetLookAt = new THREE.Vector3(0, 0, 0)

        if (offset < 0.25) {
            // Great Bath segment
            targetPos.set(0, 5 + offset * 5, 10 + offset * 5)
            targetLookAt.set(0, 0, 0)
        } else if (offset < 0.5) {
            // Move to Citadel
            // range 0.25 -> 0.5
            const t = (offset - 0.25) * 4
            targetPos.set(0, 6, -20 * t)
            targetLookAt.set(0, 2, -30 * t)
        } else if (offset < 0.75) {
            // Citadel to Lower Town
            const t = (offset - 0.5) * 4
            targetPos.set(10 * t, 8 - t * 3, -20 - 20 * t)
            targetLookAt.set(0, 0, -40 - 10 * t)
        } else {
            // Lower Town flyover
            const t = (offset - 0.75) * 4
            targetPos.set(10 - 10 * t, 5, -40 - 20 * t)
            targetLookAt.set(0, 0, -60)
        }

        state.camera.position.lerp(targetPos, 0.1)
        state.camera.lookAt(targetLookAt)
    })
    return null
}

export const Experience = () => {
    return (
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            {/* Environment */}
            <Sky sunPosition={[10, 10, 0]} turbidity={0.5} rayleigh={0.5} mieCoefficient={0.005} mieDirectionalG={0.8} />
            <Environment preset="city" />

            <ScrollControls pages={6} damping={0.3}>
                <CameraController />
                <Scroll>
                    <GreatBath position={[0, 0, 0]} />
                    <Citadel position={[0, 0, -30]} rotation={[0, -Math.PI / 4, 0]} />
                    <LowerTown position={[0, -1, -60]} />
                </Scroll>
                <Scroll html>
                    <Overlay />
                </Scroll>
            </ScrollControls>
        </Canvas>
    )
}
