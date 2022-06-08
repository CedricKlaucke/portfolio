//-------------------------------
// <Container
//   title={""}
//   text={""}
//   image={""}
// />
//-------------------------------

import Image from "next/image";
import useMediaQuery from "../../pages/hooks/useMediaQuery";

export const Container = (props) => {
  {/* mediaquery */ }
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isPhone = useMediaQuery("(max-width: 768px)");

  {/* Desktop config */}
  let imageWidth = 682;
  let imageHeight = 384;
  let direction = props.left ? "flex-row-reverse" : "flex-row";
  let textBorder = props.left ? "border-l-2" : "border-r-2";
  let textPadding = "p-10";
  {/* Tablet config */}
  if (isTablet && !isDesktop) {
    imageWidth = 682;
    imageHeight = 384;
    direction = "flex-col";
    textBorder = "border-b-2";
  {/* Phone config */}
  } else if (isPhone) {
    imageWidth = 500;
    imageHeight = 200;
    direction = " flex-col";
    textBorder = "border-b-2";
    textPadding = "p-2";
  }

  const classNameWrapper = "flex w-full overflow-hidden border-2 h-auto rounded-2xl dark:bg-neutral-900 dark:border-neutral-800 " + (direction) + (isPhone ? " w-11/12" : "")
  const classNameTextBox = "flex flex-col w-full dark:border-neutral-800 " + (textBorder)
  const classNameText = "flex flex-col items-center justify-center h-full " + (textPadding)

  return (
    <div className={classNameWrapper}>
      <div className={classNameTextBox}>
        <div className="flex items-center justify-center w-full h-16 border-b-2 dark:border-neutral-800">
          <span className="text-xl font-bold">{props.title || "Title"}</span>
        </div>
        <div className={classNameText}>
          <span>{props.text || "Text"}</span>
        </div>
      </div>
      <div className="relative flex image">
        <Image
          src={props.image || "/img/nice.gif"}
          alt="foto"
          layout="fixed"
          objectFit="cover"
          objectPosition="center"
          priority={false}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  )
}