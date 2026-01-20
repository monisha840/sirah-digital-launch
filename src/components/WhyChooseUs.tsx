import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket,
  Shield,
  Headphones,
  BarChart3,
  Zap,
  RefreshCw
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Business-First AI Strategy",
    description: "We focus on your goals first. Every automation is designed to solve real business problems.",
  },
  {
    icon: Shield,
    title: "Custom-Built Automations",
    description: "No cookie-cutter solutions. Each system is tailored to your unique workflows and requirements.",
  },
  {
    icon: RefreshCw,
    title: "Scalable & Future-Ready",
    description: "Our solutions grow with you, from startup to enterprise, adapting as your needs evolve.",
  },
  {
    icon: BarChart3,
    title: "ROI-Focused Implementation",
    description: "Every project targets measurable outcomes with clear metrics and returns.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description: "From planning to deployment and beyond, our team is with you every step of the way.",
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Start seeing results in weeks, not months. We move fast without sacrificing quality.",
  },
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider shimmer">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Why Businesses Choose{" "}
              <span className="gradient-text text-glow">SIRAH DIGITAL</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're not just another automation agency. We're your strategic partner
              in digital transformation, committed to delivering solutions that actually
              move the needle for your business.
            </p>

            {/* Enhanced Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3, type: "spring" }}
                className="group">
                <div className="font-display text-3xl font-bold gradient-text group-hover:text-glow transition-all">13+</div>
                <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.4, type: "spring" }}
                className="group">
                <div className="font-display text-3xl font-bold gradient-text group-hover:text-glow transition-all">25+</div>
                <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">Happy Clients</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="group">
                <div className="font-display text-3xl font-bold gradient-text group-hover:text-glow transition-all">24/7</div>
                <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">Support Available</div>
              </motion.div>
            </div>


          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="p-5 rounded-xl bg-card/60 border border-border/50 hover:border-primary/40 transition-all duration-500 group hover-lift relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-3 group-hover:from-primary/25 group-hover:to-accent/20 transition-all group-hover:scale-110">
                    <reason.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">{reason.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Tools Used Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="sm:col-span-2 p-5 rounded-xl bg-card/60 border border-border/50 hover:border-primary/40 transition-all duration-500 group hover-lift relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center group-hover:from-primary/25 group-hover:to-accent/20 transition-all">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold group-hover:text-primary transition-colors">Tech Stack</h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* Python */}
                  <div className="px-4 py-2 rounded-lg bg-background/50 border border-white/5 text-foreground text-sm font-medium group-hover:border-primary/20 group-hover:text-primary transition-colors cursor-default flex items-center gap-2">
                    <svg viewBox="0 0 128 128" className="w-5 h-5">
                      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                        <stop offset="0" stopColor="#5A9FD4" />
                        <stop offset="1" stopColor="#306998" />
                      </linearGradient>
                      <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                        <stop offset="0" stopColor="#FFD43B" />
                        <stop offset="1" stopColor="#FFE873" />
                      </linearGradient>
                      <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
                      <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" />
                    </svg>
                    Python
                  </div>

                  {/* n8n */}
                  <div className="px-4 py-2 rounded-lg bg-background/50 border border-white/5 text-foreground text-sm font-medium group-hover:border-primary/20 group-hover:text-primary transition-colors cursor-default flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#EA4B71">
                      <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632" />
                    </svg>
                    n8n
                  </div>

                  {/* LangChain */}
                  <div className="px-4 py-2 rounded-lg bg-background/50 border border-white/5 text-foreground text-sm font-medium group-hover:border-primary/20 group-hover:text-primary transition-colors cursor-default flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M6.0988 5.9175C2.7359 5.9175 0 8.6462 0 12s2.736 6.0825 6.0988 6.0825h11.8024C21.2641 18.0825 24 15.3538 24 12s-2.736-6.0825-6.0988-6.0825ZM5.9774 7.851c.493.0124 1.02.2496 1.273.6228.3673.4592.4778 1.0668.8944 1.4932.5604.6118 1.199 1.1505 1.7161 1.802.4892.5954.8386 1.2937 1.1436 1.9975.1244.2335.1257.5202.31.7197.0908.1204.5346.4483.4383.5645.0555.1204.4702.286.3263.4027-.1944.04-.4129.0476-.5616-.1074-.0549.126-.183.0596-.2819.0432a4 4 0 0 0-.025.0736c-.3288.0219-.5754-.3126-.732-.565-.3111-.168-.6642-.2702-.982-.446-.0182.2895.0452.6485-.231.8353-.014.5565.8436.0656.9222.4804-.061.0067-.1286-.0095-.1774.0373-.2239.2172-.4805-.1645-.7385-.007-.3464.174-.3808.3161-.8096.352-.0237-.0359-.0143-.0592.0059-.0811.1207-.1399.1295-.3046.3356-.3643-.2122-.0334-.3899.0833-.5686.1757-.2323.095-.2304-.2141-.5878.0164-.0396-.0322-.0208-.0615.0018-.0864.0908-.1107.2102-.127.345-.1208-.663-.3686-.9751.4507-1.2813.0432-.092.0243-.1265.1068-.1845.1652-.05-.0548-.0123-.1212-.0099-.1857-.0598-.028-.1356-.041-.1179-.1366-.1171-.0395-.1988.0295-.286.0952-.0787-.0608.0532-.1492.0776-.2125.0702-.1216.23-.025.3111-.1126.2306-.1308.552.0814.8155.0455.203.0255.4544-.1825.3526-.39-.2171-.2767-.179-.6386-.1839-.9695-.0268-.1929-.491-.4382-.6252-.6462-.1659-.1873-.295-.4047-.4243-.6182-.4666-.9008-.3198-2.0584-.9077-2.8947-.266.1466-.6125.0774-.8418-.119-.1238.1125-.1292.2598-.139.4161-.297-.2962-.2593-.8559-.022-1.1855.0969-.1302.2127-.2373.342-.3316.0292-.0213.0391-.0419.0385-.0747.1174-.5267.5764-.7391 1.0694-.7267m12.4071.46c.5575 0 1.0806.2159 1.474.6082s.61.9145.61 1.4704c0 .556-.2167 1.078-.61 1.4698v.0006l-.902.8995a2.08 2.08 0 0 1-.8597.5166l-.0164.0047-.0058.0164a2.05 2.05 0 0 1-.474.7308l-.9018.8995c-.3934.3924-.917.6083-1.4745.6083s-1.0806-.216-1.474-.6083c-.813-.8107-.813-2.1294 0-2.9402l.9019-.8995a2.056 2.056 0 0 1 .858-.5143l.017-.0053.0058-.0158a2.07 2.07 0 0 1 .4752-.7337l.9018-.8995c.3934-.3924.9171-.6083 1.4745-.6083zm0 .8965a1.18 1.18 0 0 0-.8388.3462l-.9018.8995a1.181 1.181 0 0 0-.3427.9252l.0053.0572c.0323.2652.149.5044.3374.6917.13.1296.2733.2114.4471.2686a.9.9 0 0 1 .014.1582.884.884 0 0 1-.2609.6304l-.0554.0554c-.3013-.1028-.5525-.253-.7794-.4792a2.06 2.06 0 0 1-.5761-1.0968l-.0099-.0578-.0461.0368a1.1 1.1 0 0 0-.0876.0794l-.9024.8995c-.4623.461-.4623 1.212 0 1.673.2311.2305.535.346.8394.3461.3043 0 .6077-.1156.8388-.3462l.9019-.8995c.4623-.461.4623-1.2113 0-1.673a1.17 1.17 0 0 0-.4367-.2749 1 1 0 0 1-.014-.1611c0-.2591.1023-.505.2901-.6923.3019.1028.57.2694.7962.495.3007.2999.4994.679.5756 1.0968l.0105.0578.0455-.0373a1.1 1.1 0 0 0 .0887-.0794l.902-.8996c.4622-.461.4628-1.2124 0-1.6735a1.18 1.18 0 0 0-.8395-.3462Zm-9.973 5.1567-.0006.0006c-.0793.3078-.1048.8318-.506.847-.033.1776.1228.2445.2655.1874.141-.0645.2081.0508.2557.1657.2177.0317.5394-.0725.5516-.3298-.325-.1867-.4253-.5418-.5662-.8709" />
                    </svg>
                    LangChain
                  </div>

                  {/* RAG */}
                  <div className="px-4 py-2 rounded-lg bg-background/50 border border-white/5 text-foreground text-sm font-medium group-hover:border-primary/20 group-hover:text-primary transition-colors cursor-default flex items-center gap-2">
                    <div className="text-[#3b82f6]"> {/* Use a nice blue specific to RAG/DB */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                        <path d="M3 12A9 3 0 0 0 21 12" />
                      </svg>
                    </div>
                    RAG
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div >
    </section >
  );
};
