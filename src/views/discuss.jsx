import ContactsCard from '@/features/discuss/contacts-card';
import ProjectForm from '@/features/discuss/project-form';
import { $t } from "@/utils/lang.utils";

export default function DiscussPage({ lang }) {
    return (
        <div className="discuss-bg">
            <section className="flex flex-col gap-7.5 items-center">
                <div className="flex flex-col gap-3.5 max-w-4xl">
                    <h2 className="text-center text-5xl text-primary font-semibold">{ $t('project_form.title', lang) }</h2>
                    <p className="text-center text-lg text-graphite">{ $t('project_form.description', lang) }</p>
                </div>
                <ProjectForm lang={ lang } />
                <ContactsCard lang={ lang } />
            </section>
        </div>
    );
}