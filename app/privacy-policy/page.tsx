'use client';
import PolicyLayout from '../components/PolicyLayout';

export default function PrivacyPolicy() {
    return (
        <PolicyLayout title="Privacy Policy">
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">1. Introduction</h2>
                    <p>
                        BlueScreen Consulting (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">2. Information We Collect</h2>
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Name and contact information</li>
                        <li>Company details</li>
                        <li>Communication preferences</li>
                        <li>Service inquiries and feedback</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">3. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Provide and improve our services</li>
                        <li>Communicate with you about our services</li>
                        <li>Respond to your inquiries</li>
                        <li>Send you marketing communications (with your consent)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">4. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">5. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Access your personal data</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to processing of your data</li>
                        <li>Request data portability</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">6. Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy, please contact us at:<br />
                        Email: privacy@bluescreen.consulting<br />
                        Phone: 1-800-555-0123
                    </p>
                </section>
            </div>
        </PolicyLayout>
    );
}