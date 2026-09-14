
// Details the transfer of ownership for a referral.
export interface ReferralOwnershipTransfer {
  id: string;
  referralId: string;

  fromOrganisationId: string;
  toOrganisationId: string;

  transferredBy: string; // Tracking method TBD
  reason: string;

  transferredAt: Date;
}