import DiscussPage from "@/views/discuss";

export default async function Discuss({ params }) {
    const { lang } = await params;
    return (
        <DiscussPage lang={ lang } />
    );
}
