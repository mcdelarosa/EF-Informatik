height = input("Enter a height for the rectangle")
width = input("Enter a width for the rectangle")
y = int(height)
x = int(width)
def constructionOfBase(number):
    for repetitions in range(number):
        print("*", end="")
    print("")

def constructionOfSides(number):
    for repetitions in range(number, 2, -1):
        print("*", end="")
        for repetitions in range(number, 2, -1):
            print(" ", end="")
        print("*")


def rectangle():
    constructionOfBase(x)
    constructionOfSides(y)
    constructionOfBase(x)
rectangle()