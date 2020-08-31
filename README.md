## **Prueba de concepto Diagram de Ingeniería**

La data y el plano está en duro

pero implementado de modo que a futuro se pueda consultar a un servicio y obtener la imagen, las coordenadas y los textos correspondientes.

El proyecto esta en docker para mas facilidad de exportacion.


#->public
# **->src**
 ###|-> core
	|-> http
	|-> axios-config
	|-> sweet (mensajes informativos de acciones)
	|-> otros servicios
 #|-> pages
	|-> common (componentes que se reutilicen en todos lados)
		|-> componentes
	|-> Plano 
		components 
		    img
		Plano.js 
		Plano.css (css específico de esa vista)
	|-> Planos // Lista de planos
		components (de esa vista)
		Planos.js 
		Planos.css (css específico del listado de planos)
		
