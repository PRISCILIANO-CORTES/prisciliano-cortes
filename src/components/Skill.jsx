import { skill } from "../data/Skill"

export const Skill = () => {
    return (
        <div className="mb-14 mt-14 text-center mx-auto">
            <div className="mb-16">
                <h2 className="animate__animated animate__zoomIn mb-4 text-3xl text-gray-900 font-bold md:text-4xl">
                    Habilidades
                </h2>
                <p className="animate__animated animate__zoomIn text-gray-600 lg:w-8/12 lg:mx-auto text-xl">
                    En mi aprendizaje he empleado las siguientes herramientas
                </p>
            </div>
            
            <div className="grid gap-28 md:gap-12 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {
                    skill.map( (skill) => (
                        <div key={skill.id} className="space-y-1 group">
                            <div className="content w-20 h-20 -mt-8 mx-auto">
                                <img 
                                    className="w-full h-full object-fill scale-125 mx-auto transition duration-300 group-hover:scale-[1.4]" 
                                    src={ skill.link } 
                                    alt="skill" 
                                    loading="lazy" 
                                />
                            </div>
                            <div className="space-y-4 text-center">
                                <div className="block w-max mx-auto text-blue-600"> 
                                    { skill.name }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>                     
    )
}
