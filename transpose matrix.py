X = [[100,2],
    [6 ,500],
    [2 ,3]]

result = [[0,0,0],
         [0,0,0]]


for i in range(len(X)):
    for j in range(len(X[0])):
       result[j][i] = X[i][j]
#row and column interchangable

for r in result:
   print(r)