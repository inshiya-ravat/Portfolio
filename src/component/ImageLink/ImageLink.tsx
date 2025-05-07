interface ImageLinkProp{
    link:string,
    image:string,
}
const ImageLink = ({link,image}:ImageLinkProp) => {
  return (
    <div>
        <a target='_blank' href={link}>
            <img src={image} alt='linkedIn'/>
        </a>
    </div>
  )
}

export default ImageLink