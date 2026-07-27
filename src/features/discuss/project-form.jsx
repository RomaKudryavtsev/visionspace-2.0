"use client";

import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useSubmitLead } from '@/hooks/lead.hooks';
import { $t } from "@/utils/lang.utils";

const DIRECTIONS = [
    {
        value: 'lead-generation',
        titleKey: 'project_form.direction_lead_generation_title',
        descriptionKey: 'project_form.direction_lead_generation_description',
    },
    {
        value: 'development',
        titleKey: 'project_form.direction_development_title',
        descriptionKey: 'project_form.direction_development_description',
    },
    {
        value: 'reputation',
        titleKey: 'project_form.direction_reputation_title',
        descriptionKey: 'project_form.direction_reputation_description',
    },
];

export default function ProjectForm({ lang }) {
    const icons = ([
        <Image key="lead-generation" src="/lead_generation.svg" alt="Lead Generation" width={ 24 } height={ 24 } style={ { width: 'auto', height: 'auto' } } />,
        <Image key="development" src="/development.svg" alt="Development" width={ 24 } height={ 24 } style={ { width: 'auto', height: 'auto' } } />,
        <Image key="reputation" src="/reputation.svg" alt="Reputation" width={ 24 } height={ 24 } style={ { width: 'auto', height: 'auto' } } />,
    ]);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isValid, isDirty }
    } = useForm({
        mode: "onChange",
        defaultValues: {
            direction: DIRECTIONS[0].value,
            name: '',
            businessArea: '',
            budget: '',
            contacts: '',
        },
    });

    const submitMutation = useSubmitLead();

    const onSubmit = (data) => {
        submitMutation.mutate(data, {
            onSuccess: () => {
                toast.success($t('project_form.submit_success', lang));
                reset();
            },
            onError: () => {
                toast.error($t('project_form.submit_error', lang));
            },
        });
    };

    return (
        <form
            onSubmit={ handleSubmit(onSubmit) }
            className="grid gap-8 md:grid-cols-2 md:gap-6"
        >
            {/* Column 1 — direction */ }
            <div className="flex flex-col gap-3.5 md:rounded-3xl md:border md:border-gray-200 md:bg-white md:p-8 md:shadow-sm">
                <p className="text-lg text-primary">
                    1. { $t('project_form.step1_title', lang) }
                </p>
                <Controller
                    name="direction"
                    control={ control }
                    rules={ { required: true } }
                    render={ ({ field }) => (
                        <>
                            {/* Desktop: radio cards */ }
                            <div className="hidden flex-col gap-3 md:flex">
                                { DIRECTIONS.map((direction, index) => {
                                    const isSelected = field.value === direction.value;
                                    return (
                                        <button
                                            key={ direction.value }
                                            type="button"
                                            onClick={ () => field.onChange(direction.value) }
                                            aria-pressed={ isSelected }
                                            className={ `flex items-start gap-4 rounded-lg border px-3.5 py-5 text-left transition-colors ${isSelected
                                                ? 'border-[#3158E8] bg-blue-50/50'
                                                : 'border-border-gray bg-white hover:border-gray-300'
                                                }` }
                                        >
                                            <div className="h-11 w-11 flex p-1.5 shrink-0 items-center justify-center rounded-md bg-soft-surface">
                                                { icons[index] }
                                            </div>
                                            <span className="flex-1">
                                                <span className="block text-2xl font-semibold text-primary">
                                                    { $t(direction.titleKey, lang) }
                                                </span>
                                                <span className="mt-1 block text-sm leading-snug text-gray font-medium">
                                                    { $t(direction.descriptionKey, lang) }
                                                </span>
                                            </span>
                                            <span
                                                className={ `mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300 bg-white'
                                                    }` }
                                            >
                                                { isSelected && (
                                                    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-white">
                                                        <path d="M4.5 8.5 2 6l-1 1 3.5 3.5L11 3l-1-1z" />
                                                    </svg>
                                                ) }
                                            </span>
                                        </button>
                                    );
                                }) }
                            </div>
                            {/* Mobile: pill tabs */ }
                            <div className="flex rounded-lg bg-white p-1 md:hidden">
                                { DIRECTIONS.map((direction) => {
                                    const isSelected = field.value === direction.value;
                                    return (
                                        <button
                                            key={ direction.value }
                                            type="button"
                                            onClick={ () => field.onChange(direction.value) }
                                            aria-pressed={ isSelected }
                                            className={ `flex-1 rounded-sm p-3 text-sm font-medium transition-colors ${isSelected ? 'bg-[#3158E8] text-white' : 'text-primary'
                                                }` }
                                        >
                                            { $t(direction.titleKey, lang) }
                                        </button>
                                    );
                                }) }
                            </div>
                        </>
                    ) }
                />
                <div className="hidden lg:block rounded-xl bg-soft-surface px-5 py-3.5 text-sm leading-snug text-primary font-medium">
                    { $t('project_form.hint', lang) }
                </div>
            </div>
            {/* Column 2 — project details */ }
            <div className="flex flex-col gap-3.5 lg:gap-5 md:rounded-3xl md:border md:border-gray-200 md:bg-white md:p-8 md:shadow-sm">
                <p className="text-lg text-primary">
                    2. { $t('project_form.step2_title', lang) }
                </p>
                <Field
                    label={ $t('project_form.name_label', lang) }
                    placeholder={ $t('project_form.name_placeholder', lang) }
                    error={ errors.name }
                    inputProps={ register('name', { required: true }) }
                />
                <Field
                    label={ $t('project_form.business_label', lang) }
                    placeholder={ $t('project_form.business_placeholder', lang) }
                    error={ errors.businessArea }
                    inputProps={ register('businessArea', { required: true }) }
                />
                <Field
                    label={ $t('project_form.budget_label', lang) }
                    placeholder={ $t('project_form.budget_placeholder', lang) }
                    error={ errors.budget }
                    inputProps={ register('budget') }
                />
                <Field
                    label={ $t('project_form.contacts_label', lang) }
                    placeholder={ $t('project_form.contacts_placeholder', lang) }
                    error={ errors.contacts }
                    inputProps={ register('contacts', { required: true }) }
                />
                <button
                    type="submit"
                    disabled={ !isValid || !isDirty || submitMutation.isPending }
                    className="mt-5 w-full rounded-md bg-primary py-3.5 px-6 font-medium text-white transition-opacity disabled:opacity-40 hover:cursor-pointer"
                >
                    { submitMutation.isPending
                        ? $t('project_form.submitting', lang)
                        : $t('project_form.submit', lang) }
                </button>
            </div>
        </form>
    );
}

function Field({ label, placeholder, error, inputProps }) {
    return (
        <label className="flex flex-col gap-2.5 text-sm text-gray font-normal lg:font-medium">
            { label }
            <input
                { ...inputProps }
                placeholder={ placeholder }
                className={ `rounded-sm border bg-white lg:bg-soft-surface px-3.5 py-3 font-medium text-primary outline-none transition-colors placeholder:text-[#7A849366] focus:border-[#3158E8] focus:bg-white ${error ? 'border-red-400' : 'border-transparent'
                    }` }
            />
        </label>
    );
}