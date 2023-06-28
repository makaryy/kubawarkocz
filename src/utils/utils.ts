export const cls = (...args: (string | undefined | null | false)[]) => args.filter(Boolean).join(" ");
