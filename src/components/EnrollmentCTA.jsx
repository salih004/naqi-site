export default function EnrollmentCTA() {
  return (
    <section id="apply" className="py-24 text-center">
      <h2 className="text-3xl text-gold font-bold mb-6">
        Register to Start your Journey!
      </h2>
      <p className="mb-8">
        We’re excited to have you join us! Your registration will be carefully reviewed to guide you into the track that best fits your Qur’anic journey.
      </p>

      {/* Google Form embedded directly */}
      <div className="w-full max-w-3xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
        <iframe
          src="https://forms.gle/XaL3TuzsVstFppGu7"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}
