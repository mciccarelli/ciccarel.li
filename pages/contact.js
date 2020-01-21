import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { Layout } from '../components';
import { useForm } from 'react-hook-form';
import { addDays } from '../lib/utils';
import { API_URL } from '../lib/constants';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    const req = await fetch(`${API_URL}/send`, {
      method: 'POST',
      body: JSON.stringify({
        ...data,
      }),
    });
    const res = await req.json();

    if (res.succces) {
      setFormSubmitted(true);
      e.target.reset();
    }
  };

  return (
    <Layout>
      <section className="flex flex-col items-start jusitfy-start max-w-4xl mx-auto p-8 md:px-16">
        <div className="flex flex-col w-full">
          <h2 className="mb-8">— Contact</h2>
          <p className="mb-8 text-xs leading-loose text-grey-dark max-w-xl">
            For project inquiries, Please use the form below — you can also
            email me at <a href="mailto:m@ciccarel.li">m@ciccarel.li</a> or
            connect on{' '}
            <a href="https://linkedin.com/in/mciccarelli">LinkedIn</a>,{' '}
            <a href="https://twitter.com/mciccarelli">Twitter</a>,{' '}
            <a href="https://instagram.com/minorvillain">Instagram</a> and{' '}
            <a href="https://github.com/mciccarelli">Github</a>.
          </p>
          <hr className="mb-8 border-grey-dark" />
          <form
            className="flex flex-col w-full mb-20"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row flex-wrap -mx-2">
              <div className="md:w-1/3 px-2 flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  name="name"
                  ref={register({ required: true, maxLength: 100 })}
                />
              </div>
              <div className="md:w-1/3 px-2 flex flex-col">
                <label htmlFor="name">Company</label>
                <input
                  type="text"
                  placeholder="Acme, Inc."
                  name="company"
                  ref={register}
                />
              </div>
              <div className="md:w-1/3 px-2 flex flex-col">
                <label htmlFor="budget">Website</label>
                <input
                  type="text"
                  placeholder="www.acme.com"
                  name="website"
                  ref={register}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="jane@acme.com"
                  name="email"
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
              </div>
              <div className="w-full md:w-1/2 px-2 flex flex-col">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  placeholder="555-555-5555"
                  name="phone"
                  ref={register}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 md:w-1/4 px-2 flex flex-col">
                <label htmlFor="timeline">Start Date</label>
                <input
                  type="date"
                  placeholder={addDays(7)}
                  name="startDate"
                  ref={register}
                />
              </div>
              <div className="w-1/2 md:w-1/4 px-2 flex flex-col">
                <label htmlFor="timeline">End Date</label>
                <input
                  type="date"
                  placeholder={addDays(42)}
                  name="endDate"
                  ref={register}
                />
              </div>
              <div className="w-1/2 md:w-1/4 px-2 flex flex-col">
                <label htmlFor="budget">Budget</label>
                <input
                  type="text"
                  placeholder="$"
                  name="budget"
                  ref={register}
                />
              </div>
              <div className="w-1/2 md:w-1/4 px-2 flex flex-col">
                <label htmlFor="budget">Referred by</label>
                <input
                  type="text"
                  placeholder="LinkedIn"
                  name="referredBy"
                  ref={register}
                />
              </div>
            </div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Please (briefly) tell me more about your project."
              rows={10}
              ref={register}
            />
            <button type="submit" className="rounded shadow">
              Submit
            </button>
            {formSubmitted && (
              <p className="text-sm italic my-4">
                [!] Your message has been sent and I will respond as soon as
                possible. Thank you!
              </p>
            )}
            {errors.errorMessage && (
              <p className="text-sm italic my-4">
                [!] Error: {errors.errorMessage.message}
              </p>
            )}
          </form>
        </div>
      </section>
      <style jsx global>{`
        input,
        textarea {
          @apply .mb-4 .p-4 .text-sm .text-grey-light;
          background: transparent !important;
          border: 1px solid rgba(theme('colors.grey-dark'), 0.5);
        }

        input::placeholder,
        textarea::placeholder {
          @apply .text-grey-dark;
        }

        label {
          @apply .mb-2 .leading-loose .text-xs .uppercase .text-grey-dark;
        }

        button[type='submit'],
        input[type='submit'] {
          @apply .bg-purple-light .text-white .uppercase .mb-4 .p-6 .text-base .font-bold;
          border: none;
          letter-spacing: 10px;
          opacity: 0.85;
        }

        button[type='submit']:hover,
        input[type='submit']:hover {
          opacity: 1;
        }

        button[type='submit']:active,
        input[type='button']:active,
        input[type='submit']:active {
          transition: 0.3s all;
          transform: translateY(3px);
          border: 1px solid transparent;
          opacity: 0.8;
        }

        input:disabled {
          opacity: 0.4;
        }

        input[type='button']:hover {
          transition: 0.3s all;
        }

        button[type='submit'],
        input[type='button'],
        input[type='submit'] {
          -webkit-appearance: none;
        }
      `}</style>
    </Layout>
  );
};

export default Contact;
