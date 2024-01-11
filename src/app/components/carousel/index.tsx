import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
      original: "https://picsum.photos/id/1018/300/500/",
    },
    {
      original: "https://picsum.photos/id/1015/300/500/",
    },
    {
      original: "https://picsum.photos/id/1019/300/500/",
    },
  ];

export const Carousel = () => {
    return (
        <ImageGallery
            items={images} 
            showPlayButton = {false} />
    )
}

// import Image from "next/image";
// import "./style.css";

// const images = [
//     {
//       original: "https://picsum.photos/id/1018/300/500/",
//     },
//     {
//       original: "https://picsum.photos/id/1015/300/500/",
//     },
//     {
//       original: "https://picsum.photos/id/1019/300/500/",
//     },
//   ];

// export const Carousel = () => {
//     return (
//         <div className="carousel">
//             {
//                 images.map((image, i) => (
//                     <Image src={image.original} alt="hola" key={i} width={300} height={500} />
//                 ))
//             }
//         </div>
//     )
// }