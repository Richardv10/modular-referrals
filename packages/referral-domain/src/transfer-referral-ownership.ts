import type { Referral } from './referral';
import type { ReferralOwnershipTransfer } from './referral-ownership-transfer';

// Stuff happens here, so we've got two interfaces describing the shapes of two objects that contain transfer data
export interface TransferOwnershipCommand {
  toOrganisationId: string;
  transferredBy: string;
  reason: string;
}

export interface TransferOwnershipResult {
  referral: Referral;
  transfer: ReferralOwnershipTransfer;
}

// This function handles the transfer of ownership for a referral. We're employing "domain level validation" to ensure that the transfer adheres to the business rules independently of external changes. 

export function transferReferralOwnership(
// The referral to be transferred and the command containing transfer details are passed as arguments.
referral: Referral,
  command: TransferOwnershipCommand
): TransferOwnershipResult {
  // Make a new date object to record the time of the transfer.
    const now = new Date();

// Create a new transfer record with the details from the command and the current timestamp.
  const transfer: ReferralOwnershipTransfer = {
    id: randomUUID(),
    referralId: referral.id,
    fromOrganisationId: referral.currentOwnerOrganisationId,
    toOrganisationId: command.toOrganisationId,
    transferredBy: command.transferredBy,
    reason: command.reason,
    transferredAt: now
  };
    // Update the referral with the new owner and the current timestamp.
  const updatedReferral: Referral = {
    //unpack the existing referral properties
    ...referral,
    currentOwnerOrganisationId: command.toOrganisationId,
    updatedAt: now
  };

  // Return the updated referral and the new transfer record.
  return {
    referral: updatedReferral,
    transfer
  };
}