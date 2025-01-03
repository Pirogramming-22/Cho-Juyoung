num = 0

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

playerA_count = br_input("playerA")
for i in range(1, playerA_count + 1):
    num += 1
    print(f"playerA : {num}")

playerB_count = br_input("playerB")
for i in range(1, playerB_count + 1):
    num += 1
    print(f"playerB : {num}")