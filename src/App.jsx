import { Skill } from "./components/Skill";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Presentation } from "./components/Presentation";
import { Certification } from "./components/Certification";
import 'animate.css';
import './App.css';

export const App = () => {
    return (
        <div className="w-full">
            <Navbar />
            
            <div className="mx-auto px-4 lg:px-20">
                <Presentation />
                <Experience />
                <Skill />
                <Certification />
            </div> 

            <Footer />
        </div>   
    )
}