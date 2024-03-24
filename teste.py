# def quadradoPerfeito(matriz):
#     somaLinha = 0
#     somaColuna = 0
#     while True:                                                                            
#         for i in range(len(matriz)):
#             somaLinha += matriz[i].sum()
#             for j in range(len(matriz)):


# matriz = [[0,0,0,0],
#           [0,0,0,0],
#           [0,0,0,0]
#           [0,0,0,0]
#           ]     


def quadrado_magico_estruturado(matriz):
    n = len(matriz)  # Obtém a dimensão da matriz
    soma_referencia = sum(matriz[0])  # Define a soma de referência como a soma dos elementos da primeira linha

    # Verifica a soma de cada linha
    for i in range(n):
        if sum(matriz[i]) != soma_referencia:
            return False

    # Verifica a soma de cada coluna
    for j in range(n):
        soma_coluna = 0
        for i in range(n):
            soma_coluna += matriz[i][j]
        if soma_coluna != soma_referencia:
            return False

    # Verifica a soma da diagonal principal
    soma_diagonal_principal = 0
    for i in range(n):
        soma_diagonal_principal += matriz[i][i]
    if soma_diagonal_principal != soma_referencia:
        return False

    # Verifica a soma da diagonal secundária
    soma_diagonal_secundaria = 0
    for i in range(n):
        soma_diagonal_secundaria += matriz[i][n-1-i]
    if soma_diagonal_secundaria != soma_referencia:
        return False

    # Se todas as somas são iguais à soma de referência, é um quadrado mágico
    return True

# Testando a função revisada com o mesmo exemplo
quadrado_magico_estruturado([[6, 1, 8], [7, 5, 3], [2, 9, 4]])

[Pedro,Val,Rodri]
for i,v enumerate(lista):
    

    


