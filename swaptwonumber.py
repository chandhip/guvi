# To take inputs from the user
x = input('Enter value of x: ')
y = input('Enter value of y: ')

temp = x
x = y
y = temp

print('The value of x after swapping: {}'.format(x))
print('The value of y after swapping: {}'.format(y))

#---------------without temp varible----------
#a= 5
#b= 10

#a, b = b, a
#print("a =", a)
#print("b =", b)

#note: remove the # and run the code 