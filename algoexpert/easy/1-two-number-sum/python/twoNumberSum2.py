def two_number_sum(array, target_sum):
    nums = {}
    for num in array: 
        potentialMatch = target_sum - num
        if potentialMatch in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    return []        

print(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 10))