import type { ReactNode } from "react";

const experience = [
  {
    role: "Software Engineer",
    company: "Comcast · Capgemini",
    period: "Apr 2025 — Present",
    location: "Philadelphia, USA",
    summary:
      "Building smarter validation systems for streaming-device experiences, from endurance regression to computer-vision workflows.",
    bullets: [
      "Leading the design and development of an endurance regression framework, reproducing customer-reported field escapes as automated pre-release validation to improve release quality.",
      "Developed AI-assisted visual validation workflows using DIOCR and image recognition, improving automation resilience across remote-controlled streaming devices.",
      "Built annotated datasets and fine-tuned YOLO models for AI-driven recognition of application states and UI elements across TV applications.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Changing The Present",
    period: "Oct 2024 — Apr 2025",
    location: "San Jose, USA",
    summary:
      "Shipped product workflows, high-performance discovery, and delivery infrastructure for a user-facing platform.",
    bullets: [
      "Built Next.js and TypeScript product workflows to accelerate stakeholder feedback and validate user-facing features.",
      "Engineered a high-performance search and discovery experience using Elasticsearch with filtered search and type-ahead suggestions, reducing search latency and boosting conversion rates by 25%.",
      "Designed and maintained Jenkins CI/CD pipelines using Docker containers and Kubernetes, reducing average deployment time from 20–30 minutes to under 7 minutes.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Renavest",
    period: "Jan 2024 — May 2024",
    location: "Boston, USA",
    summary:
      "Connected AI-driven learning experiences to scalable APIs and real-time behavioral data.",
    bullets: [
      "Developed an AI-driven personalized learning module using OpenAI API, FastAPI, and React, adapting content based on user behavior and skill level—resulting in a 20% boost in user engagement and retention.",
      "Designed scalable REST APIs using Golang to capture user interactions and behavioral signals, enabling real-time recommendations for the AI learning engine.",
      "Integrated Apache Kafka with FastAPI to stream user events, improving personalization accuracy and reducing session lag for high-volume learners.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    period: "Dec 2020 — Jun 2022",
    location: "Bangalore, India",
    summary:
      "Developed backend services and cloud workflows with a focus on data quality, speed, and scale.",
    bullets: [
      "Developed RESTful microservices using Java and Spring Boot for data validation and integration with HR systems, reducing manual data entry time by 15%.",
      "Built a serverless file processing pipeline using AWS S3, Lambda, and Step Functions to extract metadata, convert formats, and support scalable document uploads.",
      "Optimized SQL queries using Hibernate and Redis caching, improving RDS query response times by 50%.",
    ],
  },
];

const skillGroups = [
  ["Languages", ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C / C++", "C#"]],
  ["Frontend", ["React", "Next.js", "Angular", "React Native", "HTML5", "CSS3"]],
  ["Backend", ["Node.js", "Express.js", "Spring Boot", "FastAPI", "REST APIs"]],
  ["AI / ML", ["LLMs", "Prompt Engineering", "RAG", "AI Agents", "Google Vertex AI", "YOLO", "OpenAI API", "DIOCR"]],
  ["Data", ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "DynamoDB", "Oracle DB"]],
  ["Cloud & Tools", ["Azure DevOps", "AWS", "Google Cloud Platform", "Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "Cypress", "Jest", "Vite"]],
] as const;

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-heading reveal">
        <p className="eyebrow"><span>{eyebrow}</span></p>
        <h2>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#home" aria-label="Amulya Murahari — home">AM<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <Arrow /></a>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker"><span className="status-dot" /> Software engineer · USA</p>
          <h1>
            Engineering products<br />
            that are <em>built to work.</em>
          </h1>
          <p className="hero-deck">
            I&apos;m Amulya Murahari — a software engineer building reliable full-stack systems,
            AI-assisted workflows, and cloud infrastructure.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">Explore my work <Arrow /></a>
            <a className="button button-ghost" href="/Amulya-Murahari-Resume.pdf" target="_blank" rel="noreferrer">View résumé</a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Current role">
          <div className="orb" aria-hidden="true"><span>AM</span></div>
          <div className="current-role">
            <p>Currently</p>
            <h2>Software Engineer</h2>
            <p>Comcast · Capgemini</p>
          </div>
          <div className="panel-meta">
            <span>Philadelphia</span>
            <span>Since Apr 2025</span>
          </div>
        </aside>
        <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
          <span>Scroll to explore</span><i aria-hidden="true">↓</i>
        </a>
      </section>

      <div className="page-shell">
        <Section
          id="about"
          eyebrow="01 / About"
          title="I build across the stack — and close the loop between idea and impact."
          className="about-section"
        >
          <div className="about-grid reveal">
            <div className="about-statement">
              <p>
                My work spans product engineering, backend systems, AI-assisted automation, and cloud delivery.
                Across each layer, I focus on the same outcome: software that performs reliably for the people using it.
              </p>
              <p>
                I hold a Master&apos;s in Computer Software Engineering from Northeastern University and a Bachelor&apos;s
                in Computer Science from Visvesvaraya Technological University.
              </p>
            </div>
            <div className="education-list">
              <article>
                <span>2024</span>
                <h3>Master&apos;s in Computer Software Engineering</h3>
                <p>Northeastern University</p>
              </article>
              <article>
                <span>2020</span>
                <h3>Bachelor&apos;s in Computer Science</h3>
                <p>Visvesvaraya Technological University (VTU)</p>
              </article>
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="02 / Experience"
          title="Work that moves from systems thinking to measurable outcomes."
          intro="Four roles across product, platform, cloud, and applied AI engineering."
        >
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item reveal" key={`${item.company}-${item.period}`}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-main">
                  <div className="experience-topline">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                    </div>
                    <div className="experience-meta">
                      <p>{item.period}</p>
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="03 / Skills"
          title="A practical toolkit for building, shipping, and improving software."
          className="skills-section"
        >
          <div className="skills-grid reveal">
            {skillGroups.map(([group, skills], index) => (
              <article className="skill-group" key={group}>
                <div className="skill-heading"><span>0{index + 1}</span><h3>{group}</h3></div>
                <div className="skill-tags">
                  {skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="04 / Projects"
          title="Independent work with a real-world point of view."
        >
          <article className="project-card reveal">
            <div className="project-visual" aria-hidden="true">
              <span className="route route-one" />
              <span className="route route-two" />
              <span className="route route-three" />
              <i className="route-dot dot-one" /><i className="route-dot dot-two" /><i className="route-dot dot-three" />
              <strong>40%<small>CO₂ reduction</small></strong>
            </div>
            <div className="project-copy">
              <div className="project-meta"><span>Featured project</span><span>Apr 2024</span></div>
              <h3>Aqua Paths</h3>
              <p>
                An open platform using Sea Routes APIs to optimize sea routes by factoring in weight and cargo,
                achieving a 40% reduction in CO₂ emissions. Includes a Marine Life insights tool.
              </p>
              <div className="project-tags"><span>Sea Routes APIs</span><span>Route optimization</span><span>Marine insights</span></div>
            </div>
          </article>
        </Section>
      </div>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <p className="eyebrow light"><span>05 / Contact</span></p>
          <h2>Let&apos;s build something<br /><em>worth relying on.</em></h2>
          <p className="contact-copy">Reach me directly by email, or find me on GitHub and LinkedIn.</p>
          <a className="email-link" href="mailto:murahariamulya@gmail.com">murahariamulya@gmail.com <Arrow /></a>
          <div className="contact-links">
            <a href="https://github.com/AmulyaMurahari" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/amulyam97/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="tel:+16823760562">682 376 0562 <Arrow /></a>
          </div>
        </div>
        <footer>
          <a className="monogram footer-mark" href="#home">AM<span>.</span></a>
          <p>Software Engineer · USA</p>
          <a href="#home">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
