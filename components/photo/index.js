import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/1311401350178242560/I4BvsiMM_normal.jpg',
  alt,
  size = 47,
  header = false,
  profile = false,
  secondSrc
}) {
  return (
    <div
      className={cn([styles.photo], header && styles.header)}
      style={{ width: size, height: size }}
    >
      <img
        className={cn(styles.img, header && styles.header)}
        src={src}
        alt={alt}
      />
      {profile && (
        <img
          className={cn(styles.img, styles.profile)}
          src={secondSrc}
          alt={alt}
          style={{ width: size, height: size }}
        />
      )}
    </div>
  )
}
export default Photo
