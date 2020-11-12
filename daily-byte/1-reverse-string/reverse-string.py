def reverse_string(str):
    output = ""
    i  = len(str) - 1
    while i >= 0:
        output += str[i]
        i -= 1
    return output

print(reverse_string('abcd')) # dcba