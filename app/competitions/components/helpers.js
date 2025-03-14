export const getPlanColor = (plan) => {
  switch (plan) {
    case 'TIER_ONE': return 'success';
    case 'TIER_FOUR': return 'warning';
    default: return 'primary';
  }
};