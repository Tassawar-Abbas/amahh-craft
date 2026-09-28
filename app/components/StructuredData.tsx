const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Amahh Technology",
  url: "https://www.amahhtechnology.com",
  logo: "https://www.amahhtechnology.com/image.png",
  description: "Amahh Technology is a professional software development company providing web development, mobile app development, custom software, AI solutions, SaaS development, APIs, dashboards, cloud infrastructure, and DevOps services.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+923714932094",
    contactType: "sales",
    email: "amahh.tech@gmail.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://github.com/Tassawar-Abbas",
    "https://www.linkedin.com/in/tassawar-abbas-565bb6191/",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Amahh Technology",
  url: "https://www.amahhtechnology.com",
  description: "Professional software development company specializing in web development, mobile apps, custom software, AI solutions, SaaS, APIs, and cloud infrastructure.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.amahhtechnology.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const workistanSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Workistan",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description: "Workistan is a global local services marketplace connecting users with trusted service professionals. Features include real-time bidding, task posting, video talent reels, instant urgent booking mode, and secured escrow payments.",
  url: "https://joinworkistan.com",
  author: {
    "@type": "Organization",
    name: "Amahh Technology",
    url: "https://www.amahhtechnology.com",
  },
  featureList: [
    "Real-time Bidding & Tasks",
    "Short Video Reels for Talent Discovery",
    "Instant Urgent Booking Mode",
    "Secured Escrow Payments & Instant Chat",
  ],
};

const myMediScribeSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MyMediScribe",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  description: "MyMediScribe is a healthcare and medical technology product designed to streamline medical documentation and improve healthcare workflows.",
  author: {
    "@type": "Organization",
    name: "Amahh Technology",
    url: "https://www.amahhtechnology.com",
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workistanSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(myMediScribeSchema) }}
      />
    </>
  );
}
