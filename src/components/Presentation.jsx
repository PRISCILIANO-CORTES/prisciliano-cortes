import { Typewriter } from './Typewriter';
import LogoReact from '../assets/icon/logo.svg';

export const Presentation = () => {
    return (
        <div className="lg:flex lg:gap-12 pt-24 md:pt-32 lg:pt-28">
            <div className="w-full lg:w-[60%] text-center mx-auto lg:text-left">
                <h1 className="animate__animated animate__zoomInDown text-gray-900 font-bold text-4xl xl:text-6xl">
                    Hola, mi nombre es Prisciliano Cortés
                </h1>
                <Typewriter />

                <p className="mt-8 text-gray-700 text-xl">
                    Tengo experiencia como programador front-end y backend con las mejores prácticas y aprendizaje continuo para una mejor solución.
                </p>
            </div>

            <div className="w-full lg:w-[40%] block m-auto">
                <div className="react-container">
                    <div className="react-header">
                        <img src={LogoReact} className="react-logo h-96 mt-[-50px] mb-[-70px] md:mb-0 md:mt-0 lg:mt-[-60px]" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
