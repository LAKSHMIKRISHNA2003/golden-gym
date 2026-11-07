"use client";

import { useState, type FormEvent } from "react";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  requirement: string;
};

type Field = keyof FormValues;
type FormStatus = "idle" | "submitting" | "success" | "unavailable" | "error";

const initialValues: FormValues = { name: "", phone: "", email: "", requirement: "" };

const fieldClassName =
  "w-full border border-white/12 bg-white/[0.025] px-4 py-3.5 text-sm text-[#f2f2f2] placeholder:text-white/32 transition-[border-color,box-shadow] duration-250 focus:border-[#fefc4c] focus:shadow-[0_0_0_1px_rgba(254,252,76,0.08)] focus:outline-none aria-invalid:border-[#c98585]";
const labelClassName = "mb-2 block text-[10px] font-semibold tracking-[0.14em] text-white/55 uppercase";
const errorClassName = "mt-2 text-xs leading-relaxed text-[#df9b9b]";

function validate(values: FormValues): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  const digits = values.phone.replace(/\D/g, "");

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.phone.trim() || !/^[+\d\s().-]+$/.test(values.phone) || digits.length < 7 || digits.length > 15) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.requirement.trim()) errors.requirement = "Please tell us your requirement.";

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateField = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "error" || status === "unavailable") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(initialValues) as Field[]).find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // Set NEXT_PUBLIC_ENQUIRY_ENDPOINT only when a real enquiry receiver is available.
    const endpoint = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
    if (!endpoint) {
      setStatus("unavailable");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          requirement: values.requirement.trim(),
        }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form border border-white/8 bg-[#121212]/60 p-6 sm:p-8 lg:p-10">
      {status === "success" ? (
        <div role="status" className="flex min-h-[420px] flex-col justify-center">
          <span aria-hidden="true" className="mb-6 flex size-11 items-center justify-center border border-[#fefc4c]/40 text-[#fefc4c]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
              <path d="m4 12 5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h3 className="font-heading text-5xl leading-none font-extrabold text-[#f2f2f2] uppercase">THANK YOU.</h3>
          <p className="mt-4 max-w-sm text-sm leading-[1.7] text-white/65">
            Your enquiry has been received. Our team will get in touch with you soon.
          </p>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit}>
          <h3 className="font-heading text-3xl leading-none font-bold text-[#f2f2f2] sm:text-4xl">Tell us what you need.</h3>

          <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClassName}>NAME <span aria-hidden="true">*</span></label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                placeholder="Your Name"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={fieldClassName}
              />
              {errors.name && <p id="contact-name-error" className={errorClassName}>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClassName}>PHONE NUMBER <span aria-hidden="true">*</span></label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                maxLength={30}
                placeholder="Phone Number"
                value={values.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                className={fieldClassName}
              />
              {errors.phone && <p id="contact-phone-error" className={errorClassName}>{errors.phone}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-email" className={labelClassName}>EMAIL <span aria-hidden="true">*</span></label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="Email Address"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={fieldClassName}
              />
              {errors.email && <p id="contact-email-error" className={errorClassName}>{errors.email}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-requirement" className={labelClassName}>REQUIREMENT <span aria-hidden="true">*</span></label>
              <textarea
                id="contact-requirement"
                name="requirement"
                required
                rows={5}
                maxLength={2000}
                placeholder="Tell us what you're looking for — membership, personal training, fitness goals, or any other requirement."
                value={values.requirement}
                onChange={(event) => updateField("requirement", event.target.value)}
                aria-invalid={Boolean(errors.requirement)}
                aria-describedby={errors.requirement ? "contact-requirement-error" : undefined}
                className={`${fieldClassName} min-h-36 resize-y`}
              />
              {errors.requirement && <p id="contact-requirement-error" className={errorClassName}>{errors.requirement}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-7 flex min-h-12 w-full items-center justify-between gap-4 border border-[#fefc4c] bg-[#fefc4c] px-6 py-3.5 text-xs font-bold tracking-[0.06em] text-[#080808] uppercase transition-colors duration-250 hover:border-[#f5f23e] hover:bg-[#f5f23e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fefc4c] disabled:cursor-wait disabled:opacity-65"
          >
            <span>{status === "submitting" ? "SENDING..." : "SEND ENQUIRY"}</span>
            <span aria-hidden="true">→</span>
          </button>

          {status === "unavailable" && (
            <p role="status" className="mt-4 text-xs leading-relaxed text-[#df9b9b]">
              Enquiry sending is not available yet. Your details have not been sent.
            </p>
          )}
          {status === "error" && (
            <p role="status" className="mt-4 text-xs leading-relaxed text-[#df9b9b]">
              We couldn&apos;t send your enquiry. Please try again later.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
