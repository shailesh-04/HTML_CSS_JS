import turtle
t = turtle
t.speed(10)
t.forward(200)
t.pensize(30)
i=0
while i<4:
 	i+=1
 	j=0
 	while j<45:
 		j+=1
 		t.left(2)
 		t.forward(1)
 	t.forward(200)
t.pensize(2)
t.pencolor('white')
t.left(100)
t.forward(200)
t.pencolor('black')
t.pensize(20)
t.circle(2)
t.pensize(2)
t.left(110)
t.pencolor('white')
t.forward(100)
t.pencolor('black')
t.pensize(20)
t.circle(50)
t.done()