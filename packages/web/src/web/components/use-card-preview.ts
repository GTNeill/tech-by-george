import { useEffect, useLayoutEffect, useRef, useState, type FocusEvent, type PointerEvent } from "react";

type Preview = { mode: "pointer" | "keyboard"; left: number; top: number; width: number };
const desktopQuery = "(hover: hover) and (pointer: fine) and (min-width: 768px)";

export function useCardPreview() {
  const cardRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const anchor = useRef<DOMRect | null>(null);
  const [preview, setPreview] = useState<Preview | null>(null);

  const cancelTimer = () => {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  };
  const dismiss = () => { cancelTimer(); setPreview(null); };
  const show = (mode: Preview["mode"]) => {
    cancelTimer();
    if (!window.matchMedia(desktopQuery).matches || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    anchor.current = rect;
    const width = Math.min(Math.max(rect.width * 1.5, 640), 880, window.innerWidth - 32);
    setPreview({ mode, width, left: Math.max(16, Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - 16)), top: 16 });
  };
  const enterCard = (event: PointerEvent<HTMLElement>) => {
    cancelTimer();
    if (event.pointerType !== "mouse" || !window.matchMedia(desktopQuery).matches) return;
    timer.current = setTimeout(() => show("pointer"), 180);
  };
  const leave = () => {
    cancelTimer();
    timer.current = setTimeout(() => setPreview(null), 120);
  };
  const focusCard = (event: FocusEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).matches(":focus-visible")) show("keyboard");
  };
  const blurCard = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null) && preview?.mode === "keyboard") dismiss();
  };

  useLayoutEffect(() => {
    if (!preview || !previewRef.current || !anchor.current) return;
    const height = previewRef.current.getBoundingClientRect().height;
    const top = Math.max(16, Math.min(anchor.current.top - 48, window.innerHeight - height - 16));
    if (top !== preview.top) setPreview((current) => current ? { ...current, top } : null);
  }, [preview]);

  useEffect(() => {
    const close = () => { if (timer.current !== null) clearTimeout(timer.current); timer.current = null; setPreview(null); };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    const onScroll = (event: Event) => {
      if (!(event.target instanceof Node) || !previewRef.current?.contains(event.target)) close();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", close);
    window.addEventListener("blur", close);
    return () => {
      if (timer.current !== null) clearTimeout(timer.current);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", close);
      window.removeEventListener("blur", close);
    };
  }, []);

  return { cardRef, previewRef, preview, enterCard, leave, cancelTimer, focusCard, blurCard };
}