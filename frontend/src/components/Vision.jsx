import { vision } from "../constants";

const Vision = () => {
  return (
    <div className="mt-20 px-6 sm:px-10 lg:px-20 tracking-wide py-10 lg:py-20 rounded-lg shadow-md">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center text-[#333] my-10 lg:my-20">
        Our Vision...
      </h2>
      <div className="text-lg sm:text-xl leading-relaxed text-justify text-[#555] max-w-4xl mx-auto">
        <p className="mb-6">
          Why do we think a technocrat is essential in today’s markets? They
          help businesses and organizations work faster, better, and smarter in
          all scopes of science and management. We should always improvise so
          that it benefits and helps people in the long run. In this world where
          everything constantly changes, adapting to how the world works both
          from the science and government perspectives is incredibly important
          and valuable to a technocrat and society.
        </p>
        <p className="mb-6">
          A technocrat can see opportunities for improvement that others can’t
          see. They use data, databases, and other methods to make better
          decisions while considering their impact on the political as well as
          technical view of their role. In essence, we make a huge difference in
          a business or industry by providing a new perspective that a science
          person or manager wouldn’t know or think of. Our idea would be to
          create lasting value to make a successful impression and better
          decisions for ourselves and the business.
        </p>
        <p className="mb-6">
          Technocrats are impressive at identifying the areas for improvement
          that are often overlooked. A technocrat can distinguish the mistakes
          that a science or a governmental perspective would make and come up
          with better solutions. Technocrats provide a unique view of a problem
          or a solution that a scientist or a manager could overlook; these
          solutions always prove to be useful for the betterment of a business
          or organization.
        </p>
        <h3 className="text-2xl font-semibold mt-10 mb-6 text-[#333]">
          How Can Technocrats Change Society?
        </h3>
        <p className="mb-6">
          Technocrats are individuals who have expertise in the fields of
          technology, engineering, and scientific knowledge and have immense
          potential to transform societies in ways that have a significant
          impact in the long run and bring about positive change. They are
          individuals who strive to make a difference and improve our society.
          They achieve their goals in various ways:
        </p>
        <ul className="list-disc list-inside space-y-4 mb-6">
          <li>
            <strong>Technical Advancement and Progress:</strong> Technocrats
            introduce new or improve existing technologies to enhance
            lifestyles, education, healthcare, etc. They develop eco-friendly
            solutions that lead to a sustainable and equitable society.
          </li>
          <li>
            <strong>Formulating Policies:</strong> Technocrats use data and
            guidelines to make informed and evidence-based policies for
            society's betterment.
          </li>
          <li>
            <strong>Global Challenges:</strong> Technocrats address global
            challenges, including environmental and economic issues.
          </li>
          <li>
            <strong>Enhancing Education and Skills:</strong> They provide
            resources to enhance education and build a skilled workforce, which
            drives positive societal change.
          </li>
          <li>
            <strong>Sustainable Development:</strong> Technocrats ensure
            sustainability, crucial for economic growth and future generations.
          </li>
        </ul>
        <p className="mb-6">
          Thus, we can conclude that technocrats are indispensable for a strong
          and progressive society. Their decision-making skills and logical
          thinking significantly shape policies and culture. With the advent of
          the "Technocrats" club, we aim to unite individuals with knowledge,
          expertise, and solutions, positively impacting businesses, industries,
          and communities.
        </p>
      </div>

      {/* <div className="flex flex-wrap justify-center">
        {vision.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Vision;
