import ContactsCard from '@/features/discuss/contacts-card';
import ProjectForm from '@/features/discuss/project-form';
import { $t } from "@/utils/lang.utils";

export default function DiscussPage({ lang }) {
    return (
        <div className="bg-soft-surface lg:min-h-dvh lg:bg-[url('/discuss-bg.png')] lg:bg-center lg:bg-cover lg:bg-no-repeat">
            <section className="flex flex-col gap-6 lg:gap-7.5 lg:items-center">
                <div className="flex flex-col gap-2.5 lg:gap-3.5 max-w-4xl w-full">
                    <h2 className="lg:text-center text-4xl lg:text-5xl text-primary font-semibold">{ $t('project_form.title', lang) }</h2>
                    <p className="lg:text-center text-base lg:text-lg text-graphite">{ $t('project_form.description', lang) }</p>
                </div>
                <ProjectForm lang={ lang } />
                <ContactsCard lang={ lang } />
            </section>
        </div>
    );
}