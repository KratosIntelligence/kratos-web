"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center">
      <p className="mx-auto mb-4 inline-block rounded-full border px-3 py-1 text-xs opacity-80">
        AI-Powered Business Solutions
      </p>
      <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl">
        Transform your business with <span className="text-blue-400">Intelligent AI</span>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">
        Automate customer interactions, generate qualified leads, and streamline operations
        with production-ready AI chat, voice, and integrations.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link href="/book-a-demo" className="rounded-md bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600">
          Book a Demo
        </Link>
        <Link href="/services" className="rounded-md border px-4 py-2">
          View Services
        </Link>
      </div>
    </section>
  );
}
