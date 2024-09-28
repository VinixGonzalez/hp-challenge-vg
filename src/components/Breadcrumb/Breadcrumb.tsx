import Link from "next/link";
import { HTMLAttributes } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items, ...rest }: BreadcrumbProps) {
  return (
    <nav {...rest} className="text-sm mb-4 font-bold" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href}>
                <span className="text-blue-600 hover:text-blue-800">
                  {item.label}
                </span>
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
