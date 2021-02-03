def two_number_sum(array, target_sum):
    for i in range(len(array)):
        firstNum = array[i]
        for j in range(i + 1, len(array)):
            secondNum = array[j]
            if firstNum + secondNum == target_sum:
                return [firstNum, secondNum]

    return []

print(two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 10))