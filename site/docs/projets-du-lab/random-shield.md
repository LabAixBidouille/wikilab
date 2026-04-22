---
id: random-shield
title: "Random Shield"
sidebar_label: "Random Shield"
sidebar_position: 3
---

# Random Shield

| Projet | Catégorie |
|---|---|
| Projets du LAB | Électronique |

### Présentation du projet

Générateur de bits aléatoires pour Arduino.

- Permet de générer des bits aléatoires pour des applications ludiques ou cryptographiques.

- Circuit simple à mettre en œuvre.

- Nécessite deux piles 9 V ou une alimentation symétrique 12 V.

- Vitesse d'acquisition maximale de 6,25 kbits par seconde.

![Random Shield](/img/ressources/projets-du-lab/Random2.jpg)

### Circuit de base

![Circuit random 1](/img/ressources/projets-du-lab/Circuitrandom1.jpg)
![Circuit random 2](/img/ressources/projets-du-lab/Circuitrandom2.jpg)

### Principe de fonctionnement

Le bruit est généré en polarisant une diode Zener ou une jonction PN de transistor en inverse, dans la zone dite d'avalanche. Dans cette zone, les électrons se déplacent de manière totalement aléatoire. Le transistor 2N3904 est utilisé ici car sa tension inverse est relativement faible (8,2 V) et le bruit qu'il produit présente une grande amplitude.

Le signal obtenu est ensuite amplifié par un amplificateur opérationnel (AOP), après avoir traversé un condensateur. Ce condensateur permet d'éliminer la tension d'offset de 8,2 V (la tension inverse). Le schéma d'alimentation avec les deux piles n'est pas symétrique : la tension positive est fixée à +12 V précisément pour dépasser largement la tension d'avalanche. Le gain est réglé de manière à obtenir une amplitude de 4 V crête à crête (le signal oscille entre +2 V et -2 V à ce stade).

Note : un bruit de 90 mV a été mesuré à la sortie de C1. Avec une résistance de 2 MOhms sur la boucle de rétroaction de l'AOP, soit un gain de 2 000, le signal de sortie devrait théoriquement atteindre 180 V crête à crête. Ce résultat reste inexpliqué, mais le circuit fonctionne correctement en l'état.

À la sortie de l'AOP, un second condensateur est placé afin de pouvoir appliquer une tension d'offset au signal amplifié. En effet, la logique de l'Arduino est la suivante : 0 logique entre 0 et 0,9 V, 1 logique entre 3 et 4,2 V. Le signal doit donc être ajusté dans cette plage. L'expérience montre que le potentiomètre P2 doit être réglé à 2,5 V.

Note : au fur et à mesure que les piles 9 V se déchargent, il sera probablement nécessaire de réajuster le potentiomètre P1 pour maintenir une tension de +12 V. La valeur de la tension négative importe peu, tant qu'elle reste inférieure à -3 V, seuil nécessaire à une amplification correcte du signal. Il conviendra également de vérifier que P2 délivre bien 2,5 V.

### Code Arduino

```
// Basic program that acquires the noise bits as fast as possible
// Led interface for status report
// One bit per byte in the SD file
// 6.25 kbits per second max
// Claude Jaspart claude.a.jaspart@gmail.com - June 2015

#include <SPI.h>
#include <SD.h>

File myFile;

int RNG_signal = 8;                          // The signal of the shield is on this pin
int ledwait = 7;                             // This led will indicate the init phase of the program
                                             // If ledwait turns on at the same as ledack, then the SD card couldn't be init
int ledacq=6;                                // This led will indicate that the Arduino is acquiring bits
int ledok=5;                                 // This led will indicate that the Arduino has finishing acquiring the bits and the SD card can be removed

unsigned int RNG_bit = 0;                    // The value of the read bit from the signal will be stored here
unsigned int counter = 0;                    // Used for determining how many bits have been read so far
const unsigned int max_count = 50000;        // Max value could be 65535, but simple to count in blocks of 50kbits
unsigned int repeat = 1;                     // Used for determining how many bits have been read so far
const unsigned int max_repeat = 20;          // size of sample = max_count * max_repeat, here 20 * 50000 = 1 Mbits
unsigned int sample_microsecs = 500;         // If you want to read bits at a particular rate, 500 microsecs min value

void setup()
{
  // Defining the digital pins for the signal and leds
  pinMode(RNG_signal, INPUT);
  pinMode(ledwait, OUTPUT);
  pinMode(ledacq, OUTPUT);
  pinMode(ledok, OUTPUT);

  // Init of the leds
  digitalWrite(ledwait, LOW);
  digitalWrite(ledacq, LOW);
  digitalWrite(ledok, LOW);

  // Starting the init phase
  digitalWrite(ledwait, HIGH);

  // Init the SD card
  if (!SD.begin(4))
  {
    digitalWrite(ledacq, HIGH);
    digitalWrite(ledwait, HIGH);
    return;
  }

  // Creating the file
  myFile = SD.open("rng.txt", FILE_WRITE);

  // Going to the Acq phase
  delay(2000);
  digitalWrite(ledwait, LOW);
  digitalWrite(ledacq, HIGH);
}

void loop()
{
  // Reading the signal bit and writing it to the file
  RNG_bit = digitalRead(RNG_signal);
  myFile.print(RNG_bit);

  // Block that determines how many bits have been read
  counter++;

  if ( counter >= max_count )
  {
    if (repeat >= max_repeat)
    {
      myFile.close();
      digitalWrite(ledacq, LOW);
      digitalWrite(ledok, HIGH);
      while(1);
    }
    else
    {
      repeat++;
      counter = 0;
    }
  }

  // If you want to acquire bits at a given rate (min 500microsecs)
  //delayMicroseconds(time_sample_microsecs);

}

```

### Test du générateur

Il n'existe aucune méthode fiable pour déterminer si une suite de nombres est réellement aléatoire. On ne peut que vérifier si le générateur se comporte de manière conforme d'un point de vue statistique. La batterie de tests DieHarder a été utilisée à cet effet :

```
terminal:sudo apt-get install dieharder

```

Pour lancer les tests sur un échantillon de 2 mégabits :

```
terminal:dieharder -f rng.txt -a

```

Voici le résultat :

```
#=============================================================================#
#            dieharder version 3.31.1 Copyright 2003 Robert G. Brown          #
#=============================================================================#
   rng_name    |           filename             |rands/second|
        mt19937|                         RNG.TXT|  1.29e+08  |
#=============================================================================#
        test_name   |ntup| tsamples |psamples|  p-value |Assessment
#=============================================================================#
   diehard_birthdays|   0|       100|     100|0.30889575|  PASSED
      diehard_operm5|   0|   1000000|     100|0.99081369|  PASSED
  diehard_rank_32x32|   0|     40000|     100|0.79546934|  PASSED
    diehard_rank_6x8|   0|    100000|     100|0.90281704|  PASSED
   diehard_bitstream|   0|   2097152|     100|0.86512718|  PASSED
        diehard_opso|   0|   2097152|     100|0.31791348|  PASSED
        diehard_oqso|   0|   2097152|     100|0.53248615|  PASSED
         diehard_dna|   0|   2097152|     100|0.78644034|  PASSED
diehard_count_1s_str|   0|    256000|     100|0.90216600|  PASSED
diehard_count_1s_byt|   0|    256000|     100|0.57958785|  PASSED
 diehard_parking_lot|   0|     12000|     100|0.45123033|  PASSED
    diehard_2dsphere|   2|      8000|     100|0.07839664|  PASSED
    diehard_3dsphere|   3|      4000|     100|0.76106594|  PASSED
     diehard_squeeze|   0|    100000|     100|0.02475387|  PASSED
        diehard_sums|   0|       100|     100|0.16259036|  PASSED
        diehard_runs|   0|    100000|     100|0.12672226|  PASSED
        diehard_runs|   0|    100000|     100|0.42649685|  PASSED
       diehard_craps|   0|    200000|     100|0.37205173|  PASSED
       diehard_craps|   0|    200000|     100|0.78931850|  PASSED
 marsaglia_tsang_gcd|   0|  10000000|     100|0.73730273|  PASSED
 marsaglia_tsang_gcd|   0|  10000000|     100|0.83482357|  PASSED
         sts_monobit|   1|    100000|     100|0.72618254|  PASSED
            sts_runs|   2|    100000|     100|0.89478484|  PASSED
          sts_serial|   1|    100000|     100|0.13273684|  PASSED
          sts_serial|   2|    100000|     100|0.60467750|  PASSED
          sts_serial|   3|    100000|     100|0.36788816|  PASSED
          sts_serial|   3|    100000|     100|0.45945882|  PASSED
          sts_serial|   4|    100000|     100|0.52089161|  PASSED
          sts_serial|   4|    100000|     100|0.50654753|  PASSED
          sts_serial|   5|    100000|     100|0.64402415|  PASSED
          sts_serial|   5|    100000|     100|0.90261034|  PASSED
          sts_serial|   6|    100000|     100|0.54809205|  PASSED
          sts_serial|   6|    100000|     100|0.53676669|  PASSED
          sts_serial|   7|    100000|     100|0.07964161|  PASSED
          sts_serial|   7|    100000|     100|0.04039882|  PASSED
          sts_serial|   8|    100000|     100|0.12819180|  PASSED
          sts_serial|   8|    100000|     100|0.98790885|  PASSED
          sts_serial|   9|    100000|     100|0.13273201|  PASSED
          sts_serial|   9|    100000|     100|0.35787029|  PASSED
          sts_serial|  10|    100000|     100|0.82298480|  PASSED
          sts_serial|  10|    100000|     100|0.97802272|  PASSED
          sts_serial|  11|    100000|     100|0.87189101|  PASSED
          sts_serial|  11|    100000|     100|0.65033244|  PASSED
          sts_serial|  12|    100000|     100|0.93100183|  PASSED
          sts_serial|  12|    100000|     100|0.99869428|   WEAK
          sts_serial|  13|    100000|     100|0.99646843|   WEAK
          sts_serial|  13|    100000|     100|0.40432078|  PASSED
          sts_serial|  14|    100000|     100|0.71285726|  PASSED
          sts_serial|  14|    100000|     100|0.31898898|  PASSED
          sts_serial|  15|    100000|     100|0.88309583|  PASSED
          sts_serial|  15|    100000|     100|0.95643787|  PASSED
          sts_serial|  16|    100000|     100|0.89957361|  PASSED
          sts_serial|  16|    100000|     100|0.96772499|  PASSED
         rgb_bitdist|   1|    100000|     100|0.95623079|  PASSED
         rgb_bitdist|   2|    100000|     100|0.58789918|  PASSED
         rgb_bitdist|   3|    100000|     100|0.95440344|  PASSED
         rgb_bitdist|   4|    100000|     100|0.98258544|  PASSED
         rgb_bitdist|   5|    100000|     100|0.08135261|  PASSED
         rgb_bitdist|   6|    100000|     100|0.92614458|  PASSED
         rgb_bitdist|   7|    100000|     100|0.99177385|  PASSED
         rgb_bitdist|   8|    100000|     100|0.99188216|  PASSED
         rgb_bitdist|   9|    100000|     100|0.97692511|  PASSED
         rgb_bitdist|  10|    100000|     100|0.47151755|  PASSED
         rgb_bitdist|  11|    100000|     100|0.59783413|  PASSED
         rgb_bitdist|  12|    100000|     100|0.19750764|  PASSED
rgb_minimum_distance|   2|     10000|    1000|0.27194018|  PASSED
rgb_minimum_distance|   3|     10000|    1000|0.28712170|  PASSED
rgb_minimum_distance|   4|     10000|    1000|0.65299684|  PASSED
rgb_minimum_distance|   5|     10000|    1000|0.12188697|  PASSED
    rgb_permutations|   2|    100000|     100|0.56273791|  PASSED
    rgb_permutations|   3|    100000|     100|0.64514608|  PASSED
    rgb_permutations|   4|    100000|     100|0.31960630|  PASSED
    rgb_permutations|   5|    100000|     100|0.84713061|  PASSED
      rgb_lagged_sum|   0|   1000000|     100|0.88527221|  PASSED
      rgb_lagged_sum|   1|   1000000|     100|0.99152865|  PASSED
      rgb_lagged_sum|   2|   1000000|     100|0.07103505|  PASSED
      rgb_lagged_sum|   3|   1000000|     100|0.07072667|  PASSED
      rgb_lagged_sum|   4|   1000000|     100|0.06759505|  PASSED
      rgb_lagged_sum|   5|   1000000|     100|0.24333290|  PASSED
      rgb_lagged_sum|   6|   1000000|     100|0.13992249|  PASSED
      rgb_lagged_sum|   7|   1000000|     100|0.50312525|  PASSED
      rgb_lagged_sum|   8|   1000000|     100|0.11746691|  PASSED
      rgb_lagged_sum|   9|   1000000|     100|0.45940744|  PASSED
      rgb_lagged_sum|  10|   1000000|     100|0.39016408|  PASSED
      rgb_lagged_sum|  11|   1000000|     100|0.65350506|  PASSED
      rgb_lagged_sum|  12|   1000000|     100|0.99241243|  PASSED
      rgb_lagged_sum|  13|   1000000|     100|0.05774255|  PASSED
      rgb_lagged_sum|  14|   1000000|     100|0.35248899|  PASSED
      rgb_lagged_sum|  15|   1000000|     100|0.34204029|  PASSED
      rgb_lagged_sum|  16|   1000000|     100|0.26109225|  PASSED
      rgb_lagged_sum|  17|   1000000|     100|0.25001244|  PASSED
      rgb_lagged_sum|  18|   1000000|     100|0.08612312|  PASSED
      rgb_lagged_sum|  19|   1000000|     100|0.67709116|  PASSED
      rgb_lagged_sum|  20|   1000000|     100|0.19598901|  PASSED
      rgb_lagged_sum|  21|   1000000|     100|0.58653101|  PASSED
      rgb_lagged_sum|  22|   1000000|     100|0.54480996|  PASSED
      rgb_lagged_sum|  23|   1000000|     100|0.97657972|  PASSED
      rgb_lagged_sum|  24|   1000000|     100|0.06151635|  PASSED
      rgb_lagged_sum|  25|   1000000|     100|0.69753975|  PASSED
      rgb_lagged_sum|  26|   1000000|     100|0.44499540|  PASSED
      rgb_lagged_sum|  27|   1000000|     100|0.85393902|  PASSED
      rgb_lagged_sum|  28|   1000000|     100|0.17044719|  PASSED
      rgb_lagged_sum|  29|   1000000|     100|0.98515748|  PASSED
      rgb_lagged_sum|  30|   1000000|     100|0.92187461|  PASSED
      rgb_lagged_sum|  31|   1000000|     100|0.62877226|  PASSED
      rgb_lagged_sum|  32|   1000000|     100|0.99398180|  PASSED
     rgb_kstest_test|   0|     10000|    1000|0.00510267|  PASSED
     dab_bytedistrib|   0|  51200000|       1|0.96033595|  PASSED
             dab_dct| 256|     50000|       1|0.74894574|  PASSED
Preparing to run test 207.  ntuple = 0
        dab_filltree|  32|  15000000|       1|0.61815623|  PASSED
        dab_filltree|  32|  15000000|       1|0.11110069|  PASSED
Preparing to run test 208.  ntuple = 0
       dab_filltree2|   0|   5000000|       1|0.69384760|  PASSED
       dab_filltree2|   1|   5000000|       1|0.87581645|  PASSED
Preparing to run test 209.  ntuple = 0
        dab_monobit2|  12|  65000000|       1|0.58191574|  PASSED

```

Hormis deux instances marquées WEAK, le résultat est très satisfaisant et atteste de l'efficacité du générateur.

### Évolutions envisagées

- Conception d'un boîtier de rangement.

- Compression de 8 bits aléatoires sur un seul octet.

- Interface graphique avec menus, potentiomètre et boutons-poussoirs pour la sélection.

- Interface Bluetooth pour la connexion avec un smartphone.

- Génération et affichage en grand format d'un ou plusieurs nombres aléatoires (pour remplacer les dés).

- Ajout d'une seconde carte SD pour l'application cryptographique One Time Pad.

### Références

[http://holdenc.altervista.org/avalanche/](http://holdenc.altervista.org/avalanche/)

[https://www.random.org/](https://www.random.org/)
