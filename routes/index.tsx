import { Head, Link } from "aleph/react";

const externalLinks = [
  ["Get Started", "https://alephjs.org/docs/get-started"],
  ["Docs", "https://alephjs.org/docs"],
  ["Github", "https://github.com/alephjs/aleph.js"],
];

export default function Index() {
  return (
    <div className="screen index">
      <Head>
        <title>Provedenza | a true story</title>
        <meta name="description" content="Provedenza" />
      </Head>
      <h1>
        The Fullstack Framework in Deno.
      </h1>
      <p>
        <strong>Aleph.js</strong> gives you the best developer experience for building web applications<br />{" "}
        with modern toolings.
      </p>
      <div className="external-links">
        {externalLinks.map(([text, href]) => (
          <a
            href={href}
            target="_blank"
            key={href}
          >
            {text}
          </a>
        ))}
      </div>
      <nav>
        <Link
          role="button"
          to="/todos"
        >
          Todos App Demo
        </Link>
      </nav>
    </div>
  );
}
