import LeadGenerationPage from "@/views/lead-generation";

export default async function LeadGeneration({ params }) {
  const { lang } = await params;
  return (
    <LeadGenerationPage lang={ lang } />
  );
}
