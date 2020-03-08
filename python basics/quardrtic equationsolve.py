#ax2 + bx + c = 0, where a, b and c are real number and not equal to zero
#if any number  given as input...use (e.g)b=input("enter the element")

import cmath

a = 1
b = 5
c = 6

# calculate the discriminant
d = (b**2) - (4*a*c)

sol1 = (-b-cmath.sqrt(d))/(2*a)
sol2 = (-b+cmath.sqrt(d))/(2*a)

print('The solution are {0} and {1}'.format(sol1,sol2))