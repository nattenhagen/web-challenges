import Link from "next/link";
import { volumes } from "@/public/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);
  if (!currentVolume) {
    return null;
  }
  const { title, description, year } = currentVolume;
  return (
    <>
      <h1>
        {title} <small> {year} </small>
      </h1>
      <p>{description}</p>
      <div>
        <Link href="/pages/volumes">Back to all movies</Link>
      </div>
    </>
  );
}
