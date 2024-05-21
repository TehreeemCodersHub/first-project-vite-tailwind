import React from "react";
import { SocialMediaNavbar } from "../Components/IntelliwriterSocialMediaComponent/SocialMediaNavbar";
import { SocialMediaBanner } from "../Components/IntelliwriterSocialMediaComponent/SocialMediaBanner";
import { SocialMediaFeatures } from "../Components/IntelliwriterSocialMediaComponent/SocialMediaFeatures";
import { SocialMediaStep } from "../Components/IntelliwriterSocialMediaComponent/SocialMediaStep";
import { SocialMediaTools } from "../Components/IntelliwriterSocialMediaComponent/SocialMediaTools";
import { SocialMediaCta } from "../Components/IntelliwriterSocialMediaComponent/SocialMediaCta";
import { SocialMediaFaq } from "../Components/IntelliwriterSocialMediaComponent/SocialMediaFaq";
import { SocialMediaFooter } from "../Components/IntelliwriterSocialMediaComponent/SocialMediaFooter";

export const IntelliwriterSocialMedia = () => {
  return (
    <div className=" bg-[#0F062C]">
      <SocialMediaNavbar />
      <SocialMediaBanner />
      <SocialMediaFeatures />
      <SocialMediaStep />
      <SocialMediaTools />
      <SocialMediaFaq />
      <SocialMediaCta />
      <SocialMediaFooter />
    </div>
  );
};
