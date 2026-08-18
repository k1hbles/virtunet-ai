/**
 * Virtu's privacy policy, reproduced from virtu.net/privacy-policy/.
 *
 * This is a legal instrument, not marketing copy. The wording is carried
 * across as published and must not be rewritten for tone, shortened, or
 * "improved" — a change here changes what Virtu has undertaken to do.
 *
 * One deliberate departure: the source spells the product "Google Analyics".
 * That is corrected to "Google Analytics" here, because it is a product name
 * misspelling rather than a term of the policy.
 *
 * The page renders a link to the canonical version so a reader can always
 * check this against the original.
 */

export const PRIVACY_SOURCE = "https://virtu.net/privacy-policy/";

export type PolicySection = {
  heading: string;
  /** Paragraphs of prose. */
  body?: string[];
  /** A bulleted list, introduced by the last paragraph above it. */
  list?: string[];
  /** Prose that follows the list. */
  after?: string[];
};

export const privacyIntro = [
  "Virtu values and respects the privacy of the people we deal with. Virtu is committed to protecting your privacy and complying with the Privacy Act 1988 (Cth) (Privacy Act) and other applicable privacy laws and regulations.",
  "This Privacy Policy (Policy) describes how we collect, hold, use and disclose your personal information, and how we maintain the quality and security of your personal information.",
];

export const privacySections: PolicySection[] = [
  {
    heading: "What is personal information?",
    body: [
      "“Personal information” means any information or opinion, whether true or not, and whether recorded in a material form or not, about an identified individual or an individual who is reasonably identifiable. In general terms, this includes information or an opinion that personally identifies you either directly (e.g. your name) or indirectly.",
    ],
  },
  {
    heading: "What personal information do we collect?",
    body: [
      "The personal information we collect about you depends on the nature of your dealings with us or what you choose to share with us.",
      "The personal information we collect about you may include:",
    ],
    list: ["Name", "Mailing or street address", "Date of birth", "Email address", "Phone number"],
    after: [
      "You do not have to provide us with your personal information. Where possible, we will give you the option to interact with us anonymously or by using a pseudonym. However, if you choose to deal with us in this way or choose not to provide us with your personal information, we may not be able to provide you with our services or otherwise interact with you.",
    ],
  },
  {
    heading: "How do we collect your personal information?",
    body: ["We collect your personal information directly from you when you:"],
    list: [
      "interact with us over the phone;",
      "interact with us in person;",
      "interact with us online;",
      "participate in surveys or questionnaires;",
      "attend a Virtu event;",
      "subscribe to our mailing list;",
      "apply for a position with us as an employee, contractor or volunteer.",
    ],
  },
  {
    heading: "How do we use your personal information?",
    body: [
      "We use personal information for many purposes in connection with our functions and activities, including the following purposes:",
    ],
    list: [
      "provide you with information or services that you request from us;",
      "deliver to you a more personalised experience and service offering;",
      "improve the quality of the services we offer;",
      "internal administrative purposes;",
      "marketing and research purposes.",
    ],
  },
  {
    heading: "Disclosure of personal information to third parties",
    body: [
      "We may disclose your personal information to third parties in accordance with this Policy in circumstances where you would reasonably expect us to disclose your information. For example, we may disclose your personal information to:",
    ],
    list: [
      "our third party service providers (for example, our IT providers);",
      "our marketing providers;",
      "our professional services advisors.",
    ],
  },
  {
    heading: "Transfer of personal information overseas",
    body: [
      "Some of the third-party service providers we disclose personal information to may be based in or have servers located outside of Australia.",
      "Where we disclose your personal information to third parties overseas, we will take reasonable steps to ensure that data security and appropriate privacy practices are maintained. We will only disclose to overseas third parties if:",
    ],
    list: [
      "you have given us your consent to disclose personal information to that third party; or",
      "we reasonably believe that the overseas recipient is subject to a law or binding scheme that is, overall, substantially similar to the APPs, and the law or binding scheme can be enforced; or",
      "the disclosure is required or authorised by an Australian law or court / tribunal.",
    ],
  },
  {
    heading: "How do we protect your personal information?",
    body: [
      "Virtu will take reasonable steps to ensure that the personal information that we hold about you is kept confidential and secure, including by:",
    ],
    list: [
      "having a robust physical security of our premises and databases / records;",
      "taking measures to restrict access to only personnel who need that personal information to effectively provide services to you;",
      "having technological measures in place (for example, anti-virus software, fire walls).",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "The Virtu website uses cookies. A cookie is a small file of letters and numbers the website puts on your device if you allow it. These cookies recognise when your device has visited our website(s) before, so we can distinguish you from other users of the website. This improves your experience and the Virtu website(s).",
      "We do not use cookies to identify you, just to improve your experience on our website(s). If you do not wish to use the cookies, you can amend the settings on your internet browser so it will not automatically download cookies. However, if you remove or block cookies on your computer, please be aware that your browsing experience and our website’s functionality may be affected.",
    ],
  },
  {
    heading: "Website analytics",
    body: [
      "Our website uses Google Analytics to help us better understand visitor traffic, so we can improve our services. Although this data is mostly anonymous, it is possible that under certain circumstances, we may connect it to you.",
    ],
  },
  {
    heading: "Direct marketing",
    body: [
      "We may send you direct marketing communications and information about our services, opportunities, or events that we consider may be of interest to you if you have requested or consented to receive such communications. These communications may be sent in various forms, including mail, SMS, and email, in accordance with applicable marketing laws, such as the Australian Spam Act 2003 (Cth). You consent to us sending you those direct marketing communications by any of those methods. If you indicate a preference for a method of communication, we will endeavour to use that method whenever practical to do so.",
      "You may opt-out of receiving marketing communications from us at any time by following the instructions to “unsubscribe” set out in the relevant communication / contacting us using the details set out in the “How to contact us” section below.",
      "In addition, we may also use your personal information or disclose your personal information to third parties for the purposes of advertising, including online behavioural advertising, website personalisation, and to provide targeted or retargeted advertising content to you (including through third party websites).",
    ],
  },
  {
    heading: "Retention of personal information",
    body: [
      "We will not keep your personal information for longer than we need to. In most cases, this means that we will only retain your personal information for the duration of your relationship with us unless we are required to retain your personal information to comply with applicable laws, for example record-keeping obligations.",
    ],
  },
  {
    heading: "How to access and correct your personal information",
    body: [
      "Virtu will endeavour to keep your personal information accurate, complete, and up to date.",
      "If you wish to make a request to access and / or correct the personal information we hold about you, you should make a request by contacting us and we will usually respond within 5 days.",
    ],
  },
  {
    heading: "Links to third party sites",
    body: [
      "Virtu website may contain links to websites operated by third parties. If you access a third party website through our website, personal information may be collected by that third party website. We make no representations or warranties in relation to the privacy practices of any third party provider or website and we are not responsible for the privacy policies or the content of any third party provider or website. Third party providers / websites are responsible for informing you about their own privacy practices and we encourage you to read their privacy policies.",
    ],
  },
  {
    heading: "Inquiries and complaints",
    body: [
      "For complaints about how Virtu handles, processes, or manages your personal information, please contact Virtu’s Privacy Policy Officer. Note we may require proof of your identity and full details of your request before we can process your complaint.",
      "Please allow up to 5 days for Virtu to respond to your complaint. It will not always be possible to resolve a complaint to everyone’s satisfaction. If you are not satisfied with Virtu’s response to a complaint, you have the right to contact the Office of the Australian Information Commissioner (at www.oaic.gov.au) to lodge a complaint.",
    ],
  },
];
