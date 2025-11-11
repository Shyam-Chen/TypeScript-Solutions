type PredictPartyVictory = (senate: string) => string;

/**
 * Accepted
 */
export const predictPartyVictory: PredictPartyVictory = (senate) => {
  // Initialize queues to store the indices of Radiant and Dire senators
  const radiantQueue: number[] = [];
  const direQueue: number[] = [];

  // Populate the queues with the indices of the senators
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      radiantQueue.push(i); // Radiant senator
    } else {
      direQueue.push(i); // Dire senator
    }
  }

  const n = senate.length; // Total number of senators

  // Simulate the voting process
  while (radiantQueue.length > 0 && direQueue.length > 0) {
    // Get the first senator in each queue
    const radiantIndex = radiantQueue.shift() || 0;
    const direIndex = direQueue.shift() || 0;

    // Compare their indices
    if (radiantIndex < direIndex) {
      // Radiant senator bans Dire senator
      // Re-enqueue the Radiant senator with a new index for the next round
      radiantQueue.push(radiantIndex + n);
    } else {
      // Dire senator bans Radiant senator
      // Re-enqueue the Dire senator with a new index for the next round
      direQueue.push(direIndex + n);
    }
  }

  // Determine the winning party based on which queue still has senators
  return radiantQueue.length > 0 ? 'Radiant' : 'Dire';
};
