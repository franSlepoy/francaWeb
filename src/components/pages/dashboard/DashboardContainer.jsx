import { db } from "../../../FirebaseConfig";
import Dashboard from "./Dashboard";
import { addDoc, collection } from "firebase/firestore";

const DashboardContainer = () => {
  let generarDocumentos = () => {
    let refCollectons = collection(db, "products");
   
    let productos = [
      {
        nombre: "Mueble Dora",
        descripcion:
          "El mueble perfecto que fusiona funcionalidad y estilo en un diseño compacto, adaptándose tanto al living como al dormitorio. Este versátil mueble combina inteligencia espacial con un toque de elegancia para satisfacer tus necesidades en cualquier rincón de tu hogar.",
        precio: 15.95,
        medidas: "80 cm de largo, 40cm de ancho, 60cm altura",
        material: "Madera",
        category: "Mobiliario",
        subCategory: "Aparadores",
        descuento: true,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Diana Dora",
        descripcion:
          "La mesa ratona Diana se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Mobiliario",
        subCategory: "Aparadores",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Diana Dora",
        descripcion:
          "La mesa ratona Diana se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Mobiliario",
        subCategory: "Aparadores",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa messi",
        descripcion:
          "La mesa del campeón con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 37.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Mobiliario",
        subCategory: "Aparadores",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Franchescoli",
        descripcion:
          "La mesa del Enzo se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Mobiliario",
        subCategory: "Aparadores",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mueble Dora",
        descripcion:
          "El mueble perfecto que fusiona funcionalidad y estilo en un diseño compacto, adaptándose tanto al living como al dormitorio. Este versátil mueble combina inteligencia espacial con un toque de elegancia para satisfacer tus necesidades en cualquier rincón de tu hogar.",
        precio: 15.95,
        medidas: "80 cm de largo, 40cm de ancho, 60cm altura",
        material: "Madera",
        category: "Mobiliario",
        subCategory: "Aparadores",
        descuento: true,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Diana Dora",
        descripcion:
          "La mesa ratona Diana se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Sillones",
        subCategory: "Sillones y butacas",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Diana Dora",
        descripcion:
          "La mesa ratona Diana se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Sillones",
        subCategory: "Sillones y butacas",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa messi",
        descripcion:
          "La mesa del campeón con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 37.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Sillones",
        subCategory: "Sillones y butacas",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Franchescoli",
        descripcion:
          "La mesa del Enzo se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Sillones",
        subCategory: "Sillones y butacas",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Diana Dora",
        descripcion:
          "La mesa ratona Diana se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Mesa y cocina",
        subCategory: "Platos",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Diana Dora",
        descripcion:
          "La mesa ratona Diana se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Mesa y cocina",
        subCategory: "Platos",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa messi",
        descripcion:
          "La mesa del campeón con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 37.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Mesa y cocina",
        subCategory: "Platos",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
      {
        nombre: "Mesa Franchescoli",
        descripcion:
          "La mesa del Enzo se destaca con un diseño exclusivo que combina líneas limpias y formas geométricas para crear una pieza visualmente atractiva. Cada detalle está pensado para aportar una sensación de sofisticación al espacio.",
        precio: 17.0,
        medidas: "110 cm de largo, 55cm de ancho, 50cm altura",
        material: "Madera",
        category: "Mesa y cocina",
        subCategory: "Platos",
        descuento: false,
        imagen1:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora4.png?alt=media&token=850e12b6-b252-41c5-92a6-1a66ae6392ed",
        imagen2:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDpra3.png?alt=media&token=1a3cd28f-21ce-43ea-a0a8-0b9951c43abb",
        imagen3:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora2.png?alt=media&token=38dcde0c-f11b-4f7b-85d9-5e4716a43691",
        imagen4:
          "https://firebasestorage.googleapis.com/v0/b/francaweb-25330.appspot.com/o/muebleDora1.png?alt=media&token=adda558c-14e1-49f3-9c19-91bb2ba74344",
      },
    ];
    productos.forEach((elemento)=>addDoc(refCollectons, elemento))
  };

  return (
    <div>
      <Dashboard generarDocumentos={generarDocumentos} />
    </div>
  );
};

export default DashboardContainer;
