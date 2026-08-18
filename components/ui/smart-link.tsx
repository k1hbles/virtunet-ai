import Link from "next/link";

/**
 * Internal hrefs route client-side through next/link; anything absolute stays
 * a plain anchor and opens safely. Saves every call site from deciding.
 */
export function SmartLink({
  href,
  children,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const internal = href.startsWith("/") && !href.startsWith("//");
  if (internal) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  );
}
