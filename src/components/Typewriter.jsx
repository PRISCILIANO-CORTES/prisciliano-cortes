import TypeWriterEffect from 'react-typewriter-effect';
import {isMobile} from 'react-device-detect';

export const Typewriter = () => {
    return (
        <h1 className="text-sky-500 pt-6 font-bold text-[28px] md:text-4xl">
            <TypeWriterEffect
                startDelay={2000}
                cursorColor="rgb(14 165 233)"
                textStyle={ 
                    isMobile ? { textAlign: "center" }
                    :
                    { textAlign: "left"}
                }
                multiText={[
                    'Soy un desarrollador web front-end.',
                    'Me apasiona el mundo de la programación.',
                    'Mi objetivo es construir software de calidad.',
                    'Propongo soluciones a tus problemas y necesidades.',
                    'Garantizo una experiencia en el desarrollo web.'
                ]}
                multiTextDelay={2000}
                typeSpeed={50}
            />
        </h1>
    )
}