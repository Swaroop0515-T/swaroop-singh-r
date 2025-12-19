import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-10 py-24 bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for RPA opportunities, collaborations,
          or automation discussions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="border border-gray-800 rounded-xl p-6 hover:bg-gray-900 transition">
            <Mail className="text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400 break-all">
              swaroop0515@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="border border-gray-800 rounded-xl p-6 hover:bg-gray-900 transition">
            <Phone className="text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">
              +91 76767 05762
            </p>
          </div>

          {/* LinkedIn */}
          <div className="border border-gray-800 rounded-xl p-6 hover:bg-gray-900 transition">
            <Linkedin className="text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/swaroop-singh-r-8aa14513a"
              target="_blank"
              className="text-blue-400 underline"
            >
              View Profile
            </a>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-16 text-sm">
          © {new Date().getFullYear()} Swaroop Singh R
        </p>
      </div>
    </section>
  );
}
