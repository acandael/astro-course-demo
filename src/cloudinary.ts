import { source } from "@cloudinary/url-gen/actions/overlay";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dsrrx2qm9",
  },
  url: {
    secure: true,
  },
});

const getThumbnail = (title: string) => {
  const thumbnail = cloudinary
    .image("astro-course-template")
    .overlay(
      source(text(title, new TextStyle("Cabin", 64).fontWeight("bold")))
    );

  return thumbnail.toURL();
};

export { cloudinary, getThumbnail };
