
import { Contact } from './contact';

export const Footer = () => {
    return (
        <footer className="bg-[#b1b1b166] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
                <Contact/>
            </div>
            <div className="text-center text-gray-900 mt-4"> Crafted with<span className="mx-1 text-red-500">&hearts;</span>© 2024 Sanjai Ramasamy. All rights reserved</div>
        </div>
    </footer>
    );
  };
  