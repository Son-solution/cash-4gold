"use client";

import { AnimatePresence, m } from "framer-motion";
import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useCalculator } from "@/components/providers/CalculatorProvider";
import { useMarket } from "@/components/providers/MarketProvider";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CONTACT_CATEGORIES, COMPANY } from "@/data/site";
import { calculateEstimate } from "@/lib/calculator";
import { ContactSubmitError, submitContactRequest, validateContact, type ContactErrors, type ContactField } from "@/lib/contact";
import { getMetal } from "@/lib/metals";
import { EASE, PRESS_SMALL, TRANSITION } from "@/lib/motion";
import { cn, formatEUR, formatWeight } from "@/lib/utils";
import type { MetalId } from "@/types/metal";

type Status = "idle" | "submitting" | "success" | "error";

const CATEGORY_FOR_METAL: Record<MetalId, (typeof CONTACT_CATEGORIES)[number]> = {
  gold: "Altgold & Schmuck",
  zahngold: "Zahngold",
  silber: "Silber",
  platin: "Platin / Palladium",
  palladium: "Platin / Palladium",
};

const inputClass =
  "h-[52px] w-full rounded-xl border bg-paper px-4 text-[16px] font-normal text-ink outline-none transition-[border-color,box-shadow,background-color] duration-200 ease-out-soft placeholder:text-faint focus:bg-white focus:border-gold focus:shadow-[0_0_0_4px_rgba(212,163,42,0.14)] md:h-[50px] md:text-[15px]";

function Field({
  id,
  label,
  error,
  valid,
  flash,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  valid?: boolean;
  flash?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[7px]">
      <label htmlFor={id} className="text-[13px] font-semibold text-body md:text-[12.5px]">
        {label}
      </label>
      <div className="relative">
        {children}
        {flash && (
          <m.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-xl bg-gold/15"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        )}
        <AnimatePresence>
          {valid && !error && (
            <m.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={TRANSITION.fast}
              className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-gold-deep"
              aria-hidden="true"
            >
              <Icon name="check" size={16} strokeWidth={2.2} />
            </m.span>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false}>
        {error && (
          <m.p
            id={`${id}-error`}
            key="error"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={TRANSITION.fast}
            className="m-0 overflow-hidden text-[12.5px] text-down"
          >
            {error}
          </m.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Offer request form with validation, prefill from the calculator and idle/submitting/success/error states. */
export function ContactForm() {
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    phone: `${uid}-phone`,
    weight: `${uid}-weight`,
    message: `${uid}-message`,
    consent: `${uid}-consent`,
  };
  const { offerDraft } = useCalculator();
  const { snapshot } = useMarket();

  const [values, setValues] = useState({ name: "", email: "", phone: "", weight: "", message: "", consent: false });
  const [categories, setCategories] = useState<string[]>(["Altgold & Schmuck"]);
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorKind, setErrorKind] = useState<ContactSubmitError["code"] | null>(null);
  const [flashToken, setFlashToken] = useState(0);
  const successRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Prefill from the calculator ("Unverbindliches Angebot anfragen").
  // State is adjusted during render when a new draft token arrives (no effect needed).
  const [draftToken, setDraftToken] = useState<number | null>(null);
  if (offerDraft && offerDraft.token !== draftToken) {
    const metal = getMetal(offerDraft.metal);
    const estimate = calculateEstimate(offerDraft, snapshot);
    const totalWeight = offerDraft.weight * offerDraft.pieces;
    const category = CATEGORY_FOR_METAL[offerDraft.metal];
    setDraftToken(offerDraft.token);
    setValues((v) => ({
      ...v,
      weight: totalWeight > 0 ? formatWeight(totalWeight) : v.weight,
      message:
        v.message ||
        `Wertrechner: ${metal.name} ${estimate.purityId}, ${formatWeight(offerDraft.weight)}${offerDraft.pieces > 1 ? ` × ${offerDraft.pieces} Stück` : ""} – geschätzt ${formatEUR(estimate.total)}.`,
    }));
    setCategories((c) => (c.includes(category) ? c : [...c, category]));
    setFlashToken(offerDraft.token);
  }

  const validateField = (field: ContactField, next = values) => {
    const all = validateContact(next);
    setErrors((e) => ({ ...e, [field]: all[field] }));
  };

  const set = <K extends keyof typeof values>(key: K, value: (typeof values)[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (key in touched && touched[key as ContactField]) validateField(key as ContactField, next);
  };

  const blur = (field: ContactField) => {
    setTouched((t) => ({ ...t, [field]: true }));
    validateField(field);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const all = validateContact(values);
    setErrors(all);
    setTouched({ name: true, email: true, phone: true, consent: true });
    const firstInvalid = (Object.keys(all) as ContactField[])[0];
    if (firstInvalid) {
      document.getElementById(ids[firstInvalid])?.focus();
      return;
    }
    setStatus("submitting");
    setErrorKind(null);
    const started = Date.now();
    try {
      const estimate = offerDraft ? calculateEstimate(offerDraft, snapshot) : null;
      await submitContactRequest({
        ...values,
        categories,
        estimate:
          offerDraft && estimate
            ? { metal: offerDraft.metal, purity: offerDraft.purity, weight: offerDraft.weight, pieces: offerDraft.pieces, total: estimate.total }
            : undefined,
      });
      await new Promise((r) => setTimeout(r, Math.max(0, 400 - (Date.now() - started))));
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (err) {
      await new Promise((r) => setTimeout(r, Math.max(0, 400 - (Date.now() - started))));
      setErrorKind(err instanceof ContactSubmitError ? err.code : "server");
      setStatus("error");
    }
  };

  const reset = () => {
    setValues({ name: "", email: "", phone: "", weight: "", message: "", consent: false });
    setTouched({});
    setErrors({});
    setStatus("idle");
  };

  const errorMessage =
    errorKind === "not_configured"
      ? "Das Anfrageformular ist noch nicht angebunden. Bitte rufen Sie uns an oder schreiben Sie eine E-Mail."
      : errorKind === "network"
        ? "Senden fehlgeschlagen – bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut."
        : "Senden fehlgeschlagen. Bitte erneut versuchen oder anrufen.";

  const submitting = status === "submitting";

  return (
    <m.div
      layout
      transition={{ layout: { duration: 0.4, ease: EASE.inOut } }}
      className="overflow-hidden rounded-[26px] border border-line-2 bg-white px-[18px] py-[22px] shadow-[0_30px_60px_rgba(60,45,15,0.12)] md:rounded-[28px] md:p-[30px] md:shadow-widget lg:rounded-[30px] lg:p-9"
    >
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <m.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE.inOut }}
            className="flex flex-col items-start gap-4 py-6"
            role="status"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-tint text-gold-deep">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <m.path
                  d="M4 12l5 5L20 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: EASE.out }}
                />
              </svg>
            </span>
            <h3 ref={successRef} tabIndex={-1} className="m-0 font-display text-[28px] leading-tight font-normal outline-none md:text-[32px]">
              Vielen Dank – wir melden uns persönlich.
            </h3>
            <p className="m-0 text-[15px] leading-[1.6] text-muted">
              Als Nächstes erhalten Sie eine Rückmeldung mit erster Einschätzung und auf Wunsch Ihr kostenloses, versichertes Versandpaket.
            </p>
            <p className="m-0 text-[14px] text-soft">
              Eilig? Rufen Sie uns an:{" "}
              <a href={COMPANY.phoneHref} className="font-semibold text-ink underline decoration-gold underline-offset-4">
                {COMPANY.phoneShort}
              </a>
            </p>
            <Button onClick={reset} variant="outline" size="sm">
              Neue Anfrage
            </Button>
          </m.div>
        ) : (
          <m.form
            key="form"
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 md:gap-[18px]"
            aria-describedby={status === "error" ? `${uid}-form-error` : undefined}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="flex flex-col gap-1">
                <h3 className="m-0 font-display text-[26px] leading-tight font-normal md:text-[30px]">Angebot anfordern</h3>
                <span className="text-[12.5px] text-soft md:text-[13px]">Kostenlos &amp; unverbindlich · * Pflichtfelder</span>
              </span>
              <span className="shrink-0 rounded-full border border-gold-border bg-gold-tint px-2.5 py-1 text-[11px] font-semibold text-gold-dark md:px-3 md:text-[12px]">
                ca. 2 Minuten
              </span>
            </div>

            <fieldset disabled={submitting} className="m-0 grid gap-3.5 border-0 p-0 md:grid-cols-2 md:gap-x-3.5 md:gap-y-3.5">
              <Field id={ids.name} label="Name *" error={touched.name ? errors.name : undefined} valid={touched.name && !!values.name}>
                <input
                  id={ids.name}
                  name="name"
                  autoComplete="name"
                  placeholder="Vor- und Nachname"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  onBlur={() => blur("name")}
                  aria-invalid={!!(touched.name && errors.name)}
                  aria-describedby={touched.name && errors.name ? `${ids.name}-error` : undefined}
                  aria-required="true"
                  className={cn(inputClass, touched.name && errors.name ? "border-down" : "border-line-3")}
                />
              </Field>
              <Field id={ids.email} label="E-Mail *" error={touched.email ? errors.email : undefined} valid={touched.email && !!values.email}>
                <input
                  id={ids.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@beispiel.de"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  onBlur={() => blur("email")}
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? `${ids.email}-error` : undefined}
                  aria-required="true"
                  className={cn(inputClass, touched.email && errors.email ? "border-down" : "border-line-3")}
                />
              </Field>
              <Field id={ids.phone} label="Telefon" error={touched.phone ? errors.phone : undefined}>
                <input
                  id={ids.phone}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Für Rückfragen (optional)"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onBlur={() => blur("phone")}
                  aria-invalid={!!(touched.phone && errors.phone)}
                  aria-describedby={touched.phone && errors.phone ? `${ids.phone}-error` : undefined}
                  className={cn(inputClass, touched.phone && errors.phone ? "border-down" : "border-line-3")}
                />
              </Field>
              <Field id={ids.weight} label="Ungefähres Gewicht" flash={flashToken > 0} key={`w-${flashToken}`}>
                <input
                  id={ids.weight}
                  name="weight"
                  inputMode="decimal"
                  placeholder="z. B. 40 g"
                  value={values.weight}
                  onChange={(e) => set("weight", e.target.value)}
                  className={cn(inputClass, "border-line-3")}
                />
              </Field>
            </fieldset>

            <fieldset disabled={submitting} className="m-0 flex flex-col gap-[9px] border-0 p-0">
              <legend className="mb-[9px] p-0 text-[13px] font-semibold text-body md:text-[12.5px]">Was dürfen wir für Sie ankaufen?</legend>
              <div className="flex flex-wrap gap-2">
                {CONTACT_CATEGORIES.map((c) => {
                  const on = categories.includes(c);
                  return (
                    <m.button
                      key={c}
                      type="button"
                      aria-pressed={on}
                      whileTap={PRESS_SMALL}
                      onClick={() => setCategories((cur) => (on ? cur.filter((x) => x !== c) : [...cur, c]))}
                      className={cn(
                        "inline-flex h-11 items-center gap-1.5 rounded-full border px-[15px] text-[14px] font-medium transition-colors duration-200 md:h-10 md:text-[13.5px]",
                        on ? "border-gold bg-gold-tint" : "border-line-3 bg-white hover:border-gold",
                      )}
                    >
                      {on && <Icon name="check" size={13} strokeWidth={2.2} className="text-gold-deep" />}
                      {c}
                    </m.button>
                  );
                })}
              </div>
            </fieldset>

            <div className="flex flex-col gap-[7px]">
              <label htmlFor={ids.message} className="text-[13px] font-semibold text-body md:text-[12.5px]">
                Nachricht
              </label>
              <div className="relative">
                <textarea
                  id={ids.message}
                  name="message"
                  rows={3}
                  disabled={submitting}
                  placeholder="z. B. 3 Ringe 585, eine Kette 750 …"
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  className={cn(inputClass, "h-auto resize-none border-line-3 py-3 md:py-3")}
                />
                {flashToken > 0 && (
                  <m.span
                    key={`m-${flashToken}`}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-xl bg-gold/15"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor={ids.consent} className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.5] text-muted md:text-[12.5px]">
                <input
                  id={ids.consent}
                  type="checkbox"
                  checked={values.consent}
                  disabled={submitting}
                  onChange={(e) => {
                    set("consent", e.target.checked);
                    setTouched((t) => ({ ...t, consent: true }));
                    validateField("consent", { ...values, consent: e.target.checked });
                  }}
                  aria-invalid={!!(touched.consent && errors.consent)}
                  aria-describedby={touched.consent && errors.consent ? `${ids.consent}-error` : undefined}
                  aria-required="true"
                  className="mt-px h-[22px] w-[22px] shrink-0 cursor-pointer accent-[#C99A1E] md:h-[18px] md:w-[18px]"
                />
                <span>
                  Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                  <a href="/datenschutz" className="underline decoration-line-strong underline-offset-2 hover:decoration-gold">
                    Datenschutzerklärung
                  </a>{" "}
                  zu. *
                </span>
              </label>
              <AnimatePresence initial={false}>
                {touched.consent && errors.consent && (
                  <m.p
                    id={`${ids.consent}-error`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={TRANSITION.fast}
                    className="m-0 overflow-hidden pl-[34px] text-[12.5px] text-down md:pl-[30px]"
                  >
                    {errors.consent}
                  </m.p>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence initial={false}>
              {status === "error" && (
                <m.div
                  id={`${uid}-form-error`}
                  role="alert"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: EASE.inOut }}
                  className="overflow-hidden"
                >
                  <div className="flex gap-3 rounded-xl border border-down/30 bg-down/5 px-4 py-3 text-[13.5px] leading-[1.5] text-ink">
                    <Icon name="alert" size={18} className="mt-0.5 shrink-0 text-down" />
                    <span>
                      {errorMessage}{" "}
                      <a href={COMPANY.phoneHref} className="font-semibold whitespace-nowrap underline decoration-gold underline-offset-2">
                        {COMPANY.phoneShort}
                      </a>{" "}
                      ·{" "}
                      <a href={COMPANY.emailHref} className="font-semibold underline decoration-gold underline-offset-2">
                        {COMPANY.email}
                      </a>
                    </span>
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            <Button type="submit" size="lg" fullWidth disabled={submitting} className="!h-[60px] md:!h-16" arrow={!submitting}>
              <AnimatePresence mode="wait" initial={false}>
                <m.span
                  key={submitting ? "sending" : "idle"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2.5"
                >
                  {submitting && <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-ink/25 border-t-ink" />}
                  {submitting ? "Wird gesendet …" : "Kostenloses Angebot anfordern"}
                </m.span>
              </AnimatePresence>
            </Button>
          </m.form>
        )}
      </AnimatePresence>
    </m.div>
  );
}
