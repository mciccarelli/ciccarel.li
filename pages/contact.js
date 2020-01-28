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
    e.preventDefault();
    const res = await fetch(`${API_URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const text = await res.text();

    if (res.status === 200) {
      setFormSubmitted(true);
      e.target.reset();
    }
  };

  return (
    <Layout>
      <section className="flex flex-col max-w-2xl">
        <h2 className="mb-8 text-lg md:text-2xl leading-normal md:leading-snug max-w-xl">
          For project inquiries, please use the form below. you can also email
          me at <a href="mailto:m@ciccarel.li">m@ciccarel.li</a>
        </h2>
        <hr className="mb-8 border-gray-500" />
        <form
          className="flex flex-col w-full"
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
              <input type="text" placeholder="$" name="budget" ref={register} />
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
            placeholder="E.g. I'd like build app for my business that allows users to customize and purchase t-shirts."
            rows={10}
            ref={register}
          />
          <button
            type="submit"
            className="bg-purple-light text-white text-base h-12"
          >
            Submit
          </button>
          {formSubmitted && (
            <p className="text-sm font-mono text-grey-dark my-8">
              [!] Your message has been sent — I'll get back to you soon.
            </p>
          )}
          {errors.errorMessage && (
            <p className="text-sm font-mono text-grey-dark my-8">
              [!] Error sending form. {errors.errorMessage.message}
            </p>
          )}
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
