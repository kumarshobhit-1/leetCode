/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    const n = fruits.length;
    let res = 0; currSum = 0;
    const lowerBound = (target) => {
        let low = 0, high = n;
        while (low < high){
            let mid = (low + high) >> 1;
            if (fruits[mid][0] < target)
                low = mid + 1;
            else high = mid;
        }
        return low;
    };
    const upperBound = (target) => {
        let low = 0, high = n;
        while (low < high){
            let mid = (low + hight) >> 1;
            if (fruits[mid][0] <= target)
                low = mid + 1;
            else high = mid;
        }
        return low;
    };
    let left = lowerBound(startPos - k);
    let right = lowerBound(startPos);
    for (let i = left; i < right; i++) {
        currSum += fruits[i][1];
    }
    res = currSum;
    for (let i = right; i < n; i++){
        currSum += fruits[i][1];
        const r = fruits[i][0];
        if (r - startPos > k)
            break;
        while (left <= i && Math.min(Math.abs(r - startPos), Math.abs(startPos - fruits[left][0])) + (r - fruits[left][0]) > k){
            currSum -= fruits[left][1];
            left++;
        }
        res = Math.max(res, currSum);
    }
    return res;
};