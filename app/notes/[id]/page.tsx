import OgImageInfo from "@/components/og-image-info";
import { Metadata } from "next";
import Link from "next/link";

export interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return [{ id: "1" }];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Note: ${id}`,
    description: `This is a note with id ${id}`,
    openGraph: {
      title: `Note: ${id}`,
      description: `This is a note with id ${id}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  console.log("id", "id");

  return (
    <main>
      <h1>{`Note ${id}`}</h1>
      <Link href="/">Home</Link>
      <OgImageInfo />
    </main>
  );
}
