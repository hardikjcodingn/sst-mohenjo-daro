

export const GreatBath = (props: any) => {
    return (
        <group {...props}>
            {/* Base Platform */}
            <mesh position={[0, -0.5, 0]} receiveShadow>
                <boxGeometry args={[12, 1, 16]} />
                <meshStandardMaterial color="#c2b280" />
            </mesh>

            {/* The Pool Water */}
            <mesh position={[0, 0.1, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[6, 10]} />
                <meshStandardMaterial color="#4fa4a5" opacity={0.8} transparent />
            </mesh>

            {/* Pool Basin Depth (simulated) */}
            <mesh position={[0, -0.4, 0]}>
                <boxGeometry args={[6, 0.8, 10]} />
                <meshStandardMaterial color="#a09060" />
            </mesh>

            {/* Pillars / Colonnade surrounding the bath */}
            {Array.from({ length: 8 }).map((_, i) => (
                <group key={i}>
                    {/* Left side pillars */}
                    <mesh position={[-4, 1, -6 + i * 1.8]} castShadow>
                        <boxGeometry args={[0.5, 2, 0.5]} />
                        <meshStandardMaterial color="#dcd0b0" />
                    </mesh>
                    {/* Right side pillars */}
                    <mesh position={[4, 1, -6 + i * 1.8]} castShadow>
                        <boxGeometry args={[0.5, 2, 0.5]} />
                        <meshStandardMaterial color="#dcd0b0" />
                    </mesh>
                </group>
            ))}

            {/* Surrounding Walls */}
            <mesh position={[-5.5, 1, 0]} castShadow>
                <boxGeometry args={[1, 2, 16]} />
                <meshStandardMaterial color="#c2b280" />
            </mesh>
            <mesh position={[5.5, 1, 0]} castShadow>
                <boxGeometry args={[1, 2, 16]} />
                <meshStandardMaterial color="#c2b280" />
            </mesh>
            <mesh position={[0, 1, -7.5]} castShadow>
                <boxGeometry args={[10, 2, 1]} />
                <meshStandardMaterial color="#c2b280" />
            </mesh>
            <mesh position={[0, 1, 7.5]} castShadow>
                <boxGeometry args={[10, 2, 1]} />
                <meshStandardMaterial color="#c2b280" />
            </mesh>

        </group>
    )
}
