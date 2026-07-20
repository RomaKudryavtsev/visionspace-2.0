import HomePage from "@/views/home";

export default async function Home({ params }) {
  const { lang } = await params;
  return (
    <HomePage lang={ lang } />
  );
}
