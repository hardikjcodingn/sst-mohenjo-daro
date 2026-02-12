export const Citadel = (props: any) => {
    return (
        <group {...props}>
            {/* Raised Platform */}
            <mesh position={[0, 2, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[8, 10, 4, 8]} />
                <meshStandardMaterial color="#c2b280" />
            </mesh>

            {/* Main Building */}
            <mesh position={[0, 5, 0]} castShadow>
                <boxGeometry args={[5, 2, 5]} />
                <meshStandardMaterial color="#dcd0b0" />
            </mesh>

            {/* Granary structures */}
            <group position={[-3, 4, 3]}>
                <mesh castShadow position={[0, 0.5, 0]}>
                    <boxGeometry args={[2, 1, 4]} />
                    <meshStandardMaterial color="#b0a080" />
                </mesh>
                {/* Ventilation ducts */}
                <mesh position={[0.5, 0.5, 0]}>
                    <boxGeometry args={[0.2, 0.8, 4.1]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
            </group>

        </group>
    )
}
