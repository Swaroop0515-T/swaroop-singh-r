import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <section className="px-10 py-20">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>

      <ul className="space-y-3 text-gray-300">
        {certifications.map((cert, index) => (
          <li
            key={index}
            className="border border-gray-800 rounded-lg p-4 hover:bg-gray-900 transition"
          >
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}
