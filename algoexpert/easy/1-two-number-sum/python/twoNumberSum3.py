def two_number_sum(array, target_sum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        currentSum = array[left] + array[right]
        if currentSum == target_sum: 
            return [array[left], array[right]]
        elif currentSum < target_sum:
            left += 1
        elif currentSum > target_sum:
            right -= 1
    return []        
print(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 10))