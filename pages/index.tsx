import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WormwholeWebsite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Wormwhole Consulting Group LLC
        </motion.h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-300"> Strategic Consulting • Financial Structuring • Business Architecture </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button className="rounded-2xl px-6">Get Started</Button>
          <Button variant="outline" className="rounded-2xl px-6"> Contact Us </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 bg-neutral-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[["Business Formation & Compliance", "Financial Consulting & Structuring", "Technology & Systems Strategy"]].flat()[0]}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Wormwhole</h2>
          <p className="text-neutral-300 leading-relaxed">
            Wormwhole Consulting Group LLC is a forward-thinking advisory firm focused on
            helping entrepreneurs, enterprises, and innovators navigate complex financial,
            legal, and operational environments with confidence.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-neutral-300 mb-6">Email us at <a className="text-blue-400" href="mailto:info@wormwhole.com">info@wormwhole.com</a> or use the button below to get started.</p>
          <Button className="rounded-2xl px-6">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}
