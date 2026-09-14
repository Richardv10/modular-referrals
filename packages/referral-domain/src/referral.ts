import type { ReferralStatus } from './referral-status';

// Shape of a referral object within the domain. This doesn't need to be FIHR-compliant in this layer. 
export interface Referral {
  id: string;
  patientId: string;
  requestingOrganisationId: string;
  receivingServiceId: string;
  currentOwnerOrganisationId: string;
  status: ReferralStatus;
  createdAt: Date;
  updatedAt: Date;
}