import { ImageResponse } from "next/og";

export const alt = "Note";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface Props {
  params: {
    id: string;
  };
}

export default async function Image(props: Props) {
  const { params } = props;
  const id = params.id;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "64px",
          flex: 1,
        }}
      >
        <div
          style={{
            hyphens: "none",
            wordBreak: "keep-all",
            color: "rgb(151, 255, 51)",
          }}
        >
          `Note: ${id}`
        </div>
      </div>
    ),
  );
}
