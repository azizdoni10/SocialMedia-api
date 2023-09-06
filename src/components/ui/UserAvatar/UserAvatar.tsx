import React, { useEffect, useState } from 'react'
import { AvatarImage, AvatarUploadInput } from './UserAvatar.style';
import { AvatarSlug } from './UserAvatar.style';

interface UserAvatarProps {
  userAvatarUrl?: string | null;
  isProfile: boolean,
  onAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const userName = "Sasuke Uchiha"

export const UserAvatar = ({ userAvatarUrl, isProfile, onAvatarChange }: UserAvatarProps) => {
  const [userInitials, setUserInitials] = useState<string | null>(null)

  useEffect(() => {
    if (isProfile) {
      if (!userAvatarUrl) {
        const nameSurname = userName.split(" ").map((elem) => elem[0])
        const userInitials = `${nameSurname[0]}. ${nameSurname[1]}.`
        setUserInitials(userInitials)
      }
    }

  }, [userAvatarUrl, isProfile])

  return (
    <>
      {
        userAvatarUrl ?
          <AvatarImage src={userAvatarUrl} alt='Photo'/> :
          <AvatarSlug>{userInitials}</AvatarSlug>
      }
      <AvatarUploadInput type="file" onChange={onAvatarChange}/>
    </>
  )
}
