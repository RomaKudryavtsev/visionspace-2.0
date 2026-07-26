import { useMutation } from "@tanstack/react-query";
import { submitLead } from "@/service/lead.api";

export function useSubmitLead() {
    return useMutation({
        mutationFn: async (leadData) => {
            return await submitLead(leadData);
        },
    });
}