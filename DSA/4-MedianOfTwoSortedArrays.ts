function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedLength = nums1.length + nums2.length;
    let medianAt = Math.floor(mergedLength / 2);
    let i = 0;
    let j = 0;
    let count = 0;
    const mergedArray = [];
    let median;
    while (count <= medianAt) {
        if (i >= nums1.length) {
            mergedArray.push(nums2[j]);
            j++;
        } else if (j >= nums2.length) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            if (nums1[i] < nums2[j]) {
                mergedArray.push(nums1[i]);
                i++;
            } else if (nums1[i] > nums2[j]) {
                mergedArray.push(nums2[j]);
                j++;
            } else if (nums1[i] == nums2[j]) {
                mergedArray.push(nums1[i]);
                i++;
                mergedArray.push(nums2[j]);
                j++;
                count++;
            }
        }
        count++
    }

    if (mergedLength % 2 == 0) {
        median = (mergedArray[medianAt] + mergedArray[medianAt - 1]) / 2;
    } else {
        median = mergedArray[medianAt];
    }

    return median;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));