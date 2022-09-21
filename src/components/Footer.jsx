import React from 'react'

export const Footer = () => {
    return (
        <div className="bg-[#f9f9f9] rounded-lg shadow pb-8">
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <h1 className="text-center text-lg font-bold text-gray-900 md:text-3xl">
                @{new Date().getFullYear()} Prisciliano Cortés Cortés
            </h1>
        </div>
    )
}
