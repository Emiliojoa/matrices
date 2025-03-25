lista = []

nom = input("Ingrese un nombre: ")
ap = input("Ingrese un apellido: ")
dni = int(input("Ingrese un DNI: "))
tel = int(input("Cuántos números de teléfono desea registrar?: "))

num = 0
telefonos = []  

while num < tel:
    telefono = input(f"Ingrese el teléfono {num + 1}: ")
    telefonos.append(telefono)
    num += 1
    
lista.append(nom)
lista.append(ap)
lista.append(dni)
lista.append(telefonos)  

print(lista)