// Curated source-grounded snapshot. Do not infer features from template dependencies.
export type Tool = { id: string; name: string; url: string; description: string; group: string };
export type StackLayer = { text: string; tools: string[] };
export type ArchitectureProject = {
 id: number; slug: string; name: string; url: string; category: string; purpose: string;
 repo: string | null; private: boolean; sha: string | null; layers: StackLayer[];
 flow: string[]; notes: string[]; evidence: string[]; analytics: string[]; build: string[];
};
export const REVIEWED_DATE = "October 31, 2026";
export const layerNames = ["User interface", "Application logic & API", "Identity & integrations", "Data & files", "Runtime & network", "Physical hardware"];
export const tools: Tool[] = [
  {
    "id": "microlink",
    "name": "Microlink",
    "url": "https://microlink.io/docs",
    "description": "A public screenshot endpoint tried by the project catalog when capturing a site.",
    "group": "Integration"
  },
  {
    "id": "thumio",
    "name": "Thum.io",
    "url": "https://www.thum.io/documentation/api/url",
    "description": "A fallback public screenshot endpoint for project thumbnails.",
    "group": "Integration"
  },
  {
    "id": "tidycal",
    "name": "TidyCal / booking link",
    "url": "https://tidycal.com/",
    "description": "The default external booking destination; the admin can replace the saved URL.",
    "group": "Integration"
  },
  {
    "id": "react",
    "name": "React",
    "url": "https://react.dev/",
    "description": "Builds interactive pages out of reusable components.",
    "group": "Interface"
  },
  {
    "id": "tailwind",
    "name": "Tailwind CSS",
    "url": "https://tailwindcss.com/",
    "description": "Styles layout, spacing, colors and responsive views.",
    "group": "Interface"
  },
  {
    "id": "wouter",
    "name": "Wouter",
    "url": "https://github.com/molefrog/wouter",
    "description": "Chooses the page to show for a browser URL.",
    "group": "Interface"
  },
  {
    "id": "query",
    "name": "TanStack Query",
    "url": "https://tanstack.com/query/latest",
    "description": "Fetches server data, caches it and refreshes screens after changes.",
    "group": "Interface"
  },
  {
    "id": "leaflet",
    "name": "Leaflet",
    "url": "https://leafletjs.com/",
    "description": "Draws interactive maps, markers, routes and popups.",
    "group": "Interface"
  },
  {
    "id": "turf",
    "name": "Turf.js",
    "url": "https://turfjs.org/",
    "description": "Works out spatial relationships, such as which polygon contains an address.",
    "group": "Logic"
  },
  {
    "id": "hono",
    "name": "Hono",
    "url": "https://hono.dev/",
    "description": "Receives HTTP requests and sends API responses.",
    "group": "Logic"
  },
  {
    "id": "orpc",
    "name": "oRPC",
    "url": "https://orpc.dev/",
    "description": "Connects typed browser calls to server procedures.",
    "group": "Logic"
  },
  {
    "id": "zod",
    "name": "Zod",
    "url": "https://zod.dev/",
    "description": "Checks that submitted data has the expected shape and allowed values.",
    "group": "Logic"
  },
  {
    "id": "express",
    "name": "Express",
    "url": "https://expressjs.com/",
    "description": "Routes HTTP requests in the Node-based Help Desk.",
    "group": "Logic"
  },
  {
    "id": "multer",
    "name": "Multer",
    "url": "https://github.com/expressjs/multer",
    "description": "Accepts multipart uploaded attachments in the Help Desk.",
    "group": "Logic"
  },
  {
    "id": "cortendesk",
    "name": "CortenDesk",
    "url": "https://github.com/marcpope/cortendesk",
    "description": "A separate self-hosted RustDesk console/rendezvous/relay bundle in supporting deployment sources; not part of the ticket web server.",
    "group": "Integration"
  },
  {
    "id": "rdgen",
    "name": "RDGen",
    "url": "https://rdgen.crayoneater.org/",
    "description": "Generates preconfigured RustDesk clients in the supporting source workflow; not a ticket-page dependency.",
    "group": "Workbench"
  },
  {
    "id": "rrule",
    "name": "rrule.js",
    "url": "https://github.com/jkbrzt/rrule",
    "description": "Expands recurring calendar rules into individual occurrences.",
    "group": "Logic"
  },
  {
    "id": "cron",
    "name": "node-cron",
    "url": "https://nodecron.com/",
    "description": "Triggers jobs on cron schedules inside a running server process.",
    "group": "Logic"
  },
  {
    "id": "bash",
    "name": "Bash",
    "url": "https://www.gnu.org/software/bash/",
    "description": "Runs the commands configured in the job scheduler.",
    "group": "Logic"
  },
  {
    "id": "python",
    "name": "Python",
    "url": "https://www.python.org/",
    "description": "Builds and refreshes street-sweeping datasets from civic sources.",
    "group": "Logic"
  },
  {
    "id": "hash",
    "name": "SHA-256 / noble hashes",
    "url": "https://github.com/paulmillr/noble-hashes",
    "description": "Creates fingerprints for tamper-evident audit chains; it is not a blockchain.",
    "group": "Logic"
  },
  {
    "id": "pdf",
    "name": "jsPDF",
    "url": "https://github.com/parallax/jsPDF",
    "description": "Creates downloadable PDF reports in the browser.",
    "group": "Logic"
  },
  {
    "id": "zip",
    "name": "fflate",
    "url": "https://github.com/101arrowz/fflate",
    "description": "Packages election exports into ZIP files.",
    "group": "Logic"
  },
  {
    "id": "pdfjs",
    "name": "PDF.js",
    "url": "https://mozilla.github.io/pdf.js/",
    "description": "Renders uploaded PDF notices for bulletin-board previews.",
    "group": "Interface"
  },
  {
    "id": "qr",
    "name": "QR codes / qrcode",
    "url": "https://github.com/soldair/node-qrcode",
    "description": "Turns a project, notice or ballot URL into a scannable code.",
    "group": "Interface"
  },
  {
    "id": "betterauth",
    "name": "Better Auth",
    "url": "https://www.better-auth.com/",
    "description": "Manages sign-in, account records and sessions; enabled methods vary by app.",
    "group": "Integration"
  },
  {
    "id": "googleauth",
    "name": "Google OAuth",
    "url": "https://developers.google.com/identity/protocols/oauth2",
    "description": "Lets someone prove their identity using a Google account.",
    "group": "Integration"
  },
  {
    "id": "managedauth",
    "name": "Runable managed auth",
    "url": "https://runable.com/",
    "description": "A configured sign-in broker in the bulletin-board source; not shared by every app.",
    "group": "Integration"
  },
  {
    "id": "smtp",
    "name": "SMTP / Nodemailer",
    "url": "https://nodemailer.com/",
    "description": "Relays email through a configured mail server. SMTP is the protocol; Nodemailer is the library.",
    "group": "Integration"
  },
  {
    "id": "resend",
    "name": "Resend",
    "url": "https://resend.com/docs",
    "description": "Delivers transactional email when keys and a sending domain are configured.",
    "group": "Integration"
  },
  {
    "id": "sendfox",
    "name": "SendFox",
    "url": "https://sendfox.com/",
    "description": "An alternate configured email delivery path in Our Election.",
    "group": "Integration"
  },
  {
    "id": "ses",
    "name": "Amazon SES",
    "url": "https://docs.aws.amazon.com/ses/",
    "description": "An alternate email provider implemented in Chicago Votes; activation is configuration-dependent.",
    "group": "Integration"
  },
  {
    "id": "telnyx",
    "name": "Telnyx",
    "url": "https://developers.telnyx.com/",
    "description": "Sends opted-in text messages when the account and sender are configured.",
    "group": "Integration"
  },
  {
    "id": "sent",
    "name": "Sent",
    "url": "https://docs.sent.dm/",
    "description": "Delivers approved messaging templates. Chicago Votes exposes WhatsApp, with SMS/auto routing gated.",
    "group": "Integration"
  },
  {
    "id": "shortio",
    "name": "Short.io",
    "url": "https://developers.short.io/",
    "description": "Shortens destination-only directions links; the original URL remains the fallback.",
    "group": "Integration"
  },
  {
    "id": "push",
    "name": "Web Push",
    "url": "https://developer.mozilla.org/en-US/docs/Web/API/Push_API",
    "description": "Delivers browser notifications to people who subscribe and grant permission.",
    "group": "Integration"
  },
  {
    "id": "osm",
    "name": "OpenStreetMap",
    "url": "https://www.openstreetmap.org/about",
    "description": "Supplies the base map tiles for geographic context.",
    "group": "Integration"
  },
  {
    "id": "census",
    "name": "US Census geocoder",
    "url": "https://geocoding.geo.census.gov/geocoder/",
    "description": "Converts an address to coordinates and geographic jurisdiction.",
    "group": "Integration"
  },
  {
    "id": "nominatim",
    "name": "Nominatim",
    "url": "https://nominatim.org/",
    "description": "Geocodes addresses from OpenStreetMap data; a fallback in Chicago Votes.",
    "group": "Integration"
  },
  {
    "id": "chicago",
    "name": "Chicago Data Portal / Socrata",
    "url": "https://data.cityofchicago.org/",
    "description": "Publishes street-sweeping boundaries, schedules and available vehicle data.",
    "group": "Integration"
  },
  {
    "id": "cboe",
    "name": "Chicago Board of Elections",
    "url": "https://chicagoelections.gov/",
    "description": "Provides official city voting locations and polling-place information.",
    "group": "Integration"
  },
  {
    "id": "cook",
    "name": "Cook County Clerk",
    "url": "https://www.cookcountyclerkil.gov/elections",
    "description": "Provides suburban voting locations and address-based polling-place information.",
    "group": "Integration"
  },
  {
    "id": "ical",
    "name": "iCalendar / ICS",
    "url": "https://www.rfc-editor.org/rfc/rfc5545",
    "description": "A portable format for reading events and adding them to personal calendars.",
    "group": "Integration"
  },
  {
    "id": "rss",
    "name": "RSS",
    "url": "https://www.rssboard.org/rss-specification",
    "description": "A published feed format used by supported calendar-source connectors.",
    "group": "Integration"
  },
  {
    "id": "squarespace",
    "name": "Squarespace",
    "url": "https://www.squarespace.com/",
    "description": "Hosts some source organizations’ event pages; the calendar reads supported pages.",
    "group": "Integration"
  },
  {
    "id": "drive",
    "name": "Google Drive API",
    "url": "https://developers.google.com/workspace/drive/api/guides/about-sdk",
    "description": "Reads shared photography folders during a server-side import.",
    "group": "Integration"
  },
  {
    "id": "turnstile",
    "name": "Cloudflare Turnstile",
    "url": "https://developers.cloudflare.com/turnstile/",
    "description": "Checks anti-bot tokens for the live straw poll; real keys are needed for real enforcement.",
    "group": "Integration"
  },
  {
    "id": "worker",
    "name": "Cloudflare Email Routing / Workers",
    "url": "https://developers.cloudflare.com/email-routing/email-workers/",
    "description": "Receives email and invokes code that forwards a parsed message to Help Desk.",
    "group": "Integration"
  },
  {
    "id": "postalmime",
    "name": "postal-mime",
    "url": "https://github.com/postalsys/postal-mime",
    "description": "Parses inbound email bodies and attachments in the email worker.",
    "group": "Integration"
  },
  {
    "id": "rustdesk",
    "name": "RustDesk",
    "url": "https://rustdesk.com/",
    "description": "A separate remote-support client; the Help Desk shares downloads and records connection IDs.",
    "group": "Integration"
  },
  {
    "id": "drizzle",
    "name": "Drizzle ORM",
    "url": "https://orm.drizzle.team/",
    "description": "Describes database tables and turns application queries into SQL.",
    "group": "Data"
  },
  {
    "id": "libsql",
    "name": "libSQL / SQLite",
    "url": "https://github.com/tursodatabase/libsql",
    "description": "The SQL database engine/client used for application records.",
    "group": "Data"
  },
  {
    "id": "turso",
    "name": "Turso",
    "url": "https://docs.turso.tech/",
    "description": "Hosts libSQL application databases; local fallback files are not the same as a hosted database.",
    "group": "Data"
  },
  {
    "id": "sqlite",
    "name": "SQLite / better-sqlite3",
    "url": "https://github.com/WiseLibs/better-sqlite3",
    "description": "Stores Help Desk records in a local database file.",
    "group": "Data"
  },
  {
    "id": "s3",
    "name": "S3-compatible storage / AWS SDK",
    "url": "https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html",
    "description": "Stores file objects and creates upload/download links. Using the S3 API does not imply AWS hosts the files.",
    "group": "Data"
  },
  {
    "id": "tigris",
    "name": "Tigris",
    "url": "https://www.tigrisdata.com/docs/",
    "description": "S3-compatible object storage documented for Library of Things and the photo portfolio.",
    "group": "Data"
  },
  {
    "id": "disk",
    "name": "Filesystem / persistent volume",
    "url": "https://docs.railway.com/volumes",
    "description": "Stores local files; a durable mount is necessary to survive container replacement.",
    "group": "Data"
  },
  {
    "id": "bun",
    "name": "Bun",
    "url": "https://bun.sh/",
    "description": "Runs the TypeScript/JavaScript web server and installs project packages.",
    "group": "Runtime"
  },
  {
    "id": "node",
    "name": "Node.js",
    "url": "https://nodejs.org/",
    "description": "Runs the Help Desk JavaScript server.",
    "group": "Runtime"
  },
  {
    "id": "docker",
    "name": "Docker",
    "url": "https://docs.docker.com/",
    "description": "Packages the server and its dependencies into a repeatable container image.",
    "group": "Runtime"
  },
  {
    "id": "railway",
    "name": "Railway",
    "url": "https://docs.railway.com/",
    "description": "A documented deployment target for web services; a config file alone is not proof of the active host.",
    "group": "Runtime"
  },
  {
    "id": "cloudflare",
    "name": "Cloudflare",
    "url": "https://developers.cloudflare.com/",
    "description": "Provides DNS or an edge proxy where documented or visible in public response headers.",
    "group": "Runtime"
  },
  {
    "id": "browser",
    "name": "Web browser / HTTPS",
    "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    "description": "Runs the interface on a visitor’s device and exchanges encrypted HTTPS requests with services.",
    "group": "Runtime"
  },
  {
    "id": "wordpress",
    "name": "WordPress",
    "url": "https://wordpress.org/",
    "description": "Hosts the article containing the inline Photo Tour Map; it is not a separate George-built backend.",
    "group": "Runtime"
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "url": "https://www.typescriptlang.org/",
    "description": "Checks code types during development and build; browsers receive JavaScript.",
    "group": "Workbench"
  },
  {
    "id": "vite",
    "name": "Vite",
    "url": "https://vite.dev/",
    "description": "Serves local development and builds the production browser bundle.",
    "group": "Workbench"
  },
  {
    "id": "github",
    "name": "GitHub",
    "url": "https://github.com/",
    "description": "Stores versioned source and supports review and deployment workflows.",
    "group": "Workbench"
  },
  {
    "id": "runable",
    "name": "Runable",
    "url": "https://runable.com/",
    "description": "The build workspace and managed app scaffold for the modern web projects, not a required hop in every request.",
    "group": "Workbench"
  },
  {
    "id": "ga",
    "name": "Google Analytics",
    "url": "https://developers.google.com/analytics",
    "description": "Collects website usage measurements through a browser script where observed.",
    "group": "Measurement"
  },
  {
    "id": "goat",
    "name": "GoatCounter",
    "url": "https://www.goatcounter.com/",
    "description": "Counts website visits through a browser script where observed.",
    "group": "Measurement"
  },
  {
    "id": "ahrefs",
    "name": "Ahrefs Web Analytics",
    "url": "https://ahrefs.com/web-analytics",
    "description": "Collects website traffic measurements through a browser script where observed.",
    "group": "Measurement"
  }
];
export const architectureProjects: ArchitectureProject[] = [
  {
    "id": 14,
    "slug": "our-election",
    "name": "Our Election",
    "url": "https://ourelection.app/",
    "category": "Civic",
    "purpose": "Run explainable elections for clubs, boards and classrooms: create a ballot, invite eligible voters and publish a count people can follow.",
    "repo": "ourelection",
    "private": true,
    "sha": "e4815eeaca48c82899ee7139f6c0ff67b545a08a",
    "layers": [
      {
        "text": "React clerk screens, a one-race-at-a-time voter ballot and public round-by-round results. QR codes share ballot links; browser exports produce PDFs and ZIP files.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query",
          "qr"
        ]
      },
      {
        "text": "Server procedures enforce eligibility, consume credentials atomically and count plurality, approval, IRV/STV, score, STAR and questions. SHA-256 chains make audit changes detectable; no blockchain is involved.",
        "tools": [
          "hono",
          "zod",
          "orpc",
          "hash",
          "pdf",
          "zip"
        ]
      },
      {
        "text": "Better Auth handles clerk sessions with Google or email/password. Voters use invitation/code or open-link credentials without creating accounts. Transactional mail has Resend and alternate SendFox paths; delivery needs configured credentials.",
        "tools": [
          "betterauth",
          "googleauth",
          "resend",
          "sendfox"
        ]
      },
      {
        "text": "Drizzle/libSQL store elections, races, rosters, credentials, separate sealed ballot rows and audit records. Each race is stored without a cross-race voter link. Production Turso separation is documented.",
        "tools": [
          "drizzle",
          "libsql",
          "turso"
        ]
      },
      {
        "text": "Deployment documentation names Railway, a single web replica and a separate production Turso database. Bun serves Hono and the built React app. Cloudflare was observed in public response headers.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway",
          "cloudflare"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A voter opens a ballot link and reviews their choices.",
      "The API checks the credential and saves separate sealed race records.",
      "After closure, the counting engine computes results; publication waits for required tie decisions."
    ],
    "notes": [
      "For private organizations and education, not government elections.",
      "Separated records and encrypted stored codes reduce linkage, but the submission server still receives credentials and choices together. This is not cryptographic end-to-end anonymity.",
      "Email provider activation and the deployed revision were not tested through real voter mail."
    ],
    "evidence": [
      "api/routes/voting.ts; services/ballot-seal.ts; services/count/*",
      "services/security.ts; services/audit.ts; web/lib/election-export.ts",
      "deploy/README.md documents Railway and a separate production Turso database"
    ],
    "analytics": [],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 13,
    "slug": "bulletin-boards",
    "name": "Community Bulletin Boards",
    "url": "https://boards.gneill.net/",
    "category": "Community",
    "purpose": "Give organizations their own neighborhood notice boards, with moderation, sponsor identity and links back to the people hosting events.",
    "repo": "community-bulletin-board",
    "private": true,
    "sha": "ec40d2d31982842cb725d24e9255eaf912f0c6bc",
    "layers": [
      {
        "text": "A React cork-board interface displays image/PDF notices, links and QR codes; responsive density rules keep a busy board usable.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query",
          "pdfjs",
          "qr"
        ]
      },
      {
        "text": "Board-scoped API rules handle submissions, moderation, roles, content review, domain selection and private upload access.",
        "tools": [
          "hono",
          "zod",
          "orpc"
        ]
      },
      {
        "text": "Better Auth supports email one-time codes, Google and a managed-auth path. SMTP/Nodemailer or Resend delivers approval and account mail when configured.",
        "tools": [
          "betterauth",
          "googleauth",
          "managedauth",
          "smtp",
          "resend"
        ]
      },
      {
        "text": "Drizzle/libSQL store boards, organizations, notices and membership. A private S3-compatible bucket stores uploaded notice files; provider choice comes from configuration.",
        "tools": [
          "drizzle",
          "libsql",
          "turso",
          "s3"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway",
          "cloudflare"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A neighbor submits a notice to a particular board.",
      "The API stores its file and record, then applies the board’s review rules.",
      "Approved notices appear on that board; PDF.js renders PDF previews."
    ],
    "notes": [
      "The README still contains migration warnings from an earlier Express version. The public site now serves a bundled web app; production database/storage migration details were not inspected.",
      "Uploaded-file privacy and board access are application rules, not properties of React or a QR code."
    ],
    "evidence": [
      "api/lib/board-store.ts; lib/access.ts; lib/storage.ts; routes/bulletin.ts",
      "api/auth.ts; lib/mail.ts; web/lib/render-file.ts",
      "railway.json targets a Bun web service"
    ],
    "analytics": [],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 1,
    "slug": "library-of-things",
    "name": "Library of Things",
    "url": "https://grolot.thegreaterrockwell.org/",
    "category": "Community",
    "purpose": "Help neighbors lend useful things, ask for what they need and build trust through shared resources instead of buying everything separately.",
    "repo": "GRO-LOT",
    "private": true,
    "sha": "06cc1a171624d2c418293ea8a9a6af20bde0bcfb",
    "layers": [
      {
        "text": "React catalog, listing forms, loan conversations, wanted posts and an admin console. Photos are prepared in the browser; QR codes help share links.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query",
          "qr"
        ]
      },
      {
        "text": "Typed procedures apply member approval, loan overlap and status rules, private-message access, reminders, badges and audit logging.",
        "tools": [
          "hono",
          "zod",
          "orpc"
        ]
      },
      {
        "text": "Better Auth has native social/email-code sign-in and two-factor support. Nodemailer sends via configurable SMTP (Resend defaults); Telnyx texts and Web Push are opt-in/configuration-dependent.",
        "tools": [
          "betterauth",
          "googleauth",
          "smtp",
          "resend",
          "telnyx",
          "push"
        ]
      },
      {
        "text": "Drizzle/libSQL keep members, items, requests, conversations and notification records. Photos use S3-compatible Tigris object storage, separate from SQL records.",
        "tools": [
          "drizzle",
          "libsql",
          "turso",
          "s3",
          "tigris"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A member requests an item for a time window.",
      "The API checks membership and dates, saves the request and notifies the owner.",
      "Approval updates the loan and handles conflicting pending requests; messages stay attached to the loan."
    ],
    "notes": [
      "The older architecture document predates SMTP, reminder and push changes; current source takes precedence.",
      "SMTP requires reachable outbound mail ports. Texts need a configured approved sender; push requires browser permission and server keys."
    ],
    "evidence": [
      "api/auth.ts; lib/mailer.ts; lib/notify.ts; lib/push.ts; lib/reminders.ts",
      "api/routes/requests.ts; messages.ts; upload.ts",
      "railway.toml documents external Turso/Tigris storage and a web-only Docker image"
    ],
    "analytics": [
      "ga",
      "goat",
      "ahrefs"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 12,
    "slug": "chicago-votes",
    "name": "Chicago Votes",
    "url": "https://chivotes.fyi/",
    "category": "Civic",
    "purpose": "Find nearby early voting sites, explain when they are open and let someone keep the details and directions.",
    "repo": "ChiVotes",
    "private": true,
    "sha": "f9059ee107fc1e247d84e535edc3097e9b8a5feb",
    "layers": [
      {
        "text": "React search panel over a Leaflet/OpenStreetMap map, with desktop panels and a mobile bottom sheet.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query",
          "leaflet"
        ]
      },
      {
        "text": "The API geocodes the address, picks the jurisdiction, retrieves official locations and ranks nearby/open sites. It caches source snapshots and rate-limits share requests.",
        "tools": [
          "hono",
          "zod",
          "orpc"
        ]
      },
      {
        "text": "US Census geocoding falls back to Nominatim. CBOE pages and Cook County APIs supply voting data. Email supports Resend/SES; Sent WhatsApp and optional Short.io links have explicit configuration gates.",
        "tools": [
          "census",
          "nominatim",
          "cboe",
          "cook",
          "osm",
          "resend",
          "ses",
          "sent",
          "shortio"
        ]
      },
      {
        "text": "Drizzle/libSQL persist local application records including hashed share/rate-limit identifiers. External election data is read and cached; it is not a voter-registration database.",
        "tools": [
          "drizzle",
          "libsql",
          "turso"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway",
          "cloudflare"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A visitor enters an address.",
      "The server geocodes it and chooses city or suburban official sources.",
      "The interface shows nearby locations and hours; an optional share request goes through the configured provider."
    ],
    "notes": [
      "Hours and drop-box rules contain election-specific settings that must be reviewed each election. A last-good snapshot can be stale.",
      "The README reports Resend active and SES code not yet activated. Sent public messaging is WhatsApp-only; SMS/automatic routing stays gated pending approval.",
      "A Short.io failure falls back to the original destination-only Google directions link."
    ],
    "evidence": [
      "api/services/geocode.ts; sources.ts; polling.ts; short-links.ts",
      "api/services/notify.ts; sent.ts; README.md; SENT_SETUP.md",
      "railway.json; README documents Cloudflare DNS → Railway"
    ],
    "analytics": [
      "ga",
      "goat"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 2,
    "slug": "street-sweeper",
    "name": "Chicago Street Sweeper Schedule",
    "url": "https://chistreetsweeper.date/",
    "category": "Civic",
    "purpose": "Let residents find the sweeping schedule for their block, see available sweeper locations and opt into reminder emails.",
    "repo": "Chi-Street-Sweeper",
    "private": true,
    "sha": "16d4f3a6fbedc55a8c76a676c0c49a931076bd54",
    "layers": [
      {
        "text": "React and Leaflet show sweeping polygons, dates and available vehicle markers. Turf helps match a location to the correct zone.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query",
          "leaflet"
        ]
      },
      {
        "text": "The API serves zone/date lookups, calendar downloads, reminder subscriptions and vehicle data. Python refreshes civic datasets; protected job endpoints perform scheduled work.",
        "tools": [
          "hono",
          "zod",
          "orpc",
          "turf",
          "python"
        ]
      },
      {
        "text": "Chicago’s Socrata data provides boundaries, schedules and vehicle data. US Census geocoding turns addresses into map points; OpenStreetMap supplies tiles. Resend handles configured reminder emails; ICS adds dates to personal calendars.",
        "tools": [
          "chicago",
          "census",
          "osm",
          "resend",
          "ical",
          "betterauth",
          "googleauth"
        ]
      },
      {
        "text": "Drizzle/libSQL store subscriptions and application data. Generated civic-data snapshots are kept separately from the authoritative city sources.",
        "tools": [
          "drizzle",
          "libsql",
          "turso",
          "disk"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway",
          "cloudflare"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A resident searches their address.",
      "Geocoding and spatial matching identify the sweeping zone and its published dates.",
      "A separate scheduled reminder call selects upcoming subscriptions and sends email."
    ],
    "notes": [
      "The reminder service depends on an external scheduler invoking the protected endpoint; a web deployment alone does not guarantee reminders run.",
      "City schedules and vehicle updates can be delayed or change. Available location data is not a guarantee of real-time coverage."
    ],
    "evidence": [
      "api/services/zones.ts; sweepers.ts; city-data.ts; reminders.ts; calendar.ts",
      "web/lib/zones.ts; scripts/build-zones.py; data-pipeline/README.md",
      "README documents external reminder scheduling; railway.json targets Docker"
    ],
    "analytics": [
      "ga",
      "goat",
      "ahrefs"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 3,
    "slug": "community-calendar",
    "name": "Community Calendar",
    "url": "https://community-calendar.up.railway.app/",
    "category": "Community",
    "purpose": "Combine neighborhood organizations’ calendars into one searchable, categorized view while retaining links and attribution to the original organizers.",
    "repo": "CommunityCalendar",
    "private": false,
    "sha": "96f39e9709c9b328a170b1aae2a06fde76ad3407",
    "layers": [
      {
        "text": "React calendar and list views filter events by date, category and search. Admin controls configure feeds and keyword matching.",
        "tools": [
          "react",
          "tailwind",
          "wouter"
        ]
      },
      {
        "text": "Hono REST endpoints fetch/parse feeds, expand recurrence with rrule.js, normalize dates, deduplicate events and apply category rules. This project uses a Hono client, not oRPC.",
        "tools": [
          "hono",
          "rrule"
        ]
      },
      {
        "text": "Reads public Google Calendar/ICS feeds and supported RSS/Squarespace event sources. Better Auth and Google protect administration. Events can link to their organizer and personal-calendar actions.",
        "tools": [
          "ical",
          "rss",
          "squarespace",
          "betterauth",
          "googleauth"
        ]
      },
      {
        "text": "Drizzle/libSQL store settings and categories. Source events are fetched and combined; the app is an aggregator, not the owner of organizations’ calendars.",
        "tools": [
          "drizzle",
          "libsql",
          "turso"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "The server reads configured public event sources.",
      "It parses recurring dates, removes duplicates and classifies events.",
      "Visitors filter the combined view and open the original event or add it to their calendar."
    ],
    "notes": [
      "Public feed access and each supported page format can fail or change. Classification uses editable keyword rules, not AI.",
      "A source organizer’s branding is attribution, not a claim that the organizer operates this app."
    ],
    "evidence": [
      "api/index.ts; api/lib/feeds.ts; lib/dedupe.ts",
      "web/lib/calendarUtils.ts; api/database/index.ts",
      "railway.toml targets a Bun server in a web-only container"
    ],
    "analytics": [
      "goat",
      "ahrefs"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 10,
    "slug": "volunteer-shifts",
    "name": "Volunteer Shift Sign Up",
    "url": "https://shifts.gneill.net/",
    "category": "Community",
    "purpose": "Replace weekly signup spreadsheets with self-serve shift claims, coverage rules, waitlists and personal calendars for staff and volunteers.",
    "repo": "shift-board",
    "private": true,
    "sha": "1ac991a4cd4b9f20a9afa1865f035a2e047800c8",
    "layers": [
      {
        "text": "React weekly schedules, My shifts, people/roster screens and supervisor/admin controls.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query"
        ]
      },
      {
        "text": "The API enforces roles, eligibility, capacity and waitlists, handles releases/promotions and generates recurring schedules and calendar feeds.",
        "tools": [
          "hono",
          "zod",
          "orpc"
        ]
      },
      {
        "text": "Better Auth owns sessions directly, using Google plus email/password. Resend sends reminders and supervisor notifications when configured; personal ICS feeds integrate with calendars.",
        "tools": [
          "betterauth",
          "googleauth",
          "resend",
          "ical"
        ]
      },
      {
        "text": "Drizzle/libSQL store people, events, shifts, signups, waitlists, supervisor assignments and settings.",
        "tools": [
          "drizzle",
          "libsql",
          "turso"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway",
          "cloudflare"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A volunteer claims an eligible shift and chooses office or remote.",
      "The API confirms a place or joins the waitlist and updates the roster.",
      "Releasing a place can promote the next person; notifications and calendar views reflect the change."
    ],
    "notes": [
      "Staff can cover volunteer shifts; volunteers cannot self-claim staff-only shifts. Supervisors/admins have assignment controls.",
      "Reminders need configured email delivery and a caller for the protected reminder job endpoint."
    ],
    "evidence": [
      "api/routes/signups.ts; services/roles.ts; supervisor-assignments.ts",
      "api/services/notifications.ts; reminders.ts; lib/ics.ts; auth.ts",
      "README documents direct Google OAuth and Railway Docker deployment"
    ],
    "analytics": [
      "goat"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 7,
    "slug": "rcv-demo",
    "name": "Ranked Choice Voting Demo",
    "url": "https://rcv2028.win/",
    "category": "Civic",
    "purpose": "Teach ranked-choice voting with visible ballot transfers, seeded examples and comparisons between first-choice totals and later rounds.",
    "repo": "rcv2028",
    "private": true,
    "sha": "ded1f7ab1e946d297d439532dae72d4e55d8fbf0",
    "layers": [
      {
        "text": "React ranking controls, candidate bars and a round scrubber animate how ballots move when a candidate is eliminated.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query"
        ]
      },
      {
        "text": "The API validates rankings, combines optional seeded demo ballots with visitor ballots and tabulates instant-runoff rounds. Client-side controls visualize the returned count.",
        "tools": [
          "hono",
          "zod",
          "orpc"
        ]
      },
      {
        "text": "A browser-local voter token identifies the visitor’s editable ballot. No voter account or external identity verification is required.",
        "tools": [
          "browser"
        ]
      },
      {
        "text": "Drizzle/libSQL store candidates and real/demo ballots by race; this is not a purely local simulation. Public payloads omit voter tokens from the displayed ballot list.",
        "tools": [
          "drizzle",
          "libsql",
          "turso"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A visitor ranks candidates and submits their ballot.",
      "The API saves or replaces that browser-token ballot in the shared database.",
      "The state procedure tabulates rounds; the scrubber visualizes the transfers."
    ],
    "notes": [
      "An educational demo, not a representative poll or a verified one-person-one-vote election. Browser tokens are not verified identities.",
      "The demo-ballot toggle changes which stored ballots are included in the displayed count."
    ],
    "evidence": [
      "api/routes/poll.ts; lib/demo-ballots.ts; lib/rcv.ts",
      "api/database/schema.ts; web/lib/voter.ts",
      "railway.json targets Bun/Docker"
    ],
    "analytics": [
      "ga",
      "goat",
      "ahrefs"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 11,
    "slug": "rcv-live",
    "name": "Ranked Choice Voting Live Straw Poll",
    "url": "https://rcv.live/",
    "category": "Civic",
    "purpose": "Let visitors participate in informal ranked-choice straw polls and follow the real submitted ballots through an instant-runoff count.",
    "repo": "rcv.live",
    "private": true,
    "sha": "d9445d79ea1952de67818fba97d11ca199fec32d",
    "layers": [
      {
        "text": "React ranking screens and live results show candidates, transfers and round totals for multiple poll fields.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query"
        ]
      },
      {
        "text": "The API validates votes and tabulates stored ballots; integrity helpers apply token, rate and anti-bot controls rather than relying only on UI checks.",
        "tools": [
          "hono",
          "zod",
          "orpc"
        ]
      },
      {
        "text": "Cloudflare Turnstile verifies challenge tokens when real production keys are configured. Browser voter tokens support returning visitors without formal voter accounts.",
        "tools": [
          "turnstile",
          "browser"
        ]
      },
      {
        "text": "Drizzle/libSQL store poll candidates, ballots and integrity records for the shared count.",
        "tools": [
          "drizzle",
          "libsql",
          "turso"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway",
          "cloudflare"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A visitor ranks candidates and completes any configured challenge.",
      "The API checks integrity gates and stores the accepted ballot.",
      "The tabulation engine produces updated instant-runoff results for the interface."
    ],
    "notes": [
      "A straw poll, not a representative sample or a government election. Anti-bot gates do not verify one unique human per ballot.",
      "The source explicitly warns that test Turnstile keys skip meaningful enforcement; active production secrets were not inspected."
    ],
    "evidence": [
      "api/routes/poll.ts; lib/integrity.ts; lib/tabulate.ts",
      "api/database/schema.ts; web/lib/voter.ts",
      "railway.json; public HTTP response has Cloudflare headers"
    ],
    "analytics": [
      "ga",
      "goat"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 4,
    "slug": "photos-by-george",
    "name": "photos by George",
    "url": "https://gneill.net/",
    "category": "Personal",
    "purpose": "Publish a category-based photo portfolio with highlighted favorites, using Drive folders to make uploading and organizing photographs easier.",
    "repo": "photosbyGeorge",
    "private": true,
    "sha": "30d6b1dd2098626e358e61b23b05459204cf6285",
    "layers": [
      {
        "text": "React category galleries, featured slideshows, reviews/blog sections and admin photo controls.",
        "tools": [
          "react",
          "tailwind",
          "wouter"
        ]
      },
      {
        "text": "Hono REST routes manage photo metadata and uploads. A server-side Drive import walks category/subcategory folders, reads files, copies objects and records gallery metadata.",
        "tools": [
          "hono"
        ]
      },
      {
        "text": "Better Auth and Google protect administration. Google Drive API reads folders shared with the configured service account; Drive is an import source, not necessarily the visitor-facing image server.",
        "tools": [
          "betterauth",
          "googleauth",
          "drive"
        ]
      },
      {
        "text": "Drizzle/libSQL keep photo/category metadata. S3-compatible object storage holds image bytes; deployment notes identify Tigris.",
        "tools": [
          "drizzle",
          "libsql",
          "turso",
          "s3",
          "tigris"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway",
          "cloudflare"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "George triggers an import from a configured Drive folder.",
      "The server reads images, stores file objects and creates category/photo records.",
      "Visitors browse database-backed galleries and fetch the published images."
    ],
    "notes": [
      "The live React 19 bundle and API family match photosbyGeorge, not the older React 18/Supabase gneill.net repository. Exact deployed commit was not established.",
      "The reviewed code provides a server-triggered import. Unattended scheduling cannot be assumed solely from the project’s “automatic” description."
    ],
    "evidence": [
      "api/routes/drive-import.ts; photos.ts; categories.ts; api/lib/s3.ts",
      "api/database/index.ts; auth.ts; railway-env.md",
      "Public bundle cross-check: React 19 and photo/category/Drive/auth API strings"
    ],
    "analytics": [
      "ga",
      "goat",
      "ahrefs"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 8,
    "slug": "photo-tour-map",
    "name": "Photo Tour Map",
    "url": "https://thedigitaltrekker.com/pushkar/",
    "category": "Personal",
    "purpose": "Turn a photography workshop itinerary into an interactive route so travelers can visualize stops, overnight stays and travel legs.",
    "repo": null,
    "private": false,
    "sha": null,
    "layers": [
      {
        "text": "Leaflet 1.9.4 draws numbered markers, route lines and popup itinerary cards inside the Digital Trekker article.",
        "tools": [
          "leaflet"
        ]
      },
      {
        "text": "Inline JavaScript loops over a fixed stops array and route segments. The published map has no separate George-built API or live itinerary scraper.",
        "tools": []
      },
      {
        "text": "Leaflet loads from unpkg and uses OpenStreetMap tiles. WordPress serves the host article; its unrelated plugins are not part of George’s map.",
        "tools": [
          "osm"
        ]
      },
      {
        "text": "Itinerary coordinates and descriptions are embedded in the page code. No separate map database or object-storage service was found.",
        "tools": []
      },
      {
        "text": "The host WordPress page delivers the inline map over HTTPS. The browser performs map rendering and tile requests; the host’s runtime/database configuration is outside this review.",
        "tools": [
          "browser",
          "wordpress"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "The visitor opens the WordPress article.",
      "The browser loads Leaflet, fixed itinerary data and OpenStreetMap tiles.",
      "JavaScript draws the route and opens a stop’s popup when selected."
    ],
    "notes": [
      "The itinerary was used to author the map; the current published code does not scrape it on every visit. Changes require updating the embedded stops.",
      "No matching GitHub repository was found. The host’s database, hosting provider and physical hardware were not verified."
    ],
    "evidence": [
      "Published /pushkar/ article: inline L.map, stops array and L.polyline",
      "Leaflet 1.9.4 CDN asset and OpenStreetMap tile URL observed"
    ],
    "analytics": [],
    "build": []
  },
  {
    "id": 5,
    "slug": "help-desk",
    "name": "Help Desk",
    "url": "https://help.gneill.net/",
    "category": "Operations",
    "purpose": "Keep support requests, conversations and remote-support connection IDs in one place instead of losing them in personal email threads.",
    "repo": "george-helpdesk",
    "private": true,
    "sha": "03f231895f2248caf44b5a2bf3370437be4f65e7",
    "layers": [
      {
        "text": "Plain HTML, CSS and browser JavaScript provide ticket forms, conversations, knowledge-base and staff views; this is not a React app.",
        "tools": []
      },
      {
        "text": "Node/Express routes handle tickets, role checks, attachments and inbound threading. Multer writes uploaded attachments. Custom Google OAuth sessions store hashes of opaque session tokens.",
        "tools": [
          "express",
          "multer"
        ]
      },
      {
        "text": "Google OAuth handles sign-in. Cloudflare Email Workers plus postal-mime parse incoming mail and forward it to the API. Outbound mail defaults to Resend, with a conditional SMTP path. RustDesk downloads/IDs support a separate remote-control session.",
        "tools": [
          "googleauth",
          "worker",
          "postalmime",
          "resend",
          "smtp",
          "rustdesk",
          "cortendesk"
        ]
      },
      {
        "text": "better-sqlite3 stores tickets, conversations, users and sessions in a SQLite file; local directories store attachments and backups. Persistent volumes and backups matter here.",
        "tools": [
          "sqlite",
          "disk"
        ]
      },
      {
        "text": "Node.js runs the Express ticket service; the README targets Railway. The separate Cloudflare email worker runs at the edge. Persistent local storage is needed for the ticket database and attachments. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "node",
          "railway",
          "cloudflare"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "A person submits a ticket or emails the support address.",
      "Express or the email worker routes the message to a new/existing conversation.",
      "Staff reply through the configured mail provider; remote support happens separately in RustDesk."
    ],
    "notes": [
      "The README’s JSON-store and “Google OAuth to be wired up” claims are stale: current server code initializes SQLite and registers Google authentication.",
      "Worker deployment/MX routing is external configuration. A legacy Resend inbound path remains in the server; worker source documents its replacement.",
      "Supporting CortenDesk deployment files bundle RustDesk rendezvous/relay functions in a separate Docker service; RDGen source supports custom client generation. Neither is the Express ticket server. An active VPS provider or server model was not verified."
    ],
    "evidence": [
      "server.js; setup-db.js; auth.js; mailer.js; backup.js",
      "email-worker/src/index.js; email-worker/wrangler.toml",
      "Supporting cortendesk, cortendesk-hetzner and rdgen repositories: README/Compose review; not verified live deployments",
      "README targets Railway; runtime source requires durable local storage"
    ],
    "analytics": [
      "ga",
      "goat",
      "ahrefs"
    ],
    "build": [
      "github",
      "rdgen"
    ]
  },
  {
    "id": 6,
    "slug": "job-scheduler",
    "name": "Tech Job Scheduler",
    "url": "https://cron.gneill.net/",
    "category": "Operations",
    "purpose": "Centralize operational jobs with schedules, run logs and notifications instead of maintaining cron separately on every machine.",
    "repo": "runable-scheduler",
    "private": true,
    "sha": "643a6dbb36f06728d62365e030122c9cbbbcc902",
    "layers": [
      {
        "text": "React dashboard and job/run screens show schedules, enable switches, manual runs and captured output.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query"
        ]
      },
      {
        "text": "node-cron registers timezone-aware jobs in memory. The Bun server spawns Bash commands, captures stdout/stderr and writes completion status and output to the database.",
        "tools": [
          "hono",
          "zod",
          "orpc",
          "cron",
          "bash"
        ]
      },
      {
        "text": "Better Auth protects job administration. Optional Resend email and Telnyx SMS notify selected recipients on configured run outcomes. Commands may call other apps’ protected job endpoints.",
        "tools": [
          "betterauth",
          "resend",
          "telnyx"
        ]
      },
      {
        "text": "Drizzle/libSQL store job definitions, schedules and run history. Active timers live in process memory and are rebuilt from enabled jobs at startup.",
        "tools": [
          "drizzle",
          "libsql",
          "turso"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "An administrator saves a schedule and command.",
      "node-cron fires in the selected timezone and the server launches Bash.",
      "The exit code and output are saved; configured email/text notifications are sent."
    ],
    "notes": [
      "Commands execute on the scheduler’s host with its process environment, not automatically on every remote machine. Remote work needs an explicit API/command.",
      "The process must stay running for timers to fire. This is not a distributed durable queue; do not assume missed-run replay, isolation or exactly-once execution."
    ],
    "evidence": [
      "api/scheduler.ts; notifications.ts; auth.ts",
      "api/database/schema.ts; railway.json; Dockerfile"
    ],
    "analytics": [],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  },
  {
    "id": 9,
    "slug": "my-projects",
    "name": "My Projects / Tech by George",
    "url": "https://tech.gneill.net/",
    "category": "Personal",
    "purpose": "A live project catalog and service introduction, with an admin editor for projects, screenshots and booking links. This architecture guide lives here too.",
    "repo": "tech-by-george",
    "private": false,
    "sha": "ed506cb12d6141d07563b7f8269e48d5de2cc6bb",
    "layers": [
      {
        "text": "React Home cards, How I can help you and this lazy-loaded Architecture guide. Theme and navigation are shared across pages.",
        "tools": [
          "react",
          "tailwind",
          "wouter",
          "query"
        ]
      },
      {
        "text": "oRPC procedures serve visible projects and protect admin editing/reordering, screenshot capture/uploads and site settings. Architecture content is a curated TypeScript snapshot, not another database.",
        "tools": [
          "hono",
          "zod",
          "orpc"
        ]
      },
      {
        "text": "Better Auth uses the site’s own Google OAuth client and an admin allowlist. The saved booking URL defaults to TidyCal and can be replaced. Screenshot capture tries Microlink then Thum.io public endpoints; uploads are an alternative.",
        "tools": [
          "betterauth",
          "googleauth",
          "tidycal",
          "microlink",
          "thumio"
        ]
      },
      {
        "text": "Drizzle/libSQL keep projects, site settings and auth records. Screenshot bytes now live on the service filesystem and are served by the /api/shot route, not Tigris.",
        "tools": [
          "drizzle",
          "libsql",
          "turso",
          "disk"
        ]
      },
      {
        "text": "Bun serves the API and built browser bundle. Repository deployment files target Railway; active account configuration was not inspected. Public HTTPS access was observed.",
        "tools": [
          "browser",
          "bun",
          "docker",
          "railway"
        ]
      },
      {
        "text": "The interface runs on your phone, tablet or computer. Hosting, database and file providers use physical servers, memory, disks and network equipment underneath their services. Server make, model and allocation are not documented.",
        "tools": []
      }
    ],
    "flow": [
      "Home requests the visible project list.",
      "The API reads SQL records; screenshot requests read stored image bytes.",
      "An authenticated admin edits content or uploads a screenshot; visitors see the updated catalog."
    ],
    "notes": [
      "A durable screenshot volume is required to retain local images through container replacement. The older design notes’ S3 claim was corrected.",
      "This guide is manually reviewed. Newly added catalog projects are flagged for architecture review rather than inheriting guessed tooling."
    ],
    "evidence": [
      "api/routes/projects.ts; settings.ts; lib/shot-store.ts; lib/screenshot.ts",
      "api/auth.ts; web/queries/settings.ts; web/data/architecture.ts",
      "Public tech-by-george repository; old my-projects-hub URL redirects"
    ],
    "analytics": [
      "ga",
      "goat"
    ],
    "build": [
      "github",
      "typescript",
      "vite",
      "runable"
    ]
  }
];
