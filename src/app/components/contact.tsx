"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { contact } from "../data/contact";

export const Contact = () => {
    const router = useRouter();
    return (
      <>
        {contact.map((item, index) => (
          <div
            key={index}
            className="text-gray-400 hover:text-white mr-4"
          >
            {item.name === "Mail" ? (
              <Image
                onClick={() => router.push('mailto:text@outlook.com')}
                src={item.src}
                alt={item.name}
                width={item.width}
                height={item.height}
              />
            ) : (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                />
              </Link>
            )}
          </div>
        ))}
      </>
    );
  };
  