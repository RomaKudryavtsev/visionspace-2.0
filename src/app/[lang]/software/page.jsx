import SoftwarePage from "@/views/software";

export default async function Software({ params }) {
    const { lang } = await params;
    return (
        <SoftwarePage lang={ lang } />
    );
}