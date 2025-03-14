import './styles.css';

type AvatarProps = {
    hasBorder?: boolean,
    imgUrl: string
}

export default function Avatar({hasBorder = false, imgUrl} : AvatarProps) {
    return (
        <img src={imgUrl} className= {hasBorder ? '.user-pic' : 'avatar-with-no-border'} height={"100px"}></img>
    )
}