import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import Breadcrumbs from "@/components/breadcrumbs";
import Contact from "@/components/contact";
import { BLOG_POSTS, blogPath, getPost } from "@/content/blog";
import { FOUNDER } from "@/lib/site";
import { getRoute } from "@/seo/routes";
import NotFound from "@/pages/not-found";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function BlogIndex() {
  const route = getRoute("/blog");
  return (
    <PageShell>
      <PageHeader
        h1={route.h1}
        breadcrumbs={<Breadcrumbs trail={route.breadcrumbs ?? []} />}
        lines={["Notes from", <span className="accent">the studio.</span>]}
        intro="Guides on social media marketing, restaurant content and reels that bring in customers — written from what we see shooting and posting for Bengaluru brands every week."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-12">
        <ul className="border-t border-line">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug} className="border-b border-line">
              <Link href={blogPath(post.slug)} className="group grid grid-cols-1 gap-4 py-10 md:grid-cols-12">
                <time dateTime={post.datePublished} className="eyebrow md:col-span-3">
                  {formatDate(post.datePublished)}
                </time>
                <span className="md:col-span-8">
                  <span className="headline block text-4xl text-bone transition-transform duration-500 ease-out group-hover:translate-x-1 sm:text-5xl">
                    {post.h1}
                  </span>{" "}
                  <span className="mt-3 block max-w-2xl text-mute">{post.excerpt}</span>
                </span>
                <ArrowUpRight size={24} className="btn-arrow text-flame md:col-span-1 md:justify-self-end" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Contact />
    </PageShell>
  );
}

export function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return <NotFound />;
  const route = getRoute(blogPath(post.slug));

  return (
    <PageShell>
      <article>
        <header className="mx-auto max-w-3xl px-5 pb-12 pt-36 sm:px-8 sm:pt-44">
          <Breadcrumbs trail={route.breadcrumbs ?? []} />
          <h1 className="headline text-5xl text-bone sm:text-6xl lg:text-7xl">{post.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-mute">{post.description}</p>
          <p className="eyebrow mt-8 flex flex-wrap gap-x-4 gap-y-1">
            <span>By {FOUNDER}</span>
            <time dateTime={post.datePublished}>Published {formatDate(post.datePublished)}</time>
            {post.dateModified !== post.datePublished && (
              <time dateTime={post.dateModified}>Updated {formatDate(post.dateModified)}</time>
            )}
          </p>
        </header>

        <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
          {post.sections.map((section) => (
            <section key={section.heading} className="mt-14 first:mt-0">
              <h2 className="headline text-4xl text-bone">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-5 text-lg leading-relaxed text-bone/80">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 40)} className="flex gap-3 text-lg leading-relaxed text-bone/80">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-flame" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className="mt-16 rounded-3xl border border-line bg-ink-raised p-7 sm:p-8">
            <p className="eyebrow mb-4">Keep reading</p>
            <ul className="space-y-3">
              {post.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline text-lg text-bone">
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
      <Contact />
    </PageShell>
  );
}
