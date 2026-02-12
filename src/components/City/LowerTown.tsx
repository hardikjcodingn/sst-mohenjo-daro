

const House = ({ position, rotation }: { position: [number, number, number], rotation?: [number, number, number] }) => {
    return (
        <group position={position} rotation={rotation}>
            {/* Main block */}
            <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial color="#d4c5a0" />
            </mesh>
            {/* Door */}
            <mesh position={[0, 0.5, 0.76]}>
                <planeGeometry args={[0.5, 1]} />
                <meshStandardMaterial color="#4a3c31" />
            </mesh>
            {/* Roof (flat) */}
            <mesh position={[0, 1.55, 0]} castShadow>
                <boxGeometry args={[1.6, 0.1, 1.6]} />
                <meshStandardMaterial color="#e6d8b8" />
            </mesh>
        </group>
    )
}

export const LowerTown = (props: any) => {
    const houses = []
    // Generate a grid of houses
    for (let x = -4; x <= 4; x++) {
        for (let z = -4; z <= 4; z++) {
            if (Math.abs(x) < 1 && Math.abs(z) < 1) continue; // Leave center empty
            if ((x + z) % 2 === 0) continue; // Checkerboard pattern for randomness
            houses.push(
                <House key={`${x}-${z}`} position={[x * 2.5, 0, z * 2.5]} rotation={[0, Math.random() > 0.5 ? Math.PI : 0, 0]} />
            )
        }
    }

    return (
        <group {...props}>
            <mesh rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#e0d2b4" />
            </mesh>
            {houses}

            {/* Drainage Drains */}
            <mesh position={[0, 0.05, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[1, 30]} />
                <meshStandardMaterial color="#8b7d6b" />
            </mesh>
            <mesh position={[0, 0.05, 0]} rotation-x={-Math.PI / 2} rotation-z={Math.PI / 2}>
                <planeGeometry args={[1, 30]} />
                <meshStandardMaterial color="#8b7d6b" />
            </mesh>
        </group>
    )
}
