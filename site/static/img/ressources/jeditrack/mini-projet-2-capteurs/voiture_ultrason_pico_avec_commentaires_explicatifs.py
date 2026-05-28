import machine
# importe la bibliothèque liée à l'utilisation des composants de la carte programmable,
# par exemple les pins, le bouton reset, etc.
from machine import Pin 
# importe la bilbiothèque de fonctions liées à l'utilisation des broches, depuis "machine".
import time
# importe la biblio. des fonctions liées aux temps (chronomètre, compte à rebours, etc.)
from time import sleep
# importe la fonction "sleep", depuis "time", qui permet de faire des pauses dans le programme.
"""
Tous les "import" sont facultatifs mais permettent de ne pas avoir à détailler où chaque fonction
se trouve. La fontion "sleep" par exemple se trouve dans la bibliothèque "time" et si on ne
précisait pas ici où elle se trouvait, il faudrait écrire "time.sleep" à chaque fois qu'on souhaite
l'utiliser.
En résumé, c'est pour gagner du temps et des caractères, ce qui rend le programme plus simple à
lire.

"""
MG1 = Pin(18, Pin.OUT) # définit MG1 comme le nom de la broche 18.
MG2 = Pin(19, Pin.OUT) # définit MG2 comme le nom de la broche 19.
MD1 = Pin(20, Pin.OUT) # définit MD1 comme le nom de la broche 20.
MD2 = Pin(21, Pin.OUT) # définit MD2 comme le nom de la broche 21.
"""
Nous définissons ici les broches controlant les moteurs. MG et MD correspondant respectivement à
"moteur gauche" et "moteur droit".
Cela nous évite de devoir écrire " Pin(18, Pin.OUT) " à chaque fois que nous voulons commander le
moteur gauche par exemple.
"""
trig = Pin(17, Pin.OUT) # définit "trig" comme le nom de la broche 17.
echo = Pin(16, Pin.IN, Pin.PULL_DOWN) # définit echo comme le nom de la broche 16.
"""
Les broches trig et echo sont celles controlant les signaux du capteur ultrasonore.
"Trig" correspondant à "trigger" (déclencher en anglais), qui est el signal émit par le capteur,
et "echo", qui enregistre le signal entrant, l'echo du signal "trigger".
La broche "trig" est définie en tant que "Pin.OUT", en sortie, car on la controle. Un signal "sort"
de la broche. "Echo" est définie en "Pin.IN", en entrée, car elle va recevoir des informations,
un signal y "entre".

"""
def aD(): # définit la fonction "avance Droite"
    MD1.high() # met la broche MD1 en état "haut", ou allumée
    MD2.low() # met la broche MD2 en état "bas", ou éteinte
def rD(): # définit la focntion "recule Droite"
    MD1.low()
    MD2.high()
def sD(): # stop Droite
    MD1.low()
    MD2.low()
def aG() : # avance Gauche
    MG1.high()
    MG2.low()
def rG() :
    MG1.low()
    MG2.high()
def sG():
    MG1.low()
    MG2.low()
"""
Un moteur est controlé par 2 pins. L'une est mise en état haut, un courant électrique y parvient,
comme si connectée au positif d'une pile, et l'autre en état bas, le courant électrique n'y arrive
pas, comme si connectée au négatif d'une pile. Le courant électrique peut circuler dans le moteur,
le mettant en marche.
En inversant les polarités, le courant circule dans le sens inverse, faisant tourner le moteur dans
l'autre sens.
En mettant les 2 broches en état bas, elles ont la même polarité, le courant electrique ne passe
alors plus, et le moteur sera alors à l'arrêt.

"""


while True:
    # cette ligne permet d'entrer dans une boucle infinie. "while" permet de répéter les lignes
    # indentées (décalées) sous celles-ci tant qu'une condition que nous choisissons est remplies.
    # En y ajoutant un "true" on définit une boucle dont la condition est toujours vérifiée,
    # toujours vraie. On aurait par exemple pu remplacer "True" par " 1 = 1"
    # Comme cette égalité est toujours vraie, la boucle s'execute toujours.
    trig.value(0)
    # La broche "trig" est définit en état bas, ou 0, pour qu'elle n'émette pas de signal
    # Cette ligne ne sert qu'à sassurer que la broche est bien éteinte à chaque fois que la boucle
    # se lance.
    time.sleep(0.1)
    # pause de 0.1 sec
    trig.value(1)
    # Allume la proche trig
    time.sleep_us(2)
    # pause de 2 microsecondes (µs)
    trig.value(0)
    # éteint la broche trig
    while echo.value()==0:
    # définit une boucle "tant que la valeur de echo est égale à 0", c'est à dire tant que la
    # broche ne reçoit pas de signal
          start = time.ticks_us()
          print('start')
          # définit une variable "start" dont la valeur est égale à "time_ticks_us".
          # Il s'agit d'un chronomètre qui tourne en fond. Si par exemple il s'est passé 2 secondes,
          # la valeur de "start" se mettra à 2 000 000 µs
    while echo.value()==1: 
          end = time.ticks_us()
          print('end')
          # dés que la broche echo reçoit un signal, on nous sorton de la boucle précédente,
          # et entrons dans celle-ci. On y définit une variable "end", qui prend la valeur de
          # time_ticks_us. 
    duration = end - start
    # définit une variable "duration" qui est égale à "end" moins "start". Cela permet de calculer
    # le temps entre l'émission ndu signal (quand trig est en état haut) et la réception de l'echo.
    # Par exemple "start" est défini 2 secondes après le début du programme, et l'echo revient à 2,3s
    # "Duration" vaudra donc 2300 µs - 2000 µs, soit 300, cela signifie que le signal à mis 300 µs
    # à revenir.
    distance = duration * 17165 / 1000000
    """
    Nous calculons ici la distance. Le capteur emet des ultrasons, dont nous connaissons la vitesse
    dans l'air (~ 343,3 m/s). En mulitpliant la vitesse par le temps, on peut calculer la distance.
    Nous convertissons la en cm par µs pour avoir directement une vitesse en cm.
    343,3 m/s devient 34330 cm /1000000 µs.
    
    Dans le code le nombre est 17165, qui correspond à la moitié. Le signal devant faire un aller-
    retour, il faut diviser la distance totale par 2.
    """
    distance = round(distance, 0)
    # Nous redefefinissons distance pour l'arrondir à l'entier supérieur.
    
    print ('Distance:',"{:.0f}".format(distance),'cm')
    # Imprime "Distance = xx cm" dans la console

    while distance > 15 :
    # cette boucle définit ce qu'il se passe si la distance calculée est supérieure à 15 cm
         
         aD()
         aG()
 # en utilisant les 2 fonctions "avance" définies plus haut, le robot avancera tant que
 # condition définie à la ligne 120 est remplie.
 # dés que la distance est inférieure à 15 cm, on sort de la boucle et la fin du code ci-dessous
 # s'éxecute. La séquence fait réculer le robot pendant 0.5s, puis tourner le robot vers la droite
 # pendant 0.5s, en faisant reculer le moteur droit et avancer le moteur gauche.
    rD()
    rG()
    time.sleep(0.5)
    rD()
    aG()
    time.sleep(0.5)
# Une fois à la fin du programme, on retourne au début de la boucle, au "while True" de la ligne 69.
