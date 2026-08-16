import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Safety Guidelines — CatholicBond",
  description: "CatholicBond safety guidelines — how to protect yourself online, recognise red flags, and stay safe when meeting someone in person.",
  alternates: { canonical: "https://www.catholicbond.com/safety-guidelines" },
};

export default function SafetyGuidelinesPage() {
  return (
    <PolicyLayout title="Safety Guidelines" lastUpdated="Last Updated: April 6, 2025">

      <div className="policy-intro">
        <p>At CatholicBond, your safety is not an afterthought — it is built into the foundation of how we operate. We have designed every feature of the App with your wellbeing in mind, from photo verification to in-app reporting. But technology alone is not enough. The most important layer of protection is your own awareness.</p>
        <p>Please read these guidelines carefully. They are written to help you recognise risk, protect your personal information, and make confident decisions — online and in person.</p>
      </div>

      <div className="policy-section">
        <h2>1. Protecting Yourself Online</h2>
        <p>Online dating is a meaningful way to meet people, but it requires the same discernment you would apply in any area of life.</p>

        <h3>Keep conversations on CatholicBond</h3>
        <p>Until you have built genuine trust with someone, keep all communication within the App. CatholicBond gives you a secure, moderated environment. The moment a conversation moves to WhatsApp, email, or another platform, we can no longer see or act on anything that happens there. Take your time before making that move — and never feel pressured to do it before you are ready.</p>

        <h3>Guard your personal information</h3>
        <p>Do not share your home address, workplace, daily routine, or any information that would allow someone to locate you in person before you are certain of their intentions. This includes your full name combined with your employer, your neighbourhood, your regular places of worship, or the school your children attend.</p>

        <h3>Never send money or financial information</h3>
        <p>If someone you have met on CatholicBond asks you for money — for any reason, no matter how compelling or distressing their story sounds — treat it as an immediate red flag. Romance scammers are skilled at building emotional connection before making a financial request. Do not send money, gift cards, cryptocurrency, or bank details to anyone you have not met in person and verified independently.</p>

        <h3>Protect your social media presence</h3>
        <p>Be cautious about linking your social media profiles or sharing handles early in a conversation. Your Instagram, Facebook, or LinkedIn profile may reveal far more personal information than you intend to share — including your location, employer, family members, and daily patterns.</p>
      </div>

      <div className="policy-section">
        <h2>2. Recognising Red Flags</h2>
        <p>Most people on CatholicBond are genuine, faith-driven individuals seeking meaningful connection. However, no platform is immune to bad actors. These are the warning signs to watch for:</p>
        <ul>
          <li><strong>They want to move off the platform immediately.</strong> Requests to switch to WhatsApp or email within the first few messages are a common tactic to remove the conversation from our moderation.</li>
          <li><strong>Their profile feels too good to be true.</strong> Unusually attractive photos, vague or overly polished bios, and a profile that was created very recently warrant caution.</li>
          <li><strong>They avoid video calls or in-person meetings.</strong> Someone who is consistently unavailable for a video call, or who always has a reason why they cannot meet, may not be who they claim to be.</li>
          <li><strong>Their story changes or contains inconsistencies.</strong> Pay attention to contradictions in what someone tells you about themselves — their job, location, family situation, or background.</li>
          <li><strong>They declare intense feelings very quickly.</strong> Expressions of deep love or spiritual connection within days or weeks of first contact are a common feature of romance scams. Genuine relationships develop at a natural pace.</li>
          <li><strong>They ask for money or personal financial details.</strong> This is always a red flag — regardless of the reason given.</li>
          <li><strong>They discourage you from telling others about them.</strong> Any person who asks you to keep your relationship secret from family or friends is isolating you. This is a serious warning sign.</li>
        </ul>
        <p>If something feels wrong, trust your instincts. You do not owe anyone your continued attention. Report the profile and disengage.</p>
      </div>

      <div className="policy-section">
        <h2>3. Meeting Someone in Person</h2>
        <p>Meeting someone in person for the first time is an exciting step — and one that deserves careful preparation.</p>

        <h3>Choose a public place</h3>
        <p>Always meet for the first time in a busy, public location — a coffee shop, a restaurant, a parish event, or another well-lit space with other people present. Avoid private homes, isolated locations, or venues you are unfamiliar with.</p>

        <h3>Tell someone you trust</h3>
        <p>Before you go, tell a friend, family member, or trusted colleague where you are going, who you are meeting, and when you expect to be back. Share the person's name and their CatholicBond profile if possible. Agree on a check-in time.</p>

        <h3>Arrange your own transport</h3>
        <p>Do not accept a lift to or from a first meeting from someone you have not yet met in person. Drive yourself, use public transport, or book a taxi. Having your own means of transport ensures you can leave at any time.</p>

        <h3>Stay in control of what you consume</h3>
        <p>Do not leave your drink unattended. Be mindful of how much alcohol you consume on a first meeting. Staying clear-headed helps you make good decisions and read the situation accurately.</p>

        <h3>Trust your instincts and leave if needed</h3>
        <p>If at any point during a meeting you feel uncomfortable, unsafe, or simply that something is not right — you are free to leave. You do not need to give a reason, apologise, or stay out of politeness. Your safety comes before anyone's feelings. If you feel in immediate danger, contact the police immediately.</p>
      </div>

      <div className="policy-section">
        <h2>4. How to Report a Concern on CatholicBond</h2>
        <p>If you encounter a profile, message, or behaviour that concerns you, please report it immediately.</p>
        <ul>
          <li><strong>Report a profile:</strong> Visit the member's profile, tap the menu icon (⋮) in the top right corner, and select <strong>Report</strong>.</li>
          <li><strong>Report a message:</strong> Long press on any message and select <strong>Report</strong> from the options that appear.</li>
          <li><strong>Block a user:</strong> You can block any member at any time from their profile. Blocked users cannot see your profile or contact you in any way.</li>
          <li><strong>Contact our team directly:</strong> Email us at <a href="mailto:support@catholicbond.com">support@catholicbond.com</a>. We aim to respond within 24 hours.</li>
        </ul>
        <p>All reports are reviewed by our moderation team. Your identity is never revealed to the person you report.</p>
      </div>

      <div className="policy-section">
        <h2>5. Support Resources</h2>
        <p>If you or someone you know is in danger or has been harmed, please reach out to the appropriate services.</p>

        <h3>Emergency</h3>
        <ul>
          <li><strong>Emergency services (UK):</strong> 999</li>
          <li><strong>Police non-emergency (UK):</strong> 101</li>
        </ul>

        <h3>Domestic Abuse and Personal Safety</h3>
        <ul>
          <li><strong>National Domestic Abuse Helpline (UK):</strong> 0808 2000 247 — free, 24 hours a day, 7 days a week</li>
          <li><strong>Refuge:</strong> <a href="https://www.refuge.org.uk" target="_blank" rel="noopener">refuge.org.uk</a></li>
          <li><strong>Women's Aid:</strong> <a href="https://www.womensaid.org.uk" target="_blank" rel="noopener">womensaid.org.uk</a></li>
          <li><strong>Men's Advice Line:</strong> 0808 801 0327</li>
        </ul>

        <h3>Online Safety and Fraud</h3>
        <ul>
          <li><strong>Action Fraud (UK):</strong> 0300 123 2040</li>
          <li><strong>Get Safe Online:</strong> <a href="https://www.getsafeonline.org" target="_blank" rel="noopener">getsafeonline.org</a></li>
          <li><strong>Cyber Aware (NCSC):</strong> <a href="https://www.ncsc.gov.uk/cyberaware" target="_blank" rel="noopener">ncsc.gov.uk/cyberaware</a></li>
        </ul>

        <h3>Mental Health and Emotional Support</h3>
        <ul>
          <li><strong>Samaritans:</strong> 116 123 — free, 24 hours a day, 7 days a week</li>
          <li><strong>Mind:</strong> <a href="https://www.mind.org.uk" target="_blank" rel="noopener">mind.org.uk</a></li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>6. A Final Word</h2>
        <p>CatholicBond exists because we believe that faith-centred love is worth pursuing — and worth protecting. The community you are part of is built on trust, authenticity, and mutual respect.</p>
        <p>We ask every member to take these guidelines seriously — not only for their own sake, but for the sake of every other person on the platform who deserves to feel safe while looking for something real.</p>
        <p>If you ever have a concern, a question, or simply need to talk to someone on our team, we are always here at <a href="mailto:support@catholicbond.com">support@catholicbond.com</a>.</p>
      </div>

    </PolicyLayout>
  );
}
