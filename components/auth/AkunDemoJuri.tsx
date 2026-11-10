"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { AKUN_DEMO } from "@/lib/akunDemo";

/**
 * Akun demo di halaman masuk: seluruh kotak email dan password adalah satu
 * target tekan. Menekannya mengisi kolom email dan kata sandi di bawahnya.
 *
 * Nilainya ditampilkan terang-terangan karena kata sandinya memang publik
 * (lihat lib/akunDemo.ts). Yang masuk tetap tombol "Masuk", supaya tidak ada
 * login yang terjadi tanpa disadari.
 *
 * Rupanya mengikuti kolom isian di bawahnya (putih, garis tipis, sudut sama),
 * hanya diberi rona hijau lembut dan garis putus-putus supaya terbaca sebagai
 * isian yang bisa ditekan, bukan kolom yang harus diketik.
 */
export function AkunDemoJuri({ onPakai }: { onPakai: (email: string, password: string) => void }) {
  const [terisi, setTerisi] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm font-medium text-foreground">Akun demo untuk juri</p>

      <button
        type="button"
        aria-label={`Akun demo untuk juri, email ${AKUN_DEMO.email}. Tekan untuk mengisi email dan password.`}
        onClick={() => {
          onPakai(AKUN_DEMO.email, AKUN_DEMO.password);
          setTerisi(true);
        }}
        className={cn(
          "group relative grid w-full cursor-pointer items-baseline gap-x-3 sm:grid-cols-[4.5rem_1fr]",
          "rounded-card border border-dashed px-3 py-2.5 pr-9 text-left text-sm transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring",
          terisi
            ? "border-solid border-primary bg-accent"
            : "border-success-border bg-accent/50 hover:border-primary/60 hover:bg-accent",
        )}
      >
        <span className="text-xs text-muted-foreground sm:text-sm">Email</span>
        <span className="mb-1.5 font-mono break-all text-foreground sm:mb-1">{AKUN_DEMO.email}</span>
        <span className="text-xs text-muted-foreground sm:text-sm">Password</span>
        <span className="font-mono text-foreground">{AKUN_DEMO.password}</span>

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "absolute top-1/2 right-3 size-4 -translate-y-1/2 text-primary transition-opacity",
            terisi ? "opacity-100" : "opacity-0",
          )}
        >
          <path d="M4 10.5l4 4 8-9" />
        </svg>
      </button>

      <span role="status" className="sr-only">
        {terisi ? "Email dan password terisi." : ""}
      </span>
    </div>
  );
}
