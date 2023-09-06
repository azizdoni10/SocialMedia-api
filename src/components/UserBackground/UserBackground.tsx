import React, {useState, useEffect} from "react";
import { BackgroundImage, BackgroundSlug } from "./UserBackground.style";
import { BackgroundUploadInput } from "./UserBackground.style";

interface UserBackgroundProps {
  userBackgroundUrl?: string | null;
  isBackground: boolean;
  onBackgroundChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserBackground = ({userBackgroundUrl, isBackground, onBackgroundChange}: UserBackgroundProps) => {
  const [userInitials, setUserInitials] = useState<string | null>(null);

  useEffect(() => {
    if (isBackground) {
      if (!userBackgroundUrl) {
        setUserInitials(userInitials);
      }
    }
  }, [userBackgroundUrl, isBackground]);

  return (
    <>
      {
        userBackgroundUrl ?
          <BackgroundImage src={userBackgroundUrl} alt='Photo'/> :
          <BackgroundSlug>{userInitials}</BackgroundSlug>
      }
      <BackgroundUploadInput type="file" onChange={onBackgroundChange}/>
    </>
  )
};
