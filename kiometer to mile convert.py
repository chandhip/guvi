kilometers = float(input("Enter value in kilometers: "))

# conversion factor
conv_fac = 0.621371

#equation
miles = kilometers * conv_fac
print('%0.2f kilometers is equal to %0.2f miles' %(kilometers,miles))

# if converts mile to kilometer
#equation is kilometers = miles / conv_fac