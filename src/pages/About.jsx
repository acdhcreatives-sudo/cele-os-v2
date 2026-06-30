import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout
      title="👷 About the Developer"
      subtitle="The story behind CELE OS"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">

        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <img
            src="/monica-de-castro-professional-pic.png"
            alt="Monica De Castro"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-[#F57C00] shadow-xl"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#121212] mb-8">
          Welcome to CELE OS!
        </h2>

        {/* Content */}
        <div className="space-y-6 text-justify text-gray-700 leading-8">

          <p className="indent-8">
            I'm <strong className="text-[#F57C00]">Monica De Castro</strong>, a
            <strong> Civil Engineering graduate</strong>,
            <strong> researcher</strong>, and the
            <strong> developer behind CELE OS</strong>.
            As an aspiring engineer preparing for the
            <strong> March Civil Engineering Licensure Examination</strong>,
            I created this platform from a personal need for a
            <strong> structured, efficient, and data-driven review system</strong>.
          </p>

          <p className="indent-8">
            What started as a personal productivity tool has evolved into a
            collaborative learning platform designed to help fellow
            <strong> Civil Engineering graduates</strong> review with confidence,
            strengthen their understanding of engineering concepts, and approach
            the board examination with a clear strategy and organized workflow.
          </p>

          <p className="indent-8">
            My vision is to continuously expand
            <strong> CELE OS</strong> by providing
            <strong> high-yield review materials</strong>,
            specialized learning modules,
            engineering resources, and intelligent productivity features that
            will make board exam preparation more effective for future engineers.
          </p>

          <p className="indent-8 font-semibold text-[#0B3C5D] text-center pt-4">
            CELE OS is built by an aspirant, for aspirants.
            <br />
            Let's conquer the Civil Engineering Licensure Examination together.
            🚧
          </p>

        </div>

      </div>
    </PageLayout>
  );
}