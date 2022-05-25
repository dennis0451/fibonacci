def fibonacci(n):
  sum = 0
  first_Num = 0
  second_Num = 1
 
  for i in range(1,n):
      sum = first_Num + second_Num
      first_Num = second_Num
      second_Num = sum
      
      # print(sum)
  return sum
print(fibonacci(45))