'use client';
import PolicyLayout from '../components/PolicyLayout';

export default function CookiePolicy() {
    return (
        <PolicyLayout title="Cookie Policy">
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by enabling certain features and functionality.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">2. Types of Cookies We Use</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-[#000756]">Essential Cookies</h3>
                            <p>Required for basic website functionality and security. Cannot be disabled.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#000756]">Analytics Cookies</h3>
                            <p>Help us understand how visitors interact with our website.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#000756]">Functional Cookies</h3>
                            <p>Enable enhanced functionality and personalization.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#000756]">Marketing Cookies</h3>
                            <p>Used to track visitors across websites for marketing purposes.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">3. How We Use Cookies</h2>
                    <p>We use cookies to:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Remember your preferences and settings</li>
                        <li>Understand how you use our website</li>
                        <li>Improve our services and user experience</li>
                        <li>Provide personalized content and advertisements</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">4. Managing Cookies</h2>
                    <p>
                        You can control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>View and delete cookies</li>
                        <li>Block third-party cookies</li>
                        <li>Block cookies from specific websites</li>
                        <li>Block all cookies</li>
                    </ul>
                    <p className="mt-4">
                        Note: Blocking cookies may impact website functionality.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">5. Third-Party Cookies</h2>
                    <p>
                        Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Visit the respective third-party websites for more information about their cookie policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">6. Updates to This Policy</h2>
                    <p>
                        We may update this Cookie Policy periodically. Check this page regularly to stay informed about our use of cookies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">7. Contact Us</h2>
                    <p>
                        If you have questions about our Cookie Policy, contact us at:<br />
                        Email: privacy@bluescreen.consulting<br />
                        Phone: 1-800-555-0123
                    </p>
                </section>
            </div>
        </PolicyLayout>
    );
}