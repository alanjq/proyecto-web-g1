# Crear rama nueva
git checkout -b barra-navegacion

# Subir rama (la primera vez que se crea)
git push -u origin barra-navegacion

# Traer cambios desde master
git checkout master

## Descargar cambios recientes de la rama master
git pull

## Regresar a nuestra rama(donde queremos los cambios)
git checkout barra-navegacion

## Traer los cambios y fusionarlos en nuestra rama
git merge master

## Subir cambios
git push
