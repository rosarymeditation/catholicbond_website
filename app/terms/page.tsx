import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions — CatholicBond",
  description: "CatholicBond Terms and Conditions — the legal agreement between you and Softnergy Limited governing your use of the CatholicBond app.",
  alternates: { canonical: "https://www.catholicbond.com/terms" },
};

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms and Conditions" lastUpdated="Last Updated: April 6, 2025">

      <div className="policy-intro">
        <p>CatholicBond ("we," "us") is operated by Softnergy Limited (Company Number: SC619146), registered at 36 Colliers Row, Wallyford, Scotland, EH21 8GX, United Kingdom. These Terms govern your use of our Catholic dating app. By using CatholicBond you agree to be bound by these Terms in full.</p>
      </div>

      <div className="policy-section">
        <h2>1. Introduction</h2>
        <p>These Terms and Conditions constitute a legally binding agreement between you and Softnergy Limited. Please read them carefully before downloading, installing, or using the CatholicBond App. If you do not agree with any part of these Terms, you must not use the App.</p>
      </div>

      <div className="policy-section">
        <h2>2. Eligibility</h2>
        <ul>
          <li>You must be <strong>18 years of age or older</strong> and legally single (or otherwise permitted to date under the laws of your country of residence).</li>
          <li>By joining, you confirm you are Catholic or are sincerely seeking a Catholic partner in good faith.</li>
          <li>You confirm that all information provided during registration is accurate, truthful, and up to date.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>3. User Responsibilities</h2>
        <h3>You agree not to:</h3>
        <ul>
          <li>Create fake profiles or impersonate any other person</li>
          <li>Harass, threaten, or intimidate other users</li>
          <li>Send or request explicit, offensive, or inappropriate content</li>
          <li>Upload photos that violate our Photo Verification Policy</li>
          <li>Use the platform to promote non-Catholic beliefs aggressively or to solicit money from other members</li>
          <li>Attempt to reverse engineer, scrape, or exploit the App or its systems</li>
        </ul>
        <p><strong>Consequences:</strong> Violations may result in account suspension, permanent termination, and — where legally required — reporting to the appropriate authorities.</p>
      </div>

      <div className="policy-section">
        <h2>4. Photo Verification</h2>
        <ul>
          <li>All members are required to complete photo verification before messaging is enabled</li>
          <li>Verification selfies are reviewed by our moderation team and permanently deleted within 72 hours</li>
          <li>Rejected photos are deleted immediately</li>
          <li>Attempting to circumvent photo verification will result in immediate permanent removal</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>5. Subscriptions &amp; Payments</h2>
        <h3>Premium Features</h3>
        <ul>
          <li><strong>Free Tier:</strong> Basic matching and limited daily messaging</li>
          <li><strong>Premium Tier:</strong> Unlimited messaging, read receipts, gold cross badge, and additional features (pricing displayed in-app at time of purchase)</li>
        </ul>

        <h3>Payment Processing</h3>
        <ul>
          <li>All payments are processed through the <strong>Google Play Store</strong> or <strong>Apple App Store</strong></li>
          <li>Subscriptions automatically renew at the end of each billing period unless cancelled at least 24 hours before the renewal date</li>
          <li>We do not store payment card details</li>
        </ul>

        <h3>Refunds</h3>
        <ul>
          <li>No refunds are provided except as required by applicable UK law (including the 14-day cooling-off period for digital services under the Consumer Contracts Regulations 2013, where applicable)</li>
          <li>Cancel anytime via your app store subscription settings</li>
          <li>Please refer to our <a href="/refund-policy">Refund Policy</a> for full details</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>6. Privacy</h2>
        <p>Your data is handled in accordance with our <a href="/privacy-policy">Privacy Policy</a>, which forms part of these Terms and is incorporated by reference. You may request data deletion at any time by contacting <a href="mailto:legal@softnergy.co.uk">legal@softnergy.co.uk</a>.</p>
      </div>

      <div className="policy-section">
        <h2>7. Disclaimers</h2>
        <ul>
          <li>We <strong>do not guarantee</strong> that use of the App will result in matches, relationships, or marriage</li>
          <li>We are not liable for the conduct of users outside the App, including in-person meetings</li>
          <li>The App is provided on an "as is" and "as available" basis. We do not warrant that the App will be uninterrupted or error-free</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, Softnergy Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App. Our total liability shall not exceed the amount you paid to us in the twelve months preceding any claim.</p>
      </div>

      <div className="policy-section">
        <h2>9. Governing Law</h2>
        <p>These Terms are governed by and construed in accordance with the laws of Scotland and England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the Scottish courts. Before initiating any formal legal proceedings, we encourage you to contact us to seek an informal resolution.</p>
      </div>

      <div className="policy-section">
        <h2>10. Changes to These Terms</h2>
        <p>We reserve the right to modify these Terms at any time. When we make material changes, we will notify you via email or in-app notice. Your continued use of the App after changes have been posted constitutes your acceptance of the updated Terms.</p>
      </div>

      <div className="policy-section">
        <h2>11. Contact</h2>
        <ul>
          <li><strong>Softnergy Limited</strong>, 36 Colliers Row, Wallyford, Scotland, EH21 8GX, United Kingdom</li>
          <li><strong>Legal enquiries:</strong> <a href="mailto:legal@softnergy.co.uk">legal@softnergy.co.uk</a></li>
          <li><strong>General support:</strong> <a href="mailto:support@catholicbond.com">support@catholicbond.com</a></li>
        </ul>
      </div>

    </PolicyLayout>
  );
}
