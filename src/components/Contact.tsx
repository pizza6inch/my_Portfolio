import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import BigPizzaCanvas from "./canvas/BigPizzaCanvas.tsx";

import { useLanguage } from "./LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e as ChangeEvent;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ewan",
          from_email: form.email,
          to_email: "pizza6inch@gmail.com",
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: Error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <section id="contact" className="w-11/12 lg:w-9/12 m-auto pt-16">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <div className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl">
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            {language === "en" ? "Contact" : "聯繫"}
          </h3>
          <p className="text-white mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {language === "en" ? "Get in touch" : "聯繫我"}
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-bold mb-4">
                {language === "en" ? "Your Name" : "你的名子"}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={
                  language === "en" ? "What's your good name?" : "怎麼稱呼你?"
                }
                className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-bold mb-4">
                {language === "en" ? "Your email" : "電子郵件"}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={
                  language === "en"
                    ? "What's your web address?"
                    : "你的電子郵件地址是?"
                }
                className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-bold mb-4">
                {language === "en" ? "Your Message" : "你的訊息"}
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={
                  language === "en" ? "What you want to say?" : "你想說什麼呢?"
                }
                className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-slate-800 hover:bg-[#EE534F] transition-colors  py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {language === "en"
                ? loading
                  ? "Sending..."
                  : "Send"
                : loading
                ? "發送中..."
                : "發送"}
            </button>
          </form>
        </div>

        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <BigPizzaCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
