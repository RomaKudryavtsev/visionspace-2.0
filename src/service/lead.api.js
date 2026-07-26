import { baseFetch } from "./base.api";

export async function submitLead(leadData) {
    return await baseFetch('lead', {
        method: 'POST',
        body: JSON.stringify(leadData),
    });
}