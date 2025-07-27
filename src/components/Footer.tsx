
import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-4 px-6 md:px-20 border-t-2 border-[#262626]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">

        {/* Name & Tagline */}
        <div className="text-[#eaf5f2] font-mono font-extrabold text-[20px] text-center md:text-left">
          <h1>Chioma</h1>
          <p className="text-sm text-gray-400">Frontend Developer | Blockchain Enthusiast</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-[#e7f0ee]">
          <a
            href="https://github.com/Chichibekee"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/chiomaozuru"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <SlSocialLinkedin size={24} />
          </a>
          <a
            href="mailto:chiomaozurub@gmail.com"
            title="Email"
          >
            <MdEmail size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Chioma. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
