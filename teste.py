# def soma_multiplos(n1, n2):
#     i = 1
#     soma = 0
#     lim = max(n1,n2) * 10
#     a1 = 0
#     a2 = 0
#     lista = []

#     if n2 > n1:
#         while a2 <lim and i <= 10:
#             a2 = n2 * i
#             if a2 < lim:
#                 soma += a2
#                 lista.append(a2)
#             i += 1
#         i = 1
#         while a1 < lim:
#             a1 = n1 * i
#             if a1 < lim:
#                 soma += a1
#                 if a1 not in lista:
#                     lista.append(a1)
#             i += 1
#     else:
#         while a1 < lim and i <= 10:
#             a1 = n1 * i
#             if a1 < lim:
#                 soma += a1
#                 lista.append(a1)
#             i += 1
#         i = 1
#         while a2 < lim:
#             a2 = n2 * i
#             if a2 < lim:
#                 soma += a2
#                 if a2 not in lista:
#                     lista.append(a2)
#             i += 1
#     return sum(lista)
        
    
# user = soma_multiplos(2,5)
# print(user)


# def soma_multiplos(n1, n2):
#     i = 1
#     soma = 0
#     lim = max(n1, n2) * 10
#     a1 = 0
#     a2 = 0
#     lista = []

#     if n2 > n1:
#         while a2 < lim and i <= 10:
#             a2 = n2 * i
#             if a2 < lim:
#                 if a2 not in lista:
#                     soma += a2
#                     lista.append(a2)
#             i += 1
#         i = 1
#         while a1 < lim:
#             a1 = n1 * i
#             if a1 < lim and a1 not in lista:
#                 soma += a1
#                 lista.append(a1)
#             i += 1
#     else:
#         while a1 < lim and i <= 10:
#             a1 = n1 * i
#             if a1 < lim:
#                 if a1 not in lista:
#                     soma += a1
#                     lista.append(a1)
#             i += 1
#         i = 1
#         while a2 < lim:
#             a2 = n2 * i
#             if a2 < lim and a2 not in lista:
#                 soma += a2
#                 lista.append(a2)
#             i += 1

#     return soma

# user = soma_multiplos(7,4)
# print(user)


# def soma_multiplos(n1, n2):
#     # Define o limite como 10 vezes o maior entre n1 e n2
#     limite = 10 * max(n1, n2)

#     # Cria um conjunto para armazenar todos os múltiplos únicos
#     multiplos = set()

#     # Adiciona todos os múltiplos de n1 e n2 ao conjunto
#     for i in range(limite + 1):
#         if i % n1 == 0 or i % n2 == 0:
#             multiplos.add(i)

#     # Retorna a soma dos múltiplos únicos
#     return sum(multiplos)

# # Exemplos de teste
# print(soma_multiplos(2, 5))  # Deve retornar 775
# print(soma_multiplos(7, 4))  # Deve retornar 913

def soma_multiplos(n1, n2):
    limite = 10 * max(n1, n2)  # Define o limite como 10 vezes o maior entre n1 e n2
    multiplos = set()  # Cria um conjunto para armazenar todos os múltiplos únicos
    i = 0  # Inicializa o contador

    while i <= limite:
        if i % n1 == 0 or i % n2 == 0:
            multiplos.add(i)  # Adiciona o número ao conjunto se for múltiplo de n1 ou n2
        i += 1  # Incrementa o contador

    return sum(multiplos)  # Retorna a soma dos múltiplos únicos
