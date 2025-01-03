import random

def br_input(player):
    while True:
        try:
            count = int(input(f"{player}가 부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능) : "))
            if count in [1, 2, 3]:
                return count
            else:
                print("1, 2, 3 중 하나를 입력하세요")
        except ValueError:
            print("정수를 입력하세요")

def brGame():
    num = 0
    current_player = "player"

    while num < 31:
        if current_player == "player":
            count = br_input("player")
        else:
            count = random.randint(1, 3)
            print(f"computer : {count}")
        
        for i in range(count):
            num += 1
            print(f"{current_player} : {num}")
            
            if num == 31:
                print(f"{current_player} win!")
                return
        
        current_player = "computer" if current_player == "player" else "player"
    
brGame()