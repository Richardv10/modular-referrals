
// An enum by any other name would smell as sweet, but we're using a type alias for flexibility.

export type ReferralStatus =
  | 'DRAFT'
  | 'SUBMITTED'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'CANCELLED';