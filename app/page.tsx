"use client";
import { Robot } from "@/components/robot.jsx";
import { Button } from "@/components/ui/button";
import {
  Backdrop,
  Environment,
  Float,
  Ring,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />
      <ScrollControls pages={4} damping={0.1}>
        <Robot scale={1.5} rotation-y={-0.3} position={[0, -0.5, 0]} />
        <Sparkles size={2} color={"grey"} scale={[10, 10, 10]}></Sparkles>

        <Backdrop
          receiveShadow
          floor={20.5} // Stretches the floor segment, 0.25 by default
          segments={100} // Mesh-resolution, 20 by default
          scale={[50, 30, 10]}
          position={[4, -10, 0]}>
          <meshStandardMaterial color="#fff" />
        </Backdrop>

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Ring
            scale={3}
            position-z={-2.5}
            position-y={0}
            args={[0, 0.95, 60]}
            receiveShadow>
            <meshStandardMaterial color="#d4d4d8" />
          </Ring>
        </Float>

        <Scroll></Scroll>

        <Scroll html style={{ width: "100%" }}>
          <div className="absolute top-[42vh] inset-0 m-auto">
            <h1 className="text-[#cdcbca] font-extrabold text-[13em] text-center bg-gradient-to-r from-blue-300 via-slate-400 to-blue-900 bg-clip-text text-transparent ">
              PHANTOM
            </h1>
          </div>
          <div className="absolute top-[100vh] left-14 ">
            <h2 className="text-2xl font-bold">
              Le Robot de Poche Nouvelle Génération
            </h2>
            <p className="max-w-[400px] text-xl my-4">
              Doté d&apos;un design compact et futuriste inspiré par les
              avancées technologiques, ce petit robot est à la fois charmant et
              fonctionnel. Mais il ne se contente pas d&apos;être mignon : à
              l&apos;intérieur, il est équipé d&aspo;une intelligence
              artificielle avancée et de capteurs sophistiqués qui lui
              permettent d&apos;interagir avec son environnement et de fournir
              une assistance précieuse dans les tâches quotidiennes.
            </p>
            <Button>Read more</Button>
          </div>
          <div className="absolute top-[180vh] right-14">
            <div className=" ">
              <h2 className="max-w-[440px] text-2xl font-bold">
                Le Compagnon Polyvalent : Découvrez le Robot de Poche Nouvelle
                Génération
              </h2>
              <p className="max-w-[440px] text-xl my-4">
                Grâce à sa taille réduite et à sa mobilité agile, ce robot est
                parfaitement adapté pour naviguer dans les espaces restreints et
                effectuer une variété de tâches, que ce soit à la maison, au
                bureau ou en déplacement. Que ce soit pour vous aider dans vos
                tâches ménagères, vous tenir compagnie ou vous assister dans vos
                activités quotidiennes, ce robot polyvalent est prêt à devenir
                votre fidèle compagnon technologique.
              </p>
              <Button>Read more</Button>
            </div>
          </div>
          <h2 className="absolute top-[310vh] ml-20 text-2xl max-w-[440px] font-bold">
            Prêt à Adopter Votre Nouveau Compagnon Technologique ?
          </h2>
          <Button className="absolute top-[360vh] right-1/4 transform-[-50%,-50%] uppercase">
            Acheter maintenat !
          </Button>
          <div className="absolute inset-0 mx-auto top-[390vh]">
            <p className=" text-sm text-center">
              &copy; {new Date().getFullYear()} by Me 😊
            </p>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
