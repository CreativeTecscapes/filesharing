import { Contact, Locate, Phone } from 'lucide-react';
import React from 'react';

function ContactUs() {
  return (
    <>
      {/*
        Heads up! 👋
        Plugins:
        - @tailwindcss/forms
      */}

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-2xl">
                <Contact/>Contact Us
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-cyan-950">0151 475 4450</a>
                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* ... rest of your form fields ... */}
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  {/* ... radio button options ... */}
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-cyan-950 px-5 py-3 font-medium text-green-300 sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;

