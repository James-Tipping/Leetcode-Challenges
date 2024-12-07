function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const indexMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (indexMap.has(num)) {
            const prevIndex = indexMap.get(num)!;
            if (i - prevIndex <= k) {
                return true;
            }
        }
        
        indexMap.set(num, i);
    }

    return false;
}