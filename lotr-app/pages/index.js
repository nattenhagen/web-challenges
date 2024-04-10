import { introduction } from "@/public/lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>import {introduction};</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="volumes/the-fellow-of-the-ring">Lord of the Rings</Link>
          <Link href="volumes/the-return-of-the-king">
            The Return of the King
          </Link>
          <Link href="volumes/the-two-towers">The Two Towers</Link>
        </li>
      </ul>
    </div>
  );
}
