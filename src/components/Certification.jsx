import { certification } from '../data/Certification'

export const Certification = () => {
    return (
        <div className="m-auto text-gray-500 mb-8  text-center">
            <div className="mb-7">
                <h2 className="animate__animated animate__zoomIn mb-4 text-3xl text-gray-900 font-bold md:text-4xl">
                    Certificaciones
                </h2>
                <p className="animate__animated animate__zoomIn text-gray-600 lg:w-8/12 lg:mx-auto text-xl">
                    Algunos de los cursos que te tomado para mejorar mis habilidades
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-auto lg:w-full">
                {
                    certification.map( (cert ) => (
                    <div key={cert.id} className="group bg-white rounded-xl px-8 space-y-1 text-center hover:shadow-xl shadow-lg py-2">
                        <h3 className="animate__animated animate__bounce text-xl font-semibold text-gray-800">
                            { cert.course }
                        </h3>
                        <h1 className='animate__animated animate__bounce text-lg'>
                            { cert.transmitter }
                        </h1>
                    </div>
                    ))
                }
            </div>
        </div>                          
    )
}
