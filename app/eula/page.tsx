import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "End-User License Agreement (EULA) — CatholicBond",
  description: "End-User License Agreement for the CatholicBond app by Softnergy Limited. Read before downloading or using the app.",
  alternates: { canonical: "https://www.catholicbond.com/eula" },
};

export default function EulaPage() {
  return (
    <PolicyLayout title="End-User License Agreement (EULA)" lastUpdated="Effective Date: May 16, 2025">

      <div className="policy-intro">
        <p>This End-User License Agreement ("Agreement" or "EULA") is a legally binding contract between you ("you" or "User") and Softnergy Limited ("we," "us," or "Company"), the developer and operator of the CatholicBond mobile application ("App"). Please read this Agreement carefully before downloading, installing, or using the App.</p>
        <p>By downloading, installing, or accessing the App in any way, you confirm that you have read, understood, and agreed to be bound by the terms of this EULA in full. If you do not agree with any part of this Agreement, you must not download or use the App.</p>
      </div>

      <div className="policy-section">
        <h2>1. License Grant</h2>
        <p>Subject to your compliance with the terms of this Agreement, Softnergy Limited grants you a limited, non-exclusive, non-transferable, revocable licence to download, install, and use the CatholicBond App on a device that you own or control, solely for your personal, non-commercial use.</p>
        <p>This licence does not constitute a sale of the App or any portion of it. All rights not expressly granted to you under this Agreement are reserved by Softnergy Limited and its licensors.</p>
      </div>

      <div className="policy-section">
        <h2>2. Restrictions on Use</h2>
        <p>The licence granted above is subject to the following restrictions. You may not, and you agree not to permit any third party to:</p>
        <ul>
          <li><strong>Reverse engineer the App.</strong> You may not copy, modify, adapt, translate, reverse engineer, decompile, disassemble, or attempt to derive the source code, algorithms, or underlying structure of the App.</li>
          <li><strong>Distribute or sublicense the App.</strong> You may not sell, rent, lease, lend, redistribute, sublicense, or otherwise transfer the App or any rights in it to any third party.</li>
          <li><strong>Create derivative works.</strong> You may not build upon, modify, or create any derivative works based on the App or its content without our express written permission.</li>
          <li><strong>Use the App unlawfully.</strong> You may not use the App for any purpose that is illegal, fraudulent, harmful, or in violation of applicable local, national, or international law.</li>
          <li><strong>Circumvent security measures.</strong> You may not attempt to bypass, disable, or interfere with any security feature, access control, or technological protection measure built into the App.</li>
          <li><strong>Scrape or harvest data.</strong> You may not use automated tools, bots, or scripts to extract, collect, or harvest any content, data, or information from the App or its users.</li>
          <li><strong>Misrepresent your identity.</strong> You may not impersonate another person, create false profiles, or misrepresent your affiliation with any person or entity while using the App.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>3. Ownership and Intellectual Property</h2>
        <p>The App, including all content, features, code, design, graphics, logos, and trademarks, is owned by Softnergy Limited or its licensors and is protected by copyright, trademark, and other applicable intellectual property laws in the United Kingdom and internationally.</p>
        <p>Nothing in this Agreement transfers any ownership rights to you. You acknowledge that you are acquiring only a limited licence to use the App and that no title or ownership in the App passes to you.</p>
      </div>

      <div className="policy-section">
        <h2>4. User Accounts and Eligibility</h2>
        <p>To access the full features of the App, you must create an account. By creating an account, you confirm that:</p>
        <ul>
          <li>You are at least 18 years of age.</li>
          <li>You are legally permitted to enter into binding agreements under the laws of your country of residence.</li>
          <li>All information you provide during registration is accurate, complete, and up to date.</li>
          <li>You will maintain the confidentiality of your account credentials and are responsible for all activity that occurs under your account.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>5. User-Generated Content</h2>
        <p>The App allows you to submit profile information, photos, messages, and other content ("User Content"). By submitting User Content, you grant Softnergy Limited a non-exclusive, worldwide, royalty-free licence to use, store, display, and reproduce that content solely for the purpose of operating and improving the App.</p>
        <p>You are solely responsible for the User Content you submit. You confirm that your User Content does not infringe the rights of any third party, is not unlawful, and complies with our <a href="/community-guidelines">Community Guidelines</a>.</p>
      </div>

      <div className="policy-section">
        <h2>6. Privacy and Data Protection</h2>
        <p>Your use of the App is subject to our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into this Agreement by reference. By using the App, you consent to the collection and processing of your personal data as described in the Privacy Policy.</p>
        <p>We are committed to protecting your personal data and operate in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
      </div>

      <div className="policy-section">
        <h2>7. In-App Purchases and Subscriptions</h2>
        <p>CatholicBond offers optional Premium subscriptions that unlock additional features within the App. All purchases are processed through the Apple App Store or Google Play Store, and are subject to those platforms' respective payment terms and conditions.</p>
        <p>Subscriptions automatically renew at the end of each billing period unless cancelled at least 24 hours before the renewal date. You can manage or cancel your subscription at any time through your device's subscription settings.</p>
        <p>Softnergy Limited does not process payments directly and is not responsible for billing disputes that arise through Apple or Google. Please refer to our <a href="/refund-policy">Refund Policy</a> for further information on refunds.</p>
      </div>

      <div className="policy-section">
        <h2>8. Third-Party Services</h2>
        <p>The App may integrate with or contain links to third-party services, platforms, or content that are not owned or controlled by Softnergy Limited. We have no control over and accept no responsibility for the content, privacy practices, or terms of any third-party service. We encourage you to review the terms and privacy policies of any third-party service you access through the App.</p>
      </div>

      <div className="policy-section">
        <h2>9. Termination</h2>
        <p>This Agreement is effective from the moment you first download or use the App and continues until terminated by either party. We may suspend or terminate your access to the App immediately and without prior notice if:</p>
        <ul>
          <li>You breach any term of this Agreement.</li>
          <li>You violate our Community Guidelines or Safety Guidelines.</li>
          <li>We are required to do so by law or court order.</li>
          <li>We determine, at our sole discretion, that your continued use poses a risk to other users or to the integrity of the platform.</li>
        </ul>
        <p>Upon termination, your licence to use the App is immediately revoked. Termination does not affect any rights or obligations that accrued before the date of termination.</p>
      </div>

      <div className="policy-section">
        <h2>10. Disclaimers</h2>
        <p>The App is provided on an "as is" and "as available" basis without warranty of any kind, express or implied. To the fullest extent permitted by applicable law, Softnergy Limited expressly disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        <p>We do not warrant that the App will be uninterrupted, error-free, or secure. We do not guarantee that any particular result will be achieved through your use of the App, including the formation of romantic relationships or connections of any kind.</p>
      </div>

      <div className="policy-section">
        <h2>11. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, Softnergy Limited, its directors, officers, employees, affiliates, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or in connection with your use of or inability to use the App.</p>
        <p>In no event shall our total liability to you for all claims arising out of or relating to this Agreement or your use of the App exceed the greater of (a) the amount you paid to us in the twelve months preceding the claim, or (b) one hundred pounds sterling (£100).</p>
      </div>

      <div className="policy-section">
        <h2>12. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless Softnergy Limited and its directors, officers, employees, affiliates, and agents from and against any and all claims, demands, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to:</p>
        <ul>
          <li>Your use of or access to the App.</li>
          <li>Any User Content you submit through the App.</li>
          <li>Your violation of any term of this Agreement or our Community Guidelines.</li>
          <li>Your violation of any applicable law or the rights of any third party.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>13. Governing Law and Dispute Resolution</h2>
        <p>This Agreement is governed by and construed in accordance with the laws of England and Wales. Any dispute arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        <p>Before initiating any formal legal proceedings, we encourage you to contact us at <a href="mailto:legal@softnergy.co.uk">legal@softnergy.co.uk</a> to seek an informal resolution.</p>
      </div>

      <div className="policy-section">
        <h2>14. Changes to This Agreement</h2>
        <p>We reserve the right to modify this Agreement at any time. When we make material changes, we will update the effective date at the top of this page and, where appropriate, notify you through the App or by email. Your continued use of the App after any changes have been posted constitutes your acceptance of the updated Agreement.</p>
      </div>

      <div className="policy-section">
        <h2>15. Severability</h2>
        <p>If any provision of this Agreement is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or severed from the Agreement if modification is not possible. The remaining provisions shall continue in full force and effect.</p>
      </div>

      <div className="policy-section">
        <h2>16. Entire Agreement</h2>
        <p>This Agreement, together with our <a href="/privacy-policy">Privacy Policy</a>, <a href="/community-guidelines">Community Guidelines</a>, and <a href="/terms">Terms of Service</a>, constitutes the entire agreement between you and Softnergy Limited with respect to the App.</p>
      </div>

      <div className="policy-section">
        <h2>17. Contact Us</h2>
        <ul>
          <li><strong>Company:</strong> Softnergy Limited (Company No. SC619146)</li>
          <li><strong>Address:</strong> 36 Colliers Row, Wallyford, Scotland, EH21 8GX, United Kingdom</li>
          <li><strong>Legal enquiries:</strong> <a href="mailto:legal@softnergy.co.uk">legal@softnergy.co.uk</a></li>
          <li><strong>Support:</strong> <a href="mailto:support@catholicbond.com">support@catholicbond.com</a></li>
          <li><strong>Response time:</strong> We aim to respond to all legal enquiries within 5 business days.</li>
        </ul>
      </div>

    </PolicyLayout>
  );
}
