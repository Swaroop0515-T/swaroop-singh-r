import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section className="px-10 py-20" id="skills">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-800 p-4 text-center text-gray-300 hover:bg-gray-900 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
