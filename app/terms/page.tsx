'use client';
import PolicyLayout from '../components/PolicyLayout';

export default function Terms() {
    return (
        <PolicyLayout title="Terms of Service">
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">1. Agreement to Terms</h2>
                    <p>
                        By accessing or using BlueScreen Consulting&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">2. Services</h2>
                    <p>
                        BlueScreen Consulting provides IT consulting, implementation, and management services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">3. Intellectual Property</h2>
                    <p>
                        All content, features, and functionality of our services are owned by BlueScreen Consulting and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">4. User Responsibilities</h2>
                    <p>You agree to:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Provide accurate information</li>
                        <li>Maintain the confidentiality of your account</li>
                        <li>Use our services legally and appropriately</li>
                        <li>Not interfere with service operations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">5. Limitation of Liability</h2>
                    <p>
                        BlueScreen Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">6. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
                    </p>
                </section>
            </div>
        </PolicyLayout>
    );
}