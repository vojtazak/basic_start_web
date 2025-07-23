import { useState } from 'react';

const ContactSection = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const formData = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      message: data.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        form.reset();
      } else {
        setStatus('❌ Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('⚠️ Error sending message.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Combined bubble card */}
        <div className="p-8 rounded-2xl shadow-lg border border-gray-200 bg-white flex flex-col md:flex-row gap-20">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-extrabold text-gray-900">Contact Us</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
              {status && (
                <p className="text-sm mt-2 text-center text-gray-700">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-700 text-sm space-y-3">
            <div>
              <p><strong>Email:</strong> contact@example.com</p>
              <p><strong>Phone:</strong> +123 456 7890</p>
              <p><strong>Location:</strong> Prague, Czechia</p>
            </div>
            <div className="pt-4 text-gray-600">
              <p>
                We&apos;d love to hear from you! Whether it&apos;s a question,
                feedback, or a potential collaboration — just drop a message
                and we’ll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;