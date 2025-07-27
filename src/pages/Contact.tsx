import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
 return (
  <div className="min-h-screen flex flex-col justify-center items-center px-6 py-10 text-gray-800">
    <h1 className="text-3xl font-bold mb-6 text-blue-600">Contact Me</h1>

    {/* Contact Info */}
    <div className="space-y-4 text-center text-lg">
      <p className="flex items-center justify-center gap-2">
        <FiMail className="text-blue-500" />
        <a href="mailto:chiomaozurub@gmail.com" className="text-blue-500 hover:underline">
          chiomaozurub@gmail.com
        </a>
      </p>
      <p className="flex items-center justify-center gap-2">
        <FiPhone className="text-blue-500" />
        <a href="tel:+2349065317752" className="text-blue-500 hover:underline">
          +2349065317752
        </a>
      </p>
      <p className="flex items-center justify-center gap-2">
        <FiLinkedin className="text-blue-500" />
        <a
          href="https://linkedin.com/in/chiomaozuru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          linkedin.com/in/chiomaozuru
        </a>
      </p>
      <p className="flex items-center justify-center gap-2">
        <FiGithub className="text-blue-500" />
        <a
          href="https://github.com/Chichibekee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          github.com/Chichibekee
        </a>
      </p>
    </div>

    {/* Contact Form using Formspree */}
    <div className="mt-12 w-full max-w-lg">
      <form
        action="https://formspree.io/f/xnnzdkrz"
        method="POST"
        className="bg-white shadow-lg p-8 rounded-lg space-y-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Leave a message</h2>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            required
            placeholder="Your message..."
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);
}
export default Contact;
