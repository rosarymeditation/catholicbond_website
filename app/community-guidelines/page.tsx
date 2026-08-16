import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Community Guidelines — CatholicBond",
  description: "CatholicBond community guidelines — how we keep our faith-centred dating community safe, respectful, and true to Catholic values.",
  alternates: { canonical: "https://www.catholicbond.com/community-guidelines" },
};

export default function CommunityGuidelinesPage() {
  return (
    <PolicyLayout title="Community Guidelines" lastUpdated="Last Updated: April 6, 2025">

      <div className="policy-intro">
        <p>CatholicBond exists for one purpose — to help faithful Catholics find meaningful, Christ-centred relationships in a space that is safe, respectful, and rooted in the values of the Church. These guidelines exist to protect that purpose. Every member who joins agrees to uphold them. Please read them carefully.</p>
      </div>

      <div className="policy-section">
        <h2>1. Our Foundation — Catholic Values</h2>
        <p>CatholicBond is not a general dating app with a Catholic label. It is a community built on the teachings of the Catholic Church, the dignity of every human person, and the belief that love is a vocation — not a transaction. Every feature, every policy, and every moderation decision flows from that foundation.</p>
        <p>We ask every member to:</p>
        <ul>
          <li><strong>Be authentic.</strong> Your profile must represent who you truly are — your real name, your real photos, and an honest description of your faith and intentions. Misrepresentation of any kind is grounds for immediate removal.</li>
          <li><strong>Honour human dignity.</strong> Every person on this platform is made in the image and likeness of God. Treat them accordingly — in every message, every interaction, and every response.</li>
          <li><strong>Respect the sacrament.</strong> We are a community that takes marriage seriously. Members seeking something casual, transactional, or outside the bounds of Catholic teaching are not the right fit for CatholicBond.</li>
          <li><strong>Pursue with intention.</strong> Approach every conversation as an opportunity to genuinely get to know another person — not to collect matches or pass time.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>2. Behaviour That Will Not Be Tolerated</h2>
        <p>The following behaviours are strictly prohibited and will result in immediate account suspension or permanent removal, depending on severity.</p>

        <h3>Harassment and Unwanted Contact</h3>
        <p>Sending repeated messages after someone has not responded, using aggressive or manipulative language to pressure a response, or making any member feel unsafe is harassment — regardless of your intent. One thoughtful message is an introduction. Sending five is unwanted contact. Respect silence as an answer.</p>

        <h3>Explicit or Inappropriate Content</h3>
        <p>Sending or requesting explicit photos, making sexually suggestive comments, or sharing any content that is immodest, offensive, or inappropriate for a faith-centred community is strictly forbidden. This applies to profile photos, messages, and any media shared within the app. Modesty is not optional here — it is expected.</p>

        <h3>Fake Profiles and Impersonation</h3>
        <p>Creating a profile using someone else's photos, using a false name, misrepresenting your faith, relationship status, or intentions, or operating multiple accounts is a serious violation. CatholicBond uses photo verification precisely to protect the community from this. Attempting to circumvent verification will result in a permanent ban.</p>

        <h3>Scamming and Financial Solicitation</h3>
        <p>Requesting money, gift cards, financial assistance, or personal financial information from any member — for any reason — is absolutely prohibited. Romance scams cause serious harm. If you receive any such request, report it immediately and do not engage further.</p>

        <h3>Sharing Personal Contact Information Too Soon</h3>
        <p>For your own safety, we strongly discourage sharing your phone number, email address, home address, or social media handles with someone you have just met on the platform. Keep conversations on CatholicBond until you have built sufficient trust. We cannot protect you once a conversation moves elsewhere.</p>

        <h3>Hate Speech and Discrimination</h3>
        <p>Racist, sexist, xenophobic, or otherwise discriminatory language has no place in this community. The Catholic Church is universal — our community reflects that. Any member who demeans another on the basis of race, ethnicity, nationality, or background will be removed without warning.</p>

        <h3>Proselytising and Theological Attacks</h3>
        <p>While faith discussion is encouraged and welcomed, aggressively challenging another member's practice of the faith, dismissing their spiritual journey, or using the platform to promote non-Catholic theology is not appropriate. Respect the diversity of expression within the Catholic tradition.</p>
      </div>

      <div className="policy-section">
        <h2>3. Profile Standards</h2>
        <p>Your profile is your introduction to the community. It must meet the following standards:</p>
        <ul>
          <li><strong>Photos must be of you.</strong> Your primary photo must show your face clearly. Group photos, cartoon avatars, landscapes, or photos of celebrities are not acceptable as your primary image.</li>
          <li><strong>Photos must be modest and appropriate.</strong> Swimwear, underwear, or photos that are sexually suggestive will be removed. Dress as you would for Mass.</li>
          <li><strong>Your bio must be honest.</strong> Do not exaggerate your faith practice, relationship status, or personal circumstances. Authenticity builds trust — and trust is the foundation of every meaningful relationship.</li>
          <li><strong>No contact information in profiles.</strong> Phone numbers, email addresses, or social media handles in your bio or photos will be removed. Use the in-app messaging system.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>4. Photo Verification</h2>
        <p>CatholicBond requires all members to verify their identity with a selfie before messaging. This is not optional — it is one of the most important steps we take to keep the community safe and authentic.</p>
        <p>Your verification photo is never displayed publicly or shared with other members. It is reviewed by our moderation team solely to confirm that you are a real person who matches your profile photos.</p>
        <p>Attempting to verify using someone else's image, an edited photo, or any form of deception will result in permanent removal from the platform.</p>
      </div>

      <div className="policy-section">
        <h2>5. Minors</h2>
        <p>CatholicBond is strictly for adults aged 18 and over. If you are under 18, you are not permitted to use this platform under any circumstances. If we discover that a minor has created an account, it will be permanently deleted and the matter reported to the relevant authorities where required by law.</p>
        <p>If you encounter a profile that you believe belongs to a minor, report it immediately using the in-app report feature.</p>
      </div>

      <div className="policy-section">
        <h2>6. Reporting Violations</h2>
        <p>If you encounter any behaviour, profile, or message that violates these guidelines, please report it immediately. You can do so by:</p>
        <ul>
          <li>Visiting the member's profile and tapping the menu icon (⋮) in the top right corner, then selecting <strong>Report</strong>.</li>
          <li>Long pressing on a specific message and selecting <strong>Report</strong> from the options.</li>
          <li>Emailing our moderation team directly at <a href="mailto:support@catholicbond.com">support@catholicbond.com</a> with details of the incident.</li>
        </ul>
        <p>All reports are reviewed by our moderation team within 24 hours. Your identity is never revealed to the person you report. We take every report seriously — your safety is not a low priority for us, it is the priority.</p>
      </div>

      <div className="policy-section">
        <h2>7. Consequences of Violations</h2>
        <p>Depending on the nature and severity of a violation, consequences may include:</p>
        <ul>
          <li>A formal warning sent to your account</li>
          <li>Temporary suspension from messaging or discovery</li>
          <li>Permanent removal from the platform</li>
          <li>Reporting to law enforcement where required by law</li>
        </ul>
        <p>We reserve the right to take action without prior warning when the safety of our community is at risk. Decisions made by our moderation team are final.</p>
      </div>

      <div className="policy-section">
        <h2>8. A Word on Intention</h2>
        <p>Rules only go so far. What truly makes CatholicBond a different kind of community is the intention each member brings. We are not asking you to be perfect — we are asking you to be sincere. Sincere in your faith, sincere in your pursuit, and sincere in how you treat every person you encounter here.</p>
        <p>Every member deserves to feel safe, respected, and seen. If you hold that standard for yourself, these guidelines will never feel like restrictions — they will feel like the natural expression of who you already are.</p>
        <p>Welcome to CatholicBond. We are glad you are here. Now go and make it a place worthy of the people you are hoping to find.</p>
      </div>

      <div className="policy-section">
        <h2>Questions or Concerns?</h2>
        <p>If you have any questions about these guidelines or want to report something that cannot wait, reach out to us directly:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@catholicbond.com">support@catholicbond.com</a></li>
          <li><strong>Response time:</strong> Within 24 hours</li>
        </ul>
      </div>

    </PolicyLayout>
  );
}
