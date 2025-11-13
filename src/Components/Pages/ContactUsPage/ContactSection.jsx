import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Dots } from "../../SvgContainer/SvgContainer";
import {  MoonLoader } from "react-spinners";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const publicId = import.meta.env.VITE_PUBLIC_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;

  const onSubmit = async data => {
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        publicId
      );

      toast.success("Message sent successfully! ", {
        style: {
          borderRadius: "10px",
          background: "#1a1a1a",
          color: "#fff",
        },
      });
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again ", {
        style: {
          borderRadius: "10px",
          background: "#1a1a1a",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section className="h-auto w-full pt-[120px] pb-20 lg:py-[150px] relative">
        <div className="container flex flex-col items-center lg:items-start gap-y-10 2xl:flex-row w-full justify-between">
          <div className="relative h-auto flex justify-start items-start">
            <h2 className="relative text-[42px] sm:text-[64px] xl:text-[80px] 2xl:text-[100px] 3xl:text-[136px] font-[590] text-[#FFFFFF66] leading-[120%]">
              Connect <br className="hidden 2xl:block" />{" "}
              <span className="text-white">with</span> Us.
            </h2>
            <div className="absolute bottom-0 right-0 mb-[-120px]">
              <Dots />
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-8 w-full max-w-[563px]"
          >
            <div className="flex flex-col gap-y-4">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="border text-base p-4 lg:p-6 text-primary-gray border-solid border-[#323232] outline-none rounded-2xl bg-transparent"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="border text-base p-4 lg:p-6 text-primary-gray border-solid border-[#323232] outline-none rounded-2xl bg-transparent"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}

              <input
                type="text"
                placeholder="Phone"
                {...register("phone", { required: "Phone number is required" })}
                className="border text-base p-4 lg:p-6 text-primary-gray border-solid border-[#323232] outline-none rounded-2xl bg-transparent"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}

              <textarea
                placeholder="Your message"
                {...register("message", { required: "Message is required" })}
                className="border min-h-[220px] text-base p-4 lg:p-6 text-primary-gray border-solid border-[#323232] outline-none rounded-2xl bg-transparent"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`primary-btn transition-all flex! items-center! justify-center! `}
            >
              {isSubmitting ? (
                <MoonLoader  size={22} color="#0ebdf7" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
