import { PORTFOLIO_DATA } from "@/data";
import { Mail } from "lucide-react";

// Custom SVG for LinkedIn matching the Lucide style
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, personal } = PORTFOLIO_DATA;

  return (
    <footer
      id="contact"
      className="w-full bg-graphite text-paper pt-10 pb-6"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Footer Title Block */}
        <div
          className="
            border border-paper/20
            grid grid-cols-1
            md:grid-cols-4
            lg:grid-cols-12
            font-mono
            tracking-widest
          "
        >

          {/* ================================================= */}
          {/* BLOCK 1 — CONTACT CTA                            */}
          {/* ================================================= */}

          <div
            className="
              md:col-span-4
              lg:col-span-5
              border-b
              md:border-b-0
              md:border-r
              border-paper/20
              p-5
              lg:p-6
            "
          >
            <p className="text-base uppercase leading-tight">
              Get in touch
            </p>

            <p
              className="
                mt-4
                text-paper/55
                text-[10px]
                leading-relaxed
                uppercase
                max-w-md
              "
            >
              Open to new opportunities,
              <br />
              projects & collaborations.
            </p>

            <p
              className="
                mt-3
                text-blueprint
                text-[9px]
                uppercase
                tracking-widest
              "
            >
              Contact via LinkedIn or email
            </p>
          </div>


          {/* ================================================= */}
          {/* BLOCK 2 — NETWORK LINKS                          */}
          {/* ================================================= */}

          <div
            className="
              md:col-span-2
              lg:col-span-4
              border-b
              lg:border-b-0
              lg:border-r
              border-paper/20
              p-5
              lg:p-6
            "
          >
            <p className="text-paper/40 text-[9px] uppercase mb-4">
              Network Links
            </p>

            <div className="flex flex-col gap-3">

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-xs
                  uppercase
                  w-fit
                  hover:text-blueprint
                  transition-colors
                "
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="
                  flex
                  items-center
                  gap-3
                  text-xs
                  uppercase
                  w-fit
                  hover:text-blueprint
                  transition-colors
                "
              >
                <Mail className="w-4 h-4" />
                Email
              </a>

            </div>
          </div>


          {/* ================================================= */}
          {/* BLOCK 3 — RESUME                                  */}
          {/* ================================================= */}

          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="
              md:col-span-4
              lg:col-span-3
              p-5
              lg:p-6
              flex
              flex-row
              lg:flex-col
              justify-between
              lg:min-h-[150px]
              bg-blueprint
              text-paper
              hover:bg-paper
              hover:text-graphite
              transition-colors
            "
          >
            <p className="text-[9px] uppercase font-bold opacity-50">
              Action
            </p>

            <div className="text-right">
              <p className="uppercase font-bold text-lg leading-none">
                Get
              </p>

              <p className="uppercase font-bold text-lg leading-none">
                Resume
              </p>

              <p className="text-[9px] mt-2 opacity-50">
                Rev. {currentYear}
              </p>
            </div>
          </a>

        </div>


        {/* Copyright */}
        <div
          className="
            mt-5
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            gap-2
            font-mono
            text-[9px]
            text-paper/35
            tracking-widest
            uppercase
            text-center
            sm:text-left
          "
        >
          <p>
            © {currentYear} {personal.name}. All rights reserved.
          </p>

          <p>
            Designed & Built by Aris Loumidis
          </p>
        </div>

      </div>
    </footer>
  );
}