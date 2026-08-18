"use client";

import type { FormEvent } from "react";
import { homeContent } from "@/content/content";

type ProjectFormProps = {
  content: typeof homeContent.contact;
  recipient: string;
};

export function ProjectForm({ content, recipient }: ProjectFormProps) {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim() || "Non renseigné";
    const body = [
      `${content.fields.name.label} : ${value("name")}`,
      `${content.fields.email.label} : ${value("email")}`,
      `${content.fields.phone.label} : ${value("phone")}`,
      `${content.fields.projectType.label} : ${value("projectType")}`,
      `${content.fields.budget.label} : ${value("budget")}`,
      "",
      `${content.fields.message.label} :`,
      value("message"),
      "",
      "Message préparé depuis le site de démonstration Atelier Sillage.",
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(content.emailSubject)}&body=${encodeURIComponent(body)}`;
  }

  const { fields } = content;

  return (
    <form onSubmit={prepareEmail} className="grid gap-5" aria-describedby="form-privacy">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label={fields.name.label} name="name" type="text" placeholder={fields.name.placeholder} required={fields.name.required} autoComplete="name" />
        <FormField label={fields.email.label} name="email" type="email" placeholder={fields.email.placeholder} required={fields.email.required} autoComplete="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label={fields.phone.label} name="phone" type="tel" placeholder={fields.phone.placeholder} required={fields.phone.required} autoComplete="tel" />
        <SelectField label={fields.projectType.label} name="projectType" placeholder={fields.projectType.placeholder} options={fields.projectType.options} required={fields.projectType.required} />
      </div>
      <SelectField label={fields.budget.label} name="budget" placeholder={fields.budget.placeholder} options={fields.budget.options} required={fields.budget.required} />
      <label className="form-field">
        <span>{fields.message.label}{fields.message.required ? " *" : ""}</span>
        <textarea name="message" required={fields.message.required} rows={6} placeholder={fields.message.placeholder} />
      </label>
      <button type="submit" className="group mt-1 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-accent px-6 text-xs font-bold uppercase tracking-[0.13em] text-forest transition-colors hover:bg-accent-soft sm:w-auto">
        {content.submitLabel}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </button>
      <p id="form-privacy" className="text-xs leading-5 text-linen/60">{content.privacy}</p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
};

function FormField({ label, name, placeholder, required, ...props }: FieldProps & { type: string; autoComplete: string }) {
  return (
    <label className="form-field">
      <span>{label}{required ? " *" : ""}</span>
      <input name={name} placeholder={placeholder} required={required} {...props} />
    </label>
  );
}

function SelectField({ label, name, placeholder, options, required }: FieldProps & { options: readonly string[] }) {
  return (
    <label className="form-field">
      <span>{label}{required ? " *" : ""}</span>
      <select name={name} required={required} defaultValue="">
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
