import img from "src/assets/images/img1.jpeg";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-white px-4 mt-[-150px]"
    >
      <div className="z-20 bg-darkTeal container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image Left */}
        <div className="w-full md:w-1/2">
          <img
            src={img} // ✅ Replace with your actual image path
            alt="About Us"
            className="shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 text-lightGrey">
            About Us
          </h2>
          <p className="text-grey text-sm p-2">
            Isabelle began her career at the age of 19 with the Ministry of
            National Defence, where she entered the field of strategic
            operations and official delegation support. Over the course of 17
            years, she served alongside 30 Heads of State, participating in
            high-level international engagements across diplomatic, defense, and
            executive contexts. As a licensed flight instructor with over 10,000
            flight hours, she demonstrated a deep command of aviation
            discipline, precision and mission-aligned execution. Over a span of
            17 years, Isabelle served under Romanian Presidents Ion Iliescu,
            Emil Constantinescu, Traian Basescu, Nicolae Vacaroiu involving
            other 26 Heads of State. As well, she was honoured with a Medal of
            Honour – flying troops to war zones and civil war – IRAQ and ANGOLA.
            Her involvement required strict compliance with diplomatic protocol,
            movement security and classified coordination standards functioning
            within frameworks of both political sensitivity and logistical
            complexity. Following her national service, Isabelle advanced as a
            political strategist responsible for developing a comprehensive and
            dynamic plan that aligns with the candidate's vision, members of the
            Senate and Chamber of Deputies of Romania. Campaign Strategy &
            Planning Political Positioning & Messaging Advisory to Political
            Leadership Stakeholder Coordination Supervise security,
            confidentiality, and reputational containment across events. She is
            the founder of Isabelle Airlines, a private aviation consultancy
            serving high-net-worth individuals, political figures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
