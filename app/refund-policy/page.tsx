'use client';
import PolicyLayout from '../components/PolicyLayout';

export default function RefundPolicy() {
    return (
        <PolicyLayout title="Refund Policy">
            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">1. Overview</h2>
                    <p>
                        BlueScreen Consulting strives to ensure complete satisfaction with our services. This refund policy outlines the conditions under which we provide refunds for our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">2. Service Cancellation</h2>
                    <p>
                        For ongoing services:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>30-day notice required for service cancellation</li>
                        <li>Pro-rated refund for unused service period</li>
                        <li>Setup fees and one-time charges are non-refundable</li>
                        <li>Cancellation fees may apply as per service agreement</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">3. Project-Based Services</h2>
                    <p>For project-based services:</p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Refunds available only during project planning phase</li>
                        <li>50% refund if cancelled before project implementation</li>
                        <li>No refunds once project implementation begins</li>
                        <li>Custom terms may apply for large-scale projects</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">4. Satisfaction Guarantee</h2>
                    <p>
                        If you are not satisfied with our services, please contact us within 14 days of service delivery. We will work to resolve any issues and may offer:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Service adjustments or corrections</li>
                        <li>Credit toward future services</li>
                        <li>Partial or full refund, depending on circumstances</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">5. Refund Process</h2>
                    <p>
                        To request a refund:
                    </p>
                    <ul className="list-disc pl-6 mt-2">
                        <li>Contact our support team</li>
                        <li>Provide reason for refund request</li>
                        <li>Allow 5-10 business days for review</li>
                        <li>Refunds processed to original payment method</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-[#000756] mb-4">6. Contact Information</h2>
                    <p>
                        For refund requests or questions, contact us at:<br />
                        Email: billing@bluescreen.consulting<br />
                        Phone: 1-800-555-0123
                    </p>
                </section>
            </div>
        </PolicyLayout>
    );
}