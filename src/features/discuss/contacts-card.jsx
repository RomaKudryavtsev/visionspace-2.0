import Image from "next/image";
import LinkButton from "@/components/link-button";
import { $t } from "@/utils/lang.utils";

export default function ContactsCard({ lang }) {
    return (
        <div
            className="bg-white rounded-xl px-7.5 py-6 w-full"
            style={ { boxShadow: "0px 4px 15px 0px #22262D0D" } }
        >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <p className="max-w-148.25 font-medium text-primary">{ $t('project_form.contacts_card', lang) }</p>
                <div className="flex items-center gap-2.5">
                    <LinkButton
                        href="#"
                        target="_blank"
                        className="bg-border-gray!"
                    >
                        <div className="flex items-center gap-2.5">
                            <Image
                                src="/whatsapp.svg"
                                alt="whatsapp"
                                width={ 16 }
                                height={ 16 }
                                style={ { width: 'auto', height: 'auto' } }
                            />
                            <span className="font-medium text-graphite">WhatsApp</span>
                        </div>
                    </LinkButton>
                    <LinkButton
                        href="#"
                        target="_blank"
                        className="bg-border-gray!"
                    >
                        <div className="flex items-center gap-2.5">
                            <Image
                                src="/telegram.svg"
                                alt="telegram"
                                width={ 16 }
                                height={ 16 }
                                style={ { width: 'auto', height: 'auto' } }
                            />
                            <span className="font-medium text-graphite">Telegram</span>
                        </div>
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}