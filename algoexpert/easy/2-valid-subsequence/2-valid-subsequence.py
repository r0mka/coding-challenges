def isValidSubsequence(array, sequence):
    seqIdx = 0; 
    for value in array: 
        if seqIdx == len(sequence): 
            break
        elif value == sequence[seqIdx]:
            seqIdx += 1
    return seqIdx == len(sequence)        
        


print(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))

def isValidSubsequence2(array, sequence):
    arrIdx = 0;
    seqIdx = 0;
    while arrIdx < len(array) and seqIdx < len(sequence):
        if array[arrIdx] == sequence[seqIdx]:
            seqIdx += 1
        arrIdx += 1
    
    return seqIdx == len(sequence)
    
        
print(isValidSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))