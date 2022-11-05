import { Experiences } from '../data/Experience'

export const Experience = () => {
    return (  
        <>
            <div className="mt-8 mb-8 text-center">
                <h2 className="animate__animated animate__zoomIn mb-4 text-3xl text-gray-900 font-bold md:text-4xl">
                    Experiencia
                </h2>
                <p className="animate__animated animate__zoomIn text-gray-600 lg:w-8/12 lg:mx-auto text-xl">
                    Durante el tiempo que llevo como programador web, he tenido algunos proyectos reales que han cubierto las necesidades de manera exitosa.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    Experiences.map( (experience) => (
                        <div key={experience.id} className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                            <div className="flex flex-col items-center pb-10">
                                <img 
                                    alt="experience" 
                                    src={experience.photo} 
                                    className="mb-3 w-[100px] h-[100px] hover:w-28 hover:h-28 rounded-full shadow-lg hover:shadow-2xl" 
                                />
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    { experience.date }
                                </span>
                                <h5 className="mb-1 text-xl text-center font-medium text-gray-900 dark:text-black">
                                    { experience.name}
                                </h5>
                                <h5 className="mb-1 text-lg text-center font-medium text-gray-900 dark:text-black">
                                    { experience.project}
                                </h5>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <div 
                                        onClick={() => window.open(experience.link, "_blank")}
                                        className="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        { experience.msg }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>             
    )
}
