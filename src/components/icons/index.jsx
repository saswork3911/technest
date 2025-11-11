/* Simple inline SVG icon set for reuse across components */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function baseProps({ className = "", size = 24, title, ...rest } = {}) {
  return {
    className: cn("shrink-0 text-[var(--brand)]", className),
    width: size,
    height: size,
    role: title ? "img" : "presentation",
    "aria-hidden": title ? undefined : true,
    ...rest,
  };
}

export function Check(props) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      {props.title ? <title>{props.title}</title> : null}
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Brush(props) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      {props.title ? <title>{props.title}</title> : null}
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7l-8 8 2 2 8-8-2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 4l2 2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17s0 3-3 3 3-3 3-3z" />
    </svg>
  );
}

export function Code(props) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      {props.title ? <title>{props.title}</title> : null}
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16L4 12l4-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l4 4-4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4l-2 16" />
    </svg>
  );
}

export function Zap(props) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      {props.title ? <title>{props.title}</title> : null}
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

export function Shield(props) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      {props.title ? <title>{props.title}</title> : null}
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function Layers(props) {
  const p = baseProps(props);
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      {props.title ? <title>{props.title}</title> : null}
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 5-9 5-9-5 9-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 5 9-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l9 5 9-5" />
    </svg>
  );
}