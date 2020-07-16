1. Los datos de la aplicación debes consumirlos a través de la siguiente API
https://openweathermap.org/current
2. En el banner superior debes mostrar el clima del día actual de Bogotá
3. En la parte inferior en la sección  3 days forecast, debes mostrar el clima de los
próximos tres días.
4. Una de las fichas de la parte derecha, debe mostrar el clima actual de
París - Francia (Queremos saber como están nuestros colaboradores en esta ciudad :) )
5. Los iconos del clima se deben mostrar dependiendo la respuesta de la propiedad main
en el objecto weather
 - Ex: Si recibimos &quot;clear&quot; -&gt; Mostramos un sol.
6. Para las peticiones de la aplicación, no puedes usar el API fetch ni axios.
7. Para el renderizado puedes usar vanilla JS o el framework que mas te convenga para
la ocasión. ;)
7. Puedes desarrollar los estilos como lo prefieras pero si usas SASS, LESS o Stylus
tendrás puntos adicionales ;)
8. ¿Crees que podamos abrir el sitio en dispositivos móviles? no nos vendría mal un
responsive desing ;)
9. Se debe cumplir 100% con el diseño propuesto.
10. Debes cargar tu solución en un repositorio en gitlab o github, con


-Pasos:
1.Clonar el repositorio.
2.Desde la terminal y la ruta del proyecto ejecutar npm install --save.
3.correr el proyecto npm start.

-Descripcion:
He consumido la API https://openweathermap.org/ usando el framework React.Js
usando el objeto XMLHttpRequest para peticiones GET.
Para los estilos usé SASS.
Dependiendo del estado del weather.main cambia la vista (iconos y textos).
Para las ciudades Lyon y Paris la ubicacion esta determinada por las coordenadas.
El pronostico de mañana y pasado mañana tambien se esta consumiendo desde el servicio.
La interfaz es responsive.
