import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section className="px-10 py-20" id="experience">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="space-y-8">
        {experience.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-700 pl-6 relative"
          >
            <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-purple-500 rounded-full"></div>

            <h3 className="text-xl font-semibold">
              {item.role}
            </h3>

            <p className="text-gray-400">
              {item.company} • {item.duration}
            </p>

            <p className="mt-2 text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
