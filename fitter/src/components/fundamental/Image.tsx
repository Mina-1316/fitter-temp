/**
 * Default Image component
 */
import { useState } from "preact/hooks";
import "reflect-metadata";
import { Size } from "../../types/size";

interface ImageSizeConfig {
  sizeFitOption: "fill" | "contain" | "cover" | "none" | "scale-down";
}

export interface ImageProps {
  src: string;
  alt: string | undefined;
  styleClasses: string[] | undefined;
  fallbackImage: string | undefined;
  size: (Size & ImageSizeConfig) | undefined;
}

/**
 * # Image Component
 * `Component` > `Fundamental` > `Image`
 *
 * Image componet which can be used to render images with fallback image support.
 *
 * Image will use the `src` prop as the main image and if the image fails to load, it will use the `fallbackImage` prop as the fallback image.
 *
 * If the `fallbackImage` prop is not provided/fails to load, it will render the `alt` prop as the fallback text.
 *
 * ```tsx
 * import logo from "../../assets/logo.svg";
 * import fallbackImg from "../../assets/fallback.svg";
 *
 * <Image
 *   src={logo}
 *   alt="Logo"
 *   styleClasses={["w-10", "h-10"]}
 *   fallbackImage={fallbackImg}
 *>
 * ```
 */
export default (rawProps: ImageProps) => {
  const [mainImageFailed, setMainImageFailed] = useState(false);
  const [fallbackImageFailed, setFallbackImageFailed] = useState(false);

  const onMainImageError = () => setMainImageFailed(true);
  const onFallbackImageError = () => setFallbackImageFailed(true);

  // Config Defualt values
  const props = {
    ...rawProps,
    alt: rawProps.alt ?? "",
    fallbackImage: rawProps.fallbackImage ?? "",
    styleClasses: rawProps.styleClasses ?? [],
  };

  const imageStyle = {
    width: props.size?.width?.toString(),
    height: props.size?.height?.toString(),
    objectFit: props.size?.sizeFitOption,
  };

  // Render the image with Fallback Filters
  if (!mainImageFailed) {
    return (
      <img
        src={props.src}
        alt={props.alt}
        onError={onMainImageError}
        class={props.styleClasses.join(" ")}
        style={imageStyle}
      />
    );
  } else if (!fallbackImageFailed && props.fallbackImage) {
    return (
      <img
        src={props.fallbackImage}
        alt={props.alt}
        onError={onFallbackImageError}
        class={props.styleClasses.join(" ")}
        style={imageStyle}
      />
    );
  } else {
    return <div class={props.styleClasses.join(" ")}>{props.alt}</div>;
  }
};
