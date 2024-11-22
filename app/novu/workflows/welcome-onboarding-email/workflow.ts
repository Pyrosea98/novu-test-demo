import { workflow } from "@novu/framework";
import { renderEmail } from "../../emails/novu-onboarding-email";
import { emailControlSchema, payloadSchema } from "./schemas";

export const welcomeOnboardingEmail = workflow(
  "welcome-onboarding-email",
  async ({ step, payload }) => {

      await step.push('push', async () => {
          return {
              subject: 'You received a message from Novu',
              body: 'A new post has been created',
          };
      });
  },
  {
    payloadSchema,
  },
);
