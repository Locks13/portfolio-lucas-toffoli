import { GrFacebook, GrTwitter, GrInstagram, GrLinkedin, GrGithub } from 'react-icons/gr';
import "./socilmedia.css"

export function FacebookIcon() {
    return (
        <>
            <a rel="noreferrer" target="_blank" className='socialMediaIcon' href="https://www.facebook.com/lucas.toffoli.33" >
                <GrFacebook />
            </a>
        </>
    )
}
export function InstagramIcon() {
    return (
        <>
            <a rel="noreferrer" target="_blank" className='socialMediaIcon' href="https://www.instagram.com/lockstoffoli/" >
                <GrInstagram />
            </a>
        </>
    )
}
export function TwitterIcon() {
    return (
        <>
            <a rel="noreferrer" target="_blank" className='socialMediaIcon' href="https://twitter.com/lktoffoli" >
                <GrTwitter />
            </a>
        </>
    )
}
export function LinkedinIcon() {
    return (
        <>
            <a rel="noreferrer" target="_blank" className='socialMediaIcon' href="https://www.linkedin.com/in/lucas-toffoli-079039a4/" >
                <GrLinkedin />
            </a>
        </>
    )
}
export function GitHubIcon() {
    return (
        <>
            <a rel="noreferrer" target="_blank" className='socialMediaIcon' href="https://github.com/Locks13/portfolio-lucas-toffoli" >
                <GrGithub />
            </a>
        </>
    )
}