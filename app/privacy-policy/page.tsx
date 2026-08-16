import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — CatholicBond",
  description: "CatholicBond Privacy Policy — how Softnergy Limited collects, uses, protects, and retains your personal data under UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "https://www.catholicbond.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="Effective Date: April 6, 2025">

      <div className="policy-intro">
        <p>This Privacy Policy is issued by Softnergy Limited ("we," "us," or "Company"), the developer and operator of the CatholicBond mobile application ("App"). It explains what personal data we collect about you, why we collect it, how we use and protect it, who we share it with, and what rights you have in relation to it.</p>
        <p>We are committed to handling your personal data with the highest standards of care and transparency. This policy is written in plain English — not to obscure, but to inform. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
        <p>By downloading and using the CatholicBond App, you acknowledge that you have read and understood this policy. If you do not agree with any part of it, please do not use the App.</p>
      </div>

      <div className="policy-section">
        <h2>1. Who We Are</h2>
        <p>Softnergy Limited is the data controller responsible for the personal data collected through the CatholicBond App. We are a company registered in Scotland (Company Number SC619146) with our registered office at 36 Colliers Row, Wallyford, Scotland, EH21 8GX, United Kingdom.</p>
        <p>If you have any questions about how we handle your data, you can reach us at any time at <a href="mailto:legal@softnergy.co.uk">legal@softnergy.co.uk</a>.</p>
      </div>

      <div className="policy-section">
        <h2>2. Data We Collect and Why</h2>
        <p>We collect only the data that is necessary to provide you with a safe, meaningful, and faith-centred experience.</p>
        <table className="data-table">
          <thead>
            <tr>
              <th>Data Type</th>
              <th>What This Includes</th>
              <th>Why We Collect It</th>
              <th>Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Account &amp; Profile Data</strong></td><td>Name, email address, date of birth, gender, location, biography, profile photos</td><td>To create and maintain your account and allow other members to find and connect with you</td><td>Contractual necessity</td></tr>
            <tr><td><strong>Faith &amp; Lifestyle Data</strong></td><td>Mass attendance frequency, prayer habits, faith importance, church involvement, relationship goals</td><td>To facilitate meaningful, values-based matching with compatible Catholic singles</td><td>Your explicit consent</td></tr>
            <tr><td><strong>Photo Verification Data</strong></td><td>Selfie submitted during the verification process</td><td>To confirm that you are a real person who matches your profile photos</td><td>Legitimate interest (community safety)</td></tr>
            <tr><td><strong>Communication Data</strong></td><td>Messages sent and received within the App, match activity, likes, and reported content</td><td>To operate the messaging and matching features of the App</td><td>Contractual necessity and legitimate interest</td></tr>
            <tr><td><strong>Technical &amp; Usage Data</strong></td><td>Device type, operating system, IP address, app version, login timestamps, crash reports</td><td>To maintain the security, stability, and performance of the App</td><td>Legitimate interest</td></tr>
            <tr><td><strong>Payment Data</strong></td><td>Subscription status, transaction identifiers</td><td>To manage Premium subscriptions and verify entitlements</td><td>Contractual necessity</td></tr>
          </tbody>
        </table>
      </div>

      <div className="policy-section">
        <h2>3. How We Use Your Data</h2>
        <ul>
          <li><strong>To operate the App.</strong> We use your account and profile data to provide the core features of CatholicBond — including profile discovery, matching, and messaging.</li>
          <li><strong>To verify your identity.</strong> We use your photo verification selfie to confirm you are a real person, protecting every member from fake profiles and catfishing.</li>
          <li><strong>To personalise your experience.</strong> We use your faith and lifestyle data to show you profiles of Catholics who share your values, practices, and relationship goals.</li>
          <li><strong>To keep the community safe.</strong> We monitor usage patterns and investigate reported content to detect and prevent abuse, harassment, fraud, and violations of our Community Guidelines.</li>
          <li><strong>To improve the App.</strong> We use aggregated, anonymised usage data to understand how members interact with the App and to make informed decisions about new features and improvements.</li>
          <li><strong>To communicate with you.</strong> We use your email address to send you important account notices, security alerts, and — where you have opted in — updates about the App.</li>
          <li><strong>To comply with legal obligations.</strong> We may process your data where necessary to comply with applicable UK law, respond to court orders, or cooperate with law enforcement.</li>
        </ul>
        <p>We will never use your data for purposes that are incompatible with those listed above, and we will never sell your personal data to third parties for marketing or commercial purposes.</p>
      </div>

      <div className="policy-section">
        <h2>4. Who We Share Your Data With</h2>
        <p>We do not sell, rent, or trade your personal data. We share data only where strictly necessary and with appropriate safeguards in place.</p>

        <h3>Other Members</h3>
        <p>Your public profile information — including your name, photos, bio, and faith details — is visible to other members. Your email address, verification selfie, and payment information are never visible to other members.</p>

        <h3>Our Moderation Team</h3>
        <p>Our internal moderation team may access your profile, messages, and reported content when investigating potential violations of our Community Guidelines. All moderators are bound by strict confidentiality obligations.</p>

        <h3>Service Providers</h3>
        <ul>
          <li><strong>Cloud infrastructure:</strong> MongoDB Atlas — for secure, encrypted database hosting.</li>
          <li><strong>Push notification services:</strong> To deliver in-app notifications to your device.</li>
          <li><strong>Analytics providers:</strong> We share only aggregated, anonymised data for app performance analysis.</li>
          <li><strong>Payment processors:</strong> Apple App Store and Google Play Store process all subscription payments. We receive only your subscription status and transaction identifiers.</li>
        </ul>

        <h3>Legal Authorities</h3>
        <p>We may disclose your data to law enforcement, regulators, or courts where we are legally required to do so, or where we believe in good faith that disclosure is necessary to prevent serious harm.</p>
      </div>

      <div className="policy-section">
        <h2>5. How We Protect Your Data</h2>
        <ul>
          <li><strong>Encryption in transit:</strong> All data transmitted between your device and our servers is encrypted using SSL/TLS protocols.</li>
          <li><strong>Encryption at rest:</strong> Sensitive data stored in our databases is encrypted at rest.</li>
          <li><strong>Access controls:</strong> Access to personal data is restricted to authorised personnel on a strict need-to-know basis.</li>
          <li><strong>Multi-factor authentication:</strong> Administrative access to our systems requires multi-factor authentication.</li>
          <li><strong>Regular security reviews:</strong> We conduct regular internal reviews of our security practices and infrastructure.</li>
          <li><strong>Photo verification security:</strong> Verification selfies are reviewed by authorised moderators only and are permanently deleted within 72 hours of processing.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>6. How Long We Keep Your Data</h2>
        <table className="data-table">
          <thead>
            <tr><th>Data Category</th><th>Retention Period</th></tr>
          </thead>
          <tbody>
            <tr><td>Account and profile data</td><td>Retained for the duration of your account. Deleted within 30 days of account deletion request.</td></tr>
            <tr><td>Messages and communication data</td><td>Retained while your account is active. Deleted with your account unless required for an active moderation investigation.</td></tr>
            <tr><td>Photo verification selfies</td><td>Deleted within 72 hours of review — whether your verification is approved or rejected.</td></tr>
            <tr><td>Inactive accounts</td><td>Accounts with no activity for 24 consecutive months are automatically deleted.</td></tr>
            <tr><td>Aggregated and anonymised data</td><td>Retained indefinitely for analytical purposes. This data cannot be used to identify you.</td></tr>
            <tr><td>Legal and compliance records</td><td>Retained for up to 7 years where required by applicable UK law.</td></tr>
          </tbody>
        </table>
      </div>

      <div className="policy-section">
        <h2>7. Your Rights Under UK GDPR</h2>
        <ul>
          <li><strong>Right of access.</strong> You have the right to request a copy of the personal data we hold about you.</li>
          <li><strong>Right to rectification.</strong> If any data we hold is inaccurate or incomplete, you have the right to have it corrected.</li>
          <li><strong>Right to erasure.</strong> You have the right to request that we delete your personal data where there is no compelling reason to continue processing it.</li>
          <li><strong>Right to restrict processing.</strong> You have the right to ask us to pause the processing of your personal data in certain circumstances.</li>
          <li><strong>Right to data portability.</strong> You have the right to receive a copy of your personal data in a structured, machine-readable format.</li>
          <li><strong>Right to object.</strong> You have the right to object to the processing of your personal data where we rely on legitimate interests as our legal basis.</li>
          <li><strong>Right to withdraw consent.</strong> Where we process your data on the basis of your consent, you may withdraw that consent at any time.</li>
          <li><strong>Right to lodge a complaint.</strong> You have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>.</li>
        </ul>
        <p>To exercise any of these rights, please contact us at <a href="mailto:legal@softnergy.co.uk">legal@softnergy.co.uk</a>.</p>
      </div>

      <div className="policy-section">
        <h2>8. International Data Transfers</h2>
        <p>We store and process your personal data primarily within the United Kingdom and the European Economic Area (EEA). Where data is transferred outside these regions, we ensure adequate protections are in place, including the use of Standard Contractual Clauses approved by the UK Information Commissioner's Office.</p>
      </div>

      <div className="policy-section">
        <h2>9. Children's Privacy</h2>
        <p>CatholicBond is strictly for adults aged 18 and over. We do not knowingly collect personal data from anyone under the age of 18. If we become aware that a user is under 18, we will immediately delete their account and all associated data.</p>
        <p>If you believe a minor has created an account on CatholicBond, please contact us immediately at <a href="mailto:support@catholicbond.com">support@catholicbond.com</a>.</p>
      </div>

      <div className="policy-section">
        <h2>10. Cookies and Tracking Technologies</h2>
        <p>The CatholicBond mobile App does not use browser cookies. However, we may use certain device identifiers and analytics SDKs to understand how the App is used and to maintain session security. These are used solely for operational purposes and are not used to track you across third-party websites or apps.</p>
        <p>If you visit our website at catholicbond.com, cookies may be used. Please refer to our separate <a href="/cookies-policy">Cookies Policy</a> for details.</p>
      </div>

      <div className="policy-section">
        <h2>11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, the App, or applicable law. When we make material changes, we will notify you by email and through an in-app notice at least 30 days before the changes take effect.</p>
      </div>

      <div className="policy-section">
        <h2>12. Contact Us</h2>
        <ul>
          <li><strong>Data Controller:</strong> Softnergy Limited (Company No. SC619146)</li>
          <li><strong>Address:</strong> 36 Colliers Row, Wallyford, Scotland, EH21 8GX, United Kingdom</li>
          <li><strong>Legal enquiries:</strong> <a href="mailto:legal@softnergy.co.uk">legal@softnergy.co.uk</a></li>
          <li><strong>General support:</strong> <a href="mailto:support@catholicbond.com">support@catholicbond.com</a></li>
          <li><strong>Response time:</strong> We aim to respond to all privacy requests within 30 days of receipt.</li>
        </ul>
        <p>If you are not satisfied with our response, you have the right to contact the Information Commissioner's Office (ICO): <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a> | Helpline: 0303 123 1113</p>
      </div>

    </PolicyLayout>
  );
}
