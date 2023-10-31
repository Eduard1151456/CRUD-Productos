$(document).ready(function () {
    // URL de la API
    const apiUrl = 'https://siaweb-nodejs.carlos-reneren7.repl.co/productos';

    // Función para cargar productos
    function cargarProductos() {
        $.get(apiUrl, function (data) {
            // Limpiar la tabla de productos
            $('table tbody').empty();

            // Recorrer los productos y agregarlos a la tabla
            $.each(data, function (index, producto) {
                $('table tbody').append(
                    '<tr>' +
                    '<td>' + producto.nombre + '</td>' +
                    '<td>' + producto.precio + '</td>' +
                    '<td>' + producto.descripcion + '</td>' +
                    '<td><button class="actualizar" data-id="' + index + '">Actualizar</button></td>' +
                    '</tr>'
                );
            });

            // Agregar un botón "Guardar Producto" al final de la tabla
            $('table').append('<button id="guardar">Guardar Producto</button>');
        });
    }

    // Cargar los productos al cargar la página
    cargarProductos();

    // Escuchar el evento de hacer clic en el botón "Guardar Producto"
    $(document).on('click', '#guardar', function () {
        // Redireccionar a la página de creación de producto nuevo
        location.href = 'crear.html';
    });

    // Escuchar el evento de hacer clic en el botón "Actualizar"
    $(document).on('click', '.actualizar', function () {
        // Obtener el índice del producto seleccionado
        const index = $(this).data('id');

        // Obtener el producto correspondiente de la lista
        const producto = productos[index];

        // Llenar los campos de la página de actualización con los datos del producto
        $('#nombre').val(producto.nombre);
        $('#precio').val(producto.precio);
        $('#descripcion').val(producto.descripcion);

        // Redireccionar a la página de actualización de producto
        location.href = 'actualizar.html';
    });
});
