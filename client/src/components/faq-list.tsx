import { Plus } from "lucide-react";
import type { Faq } from "@/content/packages";

/** FAQ list on native <details> so every answer is in the HTML for crawlers and works without JS. */
export default function FaqList({ faqs, className = "" }: { faqs: Faq[]; className?: string }) {
  return (
    <div className={className}>
      {faqs.map((faq) => (
        <details key={faq.q} className="group border-b border-line first:border-t">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="headline text-2xl text-bone sm:text-3xl">{faq.q}</h3>
            <Plus size={22} className="shrink-0 text-flame transition-transform duration-300 ease-out group-open:rotate-45" />
          </summary>
          <p className="max-w-2xl pb-8 leading-relaxed text-mute">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
