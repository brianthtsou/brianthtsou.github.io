import spacePhoto from "../assets/laguna-torre-milky-way-1.jpg";
import ContactForm from "../components/ContactForm";

function ContactMe() {
  return (
    <div id="contactme" className="h-screen page contact-me-page">
      {/* Grid with two columns: one for header/form, one for the photo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 py-8">
        {/* Header and Form in the left column */}
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold">Contact Me</h1>
            <p className="text-custom-grey-text text-2xl">View LinkedIn</p>
          </div>

          {/* Form */}
          <ContactForm />
        </div>

        {/* Photo in the right column */}
        <div className="flex justify-center items-center">
          <img
            src={spacePhoto}
            alt="spacePhoto"
            className="rounded-md w-4/5 sm:w-full h-auto"
            style={{ width: "65%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
