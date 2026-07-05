"use client"

import ReCAPTCHA from "react-google-recaptcha"

interface LazyRecaptchaProps {
  recaptchaRef: React.RefObject<ReCAPTCHA | null>
  onChange: (token: string | null) => void
}

export default function LazyRecaptcha({
  recaptchaRef,
  onChange,
}: LazyRecaptchaProps) {
  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      onChange={onChange}
    />
  )
}