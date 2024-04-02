
cont = 0
posIncial = 0
posFinal = 0
bpmMax = 0
divisor = 1
Somadivisor = 0

while True:
    gps = input("Me de os numeros do Gps: ")
    if gps == "000":
        break
    cont += 1  
    
    #como o gps eh uma string no momento eu posso fatiar e pegar primeiro os dois primeiros e dps os 3 ultimos numeros
    posicao = gps[0] + gps[1]
    posicao = int(posicao)

    bpm = gps[2] + gps[3] + gps[4]
    bpm = int(bpm)

    if cont == 1:
        posIncial = posicao
        batMax = bpm

    if bpm > batMax:
        batMax = bpm
    
    aptidaoFisica = 220 - batMax

    posFinal = posicao

    velocidade = (posFinal - posIncial) // cont

if velocidade >= 4:
    print("O time dele é QUENIA")
elif velocidade < 4 and velocidade >= 2:
    print("O time dele é AZUL")
else:
    print("O time dele é Branco")


if aptidaoFisica <= 10:
    print("sua idade de aptidao fisica nao pode ser calculada")
else:
    print("A aptidao fisica do atleta é: ", aptidaoFisica)

while divisor < bpmMax:
    if batMax % divisor == 0:
        Somadivisor += divisor
        divisor += 1
if Somadivisor > batMax:
    print("parabens! voce terah desconto na inscricao da prova! \o/\o/\o/")



    





