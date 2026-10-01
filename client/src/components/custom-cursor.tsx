import { useEffect, useRef } from "react";

const INTERACTIVE = 'a, button, summary, [role="tab"], label[for], [data-cursor]';
const TEXT_INPUT = 'input, textarea, select, iframe, [contenteditable="true"]';

/**
 * Dot + trailing ring cursor for mouse/trackpad users.
 * - Grows over links and buttons; shows a label over elements with data-cursor="Play" | "View" etc.
 * - Hides over text fields (native caret stays), on touch devices and when the pointer leaves the window.
 * Positions are written straight to transforms in rAF — no React re-renders while moving.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const target = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let frame = 0;
    let visible = false;

    const render = () => {
      // Ring eases toward the pointer; snaps when reduced motion is on
      const ease = reduceMotion ? 1 : 0.2;
      ringPos.x += (target.x - ringPos.x) * ease;
      ringPos.y += (target.y - ringPos.y) * ease;
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      const settled = Math.abs(target.x - ringPos.x) < 0.1 && Math.abs(target.y - ringPos.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(render);
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const setState = (state: string, text = "") => {
      ring.dataset.state = state;
      dot.dataset.state = state;
      label.textContent = text;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        // First move: jump the ring to the pointer instead of flying in from the corner
        ringPos.x = target.x;
        ringPos.y = target.y;
        root.dataset.cursorVisible = "true";
      }
      kick();
    };

    const onOver = (e: PointerEvent) => {
      const el = e.target as Element | null;
      if (!el?.closest) return;
      if (el.closest(TEXT_INPUT)) return setState("hidden");
      const labelled = el.closest<HTMLElement>("[data-cursor]");
      if (labelled?.dataset.cursor) return setState("label", labelled.dataset.cursor);
      if (el.closest(INTERACTIVE)) return setState("hover");
      setState("default");
    };

    const onDown = () => root.setAttribute("data-cursor-down", "true");
    const onUp = () => root.removeAttribute("data-cursor-down");
    const onLeave = () => {
      visible = false;
      root.dataset.cursorVisible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      root.classList.remove("has-custom-cursor");
      delete root.dataset.cursorVisible;
    };
  }, []);

  return (
    <div aria-hidden className="cursor-layer">
      <div ref={ringRef} className="cursor-ring" data-state="default">
        <span className="cursor-ring-shape">
          <span ref={labelRef} className="cursor-label" />
        </span>
      </div>
      <div ref={dotRef} className="cursor-dot" data-state="default" />
    </div>
  );
}
