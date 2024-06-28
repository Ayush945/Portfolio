import React from 'react';
import githubLogo from '../Image/Github.png';
import linkedinLogo from '../Image/Linkedin.png';

const socialMedia = [
    { name: 'linkedin', logo: linkedinLogo, link: 'https://www.linkedin.com/in/ayush-thapa-106655300/' },
    { name: 'github', logo: githubLogo, link: 'https://github.com/Ayush945' }
];

function AboutMe() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-10 cursor-pointer bg-slate-100 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-center">About Me</h1>
            <div className="text-center max-w-md text-base sm:text-lg lg:text-xl">
                <p className="mb-3">
                    Ayush Thapa, Currently a student at The British College.
                </p>
                <p className="mb-3">
                    I'm passionate about understanding how things work and why they work.
                </p>
                <p className="mb-3">
                    When I'm not coding or studying, you'll often find me immersed in the captivating world of crime thriller movies.
                </p>
                <p className="mb-3">
                    There's something about the suspense and mystery that draws me in.
                </p>
                <p className="mb-3">
                    Alternatively, I might be escaping into the realms of fantasy through the pages of a light novel, where imagination knows no bounds.
                </p>
            </div>
            <div className="flex justify-center mt-5 space-x-4 sm:space-x-6">
                {socialMedia.map((media, index) => (
                    <div key={index}>
                        <a href={media.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={media.logo}
                                alt={media.name}
                                className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-125 transition-transform duration-500"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutMe;
