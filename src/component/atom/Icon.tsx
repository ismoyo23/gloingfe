import React from 'react'
import '../../index.css'
import Youtube from '../../assets/icon/youtube.svg'
import Mail from '../../assets/icon/mail.svg'
import Tiktok from '../../assets/icon/tiktok.svg'
import Instagram from '../../assets/icon/instagram.svg'
interface IconProps {
  label?: 'youtube' | 'mail' | 'tiktok' | 'instagram';
  name: string;

}

export const Icon = ({
  label = 'youtube',
  name,
  ...props
}: IconProps) => {

  switch (label) {
    case 'youtube' :
      name = Youtube;
      break;
    case 'instagram':
      name = Instagram
    break;
    case 'mail':
      name = Mail
    break;
    case 'tiktok':
      name = Tiktok
    break;
    
    default:
      name = Youtube
    break;
  }

  return (
    <img src={name} {...props}/>
  );
};
