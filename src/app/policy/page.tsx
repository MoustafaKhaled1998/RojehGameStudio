import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Rojeh Games",
  description:
    "Privacy Policy for Rojeh Games mobile applications and website.",
};

export default function PolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="min-h-screen bg-rojeh-cream pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <a
            href="/"
            className="inline-flex items-center gap-2 text-rojeh-red hover:underline mb-8 text-sm font-medium"
          >
            &larr; Back to Home
          </a>

          <h1 className="font-[family-name:var(--font-title)] text-4xl md:text-5xl font-bold text-rojeh-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-12">Last updated: February 10, 2026</p>

          <div className="prose prose-gray max-w-none space-y-10 text-rojeh-charcoal/80 leading-relaxed">
            {/* Introduction */}
            <section>
              <p>
                Rojeh Games (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                is committed to protecting your privacy. This Privacy Policy
                explains how information is collected, used, and shared when you
                use our mobile applications and visit our website at{" "}
                <a
                  href="https://www.rojehgames.com"
                  className="text-rojeh-red hover:underline"
                >
                  rojehgames.com
                </a>
                .
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="font-[family-name:var(--font-title)] text-2xl font-bold text-rojeh-charcoal mb-3">
                Information We Collect
              </h2>
              <p>
                Rojeh Games does not directly collect personal data from its
                users. However, our apps integrate third-party SDKs and services
                that may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>IP Address</strong> — collected by ad networks and
                  analytics services to serve relevant content and measure
                  performance.
                </li>
                <li>
                  <strong>Advertising ID</strong> — your device&apos;s
                  advertising identifier (e.g., IDFA on iOS, GAID on Android)
                  used for personalized advertising.
                </li>
                <li>
                  <strong>Device Information</strong> — device model, operating
                  system version, language settings, and screen resolution.
                </li>
                <li>
                  <strong>Location Data</strong> — approximate location may be
                  collected by third-party SDKs based on your IP address or
                  device settings.
                </li>
                <li>
                  <strong>Usage Data</strong> — app interactions, session
                  duration, and in-app events for analytics purposes.
                </li>
              </ul>
            </section>

            {/* How Information Is Used */}
            <section>
              <h2 className="font-[family-name:var(--font-title)] text-2xl font-bold text-rojeh-charcoal mb-3">
                How Information Is Used
              </h2>
              <p>
                The information collected through third-party services is used
                to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Display advertisements, including personalized ads</li>
                <li>Analyze app performance and user engagement</li>
                <li>Improve our apps and develop new features</li>
                <li>Ensure the security and stability of our services</li>
              </ul>
            </section>

            {/* Third-Party Services & Advertising */}
            <section>
              <h2 className="font-[family-name:var(--font-title)] text-2xl font-bold text-rojeh-charcoal mb-3">
                Third-Party Services &amp; Advertising
              </h2>
              <p>
                Our apps use <strong>Appodeal</strong> as our advertising and
                monetization platform. Appodeal and its demand partners may
                collect and process data as described in their privacy policies.
                We encourage you to review their policy:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <a
                    href="https://appodeal.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rojeh-red hover:underline"
                  >
                    Appodeal Privacy Policy
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                These third-party services may use cookies, device identifiers,
                and similar technologies to collect information for ad targeting
                and measurement.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="font-[family-name:var(--font-title)] text-2xl font-bold text-rojeh-charcoal mb-3">
                Children&apos;s Privacy
              </h2>
              <p>
                Rojeh Games creates family-friendly games and takes
                children&apos;s privacy seriously. We do not knowingly collect
                personal information from children under 13 years of age. If our
                apps are directed at children, we configure our ad SDKs to
                comply with COPPA (Children&apos;s Online Privacy Protection
                Act) and serve only age-appropriate, non-personalized
                advertisements.
              </p>
              <p className="mt-3">
                If you are a parent or guardian and believe that your child has
                provided personal information, please contact us so we can take
                appropriate action.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="font-[family-name:var(--font-title)] text-2xl font-bold text-rojeh-charcoal mb-3">
                Data Security
              </h2>
              <p>
                We value your trust and strive to use commercially acceptable
                means of protecting any data processed through our apps.
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-[family-name:var(--font-title)] text-2xl font-bold text-rojeh-charcoal mb-3">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Opt out of personalized advertising</strong> — you can
                  reset or limit your advertising ID through your device
                  settings (iOS: Settings &gt; Privacy &gt; Tracking; Android:
                  Settings &gt; Google &gt; Ads).
                </li>
                <li>
                  <strong>Request data deletion</strong> — contact us to request
                  the deletion of any data associated with your use of our apps.
                </li>
                <li>
                  <strong>Access your data</strong> — request information about
                  what data has been collected through our services.
                </li>
              </ul>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="font-[family-name:var(--font-title)] text-2xl font-bold text-rojeh-charcoal mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="font-[family-name:var(--font-title)] text-2xl font-bold text-rojeh-charcoal mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p className="mt-3">
                <a
                  href="mailto:rojehmaher@rojehgames.com"
                  className="text-rojeh-red hover:underline font-medium"
                >
                  rojehmaher@rojehgames.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
