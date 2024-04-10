import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </div>
  );
}
