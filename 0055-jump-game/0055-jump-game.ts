function canJump(nums: number[]): boolean {

    let indexToReach = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= indexToReach) {
            indexToReach = i;
        } else {
            if (i === 0) return false;
        }
    }
    return true;
};