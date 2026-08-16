import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — CatholicBond",
  description: "CatholicBond Cookie Policy explaining our use of cookies and tracking technologies.",
  alternates: { canonical: "https://www.catholicbond.com/cookies-policy" },
};

export default function CookiesPolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="Effective Date: April 6, 2025">

      <div className="policy-intro">
        <p>This Cookie Policy explains how CatholicBond, operated by Softnergy Limited, uses cookies and similar tracking technologies when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them.</p>
      </div>

      <div className="policy-section">
        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help the site function properly, remember your preferences, and give us information about how you use the site so we can improve your experience.</p>
        <p>Similar technologies — such as pixel tags, web beacons, and local storage — work in a comparable way and are also covered by this policy.</p>
      </div>

      <div className="policy-section">
        <h2>2. How We Use Cookies</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>Cookie Type</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Essential</strong></td><td>Login sessions, security tokens, and core site functionality. The site cannot function properly without these.</td><td>Session</td></tr>
            <tr><td><strong>Preferences</strong></td><td>Remember language settings, region preferences, and display choices.</td><td>30 days</td></tr>
            <tr><td><strong>Analytics</strong></td><td>App and website performance monitoring, understanding how visitors navigate the site. We use anonymised data only.</td><td>1 year</td></tr>
          </tbody>
        </table>
        <p>We do not use cookies for advertising or to track you across third-party websites. We do not sell cookie data to any third party.</p>
      </div>

      <div className="policy-section">
        <h2>3. Managing Cookies</h2>
        <p>You can control and manage cookies in several ways:</p>
        <ul>
          <li><strong>Browser settings:</strong> Most browsers allow you to refuse cookies or delete existing ones. Visit your browser's help section for instructions.</li>
          <li><strong>Device settings:</strong> Mobile devices offer controls for limiting tracking in your privacy or advertising settings.</li>
          <li><strong>Opt-out tools:</strong> For analytics cookies, you can use tools such as the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>.</li>
        </ul>
        <p>Please note that disabling essential cookies may affect the functionality of our website. Some features may not work as expected if cookies are turned off.</p>
      </div>

      <div className="policy-section">
        <h2>4. Mobile App</h2>
        <p>The CatholicBond mobile App does not use browser cookies. It may use device identifiers and analytics SDKs solely for operational and security purposes. These are covered in detail in our <a href="/privacy-policy">Privacy Policy</a>.</p>
      </div>

      <div className="policy-section">
        <h2>5. Changes to This Policy</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Any updates will be posted on this page with a revised effective date. We encourage you to review this policy periodically.</p>
      </div>

      <div className="policy-section">
        <h2>6. Contact Us</h2>
        <p>If you have any questions about our use of cookies, please contact us:</p>
        <ul>
          <li><strong>Softnergy Limited</strong>, 36 Colliers Row, Wallyford, Scotland, EH21 8GX, United Kingdom</li>
          <li><strong>Email:</strong> <a href="mailto:legal@softnergy.co.uk">legal@softnergy.co.uk</a></li>
          <li><strong>Support:</strong> <a href="mailto:support@catholicbond.com">support@catholicbond.com</a></li>
        </ul>
      </div>

    </PolicyLayout>
  );
}
