from ascii_magic import AsciiArt

# Завантажуємо зображення
my_art = AsciiArt.from_image('frame-2.png')
my_art.to_html_file('netanyahu-frame2.html', columns=200)
# Виводимо у термінал (збереже пропорції автоматично)
#my_art.to_terminal(columns=600)