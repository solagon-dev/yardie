/**
 * Bot trap.
 *
 * A field that is invisible and unreachable for a person but present in the
 * DOM, so a form-filling script populates it. /api/contact drops any
 * submission that arrives with a value here — and answers 200 anyway, so the
 * bot can't tell rejection from delivery.
 *
 * Deliberately not `display:none` or `hidden`: the cheaper scrapers skip
 * fields hidden that way. Off-screen positioning with `aria-hidden` and
 * `tabIndex={-1}` keeps it out of the accessibility tree and the tab order
 * while still looking like a real input to a script reading the markup.
 * `autoComplete="off"` stops a password manager filling it for a real user.
 */
export default function Honeypot({ name = "company" }: { name?: string }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
      }}
    >
      <label htmlFor={`hp-${name}`}>Company (leave blank)</label>
      <input
        id={`hp-${name}`}
        name={name}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
