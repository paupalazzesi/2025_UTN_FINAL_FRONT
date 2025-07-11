import "./ContactImage.scss";

export default function ContactImage({ contact_name, img }) {  
  return (
     <div className="contact-image_container">
        <img src={img} alt={`${name} image profile`} className="contact-image_img" />
     </div>
  )
}
