import time

class MockTelegramBot:
    def __init__(self):
        self.operator_name = "Ваш Друг"

    def send_notification(self, message):
        print(f"\n[TELEGRAM BOT -> {self.operator_name}]: {message}")

    def display_buttons(self, buttons):
        print("[Options]: " + " | ".join(buttons))

    def wait_for_input(self):
        return input("Ваш вибір (натисніть 1 або 2): ")

def simulate_new_order():
    bot = MockTelegramBot()
    
    print("\n--- СИМУЛЯЦІЯ: Надійшло нове замовлення ---")
    time.sleep(1)
    
    bot.send_notification("🔔 НОВЕ ЗАМОВЛЕННЯ!\nКлієнт: Tech Reviews Daily\nПослуга: AI Dubbing (Іспанська)\nВідео згенеровано. Перевірте файл: final_dubbed_video.mp4")
    bot.display_buttons(["1. ✅ Схвалити та Відправити", "2. 🔄 Перегенерувати (Помилка)"])
    
    choice = bot.wait_for_input()
    
    if choice == '1':
        print("\n[*] Запускаю відправку клієнту...")
        time.sleep(1)
        bot.send_notification("✅ Відео успішно відправлено клієнту на пошту contact@techreviewsdaily.com!")
    else:
        print("\n[*] Відправляю задачу на перегенерацію...")
        time.sleep(1)
        bot.send_notification("🔄 Відео відправлено в чергу на перегенерацію.")

if __name__ == "__main__":
    simulate_new_order()
