"use client"

import { useState } from "react"

/* ── Figma asset URLs (valid for 7 days from generation) ── */
const imgGrid = "https://www.figma.com/api/mcp/asset/9881dd52-f63c-4cb7-a83f-9bd02bb4e591"
const imgReflection = "https://www.figma.com/api/mcp/asset/1703202d-a1db-478f-941c-d34ea6e4eb19"
const imgVector = "https://www.figma.com/api/mcp/asset/eef399e6-62e6-4fa5-9606-1b58e0bb913e"
const imgVector2 = "https://www.figma.com/api/mcp/asset/95b40880-38d2-4be8-8214-bd9e0a1f56ae"
const imgChevronDown = "https://www.figma.com/api/mcp/asset/0f041af0-a94b-4edf-a350-67c677f36856"
const imgArrowRight = "https://www.figma.com/api/mcp/asset/2e0a8d4f-8fac-456e-8062-dba58d645cf5"
const imgScreenDesktop = "https://www.figma.com/api/mcp/asset/ec6ee575-d132-47d9-9284-78bf1fa8c948"
const imgScreenMobile = "https://www.figma.com/api/mcp/asset/9bc95d43-3c8d-48da-baa0-3bbf4adf6c86"
const imgAvatar = "https://www.figma.com/api/mcp/asset/5c85ca5e-0b23-498b-ad80-cb71e6620831"
const imgAvatar1 = "https://www.figma.com/api/mcp/asset/b31e5870-d5b6-412e-bc64-b03957bb6a74"
const imgAvatar2 = "https://www.figma.com/api/mcp/asset/0ba50153-f3f7-481f-98a1-54b888190e51"
const imgMobileAppStoreBadge = "https://www.figma.com/api/mcp/asset/19dbe425-6cfe-46b9-895a-8b5da27c5217"
const imgMobileAppStoreBadge1 = "https://www.figma.com/api/mcp/asset/adb4e0c8-64b8-47bc-8ac5-281f57661aba"
const imgBlob = "https://www.figma.com/api/mcp/asset/9976e8bc-479f-49f1-b876-09593272f0e9"
const imgVector1 = "https://www.figma.com/api/mcp/asset/3122d893-b384-4b53-967d-86cb47975337"
const imgDeviceSurround = "https://www.figma.com/api/mcp/asset/e38f84a6-f234-42de-9e5d-f95c6a990541"
const imgHighlightBand = "https://www.figma.com/api/mcp/asset/ba74ebd1-052b-40b0-b0f7-4de4b276803a"
const imgBackground = "https://www.figma.com/api/mcp/asset/5dd16307-2db3-4e3e-a3f5-cfd6a0169f54"
const imgCamera = "https://www.figma.com/api/mcp/asset/75f90117-6d04-494e-b9df-7783c40ce561"
const imgSpeaker = "https://www.figma.com/api/mcp/asset/caf6cb1f-6c80-41c9-b764-a50a2dee776f"
const imgButtons = "https://www.figma.com/api/mcp/asset/3f4e4368-1ab5-480e-a569-0211afb9c851"
const imgRight = "https://www.figma.com/api/mcp/asset/de00cde7-f478-421b-ab88-f1731b46681c"
const imgDate = "https://www.figma.com/api/mcp/asset/a6576d9a-2dbe-4aa2-91dd-6ad78b0a6aa2"

/* ── Logo mark (shared between header and footer) ── */
function Logomark() {
  return (
    <div className="relative shrink-0 size-[28px] rounded-[7px] border-[0.175px] border-[rgba(0,0,0,0.12)] overflow-clip shadow-[0px_0.875px_0.875px_-0.5px_rgba(0,0,0,0.13),0px_0.875px_2.625px_0px_rgba(0,0,0,0.1)]">
      <div
        className="absolute inset-0 rounded-[7px] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(90deg, #fff 0%, #fff 100%)" }}
      />
      <div className="absolute inset-[-0.17px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGrid} />
      </div>
      <div
        className="absolute inset-[calc(25%-0.09px)] overflow-clip rounded-[999px] shadow-[0px_0.875px_2.625px_0px_rgba(0,0,0,0.1)]"
        style={{ backgroundImage: "linear-gradient(26.57deg, rgb(83,56,158) 8.33%, rgb(105,65,198) 91.67%)" }}
      >
        <div className="absolute h-[2.8px] left-[2.8px] top-[1.4px] w-[8.4px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReflection} />
        </div>
      </div>
      <div className="absolute backdrop-blur-[2.188px] bg-[rgba(255,255,255,0.2)] bottom-[-0.17px] left-[-0.17px] right-[-0.17px] rounded-bl-[7px] rounded-br-[7px] top-1/2" />
    </div>
  )
}

function Logo({ vectorSrc }: { vectorSrc: string }) {
  return (
    <div className="flex items-center gap-0 relative shrink-0 w-[121.625px] h-[28px]">
      <Logomark />
      <div className="absolute inset-[0_0_0_30.22%]">
        <div className="absolute bottom-[27.46%] left-0 top-[23.82%] w-[84.589px]">
          <img alt="Untitled UI" className="absolute block inset-0 max-w-none size-full" src={vectorSrc} />
        </div>
      </div>
    </div>
  )
}

/* ── iPhone mockup wrapper ── */
function IPhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="absolute bg-black inset-[0.12%_0.96%_0.35%_0.96%] rounded-[51.08px] shadow-[24px_24px_48px_-3px_rgba(10,13,18,0.2)]" />
      <div className="absolute bg-white inset-[2.23%_5.26%_2.46%_5.02%] overflow-clip">
        <div className="absolute inset-[3.94%_0_-3.94%_0]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenMobile} />
        </div>
        <div className="absolute inset-[0_0_95.32%_0] overflow-clip">
          <div className="absolute inset-[45.61%_3.91%_24.56%_78.31%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRight} />
          </div>
          <div className="absolute inset-[45.18%_83.5%_25.64%_8.92%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDate} />
          </div>
        </div>
        <div className="absolute h-[25.54px] left-0 top-[584.41px] w-[281.69px]">
          <div className="absolute bg-black bottom-[6.01px] h-[3.756px] left-[32.27%] right-[32%] rounded-[100px]" />
        </div>
      </div>
      <div className="absolute inset-[0_0_0.23%_0]">
        <div className="absolute inset-[15.85%_0.15%_60.14%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtons} />
        </div>
        <div className="absolute inset-[0_0.86%_0_0.71%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDeviceSurround} />
        </div>
        <div className="absolute inset-[0.12%_1.09%_0.12%_0.94%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHighlightBand} />
        </div>
        <div className="absolute inset-[0.58%_2.04%_0.58%_1.89%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackground} />
        </div>
        <div className="absolute bg-[#414141] inset-[0_20.45%_99.42%_78.13%]" />
        <div className="absolute bg-[#414141] inset-[10.02%_0.86%_89.28%_97.96%]" />
        <div className="absolute bg-[#414141] inset-[10.02%_98.11%_89.28%_0.71%]" />
        <div className="absolute bg-[#414141] inset-[89.28%_98.11%_10.02%_0.71%]" />
        <div className="absolute bg-[#414141] inset-[89.28%_0.86%_10.02%_97.96%]" />
        <div className="absolute bg-[#414141] inset-[99.42%_78.28%_0_20.3%]" />
        <div className="absolute inset-[2.8%_38.15%_95.34%_58.07%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCamera} />
        </div>
        <div className="absolute inset-[3.38%_44.29%_95.92%_44.14%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSpeaker} />
        </div>
      </div>
    </div>
  )
}

/* ── Header ── */
function Header() {
  const navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Services", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
    { label: "Resources", hasDropdown: true },
    { label: "About", hasDropdown: true },
  ]

  return (
    <div className="h-[72px] relative shrink-0 w-full z-[2]">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex gap-4 items-center max-w-[1280px] px-8 relative shrink-0 w-full">
          {/* Left: Logo + Nav */}
          <div className="flex flex-1 gap-5 items-center min-w-0">
            {/* Logo */}
            <div className="flex flex-col items-start shrink-0 w-[160px]">
              <Logo vectorSrc={imgVector} />
            </div>
            {/* Navigation */}
            <nav className="flex gap-0.5 items-center shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex gap-0.5 items-center justify-center overflow-clip px-1.5 py-1 rounded-lg shrink-0 cursor-pointer hover:bg-muted transition-colors"
                >
                  <div className="flex items-center justify-center px-0.5 shrink-0">
                    <span className="font-semibold leading-5 text-foreground text-[14px] whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                  {item.hasDropdown && (
                    <div className="relative shrink-0 size-4">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                    </div>
                  )}
                </button>
              ))}
            </nav>
          </div>
          {/* Right: Actions */}
          <div className="flex gap-3 items-center shrink-0">
            <button className="bg-background border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-9 items-center justify-center px-4 py-2 rounded-lg shrink-0 cursor-pointer hover:bg-muted transition-colors">
              <span className="font-medium leading-5 text-foreground text-[14px] whitespace-nowrap">Login</span>
            </button>
            <button className="bg-[#7c3aed] border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-9 items-center justify-center px-4 py-2 rounded-lg shrink-0 cursor-pointer hover:bg-[#6d28d9] transition-colors">
              <span className="font-medium leading-5 text-[#fafafa] text-[14px] whitespace-nowrap">Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Hero Section ── */
function HeroSection() {
  return (
    <div className="flex gap-0 items-center justify-center pb-24 pt-16 relative shrink-0 w-full z-[1]">
      <div className="flex flex-1 gap-8 items-center justify-center max-w-[1280px] min-w-0 px-8">
        {/* Left content */}
        <div className="flex flex-1 flex-col gap-12 items-start min-w-0">
          <div className="flex flex-col gap-6 items-start w-full">
            <h1 className="font-semibold leading-[72px] text-foreground text-[60px] tracking-[-1.2px] w-full">
              Banking, but for digital creators
            </h1>
            <p className="font-normal leading-[30px] max-w-[480px] text-muted-foreground text-[20px] w-full">
              Designed by creators, for creators. Untitled gives you the guidance, data and innovation you need to sell more and growth your digital business.
            </p>
          </div>
          {/* Email capture */}
          <div className="flex items-center shrink-0">
            <div className="flex flex-col gap-0 items-start px-6 py-6 shrink-0 w-[351px]">
              <div className="flex flex-col gap-7 items-start w-full">
                <div className="flex flex-col gap-3 items-start w-full">
                  <label className="font-medium leading-5 text-foreground text-[14px] whitespace-nowrap">Your email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-background border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex h-9 items-center px-3 py-1 rounded-md shrink-0 w-full font-normal leading-5 text-foreground text-[14px] placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-[#7c3aed]/50 focus:border-[#7c3aed] transition-colors"
                  />
                  <span className="font-normal leading-5 text-muted-foreground text-[14px] whitespace-nowrap">Terms of Use</span>
                </div>
              </div>
            </div>
            <button className="bg-[#7c3aed] border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center px-4 py-2 rounded-lg shrink-0 cursor-pointer hover:bg-[#6d28d9] transition-colors">
              <span className="font-medium leading-5 text-[#fafafa] text-[14px] whitespace-nowrap">Send me a link</span>
            </button>
          </div>
        </div>
        {/* Right: Screen mockups */}
        <div className="flex-1 h-[512px] min-w-0 relative">
          {/* Desktop mockup (back, right) */}
          <div className="absolute bg-white border-[0.842px] border-[rgba(0,0,0,0.1)] drop-shadow-[0px_10px_6.7px_rgba(0,0,0,0.08)] flex flex-col items-start left-16 p-[3.368px] rounded-[32px] top-0">
            <div className="flex flex-col items-start overflow-clip p-[3.368px] rounded-[28px] shrink-0">
              <div className="bg-[#fafafa] border-[1.684px] border-[#e5e5e5] flex flex-col items-start overflow-clip rounded-[24px] shrink-0">
                <div className="h-[673.684px] relative shrink-0 w-[1010.526px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenDesktop} />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile mockup (front, left) */}
          <div className="absolute bg-white border-[0.747px] border-[rgba(0,0,0,0.1)] drop-shadow-[0px_9px_6px_rgba(0,0,0,0.08)] flex flex-col items-start left-0 p-[2.987px] rounded-[32px] top-[104px]">
            <div className="flex flex-col items-start overflow-clip p-[2.987px] rounded-[28px] shrink-0">
              <div className="bg-[#fafafa] border-[1.493px] border-[#e5e5e5] flex flex-col items-start overflow-clip rounded-[24px] shrink-0 w-[268.053px]">
                <div className="h-[580.16px] relative shrink-0 w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenMobile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Section Divider ── */
function SectionDivider() {
  return (
    <div className="flex items-start justify-center shrink-0 w-full">
      <div className="h-px relative shrink-0 w-[1280px] bg-border" />
    </div>
  )
}

/* ── Features Section ── */
function FeaturesSection() {
  const features = [
    {
      title: "Share team inboxes",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      active: true,
    },
    {
      title: "Deliver instant answers",
      description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      active: false,
    },
    {
      title: "Manage your team with reports",
      description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
      active: false,
    },
  ]

  return (
    <div className="bg-[#fafafa] flex flex-col gap-16 items-center overflow-clip py-24 shrink-0 w-full">
      {/* Heading */}
      <div className="flex flex-col gap-0 items-start max-w-[1280px] px-8 shrink-0 w-full">
        <div className="flex flex-col gap-0 items-start w-full">
          <div className="flex flex-col gap-5 items-start max-w-[768px] w-full">
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-semibold leading-6 text-[#7c3aed] text-[16px] w-full">Features</p>
              <p className="font-semibold leading-[44px] text-foreground text-[36px] tracking-[-0.72px] w-full">
                Overflowing with useful features
              </p>
            </div>
            <p className="font-normal leading-[30px] text-foreground text-[20px] w-full">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
            </p>
          </div>
        </div>
      </div>
      {/* Features grid */}
      <div className="flex gap-16 items-center max-w-[1280px] px-8 shrink-0 w-full">
        {/* Feature tabs */}
        <div className="flex flex-1 flex-col items-start max-w-[560px] min-w-0">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`border-l-4 ${feature.active ? "border-[#7c3aed]" : "border-border"} flex flex-col gap-4 items-start pl-6 py-4 shrink-0 w-full`}
            >
              <div className="flex flex-col gap-1 items-center w-full">
                <p className="font-semibold leading-7 text-foreground text-[18px] w-full">{feature.title}</p>
                <p className="font-normal leading-6 text-muted-foreground text-[16px] w-full">{feature.description}</p>
              </div>
              <button className="flex gap-1.5 items-center justify-center overflow-clip shrink-0 cursor-pointer hover:opacity-75 transition-opacity">
                <span className="font-semibold leading-6 text-[#7c3aed] text-[16px] whitespace-nowrap">Learn more</span>
                <div className="relative shrink-0 size-5">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} />
                </div>
              </button>
            </div>
          ))}
        </div>
        {/* iPhone mockups */}
        <div className="flex-1 h-[560px] min-w-0 relative">
          <div className="absolute h-[560px] left-0 overflow-clip top-0 w-[720px]">
            {/* Left iPhone */}
            <div className="absolute h-[640px] left-0 top-[64px] w-[313.991px]">
              <IPhoneMockup className="inset-0 size-full" />
            </div>
            {/* Right iPhone */}
            <div className="absolute h-[640px] right-[144.01px] top-0 w-[313.991px]">
              <IPhoneMockup className="inset-0 size-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── FAQ Section ── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
  ]

  return (
    <div className="bg-background flex flex-col gap-16 items-center overflow-clip py-16 shrink-0 w-full">
      {/* Heading */}
      <div className="flex flex-col gap-0 items-start max-w-[1280px] px-8 shrink-0 w-full">
        <div className="flex flex-col gap-0 items-center w-full">
          <div className="flex flex-col gap-5 items-center max-w-[768px] text-center w-full">
            <p className="font-semibold leading-[44px] text-foreground text-[36px] tracking-[-0.72px] w-full">
              Frequently asked questions
            </p>
            <p className="font-normal leading-[30px] text-foreground text-[20px] w-full">
              Everything you need to know about the product and billing.
            </p>
          </div>
        </div>
      </div>
      {/* Accordion */}
      <div className="flex flex-col gap-0 items-center max-w-[1280px] px-8 shrink-0 w-full">
        <div className="flex flex-col gap-0 items-start max-w-[768px] w-full">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={i < faqs.length - 1 ? "border-b border-border w-full" : "w-full"}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex gap-0 items-center px-0 py-6 w-full text-left cursor-pointer"
              >
                <div className="flex flex-1 items-center min-w-0 pr-2.5">
                  <span className="flex-1 font-semibold leading-5 min-w-0 text-foreground text-[18px]">
                    {faq.question}
                  </span>
                </div>
                <div className={`overflow-clip relative shrink-0 size-4 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}>
                  <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                    <div className="absolute inset-[-25%_-12.5%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector1} />
                    </div>
                  </div>
                </div>
              </button>
              {openIndex === i && (
                <div className="pb-6">
                  <p className="font-normal leading-6 text-muted-foreground text-[16px]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Support CTA */}
      <div className="flex flex-col gap-0 items-start max-w-[1280px] px-8 shrink-0 w-full">
        <div className="bg-[#f5f3ff] flex flex-col gap-8 items-center pb-10 pt-8 px-8 rounded-2xl shrink-0 w-full">
          {/* Avatar group */}
          <div className="h-14 relative shrink-0 w-[120px]">
            <div className="absolute border border-white overflow-clip rounded-full size-12 top-2 left-0">
              <img alt="" className="absolute max-w-none object-cover rounded-full size-full" src={imgAvatar} />
            </div>
            <div className="absolute border border-white overflow-clip rounded-full size-12 top-2 left-[72px]">
              <img alt="" className="absolute max-w-none object-cover rounded-full size-full" src={imgAvatar1} />
            </div>
            <div className="absolute border border-white overflow-clip rounded-full size-14 top-0 left-8">
              <img alt="" className="absolute max-w-none object-cover rounded-full size-full" src={imgAvatar2} />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center max-w-[768px] text-center w-full">
            <p className="font-semibold leading-[30px] text-foreground text-[20px] w-full">Still have questions?</p>
            <p className="font-normal leading-7 text-foreground text-[18px] w-full">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
            </p>
          </div>
          <button className="bg-[#7c3aed] border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center px-6 py-4 rounded-lg shrink-0 cursor-pointer hover:bg-[#6d28d9] transition-colors">
            <span className="font-semibold leading-5 text-[#fafafa] text-[18px] whitespace-nowrap">Get in touch</span>
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── CTA Section ── */
function CTASection() {
  return (
    <div className="bg-background flex gap-0 items-center justify-center overflow-clip pb-24 shrink-0 w-full">
      <div className="flex flex-1 gap-16 isolate items-center justify-center max-w-[1280px] min-w-0 px-8">
        {/* Left content */}
        <div className="flex flex-1 flex-col gap-12 items-start min-w-0 z-[2]">
          <div className="flex flex-col gap-6 items-start w-full">
            <p className="font-semibold leading-[60px] text-foreground text-[48px] tracking-[-0.96px] w-full">
              All-in-one finance for any creative business
            </p>
            <p className="font-normal leading-[30px] text-[#525252] text-[20px] w-full">
              Start your 30-day free trial today.
            </p>
          </div>
          {/* App store badges */}
          <div className="flex gap-3 items-center shrink-0">
            <div className="h-11 relative shrink-0 w-[132px]">
              <img alt="App Store" className="absolute block inset-0 max-w-none size-full" src={imgMobileAppStoreBadge} />
            </div>
            <div className="h-11 relative shrink-0 w-[148.5px]">
              <img alt="Google Play" className="absolute block inset-0 max-w-none size-full" src={imgMobileAppStoreBadge1} />
            </div>
          </div>
        </div>
        {/* Right: iPhone with blob */}
        <div className="flex-1 h-[400px] min-w-0 relative z-[1]">
          <div className="-translate-x-1/2 absolute h-[480px] left-1/2 top-[80px] w-[532px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBlob} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[640px] left-1/2 top-[calc(50%+120px)] w-[313.991px]">
            <IPhoneMockup className="inset-0 size-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Newsletter Section ── */
function NewsletterSection() {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-0 items-center overflow-clip py-24 shrink-0 w-full">
      <div className="flex flex-col gap-0 items-start max-w-[1280px] px-8 shrink-0 w-full">
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="flex flex-col gap-5 items-center max-w-[768px] text-center w-full">
            <p className="font-semibold leading-[44px] text-foreground text-[36px] tracking-[-0.72px] w-full">
              Sign up for our newsletter
            </p>
            <p className="font-normal leading-[30px] text-foreground text-[20px] w-full">
              Be the first to know about releases and industry news and insights.
            </p>
          </div>
          {/* Email form */}
          <div className="flex gap-4 items-start max-w-[480px] shrink-0 w-full">
            <div className="flex flex-1 flex-col gap-1.5 items-start min-w-0">
              <div className="flex flex-col gap-1.5 items-start justify-center shrink-0 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background border border-[#d4d4d4] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] px-[14px] py-[14px] rounded-lg shrink-0 w-full font-normal leading-6 text-[16px] text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-[#7c3aed]/50 focus:border-[#7c3aed] transition-colors"
                />
              </div>
              <p className="font-normal leading-5 text-foreground text-[14px] w-full">
                We care about your data in our{" "}
                <span className="underline decoration-[#d4d4d4]">privacy policy</span>.
              </p>
            </div>
            <button className="bg-[#7c3aed] border border-border drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center px-6 py-4 rounded-lg shrink-0 cursor-pointer hover:bg-[#6d28d9] transition-colors">
              <span className="font-semibold leading-5 text-[#fafafa] text-[18px] whitespace-nowrap">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Footer ── */
function Footer() {
  const links = ["Overview", "Features", "Pricing", "Careers", "Help", "Privacy"]

  return (
    <div className="bg-background flex flex-col gap-0 items-center overflow-clip py-12 shrink-0 w-full">
      <div className="flex flex-col gap-0 items-start max-w-[1280px] px-8 shrink-0 w-full">
        <div className="flex items-center justify-between shrink-0 w-full">
          {/* Logo */}
          <div className="flex flex-col items-start shrink-0 w-[160px]">
            <Logo vectorSrc={imgVector2} />
          </div>
          {/* Footer links */}
          <nav className="flex gap-8 items-center justify-center shrink-0">
            {links.map((link) => (
              <div key={link} className="flex gap-0 items-center max-h-5 shrink-0">
                <button className="flex gap-1.5 items-center justify-center overflow-clip shrink-0">
                  <span className="font-semibold leading-5 text-foreground text-[14px] whitespace-nowrap">{link}</span>
                </button>
              </div>
            ))}
          </nav>
          {/* Copyright */}
          <p className="font-normal leading-5 text-muted-foreground text-[14px] text-right w-[160px]">
            © 2077 Untitled UI
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Page ── */
export default function Desktop() {
  return (
    <div className="bg-background flex flex-col items-center size-full">
      {/* Hero header section */}
      <div className="bg-background flex flex-col isolate items-center overflow-clip shrink-0 w-full">
        <Header />
        <HeroSection />
      </div>

      <SectionDivider />

      <FeaturesSection />

      <FAQSection />

      <CTASection />

      <NewsletterSection />

      <Footer />
    </div>
  )
}
