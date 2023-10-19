import profile from '../Asset/profile.jpg'
import linkedin from '../Asset/Contact/LinkedIn.png'
import instagram from '../Asset/Contact/Instagram.png'
import github from '../Asset/Contact/GitHub.png'
import spotify from '../Asset/Contact/Spotify.png'
import email from '../Asset/Contact/Email.jpg'
import downloadpdf from '../Asset/Project/Download PDF.png'
import portfoliopdf from '../Asset/Project/Portfolio.pdf'
import speakgestures from '../Asset/Project/SpeakGestures/thumbnail.png'
import footlockre from '../Asset/Project/FootLockRE/thumbnail.png'
import bluejackpharmacy from '../Asset/Project/Bluejack Pharmacy/thumbnail.png'
import hefish from '../Asset/Project/HEFish/thumbnail.png'
import beebliotheca from '../Asset/Project/beebliotheca/thumbnail.png'
import binusrecursionfans from '../Asset/Project/BINUS Recursion/thumbnail.png'
import metrobaruoms from '../Asset/Project/Metro Baru OMS/thumbnail.png'
import piewpiewvr from '../Asset/Project/PiewPiew VR/thumbnail.png'

import { forwardRef, useRef, useState, useEffect } from "react";
import ParticleAnimation from '../Components/Particles'

// Main Page
export default function Home() {
    const about = useRef(null);
    const portfolio = useRef(null);

    const [navbarScroll, setNavbarScroll] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setNavbarScroll(true);
        }
        else {
            setNavbarScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    
        return () => {
          window.removeEventListener('scroll', changeNavbarColor);
        };
      }, []);

    return (
        <div className="flex flex-col-reverse">
            <Footer />
            <Slide3 ref={portfolio}/>
            <Slide2 ref={about}/>
            <Slide1 refTarget={about}/>
            <NavigationBar scrolled={navbarScroll} aboutRef={about} portfolioRef={portfolio} />
        </div>
    );
}

// Page Slides
const Slide1 = ({refTarget}) => {
    const scrollView = () => {
        refTarget?.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div id="tsparticles" className="w-screen h-screen bg-animated relative">
            
            <ParticleAnimation />

            <div className="w-full h-full flex md:flex-row flex-col lg:p-28 md:p-16 p-8 absolute justify-center">
                <div className="font-bebas m-auto basis-1/2 text-left text-white flex flex-col md:items-start items-center justify-center">
                    <h3 className="lg:text-4xl md:text-3xl text-2xl">Hello, I am</h3>
                    <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl md:text-start text-center">Calvin Anacia<br/>Suciawan</h1>
                </div>

                <div className="basis-1/2 m-auto flex flex-col items-end relative justify-center">
                        <button onClick={scrollView} className="absolute bg-white hover:mix-blend-difference rounded-full md:px-4 md:py-2 px-3 py-1 flex flex-row justify-between items-center">
                            <span className="font-bebas lg:pr-3 md:pr-2 pr-1 lg:text-2xl text-xl">LEARN MORE</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:w-8 lg:h-8 h-6 w-6">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        <div className=" rounded-full md:px-4 md:py-2 px-3 py-1 flex flex-row justify-between items-center">
                            <span className="font-bebas lg:pr-3 md:pr-2 pr-1 lg:text-2xl text-xl">LEARN MORE</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:w-8 lg:h-8 h-6 w-6">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                            </svg>
                        </div>
                </div>
                
            </div>

        </div>
    );
}

const Slide2 = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="w-screen bg-white xl:px-28 md:px-16 px-8 mt-16 flex md:flex-row flex-col-reverse items-center justify-center">
            
            <div className="md:basis-4/6 text-black flex flex-col xl:mr-20 md:mr-10">
                
                <span className="font-bebas lg:text-6xl md:text-5xl text-3xl">ABOUT ME</span>

                <p className="xl:text-lg lg:text-base text-sm text-justify text-gray-600">
                I'm Calvin Anacia Suciawan, an undergraduate at Bina Nusantara University,
                with a focus on Mobile Application and Technology.
                Experienced in developing Android, iOS, and Web that includes
                building user-friendly, efficient, and visually appealing apps.
                I'm deeply committed to expanding my knowledge in this field.
                </p>

                <span className="font-bebas xl:text-4xl lg:text-3xl text-2xl xl:mt-10 md:mt-5 mt-3">ACTIVITIES</span>

                <ul className="list-disc ml-5">

                    <ActivityList title="HIMTI Greater Jakarta" year="2022 - 2023"
                    description="Himpunan Mahasiswa Teknik Informatika is a community
                    for Computer Science students in Bina Nusantara University.
                    I was involved in Division III - Web Developer team and
                    took part in developing HIMTI Colaboration Web 2022." />

                    <ActivityList title="Friends Care Community" year="2023 - Now"
                    description="Sharing awareness about mental health and helping those
                    who are mentally in needs are part of our responsibilties as a
                    BINUS SASC's (Student Advisory and Support Center) subunit. I'm currently
                    positioned as a Creative Team member that create and manage the community's
                    social media posts." />

                    <ActivityList title="Ureeka" year="2023 - Now"
                    description="Developing coding skills are more than just taking part in classes.
                    By joining Ureeka, I'm glad to learn more and gain some experience in many
                    competitions. One of the experience was taken when I participated in
                    SOCS Hackhathon 2023." />

                </ul>

                <span className="font-bebas xl:text-4xl lg:text-3xl text-2xl xl:mt-10 md:mt-5 mt-3">CONTACTS</span>

                <div className="grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-6 grid-cols-5 place-items-center gap-3">

                    <ContactList thumbnail={instagram} url={"https://www.instagram.com/calvin_anacia/"} />
                    <ContactList thumbnail={github} url={"https://github.com/Nucizz/"} />
                    <ContactList thumbnail={linkedin} url={"https://www.linkedin.com/in/calvin-anacia/"} overrideBackground={"#047cbc"} />
                    <ContactList thumbnail={spotify} url={"https://open.spotify.com/user/n3si4bvrnkhzgp7wba8d8hazh?si=a2944adcc4c14fb0"} />
                    <ContactList thumbnail={email} url={"mailto:calvinanacia123@gmail.com"} />

                </div>

            </div>

            <div className="md:basis-2/6 h-full w-full md:mb-0 mb-5">
                <img alt="" src={profile} className="h-full w-full object-cover rounded-lg" />
            </div>

        </div>
    );
});

const Slide3 = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="w-screen xl:px-28 md:px-16 px-8 mt-16">

            <div className="font-bebas lg:text-6xl md:text-5xl text-3xl w-full text-left mb-4">MY WORK</div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-5">

                <ProjectList title="SpeakGestures" thumbnail={speakgestures} url={"https://github.com/Nucizz/speakgestures/"}
                description={"AI powered sign language (BISINDO) to text or TTS translator."}
                Framework={ () => { 
                        return (
                            <div className="z-30 grid lg:grid-cols-9 grid-cols-10 group-hover:-translate-y-3 transition duration:300">
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 28.9999L16.0433 15.9565L29 28.9999H3Z" fill="url(#paint0_linear_87_8183)"></path> <path d="M3 3H16.0433L3 16.75V3Z" fill="url(#paint1_linear_87_8183)"></path> <path d="M16.0433 3L3 16.7367V29L16.0433 15.9567L29 3H16.0433Z" fill="url(#paint2_linear_87_8183)"></path> <defs> <linearGradient id="paint0_linear_87_8183" x1="9.91557" y1="35.0726" x2="22.1997" y2="22.7889" gradientUnits="userSpaceOnUse"> <stop offset="0.097" stop-color="#0095D5"></stop> <stop offset="0.301" stop-color="#238AD9"></stop> <stop offset="0.621" stop-color="#557BDE"></stop> <stop offset="0.864" stop-color="#7472E2"></stop> <stop offset="1" stop-color="#806EE3"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8183" x1="4.8239" y1="8.22556" x2="11.9583" y2="1.09116" gradientUnits="userSpaceOnUse"> <stop offset="0.118" stop-color="#0095D5"></stop> <stop offset="0.418" stop-color="#3C83DC"></stop> <stop offset="0.696" stop-color="#6D74E1"></stop> <stop offset="0.833" stop-color="#806EE3"></stop> </linearGradient> <linearGradient id="paint2_linear_87_8183" x1="-1.37753" y1="26.9044" x2="22.8167" y2="2.71007" gradientUnits="userSpaceOnUse"> <stop offset="0.107" stop-color="#C757BC"></stop> <stop offset="0.214" stop-color="#D0609A"></stop> <stop offset="0.425" stop-color="#E1725C"></stop> <stop offset="0.605" stop-color="#EE7E2F"></stop> <stop offset="0.743" stop-color="#F58613"></stop> <stop offset="0.823" stop-color="#F88909"></stop> </linearGradient> </defs> </g></svg>
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" fill="#ED8E24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tensorflow</title> <path d="M29.399 14.959l-0.017-6.636-12.806-7.319v29.991l5.117-2.972v-8.438l3.864 2.234-0.023-5.771-3.841-2.194v-3.35l7.708 4.454zM2.619 8.322l12.806-7.318v29.991l-5.117-2.972v-17.519l-7.708 4.454 0.019-6.636z"></path> </g></svg>
                                <svg className="xl:h-7 xl:w-8 h-5 w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"></path> <defs> <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse"> <stop stop-color="#327EBD"></stop> <stop offset="1" stop-color="#1565A7"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFDA4B"></stop> <stop offset="1" stop-color="#F9C600"></stop> </linearGradient> </defs> </g></svg>
                            </div>
                        );
                    }
                } />
                
                <ProjectList title="FootLockRE" thumbnail={footlockre} url={"https://github.com/Nucizz/footlockre/"}
                description={"Native web design and wireframe for sneakers store catalog and informations."}
                Framework={ () => { 
                        return (
                            <div className="z-30 grid lg:grid-cols-9 grid-cols-10 group-hover:-translate-y-3 transition duration:300">
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF"></path> </g></svg>
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"></path> </g></svg>
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"></path> </g></svg>
                                <svg className="xl:h-7 xl:w-8 h-5 w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" fill="#FFCA28"></rect> <path d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z" fill="#3E3E3E"></path> <path d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z" fill="#3E3E3E"></path> </g></svg>
                            </div>
                        );
                    }
                } />

                <ProjectList title="Bluejack Pharmacy" thumbnail={bluejackpharmacy} url={"https://github.com/Nucizz/bluejackpharmacy"}
                description={"an Android application for your pharmacy needs."} Framework={ () => { 
                        return (
                            <div className="z-30 grid grid-cols-10 lg:grid-cols-9 group-hover:-translate-y-3 transition duration:300">
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5915 3.88444C13.6002 3.32107 14.7626 3 16 3C17.2374 3 18.3998 3.32107 19.4085 3.88444L20.1464 3.14645C20.3417 2.95118 20.6583 2.95118 20.8536 3.14645C21.0488 3.34171 21.0488 3.65829 20.8536 3.85355L20.2612 4.44595C21.9266 5.72558 23 7.73743 23 10H9C9 7.73743 10.0734 5.72558 11.7388 4.44595L11.1464 3.85355C10.9512 3.65829 10.9512 3.34171 11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645L12.5915 3.88444ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6C18.4477 6 18 6.44772 18 7C18 7.55228 18.4477 8 19 8Z" fill="#87C527"></path> <path d="M5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5V18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5V12.5Z" fill="#87C527"></path> <path d="M12 24V27.5C12 28.3284 12.6716 29 13.5 29C14.3284 29 15 28.3284 15 27.5V24H17V27.5C17 28.3284 17.6716 29 18.5 29C19.3284 29 20 28.3284 20 27.5V24H21C22.1046 24 23 23.1046 23 22V11H9V22C9 23.1046 9.89543 24 11 24H12Z" fill="#87C527"></path> <path d="M24 12.5C24 11.6716 24.6716 11 25.5 11C26.3284 11 27 11.6716 27 12.5V18.5C27 19.3284 26.3284 20 25.5 20C24.6716 20 24 19.3284 24 18.5V12.5Z" fill="#87C527"></path> </g></svg>
                            </div>
                        );
                    }
                } />

                <ProjectList title="HE Fish" thumbnail={hefish} url={"https://github.com/Nucizz/hefish_finalproject/"}
                description={"an Application for reading and posting fish articles collections."}Framework={ () => { 
                        return (
                            <div className="z-30 grid grid-cols-10 lg:grid-cols-9 group-hover:-translate-y-3 transition duration:300">
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_flutter</title><polyline points="15.383 18.316 18.744 15.042 27.093 15.042 19.697 22.438 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316" style={{fill: "#40d0fd"}}></polyline><polygon points="4.907 16.125 9.106 20.424 27.093 2.287 18.744 2.287 4.907 16.125" style={{fill:"#41d0fd", isolation:"isolate"}}></polygon><polygon points="11.176 22.479 15.435 26.675 19.697 22.438 15.383 18.316 11.176 22.479" style={{fill:"#1fbcfd"}}></polygon><polygon points="15.435 26.675 19.697 22.438 26.989 29.813 18.593 29.813 15.435 26.675" style={{fill:"#095a9d"}}></polygon><polygon points="15.435 26.675 19.406 25.354 18.068 24.057 15.435 26.675" style={{fill:"#0e5199"}}></polygon></g></svg>
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="#8CC84B"></path> <path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="#8CC84B"></path> </g></svg>
                            </div>
                        );
                    }
                } />

                <ProjectList title="beebliotheca" thumbnail={beebliotheca} url={"https://github.com/Nucizz/beebliotheca"}
                description={"an Application for BINUS Library & Knowledge Center's e-book collections."}Framework={ () => { 
                        return (
                            <div className="z-30 grid grid-cols-10 lg:grid-cols-9 grid-cols-8 group-hover:-translate-y-3 transition duration:300">
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5915 3.88444C13.6002 3.32107 14.7626 3 16 3C17.2374 3 18.3998 3.32107 19.4085 3.88444L20.1464 3.14645C20.3417 2.95118 20.6583 2.95118 20.8536 3.14645C21.0488 3.34171 21.0488 3.65829 20.8536 3.85355L20.2612 4.44595C21.9266 5.72558 23 7.73743 23 10H9C9 7.73743 10.0734 5.72558 11.7388 4.44595L11.1464 3.85355C10.9512 3.65829 10.9512 3.34171 11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645L12.5915 3.88444ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6C18.4477 6 18 6.44772 18 7C18 7.55228 18.4477 8 19 8Z" fill="#87C527"></path> <path d="M5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5V18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5V12.5Z" fill="#87C527"></path> <path d="M12 24V27.5C12 28.3284 12.6716 29 13.5 29C14.3284 29 15 28.3284 15 27.5V24H17V27.5C17 28.3284 17.6716 29 18.5 29C19.3284 29 20 28.3284 20 27.5V24H21C22.1046 24 23 23.1046 23 22V11H9V22C9 23.1046 9.89543 24 11 24H12Z" fill="#87C527"></path> <path d="M24 12.5C24 11.6716 24.6716 11 25.5 11C26.3284 11 27 11.6716 27 12.5V18.5C27 19.3284 26.3284 20 25.5 20C24.6716 20 24 19.3284 24 18.5V12.5Z" fill="#87C527"></path> </g></svg>
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_firebase</title><path d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z" style={{fill:"#ffc24a"}}></path><path d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z" style={{fill:"#ffa712"}}></path><path d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z" style={{fill:"#f4bd62"}}></path><path d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z" style={{fill:"#ffa50e"}}></path><polygon points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601" style={{fill:"#f6820c"}}></polygon><path d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0" style={{fill:"#fde068"}}></path><path d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z" style={{fill:"#fcca3f"}}></path><path d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z" style={{fill:"#eeab37"}}></path></g></svg>
                            </div>
                        );
                    }
                } />

                <ProjectList title="BINUS Recursion Fans" thumbnail={binusrecursionfans} url={"https://github.com/Nucizz/recursionteam"}
                description={"an Android application for BINUS Recursion sport team updates and schedules."} Framework={ () => { 
                        return (
                            <div className="z-30 grid grid-cols-10 lg:grid-cols-9 group-hover:-translate-y-3 transition duration:300">
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5915 3.88444C13.6002 3.32107 14.7626 3 16 3C17.2374 3 18.3998 3.32107 19.4085 3.88444L20.1464 3.14645C20.3417 2.95118 20.6583 2.95118 20.8536 3.14645C21.0488 3.34171 21.0488 3.65829 20.8536 3.85355L20.2612 4.44595C21.9266 5.72558 23 7.73743 23 10H9C9 7.73743 10.0734 5.72558 11.7388 4.44595L11.1464 3.85355C10.9512 3.65829 10.9512 3.34171 11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645L12.5915 3.88444ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6C18.4477 6 18 6.44772 18 7C18 7.55228 18.4477 8 19 8Z" fill="#87C527"></path> <path d="M5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5V18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5V12.5Z" fill="#87C527"></path> <path d="M12 24V27.5C12 28.3284 12.6716 29 13.5 29C14.3284 29 15 28.3284 15 27.5V24H17V27.5C17 28.3284 17.6716 29 18.5 29C19.3284 29 20 28.3284 20 27.5V24H21C22.1046 24 23 23.1046 23 22V11H9V22C9 23.1046 9.89543 24 11 24H12Z" fill="#87C527"></path> <path d="M24 12.5C24 11.6716 24.6716 11 25.5 11C26.3284 11 27 11.6716 27 12.5V18.5C27 19.3284 26.3284 20 25.5 20C24.6716 20 24 19.3284 24 18.5V12.5Z" fill="#87C527"></path> </g></svg>
                            </div>
                        );
                    }
                } />

            <ProjectList title="Metro Baru OMS" thumbnail={metrobaruoms} url={"https://github.com/Nucizz/metrobaru_oms/tree/main/MB_FE"}
                description={"an Application made for Metro Baru's order management."} Framework={ () => { 
                        return (
                            <div className="z-30 grid grid-cols-10 lg:grid-cols-9 group-hover:-translate-y-3 transition duration:300">
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_flutter</title><polyline points="15.383 18.316 18.744 15.042 27.093 15.042 19.697 22.438 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316" style={{fill: "#40d0fd"}}></polyline><polygon points="4.907 16.125 9.106 20.424 27.093 2.287 18.744 2.287 4.907 16.125" style={{fill:"#41d0fd", isolation:"isolate"}}></polygon><polygon points="11.176 22.479 15.435 26.675 19.697 22.438 15.383 18.316 11.176 22.479" style={{fill:"#1fbcfd"}}></polygon><polygon points="15.435 26.675 19.697 22.438 26.989 29.813 18.593 29.813 15.435 26.675" style={{fill:"#095a9d"}}></polygon><polygon points="15.435 26.675 19.406 25.354 18.068 24.057 15.435 26.675" style={{fill:"#0e5199"}}></polygon></g></svg>
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_firebase</title><path d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z" style={{fill:"#ffc24a"}}></path><path d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z" style={{fill:"#ffa712"}}></path><path d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z" style={{fill:"#f4bd62"}}></path><path d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z" style={{fill:"#ffa50e"}}></path><polygon points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601" style={{fill:"#f6820c"}}></polygon><path d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0" style={{fill:"#fde068"}}></path><path d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z" style={{fill:"#fcca3f"}}></path><path d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z" style={{fill:"#eeab37"}}></path></g></svg>
                            </div>
                        );
                    }
                } />

                <ProjectList title="PiewPiew VR" thumbnail={piewpiewvr} url={"https://binusianorg-my.sharepoint.com/personal/thessalonica_rosaline_binus_ac_id/_layouts/15/onedrive.aspx?csf=1&web=1&e=5umYPy&FolderCTID=0x012000AD7EA0659B147C43B5CF4DE76E5FE9B6&id=%2Fpersonal%2Fthessalonica%5Frosaline%5Fbinus%5Fac%5Fid%2FDocuments%2FSem%202%2FWT%2FFinal%20Project&view=0"}
                description={"a Virtual Reality of Aimlab clone just from your pocket."} Framework={ () => { 
                        return (
                            <div className="z-30 grid grid-cols-10 lg:grid-cols-9 group-hover:-translate-y-3 transition duration:300">
                                <svg className="xl:h-7 xl:w-7 h-5 w-5" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512"></circle> <path d="m665.4 276-192.8 50.2-28.5 49-57.9-.4L245 512l141.1 137.2 57.9-.4 28.6 48.9L665.4 748 717 560.6 687.7 512l29.3-48.5L665.4 276zM448.7 383.1l147.5-36.9-84.7 142.6H342.1l106.6-105.7zm0 257.8L342.1 535.2h169.3l84.7 142.6-147.4-36.9zm188.7 13.7L552.7 512l84.7-142.6L678.3 512l-40.9 142.6z" style={{fill: "#fff"}}></path> </g></svg>
                            </div>
                        );
                    }
                } />

            <a href={portfoliopdf} download="Calvin Anacia Suciawan's Portfolio" className="group bg-gray-800 hover:cursor-pointer relative flex justify-start items-end rounded-lg">
            
            <div className="w-full h-full overflow-hidden flex items-center justify-center rounded-lg">
                <img alt="" src={downloadpdf} className="object-contain transform transition duration-1000 group-hover:scale-125" />
            </div>

        </a>

            </div>
            
        </div>
    );
});

function Footer() {
    return(
        <footer className="w-screen xl:px-28 md:px-16 px-8 mt-16 md:mb-8 mb-4 flex md:flex-row flex-col md:gap-0 gap-3 justify-between items-center">

            <div className="basis-1/2 flex flex-col">
                <span className="w-full md:text-start text-center font-semibold lg:text-xl md:text-lg text-sm">Created by Calvin Anacia Suciawan</span>
                <span className="w-full md:text-start text-center text-gray-500 lg:text-base md:text-sm text-xs">using ReactJS and TailwindCSS</span>
            </div>

            <div className="basis-1/2 flex flex-col">
                <span className="w-full md:text-end text-center text-gray-500 lg:text-base md:text-sm text-xs">calvinanacia123@gmail.com</span>
                <span className="w-full md:text-end text-center text-gray-500 lg:text-base md:text-sm text-xs">Kalideres, Jakarta Barat, Indonesia</span>
            </div>

        </footer>
    );
}

function ProjectList({title, Framework, thumbnail, description, url}) {
    return (
        <a href={url} className="group bg-gray-800 hover:cursor-pointer relative flex justify-start items-end rounded-lg">
            
            <div className="w-full h-full overflow-hidden flex items-center justify-center rounded-lg">
                <img alt="" src={thumbnail} className="object-contain transform transition duration-1000 group-hover:scale-125" />
                <div className="bg-slate-950 w-full h-full absolute opacity-25 rounded-lg group-hover:bg-slate-500 transition duration:1000" />
            </div>

            <div className="w-full text-white p-8 absolute flex flex-col"> 
                <Framework />
                <span className="xl:text-3xl lg:text-2xl text-xl font-semibold z-30 group-hover:-translate-y-3 transition duration:300">{title}</span>
                <p className="text-gray-200 lg:text-base text-sm text-sm z-30 group-hover:-translate-y-3 transition duration:300">{description}</p>
                <div className="dark-shade-low z-20 rounded-lg" />
            </div>

        </a>
    );
}

function ActivityList({title, year, description}) {
    return (
        <li className="w-full md:mb-2">

            <div className="flex flex-row justify-between xl:text-2xl md:text-lg">
                <span className="font-medium">{title}</span>
                <span className="text-right">{year}</span>
            </div>

            <p className="xl:text-lg lg:text-base text-sm text-gray-600 font-normal text-justify md:mb-0 mb-2">{description}</p>

        </li>
    );
}

function NavigationBar({scrolled, portfolioRef, aboutRef}) {
    const portfolioView = () => {
        portfolioRef?.current.scrollIntoView({ behavior: "smooth" })
    }
    const aboutView = () => {
        aboutRef?.current.scrollIntoView({ behavior: "smooth" })
    }
    const homeView = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) 
    }

    return(
        <header className={"w-full flex flex-row justify-center items-center py-2 top-0 fixed z-50 " + (scrolled ? "bg-black" : "bg-transparent")}>
            <nav className={"flex flex-row md:gap-20 w-full justify-evenly md:justify-center text-white font-bebas md:text-lg text-base"}>
                <button onClick={homeView} className="hover:text-white/50 transition duration-300">Home</button>
                <button onClick={aboutView} className="hover:text-white/50 transition duration-300">About</button>
                <button onClick={portfolioView} className="hover:text-white/50 transition duration-300">Portfolio</button>
            </nav>
        </header>
    );
}

function ContactList({thumbnail, url, overrideBackground}) {
    return(
        <a href={url} className="group hover:cursor-pointer relative flex justify-start items-end rounded-lg" style={{backgroundColor: overrideBackground ?? "#00000000"}}>

            <div className="w-full h-full overflow-hidden flex items-center justify-center rounded-lg">
                <img alt="" src={thumbnail} className="object-contain transform transition duration-1000 group-hover:scale-125" />
            </div>

        </a>
    );
}
