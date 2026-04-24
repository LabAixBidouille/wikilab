import machine

from machine import Pin 

import time

from time import sleep

MG1 = Pin(18, Pin.OUT) 
MG2 = Pin(19, Pin.OUT) 
MD1 = Pin(20, Pin.OUT) 
MD2 = Pin(21, Pin.OUT) 

trig = Pin(17, Pin.OUT) 
echo = Pin(16, Pin.IN, Pin.PULL_DOWN) 

def aD(): 
    MD1.high() 
    MD2.low() 
def rD(): 
    MD1.low()
    MD2.high()
def sD(): 
    MD1.low()
    MD2.low()
def aG() : 
    MG1.high()
    MG2.low()
def rG() :
    MG1.low()
    MG2.high()
def sG():
    MG1.low()
    MG2.low()

while True:
    trig.value(0)
    time.sleep(0.1)
    trig.value(1)
    time.sleep_us(2)

    trig.value(0)
    while echo.value()==0:
          start = time.ticks_us()
          print('start')
    while echo.value()==1: 
          end = time.ticks_us()
          print('end')
          
    duration = end - start

    distance = duration * 17165 / 1000000
    
    distance = round(distance, 0)
    
    print ('Distance:',"{:.0f}".format(distance),'cm')

    while distance > 15 :
         
         aD()
         aG()

    rD()
    rG()
    time.sleep(0.5)
    rD()
    aG()
    time.sleep(0.5)
